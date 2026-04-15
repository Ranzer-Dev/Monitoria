import type { ExerciseListDef } from './types';
import { exercises as pyEx1, fundamentals as pyFund1 } from './exercises';

export const pythonList1: ExerciseListDef = {
  id: 1,
  title: 'Variáveis e Operações Básicas',
  topic: 'Variáveis, I/O, Operadores Matemáticos',
  icon: '📦',
  fundamentals: pyFund1,
  exercises: pyEx1, // The original 15 exercises from exercises.ts
};

export const pythonList2: ExerciseListDef = {
  id: 2,
  title: 'Estruturas Condicionais',
  topic: 'if, elif, else, operadores lógicos',
  icon: '🔀',
  fundamentals: [
    {
      id: 'if_else',
      icon: '🤔',
      title: 'Tomando decisões com if/else',
      summary: 'Em Python, o "if" (se) verifica se algo é verdadeiro. O "else" (se não) acontece se for falso.',
      example: `idade = 18\n\nif idade >= 18:\n    print("Maior de idade")\nelse:\n    print("Menor de idade")`
    },
    {
      id: 'elif',
      icon: '🧗',
      title: 'Bifurcações maiores (elif)',
      summary: 'O "elif" significa "else if". Ele serve para checar várias condições seguidas antes de cair no else final.',
      example: `nota = 8\nif nota >= 9:\n    print("A")\nelif nota >= 7:\n    print("B")\nelse:\n    print("Reprovado")`
    }
  ],
  exercises: [
    {
      id: 1,
      title: 'Maior de dois',
      description: 'Faça um Programa que peça dois números e imprima o maior deles.',
      tips: ['Use if para comparar os números.', 'a > b verifica se a é maior que b.'],
      lesson: {
        concept: 'Comparar valores é essencial. Usamos "if a > b:" para checar e exibir algo se for verdadeiro.',
        example: `a = int(input("A: "))\nb = int(input("B: "))\nif a > b:\n    print("A é maior")\nelse:\n    print("B é maior")`,
        steps: ['Peça dois números inteiros.', 'Compare usando if a > b.', 'Imprima o maior.']
      }
    },
    {
      id: 2,
      title: 'Positivo ou Negativo',
      description: 'Faça um Programa que peça um valor e mostre na tela se o valor é positivo ou negativo.',
      tips: ['Zero pode ser tratado como neutro ou positivo dependendo da regra, mas foque em x >= 0.'],
      lesson: {
        concept: 'Números positivos são maiores ou iguais a 0. O restante é negativo.',
        example: `x = float(input("X: "))\nif x >= 0:\n    print("Positivo")\nelse:\n    print("Negativo")`,
        steps: ['Leia um número.', 'Verifique se é >= 0.', 'Mostre se é positivo ou negativo.']
      }
    },
    {
      id: 3,
      title: 'Vogal ou Consoante',
      description: 'Verifique se uma letra digitada é vogal ou consoante.',
      tips: ['O operador "in" é ótimo aqui: if letra in "aeiou"'],
      lesson: {
        concept: 'Podemos verificar se algo pertence a um grupo usando "in".',
        example: `letra = "a"\nif letra.lower() in "aeiou":\n    print("Vogal")\nelse:\n    print("Consoante")`,
        steps: ['Peça uma letra.', 'Verifique se ela está em "aeiou".', 'Mostre o resultado.']
      }
    },
    {
      id: 4,
      title: 'Aprovado ou Reprovado',
      description: 'Peça duas notas, calcule a média. >= 7 (Aprovado), < 7 (Reprovado), == 10 (Aprovado com Distinção).',
      tips: ['Cuidado com a ordem do if/elif! Verifique a nota 10 primeiro.'],
      lesson: {
        concept: 'A ordem dos "if"s e "elif"s importa! Se você verificar >= 7 primeiro, o 10 entra aí e nunca chega no Aprovado com Distinção.',
        example: `media = 10\nif media == 10:\n    print("Distinção")\nelif media >= 7:\n    print("Aprovado")\nelse:\n    print("Reprovado")`,
        steps: ['Calcule a média.', 'If media == 10.', 'Elif media >= 7.', 'Else para o resto.']
      }
    },
    {
      id: 5,
      title: 'Decisão de Compra',
      description: 'Peça o preço de três produtos e informe qual produto você deve comprar (sempre pelo mais barato).',
      tips: ['Use variáveis como menor = p1 e depois if p2 < menor.'],
      lesson: {
        concept: 'Para descobrir o menor de três, presuma que o primeiro é o menor e use dois if\'s simples para testar os outros.',
        example: `p1 = 10; p2 = 8; p3 = 12\nmenor = p1\nif p2 < menor:\n    menor = p2\nif p3 < menor:\n    menor = p3\nprint("Compre o de", menor)`,
        steps: ['Receba os 3 preços', 'Ache qual é o menor com if', 'Imprima a recomendação.']
      }
    },
    {
      id: 6,
      title: 'Turno de Estudo',
      description: 'Peça o turno (M-matutino, V-Vespertino, N-Noturno). Imprima "Bom Dia!", "Boa Tarde!" ou "Boa Noite!".',
      tips: ['Use elif para cada letra.'],
      lesson: {
        concept: 'Múltiplas condições exclusivas pedem o uso do elif.',
        example: `turno = input()\nif turno == "M": print("Bom dia")\nelif turno == "V": print("Boa tarde")\nelse: print("Boa noite")`,
        steps: ['Leia a letra.', 'Verifique se é M, V ou N.', 'Mostre a saudação.']
      }
    },
    {
      id: 7,
      title: 'Reajuste Salarial',
      description: 'Tabule reajustes: até 280 (20%), até 700 (15%), até 1500 (10%), acima (5%). Mostre tudo.',
      tips: ['Calcule o percentual e o aumento separadamente primeiro.'],
      lesson: {
        concept: 'Lógica de faixas: utilize elif para garantir que o salário só entre em uma categoria.',
        example: `sal = 1000\nif sal <= 280: p = 20\nelif sal <= 700: p = 15\nelse: p = 10\nprint(f"Novo: {sal * (1 + p/100)}")`,
        steps: ['Leia o salário.', 'Descubra o percentual com IF/ELIF.', 'Calcule o aumento e exiba.']
      }
    }
  ]
};

export const pythonList3: ExerciseListDef = {
  id: 3,
  title: 'Laços de Repetição',
  topic: 'while, for, break',
  icon: '🔁',
  fundamentals: [
    {
      id: 'while',
      icon: '🔄',
      title: 'Repetição usando while (enquanto)',
      summary: 'O while repete um bloco de código enquanto a condição for verdadeira. Ideal para menus e validação.',
      example: `x = 0\nwhile x < 3:\n    print(x)\n    x += 1`
    },
    {
      id: 'for',
      icon: '🚂',
      title: 'For e range',
      summary: 'Use "for" para percorrer sequências. "range(5)" significa ir de 0 até 4 (5 vezes).',
      example: `for i in range(3):\n    print(f"Número {i}")`
    }
  ],
  exercises: [
    {
      id: 1,
      title: 'Validar Nota',
      description: 'Peça uma nota de 0 a 10. Mostre erro se for inválida e continue pedindo até ser válida.',
      tips: ['Use um while nota < 0 or nota > 10:'],
      lesson: {
        concept: 'Validação de dados: o "while" prende o usuário no loop enquanto ele digita algo inválido.',
        example: `nota = -1\nwhile nota < 0 or nota > 10:\n    nota = int(input("Nota: "))\nprint("Ok")`,
        steps: ['Peça a nota.', 'Use while para checar se está fora de 0-10.', 'Peça novamente dentro do loop.']
      }
    },
    {
      id: 2,
      title: 'Validar Senha',
      description: 'Leia um usuário e senha. Não aceite senha igual ao usuário.',
      tips: ['while senha == usuario:'],
      lesson: {
        concept: 'Continuamos pedindo dados até que a regra de negócio (senha != usuario) seja aceita.',
        example: `user = "A"\npassw = "A"\nwhile user == passw:\n    print("Inválido")\n    user = input("U: ")\n    passw = input("S: ")`,
        steps: ['Leia os dois.', 'Use while para verificar.', 'Notifique e leia de novo se forem iguais.']
      }
    },
    {
      id: 3,
      title: 'Soma e Média de 5 números',
      description: 'Leia 5 números e informe a soma e a média usando for.',
      tips: ['Use uma variável soma = 0 antes do laço, e faça soma += numero dentro dele.'],
      lesson: {
        concept: 'Padrão "Acumulador": inicializamos no 0 e vamos acumulando os valores loop por loop.',
        example: `soma = 0\nfor _ in range(5):\n    soma += float(input("Num: "))\nprint("Soma:", soma, "Média:", soma/5)`,
        steps: ['soma = 0', 'for i in range(5)', 'Adicione à soma', 'Calcule media']
      }
    },
    {
      id: 4,
      title: 'Calculadora de Tabuada',
      description: 'Gere a tabuada de qualquer número inteiro entre 1 a 10. (Ex: 5 x 1 = 5, ... 5 x 10 = 50).',
      tips: ['for i in range(1, 11): vai de 1 até 10.'],
      lesson: {
        concept: 'O range(A, B) começa em A e vai até B-1.',
        example: `num = 5\nfor i in range(1, 11):\n    print(f"{num} x {i} = {num*i}")`,
        steps: ['Peça o número.', 'for i in range(1, 11)', 'Imprima num * i']
      }
    },
    {
      id: 5,
      title: 'Menor, Maior e Média',
      description: 'Controle de Temperaturas. Leia um conjunto x até colocar algo irreal, ou resolva lendo 5 temperaturas e pegue o max e min.',
      tips: ['Faça um laço para as 5 temperaturas. Guarde a max(maior, nova).'],
      lesson: {
        concept: 'Rastrear o maior e menor requer variáveis iniciais base.',
        example: `maior = -999\nmenor = 999\nfor _ in range(5):\n    t = float(input())\n    if t > maior: maior = t\n    if t < menor: menor = t`,
        steps: ['Peça 5 coisas.', 'Verifique e assuma o novo maior/menor se for necessário.', 'Apresente os dados.']
      }
    },
    {
      id: 6,
      title: 'Citações de Fibonacci',
      description: 'A série de Fibonacci é 1,1,2,3,5,8... Gere até o n-ésimo termo.',
      tips: ['use a, b = 0, 1 e depois a, b = b, a+b'],
      lesson: {
        concept: 'Sequências dependentes: o próximo termo é sempre a soma dos dois anteriores.',
        example: `a, b = 0, 1\nfor _ in range(5):\n    print(b)\n    a, b = b, a + b`,
        steps: ['n = int(input())', 'inicie a=0, b=1', 'loop de N vezes', 'atualize e print.']
      }
    },
    {
      id: 7,
      title: 'Fatorial',
      description: 'Calcule o fatorial de um número inteiro. Ex: 5! = 5.4.3.2.1 = 120.',
      tips: ['Use um loop for indo de n até 1.'],
      lesson: {
        concept: 'O fatorial é a multiplicação sucessiva. Comece com resultado = 1.',
        example: `n = 5; fat = 1\nfor i in range(1, n+1): fat *= i\nprint(fat)`,
        steps: ['Leia n.', 'fat = 1.', 'Multiplique de 1 a n.', 'Mostre resultado.']
      }
    }
  ]
};

export const pythonList4: ExerciseListDef = {
  id: 4,
  title: 'Listas e Vetores',
  topic: 'Listas, índices, manipulação',
  icon: '🗃️',
  fundamentals: [
    {
      id: 'listas',
      icon: '📚',
      title: 'O que são Listas?',
      summary: 'Listas permitem guardar vários valores no mesmo "lugar". Criamos com [] e acessamos pelo índice (começa no 0).',
      example: `notas = [8, 9, 7]\nprint(notas[0]) # 8\nnotas.append(10) # Adiciona no final`
    }
  ],
  exercises: [
    {
      id: 1,
      title: 'Lendo 5 números',
      description: 'Leia uma lista de 5 números inteiros e mostre-os.',
      tips: ['Você pode começar com lista = [] e usar append(numero) dentro do loop.'],
      lesson: {
        concept: 'Construir uma lista do zero envolve inicializá-la vazia e preenchê-la dinamicamente com "append".',
        example: `l = []\nfor _ in range(5):\n    l.append(int(input()))\nprint(l)`,
        steps: ['Crie l = []', 'Um for de 5 passos', 'append() no final', 'Exiba a lista.']
      }
    },
    {
      id: 2,
      title: 'Ordem Inversa',
      description: 'Leia 10 números reais e mostre-os na ordem inversa.',
      tips: ['Em Python, pode-se inverter uma lista L usando L[::-1] ou o método L.reverse().'],
      lesson: {
        concept: 'Fatiamento de listas é super poderoso em Python. O [::-1] cria um cópia invertida.',
        example: `l = [1.1, 2.2, 3.3]\ninv = l[::-1]\nprint(inv)`,
        steps: ['Leia os 10 floats preenchendo a lista', 'Imprima a lista[::-1].']
      }
    },
    {
      id: 3,
      title: 'Pares e Ímpares',
      description: 'Leia 20 números. Armazene pares na lista PAR e os ímpares na lista IMPAR. Imprima as duas.',
      tips: ['Se num % 2 == 0, ele vai pra lista de pares.'],
      lesson: {
        concept: 'Uma única lista original pode originar várias outras dependendo de condições de filtragem.',
        example: `pares = []\nimpares = []\nnum = 4\nif num % 2 == 0:\n    pares.append(num)\nelse:\n    impares.append(num)`,
        steps: ['crie pares=[] e impares=[]', 'loop de 20 inputs', 'if x%2==0 pra apendar.', 'Exiba as duas']
      }
    },
    {
      id: 4,
      title: 'Soma dos Quadrados',
      description: 'Leia um vetor A com 10 inteiros, calcule e mostre a soma dos quadrados.',
      tips: ['Use um for para varrer a lista (for num in vetorA: soma += num**2)'],
      lesson: {
        concept: 'Use "for num in lista:" para analisar todos os itens diretamente, sem se preocupar com os índices.',
        example: `A = [2, 3, 4]\nsoma = 0\nfor n in A:\n    soma += n ** 2\nprint(soma)`,
        steps: ['Preencha A com 10 inteiros', 'Crie soma=0', 'for n in A, eleve ao quadrado e some.']
      }
    },
    {
      id: 5,
      title: 'Consoantes Lidas',
      description: 'Leia vetor de 10 caracteres e diga quantas consoantes foram lidas.',
      tips: ['if char.lower() not in "aeiou" e char.isalpha(): ele é consoante.'],
      lesson: {
        concept: 'Listas também guardam letras.',
        example: `chars = ["a","b","x"]\ncons = 0\nfor c in chars:\n    if c not in "aeiou":\n        cons +=1\nprint(cons)`,
        steps: ['Leia 10 letras', 'Faça IF not in "aeiou"', 'Incremente o contador de consoantes.']
      }
    },
    {
      id: 6,
      title: 'Média Acima de 7',
      description: 'Leia 4 notas de 10 alunos. Calcule a média de cada e conte quantos ficaram com média >= 7.',
      tips: ['Use uma lista para as médias dos 10 alunos.'],
      lesson: {
        concept: 'Aninhamento de lógica: para cada aluno (loop 1), calculamos notas (loop 2).',
        example: `medias = []\nfor _ in range(10):\n    m = sum([8, 7, 9, 6]) / 4\n    medias.append(m)\nprint(len([m for m in medias if m >= 7]))`,
        steps: ['Loop p/ 10 alunos.', 'Leia 4 notas.', 'Guarde a média.', 'Conte aprovados.']
      }
    }
  ]
};

export const pythonList5: ExerciseListDef = {
  id: 5,
  title: 'Funções',
  topic: 'def, argumentos, retornos',
  icon: '⚙️',
  fundamentals: [
    {
      id: 'def',
      icon: '🛠️',
      title: 'Criando suas Funções',
      summary: 'Funções são blocos de código que têm um nome e podem ser usados várias vezes. Criamos com "def nome():".',
      example: `def saudacao(nome):\n    print(f"Olá {nome}!")\n\nsaudacao("Ana")`
    },
    {
      id: 'return',
      icon: '🎁',
      title: 'Retornando valores',
      summary: 'Para devolver um valor calculado na função, usamos o "return".',
      example: `def dobro(x):\n    return x * 2\n\nres = dobro(5)\nprint(res) # 10`
    }
  ],
  exercises: [
    {
      id: 1,
      title: 'Soma de Três',
      description: 'Faça um programa com uma função que receba três argumentos, e retorne a soma.',
      tips: ['def soma(a, b, c): return a+b+c'],
      lesson: {
        concept: 'Argumentos são as pontes entre quem chama a função e o que ela faz. Se você passa 3, a função exige 3 parâmetros nela.',
        example: `def soma_dois(x, y):\n    return x + y`,
        steps: ['Crie def soma(a, b, c).', 'Retorne a soma.', 'Chame a função testando com 3 números']
      }
    },
    {
      id: 2,
      title: 'Positivo ou Negativo (Função)',
      description: 'A função retorna "P" se argumento for positivo, e "N" se for 0 ou negativo.',
      tips: ['if arg > 0: return "P"'],
      lesson: {
        concept: 'O retorno tira a responsabilidade do IF dentro da função de decidir onde printar, ela só entrega "P" ou "N".',
        example: `def verifica(x):\n    if x > 0: return "P"\n    return "N"`,
        steps: ['Defina a função.', 'Verifique > 0.', 'Chame no main e print.']
      }
    },
    {
      id: 3,
      title: 'Soma e Imposto',
      description: 'Custo inclui imposto. somaImposto(taxa_imposto, custo). Mude o custo adicionando a porcentagem.',
      tips: ['A função deve retornar custo + (custo * taxa) / 100.'],
      lesson: {
        concept: 'Você pode passar taxas e deixar que a função isole aquele comportamento.',
        example: `def aplica(taxa, valor):\n    return valor * (1 + taxa/100)`,
        steps: ['Crie a função.', 'Calcule.', 'Modifique para uso do programa.']
      }
    },
    {
      id: 4,
      title: 'Quantidade de Dígitos',
      description: 'Informe a quantidade de dígitos de um número informado.',
      tips: ['Converta o número para string e pegue o len() dele (len(str(num))).'],
      lesson: {
        concept: 'Coerção de tipos é um hack maravilhoso para números: len() para tamanho não funciona em int, só convertendo para texto.',
        example: `def comp(n):\n    return len(str(n))`,
        steps: ['Crie a def.', 'use str().', 'use len() e retorne.']
      }
    },
    {
      id: 5,
      title: 'Reverso do Número',
      description: 'Reverso do inteiro. ex: 127 -> 721.',
      tips: ['Use o slice de string que vimos nas listas: [::-1].'],
      lesson: {
        concept: 'Novamente, como string o fatiamento inverso resolve tudo em uma linha.',
        example: `def reverso(n):\n    s = str(n)\n    return int(s[::-1])`,
        steps: ['Pega o N.', 'Converte para String e inverte.', 'Transforma em Int de volta.']
      }
    }
  ]
};

export const allPythonLists = [pythonList1, pythonList2, pythonList3, pythonList4, pythonList5];
