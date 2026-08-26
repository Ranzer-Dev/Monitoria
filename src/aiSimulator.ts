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

interface DebuggingGuide {
  title: string;
  explanation: string;
  checklist: string[];
}

const buildDebuggingFeedback = (guide: DebuggingGuide, lineInfo?: string): string => {
  const lineHeader = lineInfo ? ` (Ocorrido na ${lineInfo})` : '';
  const items = guide.checklist.map((item, i) => `${i + 1}. ${item}`).join('\n');
  return `👨‍🏫 IA MONITOR: 🐞 **Análise de Depuração: ${guide.title}**${lineHeader}\n\n📖 **O que aconteceu:**\n${guide.explanation}\n\n🛠️ **Checklist de Depuração:**\n${items}`;
};

const extractLineNumber = (output: string): string | undefined => {
  const pyMatch = output.match(/File "<exec>", line (\d+)/i) || output.match(/line (\d+)/i);
  if (pyMatch) return `linha ${pyMatch[1]}`;
  
  const cMatch = output.match(/prog\.cc:(\d+):(\d+)/i) || output.match(/:(\d+):(\d+): error/i);
  if (cMatch) return `linha ${cMatch[1]}`;
  
  return undefined;
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
  const detectedLine = extractLineNumber(outString);

  const nonCodePhrases = [
    'não sei', 'nao sei', 'socorro', 'ajuda', 'me ajuda', 'como faz', 'duvida', 
    'dúvida', 'nao entendi', 'não entendi', 'o que fazer', 'help'
  ];

  if (trimmedCode.length === 0) {
    return {
      approved: false,
      score: 0,
      feedback: `👨‍🏫 IA MONITOR: O editor está vazio. Comece escrevendo os primeiros comandos do programa!`
    };
  }

  const isNonCodeInput = nonCodePhrases.some(phrase => lowerCode.includes(phrase)) ||
    (isC && !lowerCode.includes('main') && !lowerCode.includes('printf') && !lowerCode.includes('scanf') && !lowerCode.includes('#include') && trimmedCode.length < 40) ||
    (!isC && !lowerCode.includes('print') && !lowerCode.includes('input') && !lowerCode.includes('=') && trimmedCode.length < 30);

  if (isNonCodeInput) {
    const hintStarter = isC 
      ? "Todo programa em C começa com `#include <stdio.h>` e a função `int main() { ... return 0; }`."
      : "Utilize `print()` para exibir mensagens ou `input()` para capturar dados do teclado.";

    return {
      approved: false,
      score: 0,
      feedback: `👨‍🏫 IA MONITOR: Olá! Percebi que você está com dúvidas sobre como iniciar este desafio.\n\n💡 **Dica de início:** ${hintStarter}\n\nConsulte o painel de instruções e dicas ao lado para visualizar um exemplo prático de sintaxe!`
    };
  }

  const hasError = outLower.includes('traceback') || 
                   outLower.includes('error:') || 
                   outLower.includes('erro:') ||
                   outLower.includes('exception:') ||
                   outLower.includes('segmentation fault') ||
                   outLower.includes('syntaxerror');
  
  if (hasError) {
    let debugGuide: DebuggingGuide = {
      title: "Erro de Sintaxe / Compilação",
      explanation: "O interpretador/compilador encontrou uma instrução que quebra as regras da linguagem e não conseguiu continuar a execução.",
      checklist: [
        "Revise se todas as pontuações e símbolos estão corretos.",
        "Observe a linha indicada no console acima.",
        "Compare o comando com o exemplo de referência na aba de apoio."
      ]
    };

    if (!isC) {
      if (outLower.includes('nameerror')) {
        const match = outString.match(/name '(.*)' is not defined/i);
        const varName = match ? match[1] : 'indicado';
        debugGuide = {
          title: `NameError (Identificador '${varName}' não definido)`,
          explanation: `O Python leu a palavra '${varName}' sem aspas e presumiu que fosse uma variável existente na memória. Como ela não foi criada antes, o interpretador travou.`,
          checklist: [
            `**Era para ser um texto?** Coloque entre aspas: \`"${varName}"\`. Sem aspas, o Python sempre procura uma variável.`,
            `**Era para ser uma variável?** Declare e atribua um valor antes dessa linha (ex: \`${varName} = input(...)\` ou \`${varName} = 10\`).`,
            `**Foi erro de digitação?** Verifique se o nome confere exatamente com a variável declarada (Python diferencia maiúsculas de minúsculas).`
          ]
        };
      } else if (outLower.includes('syntaxerror')) {
        if (outLower.includes('never closed') || outLower.includes('unmatched') || outLower.includes('unterminated string')) {
          debugGuide = {
            title: "SyntaxError (Parêntese, Chave ou Aspas Abertas)",
            explanation: "Você abriu uma estrutura (como parêntese `(`, colchete `[` ou aspas `\"`), mas esqueceu de fechá-la na mesma linha.",
            checklist: [
              "Conte se para cada `(` existe um `)` correspondente.",
              "Verifique se as aspas duplas `\"` ou simples `'` estão fechadas corretamente.",
              "Cheque a linha indicada pelo cursor `^` no console."
            ]
          };
        } else {
          debugGuide = {
            title: "SyntaxError (Gramática Inválida)",
            explanation: "O Python encontrou um comando que viola a estrutura da linguagem.",
            checklist: [
              "Se for um `if`, `for` ou `while`, verifique se colocou os dois-pontos `:` no final da linha.",
              "Verifique se não há operadores matemáticos ou vírgulas esquecidas no final do comando.",
              "Verifique se o nome de alguma função foi digitado incorretamente (ex: `prnt` em vez de `print`)."
            ]
          };
        }
      } else if (outLower.includes('typeerror')) {
        debugGuide = {
          title: "TypeError (Incompatibilidade de Tipos de Dados)",
          explanation: "Você tentou realizar uma operação entre tipos incompatíveis, como somar um texto com um número sem conversão.",
          checklist: [
            "Lembre-se de que o comando `input()` sempre retorna texto (string).",
            "Use `int(input())` para converter para número inteiro ou `float(input())` para decimal.",
            "Para juntar texto e números no `print`, use f-strings: `print(f\"Valor: {x}\")`."
          ]
        };
      } else if (outLower.includes('indentationerror')) {
        debugGuide = {
          title: "IndentationError (Bloco Desalinhado)",
          explanation: "Em Python, o alinhamento dos espaços define a hierarquia de comandos dentro de blocos como `if`, `for` ou funções.",
          checklist: [
            "Avance o bloco de comandos interno com 4 espaços ou pressione Tab.",
            "Certifique-se de que todas as linhas de um mesmo bloco tenham a mesma quantidade de espaços.",
            "Nunca misture tabulações e espaços no mesmo arquivo."
          ]
        };
      } else if (outLower.includes('zerodivisionerror')) {
        debugGuide = {
          title: "ZeroDivisionError (Divisão por Zero)",
          explanation: "O programa tentou realizar uma divisão onde o divisor é zero (`/ 0`), o que é matematicamente indefinido.",
          checklist: [
            "Verifique o valor da variável usada como divisor.",
            "Adicione um `if divisor != 0:` antes da operação para garantir integridade.",
            "Verifique se a fórmula de cálculo foi digitada na ordem correta."
          ]
        };
      } else if (outLower.includes('valueerror')) {
        debugGuide = {
          title: "ValueError (Valor Inválido na Conversão)",
          explanation: "Uma função de conversão (como `int()` ou `float()`) recebeu um dado que não pode ser transformado em número.",
          checklist: [
            "Verifique se a entrada digitada continha letras ou símbolos onde eram esperados números.",
            "Se for número com casas decimais, use `float()` em vez de `int()`.",
            "Não utilize vírgula para números decimais na digitação, utilize ponto (`.` ex: `7.5`)."
          ]
        };
      }
    } else {
      if (outLower.includes('does not name a type')) {
        debugGuide = {
          title: "Erro de Tipo ou Escopo em C ('does not name a type')",
          explanation: "O compilador encontrou um comando solto fora da função `main()` ou uma palavra que não foi reconhecida como tipo válido.",
          checklist: [
            "Verifique se o seu código está dentro de `int main() { ... return 0; }`.",
            "Verifique se declarou os tipos corretamente (`int`, `float`, `char`, `double`).",
            "Se você pretendia exibir um texto, utilize `printf(\"seu texto\");` com aspas duplas."
          ]
        };
      } else if (outLower.includes('undeclared') || outLower.includes('not declared')) {
        const match = outString.match(/error: '(.*)' undeclared/i) || outString.match(/'(.*)' was not declared/i);
        const varName = match ? match[1] : 'da variável';
        debugGuide = {
          title: `Variável Não Declarada ('${varName}')`,
          explanation: `Em C, toda variável precisa ter seu tipo explicitamente declarado na memória antes de ser utilizada.`,
          checklist: [
            `Declare a variável no início da função: \`int ${varName};\` ou \`float ${varName};\`.`,
            `Se '${varName}' era para ser uma mensagem de texto, envolva entre aspas no \`printf\`.`,
            `Verifique se não houve erro de digitação no nome da variável.`
          ]
        };
      } else if (outLower.includes('expected \';\'')) {
        debugGuide = {
          title: "Ponto e Vírgula Ausente (Expected ';')",
          explanation: "Em C, cada comando é uma instrução finalizada por ponto e vírgula `;`.",
          checklist: [
            "Olhe para a linha indicada no console e também para a linha imediatamente anterior.",
            "Adicione o `;` ao final da declaração ou do comando `printf`/`scanf`.",
            "Lembre-se: `if`, `while` e `for` não recebem `;` logo após a condição `()`."
          ]
        };
      } else if (outLower.includes('segmentation fault')) {
        debugGuide = {
          title: "Falha de Segmentação (Segmentation Fault)",
          explanation: "O programa tentou acessar uma posição de memória proibida ou inexistente.",
          checklist: [
            "Verifique se colocou o `&` antes da variável no `scanf` (ex: `scanf(\"%d\", &variavel);`).",
            "Se estiver usando vetores, verifique se o índice não ultrapassou o limite do array.",
            "Para ponteiros, garanta que o ponteiro aponta para um endereço válido antes de usar `*p`."
          ]
        };
      }
    }

    return {
      approved: false,
      score: 0,
      feedback: buildDebuggingFeedback(debugGuide, detectedLine)
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
        pedagogicalFeedback = `\n\n🎯 O desafio pede a prática de **${rule.label}**. Tente incorporar essa estrutura à sua solução.`;
        break; 
      }
    }
  }

  if (hasWord(concept, isC ? 'scanf' : 'input')) {
    const hasInput = isC ? hasWord(lowerCode, 'scanf') : hasWord(lowerCode, 'input');
    if (!hasInput && numericListId === 1) {
       pedagogicalFeedback += `\n\n⚠️ Valores fixos detectados. Use o comando de leitura de dados para tornar a solução dinâmica.`;
       approved = false;
       score = 70;
    }
  }

  const genericNames = ['x', 'y', 'a', 'b', 'n1', 'n2', 'var1'];
  const usedGeneric = genericNames.filter(name => hasWord(lowerCode, name));
  if (usedGeneric.length > 2) {
    pedagogicalFeedback += `\n\n💡 Dica de Boas Práticas: O identificador '${usedGeneric[0]}' funciona, mas nomes expressivos como 'soma' ou 'total' tornam seu código mais profissional.`;
  }

  if (!approved) {
    return { approved, score, feedback: `👨‍🏫 IA MONITOR: ${pedagogicalFeedback}` };
  }

  const positiveInsights = [
    "Excelente! O código está bem estruturado e cumpriu todos os requisitos do desafio.",
    "Ótimo trabalho! A lógica aplicada é clara, concisa e eficiente.",
    "Perfeito! Os conceitos deste exercício foram assimilados com maestria.",
    "Muito bom! Agora aplique essa mesma solidez no próximo desafio."
  ];

  return {
    approved: true,
    score: 100,
    feedback: `👨‍🏫 IA MONITOR: ${positiveInsights[Math.floor(Math.random() * positiveInsights.length)]}${pedagogicalFeedback}`
  };
}
