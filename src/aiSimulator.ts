export interface AIReview {
  approved: boolean;
  feedback: string;
  score: number;
}

export function simulateAIAnalysis(code: string, output: string[], listId: number, exId: number, language: string): AIReview {
  const c = code.toLowerCase();
  const cWords = code.split(/\W+/);
  const outString = output.join('\n');
  const outLower = outString.toLowerCase();
  
  // 1. Detect Runtime Errors (High Priority)
  const hasError = outLower.includes('traceback') || outLower.includes('error:') || outLower.includes('exception:');
  
  if (hasError) {
    let specificFix = "Revise sua lógica para garantir que todos os caminhos de execução sejam válidos.";
    
    if (outLower.includes('zerodivisionerror')) {
      specificFix = "Opa! Detectei uma divisão por zero. No Python (e na matemática), você não pode dividir por 0. Verifique se o divisor está sendo zerado inesperadamente.";
    } else if (outLower.includes('nameerror')) {
      const match = outString.match(/name '(.*)' is not defined/);
      const varName = match ? match[1] : "variável";
      specificFix = `O computador não reconhece a palavra '${varName}'. Verifique se você declarou essa variável ou se escreveu o nome corretamente.`;
    } else if (outLower.includes('syntaxerror')) {
      specificFix = "A gramática do código está incorreta. Verifique se esqueceu de fechar parênteses, aspas ou os dois-pontos (:) em blocos IF/WHILE.";
    } else if (outLower.includes('indentationerror')) {
      specificFix = "O Python é sensível a espaços! Certifique-se de que o código dentro do bloco está 'empurrado' para a direita (tabulação).";
    }

    return {
      approved: false,
      score: 0,
      feedback: `IA: Detectei um erro crítico! ❌\n\n${specificFix}\n\nO computador interrompeu a execução antes de terminar.`
    };
  }

  // 2. Pedagogical Validation (Becoming "Smarter")
  
  // A) Generic Variable Names Check
  const genericNames = ['x', 'y', 'a', 'b', 'n1', 'n2', 'var1'];
  const usedGeneric = genericNames.filter(name => cWords.includes(name));
  let pedagogicalTip = "";
  
  if (usedGeneric.length > 2) {
    pedagogicalTip = "\n\n💡 Dica de Mestre: Suas variáveis (como " + usedGeneric.slice(0,2).join(', ') + ") funcionam, mas nomes como 'media', 'soma' ou 'total' tornam seu código muito mais profissional!";
  }

  // B) Hardcoding Detection (Common beginner mistake)
  const hasNumbersInCode = /\d+/.test(code);
  const hasInput = c.includes('input') || c.includes('scanf');
  if (hasNumbersInCode && !hasInput && listId === 1) {
    pedagogicalTip += "\n\n⚠️ Observação: Vi valores fixos no seu código. Para tornar o programa dinâmico, tente usar o comando input() para que o usuário possa digitar novos valores!";
  }

  // 3. Logic analysis based on keywords (Smart patterns)
  const hasPrint = c.includes('print') || c.includes('printf');
  const hasIf = c.includes('if');
  const hasLoop = c.includes('while') || c.includes('for');

  // Check for list-specific progression requirements
  if (language === 'python') {
    if (listId === 1 && !hasPrint) return { approved: false, score: 0, feedback: "IA: Notei que seu código não está exibindo nada. Use 'print()' para mostrar o resultado!" };
    if (listId === 2 && !hasIf) return { approved: false, score: 0, feedback: "IA: Para este desafio, você deveria usar uma estrutura de decisão 'if'. Tente reorganizar sua lógica." };
    if (listId === 3 && !hasLoop) return { approved: false, score: 0, feedback: "IA: Senti falta de um laço de repetição (for ou while). Lembre-se que o objetivo desta lista é praticar loops!" };
  }

  // Common positive feedbacks
  const insights = [
    "Vi que você organizou bem o código, isso facilita muito a leitura!",
    "Excelente uso de nomes de variáveis descritivos.",
    "O uso de estruturas condicionais está muito sólido.",
    "Parabéns por tratar os dados de entrada corretamente.",
    "Sua lógica está concisa e eficiente!"
  ];

  const randomInsight = insights[Math.floor(Math.random() * insights.length)];

  // Final Approval Logic
  if (c.length > 10 && hasPrint) {
    return { 
      approved: true, 
      score: 100, 
      feedback: `IA: ${randomInsight} O código executou com sucesso e atende aos requisitos pedagógicos.${pedagogicalTip}`
    };
  } else {
    return {
      approved: false,
      score: 0,
      feedback: "IA: O código parece um pouco incompleto. Tente adicionar mais lógica ou garantir que o resultado seja impresso na tela."
    };
  }
}
