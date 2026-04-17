import axios from 'axios';

const apiKey = 'AIzaSyD9KrY9XE2J_TnFEPIH9CzDwLy7SARKvz8';
const model = 'gemini-2.0-flash'; // Atualizado para o modelo disponível na conta do usuário
const url = `https://generativelanguage.googleapis.com/v1/models/${model}:generateContent?key=${apiKey}`;

async function test() {
  console.log(`Iniciando teste com modelo ${model}...`);
  try {
    const response = await axios.post(url, {
      contents: [{
        role: "user",
        parts: [{ text: "INSTRUÇÃO DE SISTEMA:\nVocê é um monitor de programação.\n\nENTRADA DO ALUNO:\nOlá, pode me dar um oi pedagógico?" }]
      }],
      generationConfig: {
        temperature: 0.7
      }
    });
    console.log("SUCESSO ABSOLUTO!");
    console.log(JSON.stringify(response.data, null, 2));
  } catch (error) {
    console.error("FALHA NA API:");
    if (error.response) {
      console.error("Status:", error.response.status);
      console.error("Dados do Erro:", JSON.stringify(error.response.data, null, 2));
    } else {
      console.error("Mensagem:", error.message);
    }
  }
}

test();
