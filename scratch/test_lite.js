import axios from 'axios';

const apiKey = 'AIzaSyD9KrY9XE2J_TnFEPIH9CzDwLy7SARKvz8';
const model = 'gemini-2.0-flash-lite';
const url = `https://generativelanguage.googleapis.com/v1/models/${model}:generateContent?key=${apiKey}`;

async function test() {
  console.log(`Testando modelo ${model} como alternativa ao Spending Cap...`);
  try {
    const response = await axios.post(url, {
      contents: [{
        role: "user",
        parts: [{ text: "Oi!" }]
      }]
    });
    console.log("SUCESSO COM O MODELO LITE!");
    console.log(JSON.stringify(response.data, null, 2));
  } catch (error) {
    console.error("FALHA COM O LITE:");
    if (error.response) {
      console.error("Status:", error.response.status);
      console.error("Mensagem:", error.response.data.error.message);
    } else {
      console.error("Mensagem:", error.message);
    }
  }
}

test();
