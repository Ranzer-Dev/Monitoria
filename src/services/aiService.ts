import axios from 'axios';
import type { Exercise } from '../types';
import { simulateAIAnalysis } from '../aiSimulator';

const STORAGE_KEY = 'gemini_api_key';

export const getApiKey = () => localStorage.getItem(STORAGE_KEY) || '';
export const setApiKey = (key: string) => localStorage.setItem(STORAGE_KEY, key);

export interface AIResponse {
  approved: boolean;
  feedback: string;
  score: number;
}

// Função auxiliar para limpar a resposta caso a IA envie markdown (```json ...)
function cleanJSONResponse(text: string): any {
  try {
    // Remove blocos de código markdown se existirem
    const cleaned = text.replace(/```json/g, '').replace(/```/g, '').trim();
    return JSON.parse(cleaned);
  } catch (e) {
    console.error("Erro ao limpar/parsear JSON da IA. Texto bruto:", text);
    throw e;
  }
}

const SYSTEM_PROMPT = `Você é um Monitor de Programação extremamente pedagógico, incentivador e paciente. 
Seu objetivo é analisar o código de um estudante e fornecer feedback. 

DIRETRIZES:
1. Use analogias e metáforas do mundo real (ex: variáveis são gavetas, erros de sintaxe são erros de gramática).
2. Não dê a resposta pronta. Dê pistas para que o aluno descubra o erro.
3. Foque no conceito sendo ensinado.
4. Linguagem amigável e motivadora.
5. Se houver um erro técnico (Traceback), explique-o de forma simples.

FORMATO DE RESPOSTA (JSON estrito):
{
  "approved": boolean,
  "feedback": "string",
  "score": number
}`;

export async function getAIReview(
  code: string,
  output: string[],
  exercise: Exercise,
  language: string,
  listId: number
): Promise<AIResponse> {
  const studentApiKey = getApiKey();
  const fallbackReview = simulateAIAnalysis(code, output, exercise, language, listId);

  const promptText = `
Exercício: ${exercise.title}
Objetivo Pedagógico: ${exercise.lesson.concept}
Linguagem: ${language}

Código do Estudante:
\`\`\`${language}
${code}
\`\`\`

Saída do Console:
${output.join('\n')}

IMPORTANTE: 
1. Analise se o código atende ao objetivo pretendido.
2. Use metáforas pedagógicas.
3. Retorne a resposta obrigatoriamente no formato JSON:
{
  "approved": boolean,
  "feedback": "string",
  "score": number
}
`;

  try {
    let resultJSON: any = null;

    if (studentApiKey) {
      const cleanKey = studentApiKey.trim();
      
      // DETECÇÃO DE PROVEDOR: GROQ
      if (cleanKey.startsWith('gsk_')) {
        console.log("Detectada chave do Groq. Usando API do Groq (Llama 3.3 70B)...");
        const response = await axios.post(
          'https://api.groq.com/openai/v1/chat/completions',
          {
            model: "llama-3.3-70b-versatile",
            messages: [
              { role: "system", content: SYSTEM_PROMPT },
              { role: "user", content: promptText }
            ],
            temperature: 0.7,
            response_format: { type: "json_object" }
          },
          {
            headers: {
              'Authorization': `Bearer ${cleanKey}`,
              'Content-Type': 'application/json'
            }
          }
        );
        
        const rawText = response.data.choices[0]?.message?.content;
        if (!rawText) throw new Error("Resposta do Groq veio vazia.");
        resultJSON = cleanJSONResponse(rawText);
      } 
      // PADRÃO: GEMINI
      else {
        console.log("Detectada chave do Google. Usando Gemini API (2.5 Flash Lite)...");
        const response = await axios.post(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent?key=${cleanKey}`,
          {
            contents: [
              { 
                role: "user", 
                parts: [{ text: `INSTRUÇÃO DE SISTEMA:\n${SYSTEM_PROMPT}\n\nENTRADA DO ALUNO:\n${promptText}` }] 
              }
            ],
            generationConfig: { 
              temperature: 0.7 
            }
          }
        );
        
        const rawText = response.data.candidates?.[0]?.content?.parts?.[0]?.text;
        if (!rawText) throw new Error("Resposta do Gemini veio vazia.");
        resultJSON = cleanJSONResponse(rawText);
      }
    } 
    else {
      console.log("Tentando chamada via Proxy Seguro...");
      const proxyResponse = await axios.post('/api/review', {
        systemPrompt: SYSTEM_PROMPT,
        prompt: promptText
      });
      
      resultJSON = typeof proxyResponse.data === 'string' 
        ? cleanJSONResponse(proxyResponse.data) 
        : proxyResponse.data;
    }

    if (resultJSON) {
      return {
        approved: resultJSON.approved ?? fallbackReview.approved,
        feedback: `👨‍🏫 IA MONITOR: ${resultJSON.feedback}`,
        score: resultJSON.score ?? fallbackReview.score
      };
    }
    
    throw new Error("Formato de resposta inválido.");

  } catch (error: any) {
    console.error("ERRO DETALHADO GEMINI:", error?.response?.data || error.message);
    const technicalDetail = error?.response?.status ? `(Erro ${error.response.status})` : `(${error.message})`;
    return {
      ...fallbackReview,
      feedback: `${fallbackReview.feedback}\n\n*(Nota: Usando o Simulador local ${technicalDetail})*`
    };
  }
}
