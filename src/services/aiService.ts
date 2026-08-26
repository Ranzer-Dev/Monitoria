import axios from 'axios';
import type { Exercise } from '../types';
import { simulateAIAnalysis } from '../aiSimulator';

const STORAGE_KEY = 'gemini_api_key';

export const getApiKey = (): string => localStorage.getItem(STORAGE_KEY) || '';
export const setApiKey = (key: string): void => localStorage.setItem(STORAGE_KEY, key);

export interface AIResponse {
  approved: boolean;
  feedback: string;
  score: number;
}

function cleanJSONResponse(text: string): Record<string, any> {
  const cleaned = text.replace(/```json/g, '').replace(/```/g, '').trim();
  return JSON.parse(cleaned);
}

const SYSTEM_PROMPT = `Você é um Monitor e Mentor de Programação especialista em Didática e Engenharia de Software.
Seu objetivo é analisar o código do estudante, ensinar a mentalidade de depuração (debugging) e guiá-lo pedagogicamente.

DIRETRIZES DE PEDAGOGIA E DEPURAÇÃO:
1. Se houver erro de compilação ou execução (Traceback/Error):
   - Identifique a linha e o tipo exato do erro.
   - Explique o que o interpretador/compilador tentou fazer tecnicamente e por que falhou, usando analogias simples.
   - Forneça um checklist claro de depuração com 2 a 3 hipóteses práticas (ex: 'Era para ser texto? Faltaram aspas', 'Era para ser variável? Declare antes', 'Cheque erros de digitação/maiúsculas').
2. Se o código rodar mas o resultado estiver incorreto:
   - Dê pistas conceituais focando nas regras do exercício, sem entregar o código pronto.
3. Se o código estiver correto e aprovado:
   - Parabenize destacando boas práticas aplicadas.
4. Mantenha linguagem incentivadora, profissional e acolhedora.

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

INSTRUÇÃO DE AVALIAÇÃO:
1. Se houver erro no console, ensine o aluno a depurar passo a passo.
2. Formato obrigatório JSON:
{
  "approved": boolean,
  "feedback": "string",
  "score": number
}
`;

  try {
    let resultJSON: Record<string, any> | null = null;

    if (studentApiKey) {
      const cleanKey = studentApiKey.trim();
      
      if (cleanKey.startsWith('gsk_')) {
        console.log("🚀 Monitoria: Enviando requisição para Groq API (Llama 3.3)...");
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
        console.log("✅ Monitoria: Resposta da Groq recebida com sucesso!");
      } 
      else if (cleanKey.startsWith('AIza') || cleanKey.startsWith('AQ')) {
        console.log("💎 Monitoria: Enviando requisição para Gemini API (2.0 Flash Lite)...");
        const response = await axios.post(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-lite:generateContent?key=${cleanKey}`,
          {
            systemInstruction: {
              parts: [{ text: SYSTEM_PROMPT }]
            },
            contents: [
              { 
                role: "user", 
                parts: [{ text: promptText }] 
              }
            ],
            generationConfig: { 
              temperature: 0.7,
              responseMimeType: "application/json"
            }
          }
        );
        
        const rawText = response.data.candidates?.[0]?.content?.parts?.[0]?.text;
        if (!rawText) throw new Error("Resposta do Gemini veio vazia.");
        resultJSON = cleanJSONResponse(rawText);
        console.log("✅ Monitoria: Resposta do Gemini recebida com sucesso!");
      }
      else {
        throw new Error("Formato de chave de API não reconhecido.");
      }
    } 
    else {
      console.log("📡 Monitoria: Enviando requisição via Proxy Seguro (/api/review)...");
      const proxyResponse = await axios.post('/api/review', {
        systemPrompt: SYSTEM_PROMPT,
        prompt: promptText
      }, {
        headers: {
          'x-internal-secret': 'monitoria-secret-dev-2026'
        }
      });
      
      resultJSON = typeof proxyResponse.data === 'string' 
        ? cleanJSONResponse(proxyResponse.data) 
        : proxyResponse.data;
      console.log("✅ Monitoria: Resposta do Proxy recebida com sucesso!");
    }

    if (resultJSON && resultJSON.feedback) {
      return {
        approved: resultJSON.approved ?? fallbackReview.approved,
        feedback: `👨‍🏫 IA MONITOR: ${resultJSON.feedback}`,
        score: resultJSON.score ?? fallbackReview.score
      };
    }
    
    throw new Error("Formato de resposta retornado pela IA é inválido.");

  } catch (error: any) {
    const errorDetails = error?.response?.data 
      ? (typeof error.response.data === 'object' ? JSON.stringify(error.response.data) : String(error.response.data))
      : (error?.message || 'Serviço de IA remoto indisponível');
    
    console.warn("⚠️ Monitoria: API remota falhou, ativando fallback local:", errorDetails);
    
    return {
      ...fallbackReview,
      feedback: fallbackReview.feedback
    };
  }
}
