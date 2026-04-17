import { NextRequest, NextResponse } from 'next/server';

export const config = {
  runtime: 'edge',
};

export default async function handler(req: NextRequest) {
  if (req.method !== 'POST') {
    return new NextResponse('Method Not Allowed', { status: 405 });
  }

  try {
    const { systemPrompt, prompt } = await req.json();
    
    const groqKey = process.env.GROQ_API_KEY;
    const geminiKey = process.env.GEMINI_API_KEY;

    // 1. PRIORIDADE: GROQ (Se configurado no Vercel)
    if (groqKey) {
      console.log('Proxy: Usando Groq (Llama 3.3)');
      const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${groqKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile",
          messages: [
            { role: "system", content: systemPrompt },
            { role: "user", content: prompt }
          ],
          temperature: 0.7,
          response_format: { type: "json_object" }
        }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(`Groq API Error: ${JSON.stringify(data)}`);
      
      return new NextResponse(data.choices[0]?.message?.content);
    }

    // 2. SEGUNDA OPÇÃO: GEMINI (Se configurado no Vercel)
    if (geminiKey) {
      console.log('Proxy: Usando Gemini (2.5 Flash Lite)');
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent?key=${geminiKey}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [
              {
                role: "user",
                parts: [{ text: `INSTRUÇÃO DE SISTEMA:\n${systemPrompt}\n\nENTRADA DO ALUNO:\n${prompt}` }]
              }
            ],
            generationConfig: { temperature: 0.7 }
          }),
        }
      );

      const data = await response.json();
      if (!response.ok) throw new Error(`Gemini API Error: ${JSON.stringify(data)}`);
      
      const rawText = data.candidates?.[0]?.content?.parts?.[0]?.text;
      return new NextResponse(rawText);
    }

    // 3. FALHA: Nenhuma chave configurada
    return NextResponse.json(
      { error: 'Configuração Incompleta: Adicione GROQ_API_KEY ou GEMINI_API_KEY nas variáveis de ambiente da Vercel.' }, 
      { status: 500 }
    );

  } catch (error: any) {
    console.error('Proxy Error:', error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
