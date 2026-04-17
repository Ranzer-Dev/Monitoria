import type { ExerciseListDef } from './types';

export const logicList1: ExerciseListDef = {
  id: 1,
  title: 'A Ponte: Do Pensamento ao Código',
  topic: '7 Etapas da Lógica Real para Programação',
  icon: '🌉',
  fundamentals: [
    {
      id: 'logic_bridge',
      icon: '🧠',
      title: 'A Ponte da Lógica',
      summary: 'Programar não é decorar comandos, é traduzir o que você já faz na cabeça para regras que o computador entende: Variáveis (gavetas), Condições (escolhas) e Sequências (passo a passo).',
      example: 'Humano: "Se tiver sol, vou ao mar."\nCódigo: if (clima == "sol") { ir_ao_mar(); }'
    },
    {
      id: 'logic_operators',
      icon: '⚡',
      title: 'Operadores Lógicos e Comparação',
      summary: 'Eles são os sinais de trânsito do código: AND (&&) exige tudo verdadeiro; OR (||) exige apenas um; NOT (!) inverte. Já os comparadores testam igualdade (==), diferença (!=) ou tamanho (>, <, >=, <=).',
      example: 'Igual: x == 10\nAtribuir: x = 10\nDiferente: x != 0\nE: (a && b)'
    }
  ],
  exercises: [
    // TEMA 1: O CHÁ (SEQUENCIAMENTO)
    {
      id: 1,
      title: 'T1: O Enigma do Chá (Humano)',
      description: 'Você quer preparar um chá. Qual é a ordem lógica CORRETA para que o processo não falhe?',
      options: [
        'A) Servir na xícara -> Ferver a água -> Colocar o saquinho',
        'B) Ferver a água -> Colocar o saquinho na xícara -> Despejar a água quente',
        'C) Beber o chá -> Ferver a água -> Colocar o açúcar',
        'D) Colocar o saquinho na xícara -> Servir na xícara -> Ferver a água'
      ],
      answer: 'B',
      tips: ['Pense na dependência: nada acontece se a água ainda estiver fria!'],
      lesson: {
        concept: 'Sequenciamento: No cérebro ou no PC, a ordem altera o produto.',
        example: 'Receita de bolo: bater ovos antes de assar.',
        instructions: 'Escolha a sequência que faz sentido lógico para o processo do chá.',
        expectedOutput: 'B) Ferver -> Saquinho -> Água',
        steps: ['Identifique o início.', 'Veja o que "destrava" o próximo passo.', 'Finalize.'],
        explanation: [
          { line: '1. Ferver água', text: 'Estado necessário para a infusão.' },
          { line: '2. Colocar saquinho', text: 'Preparar o recipiente.' },
          { line: '3. Despejar água', text: 'Ação final que une os estados anteriores.' }
        ]
      }
    },
    {
      id: 2,
      title: 'T1: O Chá na Memória (Código)',
      description: 'Como o computador entende o processo do chá usando variáveis? No código abaixo, o sinal de "=" significa "recebe" (atribuição) e "<" significa "é menor que".',
      options: [
        'A) xicara = "vazia"; temperaturaAgua = "quente"; xicara = "cheia"',
        'B) temperaturaAgua = 20; while(temperaturaAgua < 100) { temperaturaAgua++; } xicara = "cheia"',
        'C) if (xicara == "cheia") { ferver_agua(); }',
        'D) Todas estão erradas.'
      ],
      answer: 'B',
      tips: [
        'O computador usa números para saber se a água atingiu a temperatura de ebulição (100 graus).',
        'Dicionário: "=" é Atribuição (guarda o valor na gaveta), "<" é Comparação (checa se é menor).'
      ],
      lesson: {
        concept: 'Tradução para Código: Usamos variáveis com nomes claros (como temperaturaAgua) e repetições (while) para simular o mundo real.',
        example: 'Python: while temperaturaAgua < 100: temperaturaAgua += 1\nC: while(temperaturaAgua < 100) { temperaturaAgua++; }',
        steps: ['Defina o estado inicial (temperatura inicial).', 'Crie um loop para atingir o objetivo.', 'Execute a ação final.'],
        explanation: [
          { line: 'temperaturaAgua = 20', text: 'Python/C: Criamos uma variável na memória para representar o grau inicial da água.' },
          { line: 'while(temperaturaAgua < 100)', text: 'Loop: O computador verifica a condição repetidamente até ser verdadeira.' },
          { line: 'xicara = "cheia"', text: 'Atribuição: Após o loop, o estado da xícara muda para cheia.' }
        ]
      }
    },

    // TEMA 2: O ELEVADOR (DECISÃO)
    {
      id: 3,
      title: 'T2: O Elevador (Humano)',
      description: 'Você está no 5º andar e quer ir para o 2º. Qual a decisão lógica do elevador?',
      options: [
        'A) Subir, pois 5 é maior que 2.',
        'B) Abrir a porta e ficar parado.',
        'C) Comparar: Se 2 < 5, então descer.',
        'D) Ir para o andar 0 primeiro.'
      ],
      answer: 'C',
      tips: ['Computadores decidem caminhos comparando se valores são Maiores ou Menores.'],
      lesson: {
        concept: 'Desvios Condicionais: Se algo for verdade, faça isso; senão, faça aquilo.',
        example: 'Se tiver dinheiro -> Comprar. Senão -> Trabalhar.',
        steps: ['Saiba onde está.', 'Saiba para onde vai.', 'Compare os dois.'],
        explanation: [
          { line: 'Se Destino < Atual', text: 'O elevador detecta que o alvo está abaixo.' },
          { line: 'Então: Mover para baixo', text: 'Ação tomada baseada na comparação lógica.' }
        ]
      }
    },
    {
      id: 4,
      title: 'T2: O Elevador no IF/ELSE (Código)',
      description: 'Qual código representa a decisão correta para o elevador (Atual: 5, Destino: 2)? Use o dicionário: "<" (menor que) e "==" (é igual a?).',
      options: [
        'A) if (destino > atual) { descer(); }',
        'B) if (destino < atual) { descer(); } else { subir(); }',
        'C) while (true) { descer(); }',
        'D) if (atual == 2) { subir(); }'
      ],
      answer: 'B',
      tips: ['O comando "else" (senão) serve para o caso oposto da comparação.'],
      lesson: {
        concept: 'Sintaxe de Decisão: O "if" testa uma condição e o "else" trata o resto.',
        example: 'Python: if d < a: descer() else: subir()\nC: if(d < a) { descer(); } else { subir(); }',
        steps: ['Teste a condição.', 'Defina o bloco de código "Verdadeiro".', 'Defina o bloco "Falso" (else).'],
        explanation: [
          { line: 'if (destino < atual)', text: 'Teste: O computador verifica se 2 < 5 (Verdadeiro).' },
          { line: 'descer()', text: 'Como o teste deu VERDADEIRO, ele executa esta primeira parte.' },
          { line: 'else { subir() }', text: 'O computador PULA esta parte, pois o "if" já foi satisfeito.' }
        ]
      }
    },

    // TEMA 3: O POSTO (CÁLCULOS)
    {
      id: 5,
      title: 'T3: No Posto de Gasolina (Humano)',
      description: 'Você tem R$ 100 e a gasolina custa R$ 5 o litro. Quantos litros você pode comprar?',
      options: [
        'A) 20 litros.',
        'B) 500 litros.',
        'C) 95 litros.',
        'D) 5 litros.'
      ],
      answer: 'A',
      tips: ['A lógica computacional usa operadores matemáticos (*, /, +, -) para processar dados.'],
      lesson: {
        concept: 'Operações e Variáveis: Armazenamos valores para fazer contas depois.',
        example: 'Total = Preço * Quantidade.',
        steps: ['Pegue os valores de entrada.', 'Aplique a fórmula.', 'Mostre o resultado.'],
        explanation: [
          { line: '1. Dinheiro = 100', text: 'Guardamos o valor na memória.' },
          { line: '2. Litros = Dinheiro / 5', text: 'Computamos a divisão.' }
        ]
      }
    },
    {
      id: 6,
      title: 'T3: Cálculos no Sistema (Código)',
      description: 'Como o código calcula o total de litros com base no dinheiro disponível? Lembre-se: "=" faz a variável receber o resultado da conta à direita.',
      options: [
        'A) litros = dinheiro * preco',
        'B) litros = dinheiro / preco',
        'C) preco = litros + dinheiro',
        'D) if (dinheiro) { litros = 20; }'
      ],
      answer: 'B',
      tips: ['Na programação, "/" é o sinal de divisão e "*" é multiplicação.'],
      lesson: {
        concept: 'Expressões Algébricas: O computador resolve o lado DIREITO do "=" e guarda no ESQUERDO.',
        example: 'Python/C: resultado = a / b',
        steps: ['Identifique os operandos.', 'Use o operador correto (/).', 'Atribua à variável de destino.'],
        explanation: [
          { line: 'float litros;', text: 'C: Reservamos espaço para um número que pode ter vírgula.' },
          { line: 'litros = dinheiro / preco;', text: 'Processamento: O computador divide os valores e guarda em "litros".' }
        ]
      }
    },

    // TEMA 4: O ALARME (LÓGICA BOOLEANA)
    {
      id: 7,
      title: 'T4: Alarme de Segurança (Humano)',
      description: 'Um alarme deve tocar se a porta for aberta E o sistema estiver armado. O que acontece se a porta abrir mas o alarme estiver desligado?',
      options: [
        'A) O alarme toca.',
        'B) O alarme não toca.',
        'C) O alarme explode.',
        'D) O alarme liga sozinho.'
      ],
      answer: 'B',
      tips: [
        'A condição "E" (AND) exige que as DUAS condições sejam verdadeiras ao mesmo tempo.',
        'Observação: Porta Aberta (V) E Sistema Armado (V) -> Toca.',
        'Se apenas uma for falsa, o alarme não dispara.'
      ],
      lesson: {
        concept: 'Operador Lógico "E" (AND): Usado para combinar condições obrigatórias.',
        example: 'Para entrar: Ter ingresso E estar na hora certa.',
        steps: ['Cheque a condição 1.', 'Cheque a condição 2.', 'Se ambas ok -> Ação.'],
        explanation: [
          { line: 'Porta Aberta: SIM', text: 'Condição 1 é verdadeira.' },
          { line: 'Alarme Armado: NÃO', text: 'Condição 2 é falsa. O resultado final é FALSO.' }
        ]
      }
    },
    {
      id: 8,
      title: 'T4: Alarme Digital (Código)',
      description: 'Qual operador lógico o computador usa para verificar as duas condições do alarme? Dicionário: "&&" significa E (as duas precisam ser verdade).',
      options: [
        'A) if (porta || armado)',
        'B) if (porta && armado)',
        'C) if (porta != armado)',
        'D) if (porta == false)'
      ],
      answer: 'B',
      tips: [
        'Python usa a palavra "and", enquanto C usa o símbolo "&&" para o operador lógico E.',
        'O operador && (AND) só retorna VERDADEIRO se o lado esquerdo E o lado direito forem verdadeiros.'
      ],
      lesson: {
        concept: 'Operadores de Conjunção: Combinam múltiplos testes em um só.',
        example: 'Python: if a and b:\nC: if(a && b)',
        steps: ['Use && (C) ou "and" (Python).', 'Entenda que se um for falso, tudo falha.'],
        explanation: [
          { line: 'if (porta_aberta && sistema_armado)', text: 'C: O computador só entra no "if" se ambos forem 1 (true).' },
          { line: 'tocar_sirene()', text: 'Ação executada se a porta for 1 E o sistema for 1.' }
        ]
      }
    },

    // TEMA 5: A LÂMPADA (ESTADOS)
    {
      id: 9,
      title: 'T5: A Lâmpada do Corredor (Humano)',
      description: 'Um interruptor "tipo toggle" inverte o estado da lâmpada. Se ela está ligada e você aperta, ela desliga. Como o computador pensa nisso?',
      options: [
        'A) Lâmpada = Ligada.',
        'B) Lâmpada = !Lâmpada (Não Lâmpada).',
        'C) Esperar 2 segundos.',
        'D) Ligar sempre.'
      ],
      answer: 'B',
      tips: [
        'Inverter um estado (NOT) transforma Verdade em Falso e vice-versa.',
        'Observação: No código, usamos ! (C) ou not (Python) para dizer "O contrário de".'
      ],
      lesson: {
        concept: 'Negação (NOT): Inverter um valor booleano (Verdade vira Falso).',
        example: 'Se NÃO(Chovendo) -> Sair.',
        steps: ['Pegue o valor atual.', 'Aplique o operador de inversão.', 'Salve o novo valor.'],
        explanation: [
          { line: 'Luz: 1 (Ligada)', text: 'Estado inicial.' },
          { line: 'Luz = !Luz', text: 'Inversão: O ! transforma 1 em 0.' }
        ]
      }
    },
    {
      id: 10,
      title: 'T5: O Operador Especial (Código)',
      description: 'Como inverter o valor de uma variável booleana "ligado" no código? Dicionário: "!" (NÃO) inverte o valor.',
      options: [
        'A) ligado = ligado + 1',
        'B) ligado = !ligado',
        'C) if (ligado == ligado)',
        'D) print(!ligado)'
      ],
      answer: 'B',
      tips: [
        'O símbolo "!" em C e a palavra "not" em Python invertem o valor atual.',
        'Exemplo: Se a luz está ligada (true), !luz torna ela desligada (false).'
      ],
      lesson: {
        concept: 'Operador de Negação: Muda o bit de 0 para 1 ou 1 para 0.',
        example: 'Python: status = not status\nC: status = !status;',
        steps: ['Acesse o valor.', 'Negue-o.', 'Re-atribua.'],
        explanation: [
          { line: 'bool luz = true;', text: 'C++: Começa como Verdadeiro.' },
          { line: 'luz = !luz;', text: 'Após apertar o botão, luz passa a ser Falso.' }
        ]
      }
    },

    // TEMA 6: O BANCO (VALIDAÇÃO)
    {
      id: 11,
      title: 'T6: Saque no Banco (Humano)',
      description: 'Para sacar R$ 200, você precisa ter: 1. Saldo suficiente E 2. A senha correta. O que acontece se o saldo for de R$ 500 mas a senha estiver errada?',
      options: [
        'A) Saque aprovado.',
        'B) Saldo insuficiente.',
        'C) Senha inválida / Saque negado.',
        'D) O banco dá um bônus.'
      ],
      answer: 'C',
      tips: ['Sistemas de segurança usam camadas de validação.'],
      lesson: {
        concept: 'Validação de Múltiplas Etapas: Sequência de testes obrigatórios.',
        example: 'Login: Usuário correto E Senha correta.',
        steps: ['Teste o saldo.', 'Teste a senha.', 'Só aprove se ambos passarem.'],
        explanation: [
          { line: 'Saldo: 500 (OK)', text: 'Primeira barreira vencida.' },
          { line: 'Senha: Errada (X)', text: 'Segunda barreira falhou. Acesso negado.' }
        ]
      }
    },
    {
      id: 12,
      title: 'T6: Validação Bancária (Código)',
      description: 'Qual comando de código valida o saque com segurança (Saldo: 500, Saque: 200)? Dicionário: ">=" (maior ou igual) e "&&" (E).',
      options: [
        'A) if (saldo >= saque && senha == "123")',
        'B) if (saldo == saque || senha == "123")',
        'C) if (saldo < saque && senha == "123")',
        'D) while (senha != "123") { sacar(); }'
      ],
      answer: 'A',
      tips: [
        'O saldo deve ser MAIOR OU IGUAL (>=) ao valor do saque.',
        'Dicionário: "==" testa se é exatamente igual, "=" define um valor.'
      ],
      lesson: {
        concept: 'Comparadores Compostos: Usamos >= para garantir que o saldo cobre o valor.',
        example: 'Python: if s >= v and p == "1":\nC: if(s >= v && p == 1)',
        steps: ['Compare se o saldo atende.', 'Compare se a senha confere.', 'Use && para unir.'],
        explanation: [
          { line: 'if (saldo >= saque)', text: 'Teste 1: 500 >= 200? (Verdadeiro).' },
          { line: '&& (senha == "123")', text: 'Teste 2: A senha bate? (Verdadeiro se digitar 123).' },
          { line: 'Aprovar Saque', text: 'Executado apenas se Ambos forem verdadeiros.' }
        ]
      }
    },

    // TEMA 7: O PIX (FLUXO COMPLETO)
    {
      id: 13,
      title: 'T7: O Pix (Humano)',
      description: 'O fluxo do Pix é: 1. Digitar Chave -> 2. Verificar Destinatário -> 3. Confirmar Valor -> 4. Confirmar Senha. O que acontece se o destinatário for o incorreto?',
      options: [
        'A) O dinheiro vai para outra pessoa.',
        'B) O sistema volta para o passo 1 ou cancela.',
        'C) A senha é pedida direto.',
        'D) O Pix é feito na hora.'
      ],
      answer: 'B',
      tips: ['Sistemas reais interrompem o fluxo se um passo falhar.'],
      lesson: {
        concept: 'Fluxo de Execução: Um caminho com pontos de interrupção.',
        example: 'Comprar online: Carrinho -> Endereço -> Pagamento.',
        steps: ['Siga a ordem.', 'Verifique cada retorno.', 'Conclua.'],
        explanation: [
          { line: 'Erro no Passo 2', text: 'Interrupção detectada.' },
          { line: 'Retornar Erro', text: 'O programa não prossegue para os passos 3 e 4.' }
        ]
      }
    },
    {
      id: 14,
      title: 'T7: O Algoritmo do Pix (Código)',
      description: 'Como o código gerencia o fluxo em cascata do Pix? No código, cada "if" abre um novo par de chaves "{...}".',
      options: [
        'A) Executa tudo de uma vez sem testar.',
        'B) if(chave_ok) { if(dest_ok) { if(saldo_ok) { concluir(); } } }',
        'C) while(pix_errado) { tentar_novamente(); }',
        'D) Nenhuma das anteriores.'
      ],
      answer: 'B',
      tips: [
        'Sistemas reais usam "IFs Alinhados": uma decisão dentro da outra.',
        'Dicionário: "!=" significa "Diferente de".'
      ],
      lesson: {
        concept: 'Condicionais Aninhadas: Uma escada de decisões onde só se sobe o degrau se o de baixo estiver firme.',
        example: 'Python: if a: if b: if c: action()\nC: if(a) { if(b) { action(); } }',
        steps: ['Organize a hierarquia.', 'Verifique a dependência.', 'Mantenha a segurança.'],
        explanation: [
          { line: 'if (destinatario_confirmado)', text: 'C: Só entra no próximo bloco se este for Verdadeiro.' },
          { line: 'if (senha_correta)', text: 'Só chega aqui se o destinatário estava OK.' },
          { line: 'enviar_dinheiro()', text: 'Ação crítica protegida por todos os IFs anteriores.' }
        ]
      }
    }
  ]
};

export const allLogicLists = [logicList1];
