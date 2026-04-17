import axios from 'axios';

const apiKey = 'AIzaSyD9KrY9XE2J_TnFEPIH9CzDwLy7SARKvz8';
const url = `https://generativelanguage.googleapis.com/v1/models?key=${apiKey}`;

async function listModels() {
  console.log("Listando modelos disponíveis para esta chave...");
  try {
    const response = await axios.get(url);
    console.log("MODELOS ENCONTRADOS:");
    const models = response.data.models || [];
    models.forEach(m => {
      console.log(`- ${m.name} (${m.displayName})`);
    });
  } catch (error) {
    console.error("FALHA AO LISTAR MODELOS:");
    if (error.response) {
      console.error("Status:", error.response.status);
      console.error("Dados:", JSON.stringify(error.response.data, null, 2));
    } else {
      console.error("Mensagem:", error.message);
    }
  }
}

listModels();
