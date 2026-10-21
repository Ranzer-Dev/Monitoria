# Monitoria — Plataforma de Revisão Acadêmica & Edge Serverless AI

[![Runtime](https://img.shields.io/badge/Runtime-Vercel_Edge_Network-black?style=flat-square&logo=vercel&logoColor=white)](https://vercel.com/docs/functions/edge-functions)
[![Language](https://img.shields.io/badge/Language-TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Multi-Provider AI](https://img.shields.io/badge/AI_Engine-Gemini_%2B_Groq_(Llama_3)-blueviolet?style=flat-square)](https://groq.com/)
[![Architecture](https://img.shields.io/badge/Architecture-C4_Model_%7C_Edge_Serverless-blue?style=flat-square)](#-arquitetura-de-software--modelo-c4)
[![Security](https://img.shields.io/badge/Security-Secret_Header_Guard-green?style=flat-square)](api/review.ts)

Sistema de engenharia backend e computação na borda (*Edge Computing*) para **revisão, análise semântica e auditoria automatizada de artigos científicos e relatórios acadêmicos**. Utiliza roteamento de baixa latência em Edge Functions com orquestração multi-provedor entre Google Gemini e Groq Cloud (Llama 3).

---

## 🏛️ Arquitetura de Software — Modelo C4

```
Nível 1: Contexto Sistêmico  ────────► Alunos, Professores e Provedores de Inferência de IA
Nível 2: Contêineres         ────────► Frontend SPA e Backend Serverless Edge Function (Vercel)
Nível 3: Componentes Backend ────────► Guard Clauses, Orquestrador de Provedor e Parsers
Nível 4: Código & Contratos  ────────► Contratos de Tipagem de Payload e Respostas
```

---

### Nível 1: Diagrama de Contexto (System Context)

```mermaid
flowchart TB
    subgraph Atores["Atores Acadêmicos"]
        Aluno["👤 Aluno / Pesquisador<br><i>Submete relatórios e rascunhos de artigos científicos</i>"]
        Professor["👤 Orientador / Docente<br><i>Configura rubricas de avaliação e critérios de feedback</i>"]
    end

    subgraph SistemaMonitoria["Fronteira da Aplicação"]
        Monitoria["🎓 Plataforma Monitoria<br><b>Engine de Análise & Revisão</b><br><i>Processa textos acadêmicos, sanitiza prompts e realiza inferência</i>"]
    end

    subgraph ProvedoresIA["Provedores Externos de IA (LLMs)"]
        Groq["⚡ Groq Cloud LPU<br><i>Inferência ultra-rápida via modelos open-weights (Llama 3)</i>"]
        Gemini["🧠 Google Gemini API<br><i>Análise contextual profunda de documentos longos</i>"]
    end

    Aluno -->|"Envia texto acadêmico e solicita revisão"| Monitoria
    Professor -->|"Audita relatórios e valida notas"| Monitoria
    Monitoria -->|"Inferência ultra-rápida (Edge-to-LPU)"| Groq
    Monitoria -->|"Fallback para contextos analíticos densos"| Gemini
```

---

### Nível 2: Diagrama de Contêineres (Containers)

```mermaid
flowchart TB
    Usuario["👤 Pesquisador / Usuário"]

    subgraph Plataforma["Ecossistema Monitoria"]
        SPA["🖥️ Frontend Client (React 19 / Vite / Tailwind)<br><i>Editor de texto, visualizador de diffs e scoreboards</i>"]
        EdgeBackend["⚙️ Backend Serverless Function (Vercel Edge Runtime)<br><b>Endpoint /api/review</b><br><i>Execução distribuída geograficamente, sem cold start</i>"]
    end

    subgraph ProvedoresExternos["Serviços de Inferência em Nuvem"]
        GroqCloud["⚡ Groq API (api.groq.com)<br><i>Modelos Llama 3 70B com latência sub-segundo</i>"]
        GoogleCloud["🧠 Google Generative AI API<br><i>Processamento semântico complementar</i>"]
    end

    Usuario -->|"Interage via browser"| SPA
    SPA -->|"POST /api/review (JSON com cabeçalho de segurança)"| EdgeBackend
    EdgeBackend -->|"SDK / HTTP REST (TLS 1.3)"| GroqCloud
    EdgeBackend -->|"SDK / HTTP REST (TLS 1.3)"| GoogleCloud
```

---

### Nível 3: Diagrama de Componentes (Edge Backend Components)

Zoom no fluxo interno do manipulador serverless [api/review.ts](api/review.ts):

```mermaid
flowchart TB
    subgraph Entrada["Fronteira de Entrada HTTP"]
        HTTPReq["POST /api/review"]
        MethodGuard{"Método === POST?"}
    end

    subgraph Seguranca["Camada de Guard Clauses (Security)"]
        SecretGuard{"x-internal-secret === APP_INTERNAL_SECRET?"}
        PayloadValidator{"Payload JSON válido?"}
    end

    subgraph Orquestracao["Orquestrador de IA & Prompting"]
        ProviderRouter["AI Provider Router<br><i>Seleciona engine primária (Groq) e fallback (Gemini)</i>"]
        PromptSanitizer["Prompt Sanitizer & Token Formatter"]
    end

    subgraph Saida["Normalização de Resposta"]
        JSONFormatter["Response Stream / JSON Formatter"]
    end

    HTTPReq --> MethodGuard
    MethodGuard --"Não"--> Err405["HTTP 405 Method Not Allowed"]
    MethodGuard --"Sim"--> SecretGuard
    SecretGuard --"Não"--> Err403["HTTP 403 Forbidden"]
    SecretGuard --"Sim"--> PayloadValidator
    PayloadValidator --> PromptSanitizer
    PromptSanitizer --> ProviderRouter
    ProviderRouter --> JSONFormatter
```

---

### Nível 4: Código & Contratos de Tipagem (Code Contracts)

```mermaid
classDiagram
    class ReviewRequest {
        +string systemPrompt
        +string prompt
        +string? provider
        +number? temperature
    }

    class ReviewResponse {
        +boolean success
        +string reviewMarkdown
        +string providerUsed
        +number latencyMs
        +string? error
    }

    class EdgeHandler {
        +config: { runtime: "edge" }
        +handler(Request req) Promise~Response~
    }

    EdgeHandler ..> ReviewRequest : consome
    EdgeHandler ..> ReviewResponse : retorna
```

---

## 🛠️ Stack Tecnológica & Decisões de Backend

| Pilar | Tecnologia | Racional de Arquitetura |
|---|---|---|
| **Arquitetura Backend** | **Vercel Edge Functions** | Execução semântica na CDN mais próxima do usuário com cold start de 0ms. |
| **Segurança na Borda** | **Secret Header Guard** | Proteção de endpoints contra chamadas públicas não autorizadas via validação `x-internal-secret`. |
| **Inferência de IA** | **Groq LPU + Google Gemini** | Estratégia multi-provedor para redundância operacional e latência reduzida. |
| **Linguagem** | **TypeScript** | Contratos de interface tipados entre o cliente e a função serverless. |

---

## 🚀 Execução Local

```bash
# 1. Instalar dependências
npm install

# 2. Configurar variáveis no .env
# APP_INTERNAL_SECRET=sua-chave-secreta
# GROQ_API_KEY=gsk_...
# GEMINI_API_KEY=AIza...

# 3. Rodar ambiente de desenvolvimento
npm run dev
```

---

<div align="center">
  <sub>Documentação arquitetural C4 elaborada com foco em Engenharia de Software e Serverless Edge Computing.</sub>
</div>
