export const config = {
  runtime: 'edge',
};

export default async function handler(req: Request) {
  if (req.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 });
  }

  try {
    const { systemPrompt, prompt } = await req.json();
    
    const internalSecret = req.headers.get('x-internal-secret');
    const expectedSecret = process.env.APP_INTERNAL_SECRET || 'monitoria-secret-dev-2026';
    
    if (internalSecret !== expectedSecret) {
      return new Response(JSON.stringify({ error: 'Acesso Negado: Token de segurança inválido ou ausente.' }), { 
        status: 403, 
        headers: { 'content-type': 'application/json' } 
      });
    }
    
    const geminiKey = process.env.GEMINI_API_KEY;
    const groqKey = process.env.GROQ_API_KEY;

    if (geminiKey) {
      try {
        const response = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-lite:generateContent?key=${geminiKey}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              systemInstruction: {
                parts: [{ text: systemPrompt }]
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
            }),
          }
        );

        if (response.ok) {
          const data = await response.json();
          const rawText = data.candidates?.[0]?.content?.parts?.[0]?.text;
          if (rawText) {
            return new Response(rawText, {
              status: 200,
              headers: { 'content-type': 'application/json' }
            });
          }
        }
      } catch (geminiError: any) {
        console.warn("Proxy: Gemini falhou, tentando fallback para Groq...", geminiError.message);
      }
    }

    if (groqKey) {
      try {
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

        if (response.ok) {
          const data = await response.json();
          const content = data.choices?.[0]?.message?.content;
          if (content) {
            return new Response(content, {
              status: 200,
              headers: { 'content-type': 'application/json' }
            });
          }
        }
      } catch (groqError: any) {
        console.warn("Proxy: Groq também falhou...", groqError.message);
      }
    }

    return new Response(
      JSON.stringify({ error: 'Nenhum provedor de IA remoto (Gemini ou Groq) respondeu com sucesso.' }), 
      { status: 500, headers: { 'content-type': 'application/json' } }
    );

  } catch (error: any) {
    return new Response(
      JSON.stringify({ error: error.message }), 
      { status: 500, headers: { 'content-type': 'application/json' } }
    );
  }
}
