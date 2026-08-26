# Título do artigo em português
Plataforma Gamificada de Monitoria: Integrando Execução de Código In-Browser e Inteligência Artificial no Ensino de Programação

**Nome do Autor:** [Seu Nome / Ranzer]
**Filiação:** [Sua Instituição / Universidade]
**E-mail:** [Seu E-mail]
**ORCID:** [Seu ORCID, se houver]

---

## Resumo
Este trabalho apresenta o desenvolvimento de uma plataforma web gamificada voltada para o ensino e monitoria de programação. Construída com tecnologias modernas (React, TypeScript e Tailwind CSS), a aplicação permite a execução de código diretamente no navegador (utilizando Pyodide) e oferece trilhas de aprendizado em Python, C e Lógica de Programação. Para aumentar o engajamento dos alunos, o sistema conta com mecânicas de gamificação, como pontos de experiência (XP), níveis e ofensivas (*streaks*). Além disso, a plataforma integra-se a modelos de Inteligência Artificial (Groq/Llama 3 e Google Gemini) por meio de funções *serverless*, fornecendo revisões de código e *feedback* instantâneo de maneira didática. Os resultados apontam para uma maior interatividade e autonomia dos estudantes, modernizando e potencializando o processo de monitoria acadêmica convencional.

## Palavras-Chave
Ensino de Programação; Gamificação; Inteligência Artificial; Desenvolvimento Web; Monitoria.

---

## 1. Introdução
A monitoria acadêmica desempenha um papel fundamental no ensino de disciplinas de programação, auxiliando alunos na superação de dificuldades lógicas e de sintaxe. No entanto, a disponibilidade de monitores humanos é limitada, o que pode atrasar o aprendizado em momentos críticos de estudo. Com o avanço das tecnologias web e da Inteligência Artificial (IA), surge a oportunidade de criar ambientes virtuais mais interativos e autônomos. Este trabalho descreve o desenvolvimento de uma plataforma de monitoria gamificada que permite aos estudantes resolverem exercícios de programação e desafios lógicos diretamente no navegador, recebendo *feedback* automatizado e dicas de otimização em tempo real. O objetivo principal do projeto é democratizar e facilitar o aprendizado de algoritmos, utilizando tecnologias de ponta na execução de códigos e IA generativa para simular a presença e o apoio de um monitor em tempo integral.

## 2. Metodologia
O sistema foi desenvolvido como uma *Single Page Application* (SPA) utilizando React, TypeScript e a ferramenta de *build* Vite, com a estilização baseada no Tailwind CSS. A arquitetura da solução baseou-se em três pilares principais de engenharia:
1. **Ambiente de Execução:** Implementação de um editor de código interativo que emprega o ecossistema Pyodide para compilar e executar *scripts* Python nativamente no lado do cliente (via WebAssembly), dispensando a necessidade de provisionamento de servidores externos para execução (*sandboxing* seguro).
2. **Gamificação:** Criação de módulos customizados de estado (`useGamification.ts`) para gerenciar o progresso do usuário, contabilizando de forma persistente os pontos de experiência (XP), evolução de nível e dias consecutivos de estudo (sistema de *streaks*), englobando listas de fundamentos e desafios lógicos práticos.
3. **Integração com IA:** Construção de uma API *serverless* em ambiente de borda (*Edge Functions*) que atua como um *proxy* seguro para a comunicação com Modelos de Linguagem de Grande Escala (LLMs), notadamente o Llama 3 (via Groq) e o Gemini 2.5 Flash Lite. Essa arquitetura valida credenciais internas na borda e delega o código submetido à IA, que retorna sugestões estruturadas para o aluno.

## 3. Resultados e discussão
A implementação resultou em uma plataforma funcional, responsiva e de baixíssima latência. A execução de código *in-browser* eliminou os gargalos de infraestrutura e custos de servidor geralmente associados a plataformas de juízes online (*Online Judges*), garantindo uma escalabilidade eficiente e gratuita para a execução. A adoção da gamificação demonstrou um forte potencial para manter a motivação dos alunos, transformando o estudo de lógicas complexas de programação em etapas sequenciais visíveis e recompensadoras. Adicionalmente, a integração com os LLMs provou-se altamente valiosa para oferecer um "segundo olhar" sobre o código do estudante: o sistema não apenas aponta erros de sintaxe convencionais, mas também sugere boas práticas e explica conceitos de forma guiada, aproximando-se de forma eficaz da experiência pedagógica de uma monitoria humana. A validação estrita no servidor de borda garantiu também a resiliência do sistema contra abusos da API.

## 4. Considerações finais
O projeto alcançou êxito ao criar uma solução tecnológica escalável e acessível para o fortalecimento do ensino de programação. A união de execução local *serverless*, elementos lúdicos de gamificação e *feedback* formativo gerado por Inteligência Artificial representa uma evolução tangível em relação aos métodos tradicionais de monitoria isolada. Como propostas de trabalhos futuros, vislumbra-se a consolidação da persistência de dados em nuvem (utilizando o *Supabase* já pré-configurado na aplicação), a criação de painéis analíticos (*dashboards*) para que os docentes acompanhem o desempenho global das turmas, e a expansão nativa do compilador web para contemplar a linguagem C e novas trilhas de aprendizado.

---

## 5. Agradecimentos
(Preencha caso tenha recebido alguma bolsa ou queira agradecer aos professores, como por exemplo ao Professor Junio Gonçalves pelas atividades base).

## 6. Referências
CRONOGRAMA de Aprendizado: Algoritmos e Programação de Computadores (APC). [S.l.: s.n.], [2026?]. Material didático.

CURRÍCULO de APC Moderno. [S.l.: s.n.], [2026?]. Material didático.

GONÇALVES, J. *Atividade Porta analógica*. São Paulo: Fatec Centro Paula Souza, [20--?]. Atividade prática de laboratório em Arduíno.

GUIA de Exercícios APC: Passo a Passo Detalhado. [S.l.: s.n.], [2026?]. Material didático.

LABORATÓRIOS APC e Listas de Exercícios (01 a 05). [S.l.: s.n.], [2026?]. Conjunto de atividades práticas e de fixação para monitoria.
