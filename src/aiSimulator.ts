import type { Exercise } from './types';

export interface AIReview {
  approved: boolean;
  feedback: string;
  score: number;
}

const hasWord = (text: string, word: string): boolean => {
  if (!text || !word) return false;
  const escapedWord = word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(`\\b${escapedWord}\\b`, 'i');
  return regex.test(text);
};

const getMetaphor = (type: string, details?: string): string => {
  const metaphors: Record<string, string> = {
    empty: "O editor está vazio ou quase vazio. Comece escrevendo os primeiros comandos do programa!",
    question: "Parece que você escreveu uma dúvida ou frase em português no editor em vez de código. Dê uma olhada no esqueleto inicial e nas dicas ao lado para começar!",
    semicolon: "Imagine que cada comando é uma frase completa. Você esqueceu o ponto final (`;`). Sem ele, o computador não sabe onde a instrução termina!",
    address: `Para ler o valor com scanf, é necessário informar o endereço da memória usando o '&' antes de ${details}. Sem o '&', o programa tenta escrever em um local desconhecido!`,
    variables: `Você criou uma gaveta chamada '${details}', mas esqueceu de colocar uma etiqueta de tipo nela (como int ou float).`,
    undeclared: `O computador tentou acessar o identificador '${details}', mas ele ainda não foi declarado no programa.`,
    indentation: "O código está desalinhado. No Python, a indentação define quais comandos pertencem a cada bloco.",
    divisionByZero: "Você tentou dividir por zero! Em computação isso gera uma indeterminação que interrompe o programa.",
    unbalanced: "Falta fechar algum parêntese `()`, aspas `\"` ou chaves `{}`. Verifique se todas as aberturas possuem seu respectivo fechamento.",
    syntax: "Há um erro de sintaxe. O compilador encontrou um comando que não segue as regras da linguagem. Verifique se há pontuação ou palavras fora de lugar.",
    notype: "O compilador encontrou uma palavra que não é reconhecida como tipo ou comando válido. Verifique se o código está dentro da função main().",
    genericName: `O identificador '${details}' é muito vago. Use nomes expressivos como 'soma' ou 'total'.`,
    conceptMismatch: `O desafio pede que você pratique **${details}**. Tente utilizar essa estrutura na sua solução.`,
    hardcoding: "O resultado foi fixado diretamente no código. Use a leitura de dados para tornar a solução dinâmica.",
  };
  return metaphors[type] || "Analise a lógica do seu código para garantir que todos os passos foram seguidos.";
};

export function simulateAIAnalysis(
  code: string, 
  output: string[], 
  exercise: Exercise, 
  language: string,
  listId: number | string
): AIReview {
  const trimmedCode = code.trim();
  const lowerCode = trimmedCode.toLowerCase();
  const outString = output.join('\n');
  const outLower = outString.toLowerCase();
  const isC = language === 'c';
  const numericListId = Number(listId);

  const nonCodePhrases = [
    'não sei', 'nao sei', 'socorro', 'ajuda', 'me ajuda', 'como faz', 'duvida', 
    'dúvida', 'nao entendi', 'não entendi', 'o que fazer', 'help'
  ];

  if (trimmedCode.length === 0) {
    return {
      approved: false,
      score: 0,
      feedback: `👨‍🏫 IA MONITOR: ${getMetaphor('empty')}`
    };
  }

  const isNonCodeInput = nonCodePhrases.some(phrase => lowerCode.includes(phrase)) ||
    (isC && !lowerCode.includes('main') && !lowerCode.includes('printf') && !lowerCode.includes('scanf') && !lowerCode.includes('#include') && trimmedCode.length < 40) ||
    (!isC && !lowerCode.includes('print') && !lowerCode.includes('input') && !lowerCode.includes('=') && trimmedCode.length < 30);

  if (isNonCodeInput) {
    const hintStarter = isC 
      ? "Lembre-se de que todo programa em C começa com `#include <stdio.h>` e a função `int main() { ... return 0; }`."
      : "Lembre-se de usar `print()` para exibir mensagens ou `input()` para ler dados.";

    return {
      approved: false,
      score: 0,
      feedback: `👨‍🏫 IA MONITOR: Olá! Notei que você pode estar em dúvida sobre como iniciar este desafio.\n\n💡 **Dica de início:** ${hintStarter}\n\nConsulte o painel de instruções e dicas ao lado para ver um exemplo prático de sintaxe!`
    };
  }

  const hasError = outLower.includes('traceback') || 
                   outLower.includes('error:') || 
                   outLower.includes('erro:') ||
                   outLower.includes('exception:') ||
                   outLower.includes('segmentation fault') ||
                   outLower.includes('syntaxerror');
  
  if (hasError) {
    let metaphor = getMetaphor('syntax');
    
    if (isC) {
      if (outLower.includes('expected \';\'')) {
        metaphor = getMetaphor('semicolon');
      } else if (outLower.includes('does not name a type')) {
        metaphor = getMetaphor('notype');
      } else if (outLower.includes('undeclared')) {
        const match = outString.match(/error: '(.*)' undeclared/);
        metaphor = getMetaphor('undeclared', match ? match[1] : 'da variável');
      } else if (outLower.includes('segmentation fault')) {
        metaphor = getMetaphor('address', 'variáveis no scanf');
      } else if (outLower.includes('syntax error') || outLower.includes('expected')) {
        metaphor = getMetaphor('syntax');
      }
    } else {
      if (outLower.includes('zerodivisionerror')) {
        metaphor = getMetaphor('divisionByZero');
      } else if (outLower.includes('indentationerror')) {
        metaphor = getMetaphor('indentation');
      } else if (outLower.includes('syntaxerror')) {
        if (outLower.includes('never closed') || outLower.includes('unmatched')) {
          metaphor = getMetaphor('unbalanced');
        } else {
          metaphor = getMetaphor('syntax');
        }
      } else if (outLower.includes('nameerror')) {
        const match = outString.match(/name '(.*)' is not defined/);
        metaphor = getMetaphor('undeclared', match ? match[1] : 'da variável');
      }
    }

    return {
      approved: false,
      score: 0,
      feedback: `👨‍🏫 IA MONITOR: Identifiquei um detalhe de sintaxe!\n\n${metaphor}\n\n🔍 Observe a mensagem do compilador no console acima para guiar o ajuste.`
    };
  }

  const concept = exercise.lesson.concept.toLowerCase();
  let pedagogicalFeedback = "";
  let approved = true;
  let score = 100;

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

  const numRules = isC ? [
    { key: 'int', words: ['int'], label: 'Números Inteiros (int)', category: 'types' },
    { key: 'float', words: ['float'], label: 'Números Decimais (float)', category: 'types' }
  ] : [
    { key: 'int', words: ['int('], label: 'Conversão para Inteiro (int())', category: 'types' },
    { key: 'float', words: ['float('], label: 'Conversão para Decimal (float())', category: 'types' }
  ];

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

  for (const rule of activeRules) {
    if (hasWord(concept, rule.key)) {
      const missing = rule.words.filter(w => !lowerCode.includes(w));
      if (missing.length > 0) {
        approved = false;
        score = 50;
        pedagogicalFeedback = `\n\n🎯 ${getMetaphor('conceptMismatch', rule.label)}`;
        break; 
      }
    }
  }

  if (hasWord(concept, isC ? 'scanf' : 'input')) {
    const hasInput = isC ? hasWord(lowerCode, 'scanf') : hasWord(lowerCode, 'input');
    if (!hasInput && numericListId === 1) {
       pedagogicalFeedback += `\n\n⚠️ ${getMetaphor('hardcoding')}`;
       approved = false;
       score = 70;
    }
  }

  const genericNames = ['x', 'y', 'a', 'b', 'n1', 'n2', 'var1'];
  const usedGeneric = genericNames.filter(name => hasWord(lowerCode, name));
  if (usedGeneric.length > 2) {
    pedagogicalFeedback += `\n\n💡 ${getMetaphor('genericName', usedGeneric[0])}`;
  }

  if (!approved) {
    return { approved, score, feedback: `👨‍🏫 IA MONITOR: ${pedagogicalFeedback}` };
  }

  const positiveInsights = [
    "Excelente! O código está bem estruturado e cumpriu os requisitos do desafio.",
    "Ótimo trabalho! A lógica aplicada é clara e eficiente.",
    "Perfeito! Os conceitos deste exercício foram assimilados com sucesso.",
    "Muito bom! Agora aplique o mesmo raciocínio no próximo desafio."
  ];

  return {
    approved: true,
    score: 100,
    feedback: `👨‍🏫 IA MONITOR: ${positiveInsights[Math.floor(Math.random() * positiveInsights.length)]}${pedagogicalFeedback}`
  };
}
