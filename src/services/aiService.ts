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

async function requestGemini(apiKey: string, prompt: string): Promise<Record<string, any>> {
  console.log("💎 [Tier 1] Monitoria: Tentando Google Gemini API (2.0 Flash Lite)...");
  const response = await axios.post(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-lite:generateContent?key=${apiKey}`,
    {
      systemInstruction: {
        parts: [{ text: SYSTEM_PROMPT }]
      },
      contents: [
        { 
          role: "user", 
          parts: [{ text: prompt }] 
        }
      ],
      generationConfig: { 
        temperature: 0.7,
        responseMimeType: "application/json"
      }
    }
  );
  
  const rawText = response.data.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!rawText) throw new Error("Resposta do Gemini vazia.");
  return cleanJSONResponse(rawText);
}

async function requestGroq(apiKey: string, prompt: string): Promise<Record<string, any>> {
  console.log("🚀 [Tier 2] Monitoria: Tentando Groq API (Llama 3.3 70B)...");
  const response = await axios.post(
    'https://api.groq.com/openai/v1/chat/completions',
    {
      model: "llama-3.3-70b-versatile",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: prompt }
      ],
      temperature: 0.7,
      response_format: { type: "json_object" }
    },
    {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      }
    }
  );
  
  const rawText = response.data.choices?.[0]?.message?.content;
  if (!rawText) throw new Error("Resposta do Groq vazia.");
  return cleanJSONResponse(rawText);
}

async function requestProxy(prompt: string): Promise<Record<string, any>> {
  console.log("📡 [Tier 3] Monitoria: Tentando Proxy Seguro Cascata (/api/review)...");
  const proxyResponse = await axios.post('/api/review', {
    systemPrompt: SYSTEM_PROMPT,
    prompt: prompt
  }, {
    headers: {
      'x-internal-secret': 'monitoria-secret-dev-2026'
    }
  });
  
  return typeof proxyResponse.data === 'string' 
    ? cleanJSONResponse(proxyResponse.data) 
    : proxyResponse.data;
}

export async function getAIReview(
  code: string,
  output: string[],
  exercise: Exercise,
  language: string,
  listId: number
): Promise<AIResponse> {
  const studentApiKey = getApiKey().trim();
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

  let resultJSON: Record<string, any> | null = null;

  if (studentApiKey) {
    if (studentApiKey.startsWith('AIza') || studentApiKey.startsWith('AQ')) {
      try {
        resultJSON = await requestGemini(studentApiKey, promptText);
      } catch (geminiError: any) {
        console.warn("⚠️ Gemini falhou, tentando fallback via Proxy/Groq:", geminiError?.message);
        try {
          resultJSON = await requestProxy(promptText);
        } catch (proxyError: any) {
          console.warn("⚠️ Fallback de Proxy falhou:", proxyError?.message);
        }
      }
    } else if (studentApiKey.startsWith('gsk_')) {
      try {
        resultJSON = await requestGroq(studentApiKey, promptText);
      } catch (groqError: any) {
        console.warn("⚠️ Groq falhou, tentando fallback via Proxy:", groqError?.message);
        try {
          resultJSON = await requestProxy(promptText);
        } catch (proxyError: any) {
          console.warn("⚠️ Fallback de Proxy falhou:", proxyError?.message);
        }
      }
    }
  } else {
    try {
      resultJSON = await requestProxy(promptText);
    } catch (proxyError: any) {
      console.warn("⚠️ Proxy offline ou sem resposta, ativando IA Simulada Local:", proxyError?.message);
    }
  }

  if (resultJSON && resultJSON.feedback) {
    return {
      approved: resultJSON.approved ?? fallbackReview.approved,
      feedback: `👨‍🏫 IA MONITOR: ${resultJSON.feedback}`,
      score: resultJSON.score ?? fallbackReview.score
    };
  }

  console.log("🛠️ [Tier 4] Monitoria: Resposta gerada via Simulador Local Heurístico.");
  return {
    ...fallbackReview,
    feedback: fallbackReview.feedback
  };
}
