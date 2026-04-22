export type GlossaryCategory = 'frontend' | 'backend' | 'processos' | 'conceitos' | 'design';

export type GlossaryItem = {
  id: string;
  term: string;
  translation: string;
  explanation: string;
  category: GlossaryCategory;
  tags: string[];
};

export const glossaryData: GlossaryItem[] = [
  {
    id: 'frontend',
    term: 'Frontend',
    translation: 'A Cara do Site',
    category: 'frontend',
    tags: ['interface', 'visual', 'browser'],
    explanation: 'É tudo o que você vê e interage em um site ou app. Cores, botões, animações e menus. É a parte do código que roda diretamente no navegador do usuário (Chrome, Safari, etc).'
  },
  {
    id: 'backend',
    term: 'Backend',
    translation: 'Os Bastidores',
    category: 'backend',
    tags: ['servidor', 'banco de dados', 'segurança'],
    explanation: 'É o cérebro que o usuário não vê. Ele cuida de salvar seus dados, validar senhas e processar pagamentos. Fica guardado em computadores potentes chamados "Servidores".'
  },
  {
    id: 'trade-off',
    term: 'Trade-off',
    translation: 'Troca Equivalente',
    category: 'conceitos',
    tags: ['decisão', 'engenharia', 'escolha'],
    explanation: 'Na programação, raramente existe uma solução perfeita. Um trade-off é uma decisão onde você ganha algo (tipo velocidade) mas aceita perder outra coisa (tipo memória). É saber escolher o "menos pior" para cada situação.'
  },
  {
    id: 'ci-cd',
    term: 'CI/CD',
    translation: 'Esteira Automática',
    category: 'processos',
    tags: ['automação', 'deploy', 'agilidade'],
    explanation: 'É um sistema que testa e publica seu código sozinho. Assim que você termina um ajuste, a "esteira" verifica se não quebrou nada e já coloca no ar (Vercel, por exemplo, faz muito isso).'
  },
  {
    id: 'ux-ui',
    term: 'UI/UX',
    translation: 'Visual vs Experiência',
    category: 'design',
    tags: ['sentimento', 'estética', 'usabilidade'],
    explanation: 'UI (Interface) é a beleza: cores e fontes. UX (Experiência) é como o usuário se sente: se é fácil de usar, se ele se perde ou se consegue resolver o que precisa rápido.'
  },
  {
    id: 'api',
    term: 'API',
    translation: 'O Garçom do Sistema',
    category: 'backend',
    tags: ['integração', 'comunicação', 'dados'],
    explanation: 'É uma ponte que permite que dois sistemas conversem. Imagine que você (App) pede um prato (Dados) e a API (Garçom) leva o pedido até a Cozinha (Banco de Dados) e traz o resultado.'
  },
  {
    id: 'deploy',
    term: 'Deploy',
    translation: 'Lançamento',
    category: 'processos',
    tags: ['publicação', 'live', 'ar'],
    explanation: 'É o ato de tirar o seu código do seu computador e colocar ele na internet para que qualquer pessoa no mundo possa acessar.'
  },
  {
    id: 'debug',
    term: 'Debug',
    translation: 'Caça aos Insetos',
    category: 'conceitos',
    tags: ['correção', 'investigação', 'bug'],
    explanation: 'É o processo de investigar o código para encontrar e consertar erros (bugs). É como ser um detetive do seu próprio código.'
  },
  {
    id: 'legacy',
    term: 'Legacy (Legado)',
    translation: 'Código Antigo',
    category: 'conceitos',
    tags: ['manutenção', 'histórico', 'dívida técnica'],
    explanation: 'É aquele código que foi escrito há muito tempo, muitas vezes por pessoas que nem estão mais no projeto, e que você tem medo de mexer porque ele sustenta tudo.'
  },
  {
    id: 'stack',
    term: 'Stack',
    translation: 'Pilha de Tecnologias',
    category: 'conceitos',
    tags: ['ferramentas', 'estudo', 'carreira'],
    explanation: 'É o conjunto de ferramentas e linguagens que você usa para construir algo. Ex: React + Vite + Node = sua "Stack" de desenvolvimento.'
  },
  {
    id: 'qa',
    term: 'QA (Quality Assurance)',
    translation: 'O Testador',
    category: 'processos',
    tags: ['qualidade', 'testes', 'bugs'],
    explanation: 'É a pessoa ou o processo responsável por garantir que o código não tenha erros. O QA "tenta quebrar" o site antes do usuário real para garantir que tudo funcione.'
  },
  {
    id: 'refactoring',
    term: 'Refactoring',
    translation: 'Faxina no Código',
    category: 'conceitos',
    tags: ['limpeza', 'melhoria', 'manutenção'],
    explanation: 'É quando você reescreve uma parte do código para deixá-lo mais bonito e organizado, mas sem mudar o que ele faz. É como limpar a casa sem trocar os móveis de lugar.'
  },
  {
    id: 'hotfix',
    term: 'Hotfix',
    translation: 'Remendo Urgente',
    category: 'processos',
    tags: ['urgência', 'correção', 'produção'],
    explanation: 'É uma correção rápida feita diretamente no site que já está no ar para resolver um problema crítico que não pode esperar a próxima atualização normal.'
  },
  {
    id: 'production',
    term: 'Produção (Prod)',
    translation: 'O Mundo Real',
    category: 'processos',
    tags: ['live', 'usuários', 'venerável'],
    explanation: 'É o ambiente onde o site "mora" de verdade e onde os usuários reais acessam. Mexer em produção exige muito cuidado (e às vezes um pouco de oração).'
  },
  {
    id: 'staging',
    term: 'Staging',
    translation: 'Palco de Ensaio',
    category: 'processos',
    tags: ['teste', 'pré-lançamento', 'cópia'],
    explanation: 'É uma cópia idêntica do site real, mas que só a equipe vê. Serve para testar tudo uma última vez antes de mandar para os usuários em Produção.'
  },
  {
    id: 'framework',
    term: 'Framework',
    translation: 'O Esqueleto',
    category: 'conceitos',
    tags: ['ferramenta', 'produtividade', 'padrão'],
    explanation: 'É um conjunto de ferramentas prontas que te dão uma base para construir algo. Em vez de inventar a roda, você usa o framework para focar no que é único no seu projeto.'
  },
  {
    id: 'middleware',
    term: 'Middleware',
    translation: 'O Intermediário',
    category: 'backend',
    tags: ['filtro', 'segurança', 'ponte'],
    explanation: 'É um código que roda "no meio do caminho". Por exemplo, um middleware pode verificar se você está logado antes de deixar você ver uma página protegida.'
  },
  {
    id: 'ide',
    term: 'IDE',
    translation: 'Escritório do Programador',
    category: 'conceitos',
    tags: ['software', 'escrita', 'ferramentas'],
    explanation: 'É o software que você usa para escrever código (como o VS Code). Ele tem corretor, atalhos e ferramentas que facilitam muito a nossa vida.'
  },
  {
    id: 'bug',
    term: 'Bug',
    translation: 'O Inseto (Erro)',
    category: 'conceitos',
    tags: ['erro', 'falha', 'problema'],
    explanation: 'É qualquer comportamento não planejado em um programa. O termo surgiu quando um inseto real (uma mariposa) entrou em um computador antigo e causou um erro físico.'
  },
  {
    id: 'git',
    term: 'Git',
    translation: 'Máquina do Tempo',
    category: 'processos',
    tags: ['versão', 'histórico', 'segurança'],
    explanation: 'É uma ferramenta que salva "fotos" do seu código ao longo do tempo. Se você fizer uma besteira hoje, pode "voltar no tempo" para a versão de ontem facilmente.'
  },
  {
    id: 'llm',
    term: 'LLM (Large Language Model)',
    translation: 'Cérebro Artificial de Texto',
    category: 'conceitos',
    tags: ['ia', 'gemini', 'gpt'],
    explanation: 'É o motor por trás de IAs como o Gemini ou ChatGPT. É uma rede neural treinada com bilhões de textos para entender e gerar linguagem humana de forma natural.'
  },
  {
    id: 'rag',
    term: 'RAG (Retrieval-Augmented Generation)',
    translation: 'Consulta com Base de Dados',
    category: 'backend',
    tags: ['ia', 'conhecimento', 'precisão'],
    explanation: 'É uma técnica que dá "livros de referência" para a IA ler antes de responder. Isso evita que ela invente coisas (alucine) e permite que ela responda com base em dados reais da sua empresa ou projeto.'
  },
  {
    id: 'prompt',
    term: 'Prompt',
    translation: 'O Comando / Instrução',
    category: 'conceitos',
    tags: ['ia', 'interação', 'entrada'],
    explanation: 'É o texto que você escreve para pedir algo a uma IA. Quanto mais claro e detalhado for o seu prompt, melhor será a resposta que a IA vai te entregar.'
  },
  {
    id: 'token',
    term: 'Token',
    translation: 'Pedacinho de Palavra',
    category: 'conceitos',
    tags: ['ia', 'custo', 'processamento'],
    explanation: 'É a unidade básica que as IAs usam para ler. Uma palavra curta pode ser 1 token, uma longa pode ser 3. As IAs não leem letras, elas leem esses "pedaços" de significado.'
  },
  {
    id: 'hallucination',
    term: 'Alucinação (IA)',
    translation: 'Fantasia da IA',
    category: 'conceitos',
    tags: ['ia', 'erro', 'confiabilidade'],
    explanation: 'É quando a IA gera uma informação que parece muito real e confiante, mas que é pura invenção. Por isso nunca devemos confiar cegamente em tudo o que a IA diz sem conferir.'
  },
  {
    id: 'vector-db',
    term: 'Vector Database',
    translation: 'Banco de Memórias de Significado',
    category: 'backend',
    tags: ['ia', 'dados', 'busca'],
    explanation: 'É um tipo de banco de dados onde guardamos informações não por "nome", mas por "sentido". Isso permite que a IA encontre coisas relacionadas por contexto, mesmo que as palavras sejam diferentes.'
  },
  {
    id: 'recursividade',
    term: 'Recursividade',
    translation: 'Auto-Chamada',
    category: 'conceitos',
    tags: ['lógica', 'loops', 'matemática'],
    explanation: 'É quando uma função resolve um problema chamando a si mesma com uma versão menor do mesmo problema. Imagine dois espelhos um de frente para o outro.'
  },
  {
    id: 'big-o',
    term: 'Big O',
    translation: 'Nível de Esforço',
    category: 'conceitos',
    tags: ['performance', 'algoritmos', 'eficiência'],
    explanation: 'É a régua que usamos para medir quão "pesado" um código fica quando aumentamos a quantidade de dados. Ajuda a saber se seu site vai travar com 1 milhão de usuários.'
  },
  {
    id: 'ponteiro',
    term: 'Ponteiro',
    translation: 'O GPS da Memória',
    category: 'conceitos',
    tags: ['memória', 'c', 'baixo nível'],
    explanation: 'É uma variável que não guarda um valor (como 10), mas sim o endereço de onde outro dado está na RAM. É como guardar o papel com o endereço da casa em vez da casa.'
  },
  {
    id: 'modularizacao',
    term: 'Modularização',
    translation: 'Peças de LEGO',
    category: 'processos',
    tags: ['organização', 'arquitetura', 'limpeza'],
    explanation: 'É o ato de dividir um programa gigante em peças menores e independentes (módulos). Facilita o conserto e permite que mais pessoas trabalhem no mesmo projeto.'
  },
  {
    id: 'kiss',
    term: 'KISS',
    translation: 'Mantenha Simples',
    category: 'conceitos',
    tags: ['filosofia', 'simplicidade', 'design'],
    explanation: 'Sigla para "Keep It Simple, Stupid". É o princípio de que a maioria dos sistemas funciona melhor se forem mantidos simples em vez de complicados.'
  },
  {
    id: 'abstracao',
    term: 'Abstração',
    translation: 'Esconder Detalhes',
    category: 'conceitos',
    tags: ['poo', 'arquitetura', 'design'],
    explanation: 'É focar no "o que" algo faz em vez de "como" faz. Você usa o controle remoto (interface simples) sem precisar entender os circuitos internos (detalhes complexos).'
  },
  {
    id: 'poo',
    term: 'POO',
    translation: 'Programação de Objetos',
    category: 'conceitos',
    tags: ['objetos', 'classes', 'arquitetura'],
    explanation: 'A Programação Orientada a Objetos é um jeito de organizar o código como se fossem "coisas" do mundo real (Objetos), que têm características e ações próprias.'
  },
  {
    id: 'borda',
    term: 'Caso de Borda (Edge Case)',
    translation: 'Situação Limite',
    category: 'conceitos',
    tags: ['erros', 'testes', 'segurança'],
    explanation: 'São situações raras que acontecem nos "limites" do sistema. Ex: O que acontece se o usuário tentar sacar R$ 0,00 ou R$ -1,00?'
  },
  {
    id: 'procedimento',
    term: 'Procedimento (Void)',
    translation: 'Tarefa Pura',
    category: 'conceitos',
    tags: ['funções', 'lógica', 'instrução'],
    explanation: 'É um bloco de código que executa uma ação mas não "devolve" nada. É como mandar alguém lavar a louça: a ação é feita, mas não sai um resultado (valor) da mão da pessoa.'
  },
  {
    id: 'controle',
    term: 'Estruturas de Controle',
    translation: 'Cruzamentos do Código',
    category: 'conceitos',
    tags: ['lógica', 'if', 'else'],
    explanation: 'São os comandos que decidem qual caminho o programa vai seguir. O IF/ELSE decide se vira para esquerda ou direita, e o LOOP decide se volta para o começo.'
  }
];

export const getTerm = (id: string) => glossaryData.find(t => t.id === id.toLowerCase());
