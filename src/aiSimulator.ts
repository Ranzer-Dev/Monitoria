import type { Exercise } from './types';

export interface AIReview {
  approved: boolean;
  feedback: string;
  score: number;
}

/**
 * Utilitário para busca de palavras inteiras (evita 'int' dentro de 'print')
 */
const hasWord = (text: string, word: string) => {
  if (!text || !word) return false;
  // Escapa caracteres especiais e usa \b para limite de palavra
  const escapedWord = word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(`\\b${escapedWord}\\b`, 'i');
  return regex.test(text);
};

/**
 * Motor de Analogias: Traduz termos técnicos para conceitos do mundo real
 */
const getMetaphor = (type: string, details?: string) => {
  const metaphors: Record<string, string> = {
    semicolon: "Imagine que cada comando é uma frase completa. Você esqueceu o 'ponto final' (`;`). Sem ele, o computador não sabe onde um pensamento termina e o outro começa!",
    address: `Para o comando ler o valor, ele precisa saber o ENREDEÇO da casa (o '&' na frente de ${details}). Tentar usar sem o '&' é como mandar um entregador sem o número da rua!`,
    variables: `Você criou uma gaveta chamada '${details}', mas esqueceu de colocar uma etiqueta de 'tipo' nela (como int ou float). Em C, o armário precisa saber o que cada gaveta vai guardar!`,
    undeclared: `O computador tentou acessar a gaveta '${details}', mas ela não existe no armário. Você precisa declará-la antes de usar!`,
    indentation: "O código está 'desalinhado'. No Python, os espaços são como a organização de uma receita: os passos de um bloco precisam estar um degrau para a direita!",
    divisionByZero: "Você tentou dividir por zero! Na matemática e na programação, isso é como tentar repartir um bolo entre zero pessoas... cria um paradoxo e o programa para!",
    unbalanced: "Sinto falta de um par! Você abriu uma aspa `\"`, parêntese `(` ou chaves `{` mas esqueceu de fechar. É como deixar uma porta aberta!",
    syntax: "Há um erro de gramática no seu código! O computador não conseguiu nem começar a ler porque alguma regra de escrita foi quebrada. Verifique se faltam parênteses, aspas ou dois-pontos.",
    genericName: `O nome '${details}' funciona, mas imagine um armário onde todas as gavetas se chamam 'x'. Fica difícil de organizar, né? Use nomes como 'soma' ou 'total'.`,
    conceptMismatch: `Seu código está quase lá, mas o desafio era praticar **${details}**. Tente focar em usar essa estrutura para resolver o problema!`,
    hardcoding: `Vi que você colocou o resultado direto no código. Imagine se o usuário quiser somar outros números? Use o comando de entrada de dados para deixar seu programa dinâmico!`,
  };
  return metaphors[type] || "Analise a lógica do seu código para garantir que todos os passos estão corretos.";
};

export function simulateAIAnalysis(
  code: string, 
  output: string[], 
  exercise: Exercise, 
  language: string,
  listId: number | string
): AIReview {
  const c = code.toLowerCase();
  const outString = output.join('\n');
  const outLower = outString.toLowerCase();
  const isC = language === 'c';
  const numericListId = Number(listId);
  
  // 1. ANÁLISE DE SEGURANÇA E ERROS CRÍTICOS (Sintaxe/Runtime)
  const hasError = outLower.includes('traceback') || 
                   outLower.includes('error:') || 
                   outLower.includes('erro:') ||
                   outLower.includes('exception:') ||
                   outLower.includes('segmentation fault') ||
                   outLower.includes('syntaxerror');
  
  if (hasError) {
    let metaphor = "Sua lógica parece boa, mas o motor do código travou!";
    
    if (isC) {
      if (outLower.includes('expected \';\'')) metaphor = getMetaphor('semicolon');
      else if (outLower.includes('undeclared')) {
        const match = outString.match(/error: '(.*)' undeclared/);
        metaphor = getMetaphor('undeclared', match ? match[1] : 'dessa variável');
      }
      else if (outLower.includes('segmentation fault')) metaphor = getMetaphor('address', 'suas variáveis no scanf');
      else if (outLower.includes('syntax error') || outLower.includes('expected')) metaphor = getMetaphor('syntax');
    } else {
      if (outLower.includes('zerodivisionerror')) metaphor = getMetaphor('divisionByZero');
      else if (outLower.includes('indentationerror')) metaphor = getMetaphor('indentation');
      else if (outLower.includes('syntaxerror')) {
        if (outLower.includes('never closed') || outLower.includes('unmatched')) {
          metaphor = getMetaphor('unbalanced');
        } else {
          metaphor = getMetaphor('syntax');
        }
      }
      else if (outLower.includes('nameerror')) {
        const match = outString.match(/name '(.*)' is not defined/);
        metaphor = getMetaphor('undeclared', match ? match[1] : 'da variável');
      }
    }

    return {
      approved: false,
      score: 0,
      feedback: `👨‍🏫 IA MONITOR: Notei um problema técnico!\n\n${metaphor}\n\n🔍 Olhe as mensagens acima para localizar o erro.`
    };
  }

  // 2. VALIDAÇÃO PEDAGÓGICA (A Inteligência do Monitor)
  const concept = exercise.lesson.concept.toLowerCase();
  let pedagogicalFeedback = "";
  let approved = true;
  let score = 100;

  // A) Mapeamento de Conceitos Inteligentes por Lista
  const pyRules = [
    { key: 'if', words: ['if'], label: 'Estruturas Condicionais (IF)', category: 'logic' },
    { key: 'while', words: ['while'], label: 'Laços de Repetição (WHILE)', category: 'loops' },
    { key: 'for', words: ['for'], label: 'Laços de Repetição (FOR)', category: 'loops' },
    { key: 'input', words: ['input'], label: 'Entrada de Dados (input)', category: 'io' },
  ];

  const cRules = [
    { key: 'if', words: ['if'], label: 'Estruturas Condicionais (if)', category: 'logic' },
    { key: 'while', words: ['while'], label: 'Laços de Repetição (while)', category: 'loops' },
    { key: 'for', words: ['for'], label: 'Laços de Repetição (for)', category: 'loops' },
    { key: 'scanf', words: ['scanf', '&'], label: 'Leitura de Dados (scanf)', category: 'io' },
    { key: 'printf', words: ['printf'], label: 'Saída de Dados (printf)', category: 'io' },
  ];

  // Regra especial para Tipos Numéricos
  const numRules = isC ? [
    { key: 'int', words: ['int'], label: 'Números Inteiros (int)', category: 'types' },
    { key: 'float', words: ['float'], label: 'Números Decimais (float)', category: 'types' }
  ] : [
    { key: 'int', words: ['int('], label: 'Conversão para Inteiro (int())', category: 'types' },
    { key: 'float', words: ['float('], label: 'Conversão para Decimal (float())', category: 'types' }
  ];

  // Filtro de Categorias por ListID (EVITA FALSOS POSITIVOS)
  // Se estiver na Lista 1 (Básico), a IA é PROIBIDA de exigir loops ou lógica complexa.
  const allowedCategories: Record<number, string[]> = {
    1: ['io', 'types'],
    2: ['io', 'types', 'logic'],
    3: ['io', 'types', 'logic', 'loops'],
    4: ['io', 'types', 'logic', 'loops', 'lists'],
    5: ['io', 'types', 'logic', 'loops', 'lists', 'functions'],
  };

  const listCategories = allowedCategories[numericListId] || ['io', 'types', 'logic', 'loops', 'lists', 'functions'];

  const allPossibleRules = [...(isC ? cRules : pyRules), ...numRules];
  const activeRules = allPossibleRules.filter(r => listCategories.includes(r.category));

  // Validação Dinâmica baseada no conceito do exercício
  for (const rule of activeRules) {
    // Só cobra a regra se a palavra-chave estiver no conceito DO EXERCÍCIO
    if (hasWord(concept, rule.key)) {
      const missing = rule.words.filter(w => !c.includes(w));
      if (missing.length > 0) {
        approved = false;
        score = 50;
        pedagogicalFeedback = `\n\n🎯 ${getMetaphor('conceptMismatch', rule.label)}`;
        break; 
      }
    }
  }

  // B) Checagem de Hardcoding (Valores fixos vs Input)
  // Só ativa se o exercício explicitamente fala sobre receber dados (input/scanf)
  if (hasWord(concept, isC ? 'scanf' : 'input')) {
    const hasInput = isC ? hasWord(c, 'scanf') : hasWord(c, 'input');
    if (!hasInput && numericListId === 1) { // Só reclama de hardcoding na lista 1 se o input falhar
       pedagogicalFeedback += `\n\n⚠️ ${getMetaphor('hardcoding')}`;
       approved = false;
       score = 70;
    }
  }

  // C) Checagem de Nomenclatura (Nomes Genéricos)
  const genericNames = ['x', 'y', 'a', 'b', 'n1', 'n2', 'var1'];
  const usedGeneric = genericNames.filter(name => hasWord(c, name));
  if (usedGeneric.length > 2) {
    pedagogicalFeedback += `\n\n💡 ${getMetaphor('genericName', usedGeneric[0])}`;
  }

  // 3. RETORNO FINAL
  if (!approved) {
    return { approved, score, feedback: `👨‍🏫 IA MONITOR: ${pedagogicalFeedback}` };
  }

  // Feedbacks Positivos Variados
  const positiveInsights = [
    "Uau! O código ficou limpo e muito fácil de entender.",
    "A lógica que você usou é digna de um programador sênior!",
    "Parabéns por usar nomes de variáveis que contam a história do programa.",
    "Tudo certo! Você dominou o conceito deste desafio.",
    "Excelente! Agora tente aplicar essa mesma técnica no próximo exercício."
  ];

  return {
    approved: true,
    score: 100,
    feedback: `👨‍🏫 IA MONITOR: ${positiveInsights[Math.floor(Math.random() * positiveInsights.length)]}${pedagogicalFeedback}`
  };
}
