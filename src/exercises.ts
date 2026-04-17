export type Lesson = {
  concept: string;
  example: string;
  steps: string[];
};

export type Exercise = {
  id: number;
  title: string;
  description: string;
  tips: string[];
  lesson: Lesson;
};

export type Fundamental = {
  id: string;
  icon: string;
  title: string;
  summary: string;
  example: string;
};

export const fundamentals: Fundamental[] = [
  {
    id: 'print',
    icon: '🖨️',
    title: 'Mostrando coisas na tela',
    summary: 'Em Python usamos print() para exibir qualquer texto ou valor. Tudo o que colocar dentro dos parênteses aparece no terminal.',
    example: `print("Olá, mundo!")
print("Meu nome é Ana")
print(42)`,
  },
  {
    id: 'variaveis',
    icon: '📦',
    title: 'Variáveis',
    summary: 'Variáveis guardam valores na memória do computador. Pense nelas como caixas com um nome. Você pode criar uma caixa, colocar um valor e usá-la depois.',
    example: `nome = "João"
idade = 20
altura = 1.75

print(nome)     # João
print(idade)    # 20`,
  },
  {
    id: 'input',
    icon: '⌨️',
    title: 'Recebendo dados do usuário',
    summary: 'Usamos input() para pedir que o usuário digite algo. O que for digitado fica guardado em uma variável. Atenção: input() sempre retorna texto (string)!',
    example: `nome = input("Digite seu nome: ")
print("Olá,", nome)

# Para números, converta com int() ou float()
idade = int(input("Sua idade: "))
print("Você tem", idade, "anos")`,
  },
  {
    id: 'numeros',
    icon: '🔢',
    title: 'Tipos de números',
    summary: 'Python tem dois tipos de número: int (inteiro, sem vírgula) e float (com vírgula decimal). Use int() para converter texto em inteiro e float() para número com vírgula.',
    example: `# int = número inteiro
nota = int(input("Sua nota: "))

# float = número com vírgula
preco = float(input("Preço: "))

# Você pode fazer contas normalmente
dobro = nota * 2
print(dobro)`,
  },
  {
    id: 'operacoes',
    icon: '➕',
    title: 'Operações matemáticas',
    summary: 'Python faz operações como uma calculadora: + soma, - subtrai, * multiplica, / divide, ** eleva ao quadrado e // divide arredondando para baixo.',
    example: `a = 10
b = 3

print(a + b)   # 13  → soma
print(a - b)   # 7   → subtração
print(a * b)   # 30  → multiplicação
print(a / b)   # 3.33 → divisão
print(a ** 2)  # 100  → potência (a²)
print(a // b)  # 3    → divisão inteira`,
  },
  {
    id: 'fstring',
    icon: '💬',
    title: 'Misturando texto e variáveis',
    summary: 'Para mostrar um texto junto com o valor de uma variável use f-strings: coloque um f antes das aspas e a variável dentro de {}. É muito mais fácil do que concatenar!',
    example: `nome = "Maria"
idade = 22

# Jeito fácil (f-string)
print(f"Olá, {nome}! Você tem {idade} anos.")

# Também funciona com cálculos
x = 5
print(f"O dobro de {x} é {x * 2}")`,
  },
];

export const exercises: Exercise[] = [
  {
    id: 1,
    title: 'Alo mundo',
    description: 'Faça um programa que mostre a mensagem "Alo mundo" na tela.',
    tips: [
      'Use print() para mostrar texto na tela.',
      'O texto deve estar entre aspas dentro do print().',
      'Exemplo: print("Seu texto aqui")',
    ],
    lesson: {
      concept: 'Para mostrar algo na tela em Python, usamos a função print(). Basta escrever print() e colocar o que você quer mostrar dentro dos parênteses. Se for um texto, coloque entre aspas.',
      example: `# Mostrando texto na tela\nprint("Alo mundo")`,
      instructions: 'Escreva exatamente o comando print() com a frase sugerida.',
      expectedOutput: 'Alo mundo',
      steps: [
        'Abra o editor de código abaixo.',
        'Digite: print("Alo mundo")',
        'Clique em "Enviar Missão" para verificar.',
      ],
    },
  },
  {
    id: 2,
    title: 'Número informado',
    description: 'Faça um programa que peça um número e mostre a mensagem: "O número informado foi [número]".',
    tips: [
      'Use input() para pedir o número ao usuário.',
      'Guarde o valor digitado em uma variável.',
      'Use print() ou f-string para mostrar a mensagem.',
    ],
    lesson: {
      concept: 'Para receber um valor digitado pelo usuário, usamos input(). O que o usuário digitar fica guardado em uma variável. Depois usamos print() com uma f-string para mostrar o resultado.',
      example: `numero = input("Digite um número: ")\nprint(f"O número informado foi {numero}")`,
      instructions: 'Capture o valor com input() e use uma f-string para exibir a mensagem formatada.',
      expectedOutput: 'O número informado foi [X]',
      steps: [
        'Crie uma variável e use input() para pedir o número.',
        'Use print() com f-string para montar a mensagem.',
        'A mensagem deve ser: "O número informado foi X"',
      ],
    },
  },
  {
    id: 3,
    title: 'Soma de dois números',
    description: 'Faça um programa que peça dois números e imprima a soma.',
    tips: [
      'Converta os dois valores para int() ou float() antes de somar.',
      'Se não converter, o Python vai juntar os textos em vez de somar!',
      'Ex: "3" + "5" = "35" (errado). int("3") + int("5") = 8 (certo).',
    ],
    lesson: {
      concept: 'Quando usamos input(), o Python sempre guarda o valor como texto (string). Para fazer uma soma de verdade precisamos converter para número com int() (inteiro) ou float() (decimal). Só depois podemos somar normalmente.',
      example: `# Recebendo e convertendo os números
a = int(input("Digite o primeiro número: "))
b = int(input("Digite o segundo número: "))

# Calculando e mostrando a soma
soma = a + b
print(f"A soma é {soma}")`,
      steps: [
        'Peça o primeiro número com input() e converta com int().',
        'Peça o segundo número da mesma forma.',
        'Some as duas variáveis e mostre o resultado.',
      ],
    },
  },
  {
    id: 4,
    title: 'Média bimestral',
    description: 'Faça um programa que peça as 4 notas bimestrais e mostre a média.',
    tips: [
      'Use float() para aceitar notas com vírgula (ex: 7.5).',
      'Média = (nota1 + nota2 + nota3 + nota4) / 4',
      'Mostre a média com round(media, 2) para 2 casas decimais.',
    ],
    lesson: {
      concept: 'Notas geralmente têm casas decimais (7.5, 8.25). Por isso usamos float() em vez de int(). A média é a soma de todos os valores dividida pela quantidade. Podemos arredondar o resultado com round().',
      example: `# Pedindo as 4 notas (com decimal)
n1 = float(input("1ª nota: "))
n2 = float(input("2ª nota: "))
n3 = float(input("3ª nota: "))
n4 = float(input("4ª nota: "))

# Calculando a média
media = (n1 + n2 + n3 + n4) / 4

# Mostrando com 2 casas decimais
print(f"Sua média é {round(media, 2)}")`,
      steps: [
        'Peça cada uma das 4 notas usando input() e float().',
        'Some todas as notas e divida por 4.',
        'Mostre o resultado arredondado com round(media, 2).',
      ],
    },
  },
  {
    id: 5,
    title: 'Metros para centímetros',
    description: 'Faça um programa que converta metros para centímetros.',
    tips: [
      '1 metro = 100 centímetros.',
      'Basta multiplicar a entrada por 100.',
    ],
    lesson: {
      concept: 'Conversão de unidades é um dos usos mais comuns de variáveis em programação. O raciocínio é sempre o mesmo: pegar o valor de entrada, aplicar a fórmula de conversão e mostrar o resultado.',
      example: `# Pedindo o valor em metros
metros = float(input("Digite o valor em metros: "))

# Convertendo
centimetros = metros * 100

# Mostrando o resultado
print(f"{metros} metros = {centimetros} centímetros")`,
      steps: [
        'Peça o valor em metros com input() e float().',
        'Multiplique por 100 para obter centímetros.',
        'Mostre o resultado com uma mensagem clara.',
      ],
    },
  },
  {
    id: 6,
    title: 'Área do círculo',
    description: 'Faça um programa que peça o raio de um círculo, calcule e mostre sua área.',
    tips: [
      'Use import math no começo do código para acessar math.pi.',
      'Fórmula: Área = π × raio²',
      'Em Python: area = math.pi * raio ** 2',
    ],
    lesson: {
      concept: 'Python tem uma biblioteca chamada math com constantes e funções matemáticas prontas. Para usar o valor de π (pi) precisamos importar essa biblioteca com "import math" e acessar math.pi. O operador ** eleva um número a uma potência.',
      example: `import math

# Pedindo o raio
raio = float(input("Digite o raio do círculo: "))

# Calculando a área: π × r²
area = math.pi * raio ** 2

# Mostrando o resultado
print(f"A área do círculo é {round(area, 2)}")`,
      steps: [
        'Adicione "import math" na primeira linha.',
        'Peça o raio com input() e float().',
        'Calcule: area = math.pi * raio ** 2',
        'Mostre o resultado arredondado.',
      ],
    },
  },
  {
    id: 7,
    title: 'Área e dobro do quadrado',
    description: 'Faça um programa que calcule a área de um quadrado e mostre o dobro dessa área.',
    tips: [
      'Área do quadrado = lado × lado (ou lado²).',
      'Dobro da área = area * 2.',
    ],
    lesson: {
      concept: 'A área de um quadrado é calculada multiplicando o lado por ele mesmo (lado²). Depois de calcular a área, basta multiplicar por 2 para obter o dobro. Podemos guardar cada resultado em uma variável diferente.',
      example: `# Pedindo o lado do quadrado
lado = float(input("Lado do quadrado: "))

# Calculando a área
area = lado ** 2  # mesmo que lado * lado

# Calculando o dobro
dobro = area * 2

# Mostrando os resultados
print(f"Área: {area}")
print(f"Dobro da área: {dobro}")`,
      steps: [
        'Peça o lado do quadrado com input() e float().',
        'Calcule a área com lado ** 2.',
        'Calcule o dobro multiplicando a área por 2.',
        'Mostre os dois valores.',
      ],
    },
  },
  {
    id: 8,
    title: 'Salário mensal',
    description: 'Faça um programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. Calcule e mostre o salário total.',
    tips: [
      'Salário = valor_por_hora × horas_trabalhadas.',
      'Use float() para aceitar valores com centavos (ex: 25.50).',
    ],
    lesson: {
      concept: 'Este exercício mostra como programas resolvem problemas do dia a dia. O salário é calculado multiplicando o valor da hora pela quantidade de horas. Simples assim — o computador faz a conta por você!',
      example: `# Recebendo os dados
valor_hora = float(input("Quanto você ganha por hora? R$ "))
horas_mes = float(input("Quantas horas trabalhou no mês? "))

# Calculando o salário
salario = valor_hora * horas_mes

# Mostrando o resultado
print(f"Seu salário do mês é R$ {salario:.2f}")`,
      steps: [
        'Peça o valor por hora com float().',
        'Peça o número de horas trabalhadas com float().',
        'Multiplique os dois para obter o salário.',
        'Mostre o resultado. Use :.2f na f-string para mostrar 2 casas decimais.',
      ],
    },
  },
  {
    id: 9,
    title: 'Fahrenheit para Celsius',
    description: 'Faça um programa que peça a temperatura em Fahrenheit e mostre em Celsius.',
    tips: [
      'Fórmula: C = (F - 32) × 5 / 9',
      'Lembre de converter a entrada para float().',
    ],
    lesson: {
      concept: 'Converter temperaturas é um exemplo clássico de fórmula matemática em código. A fórmula C = (F - 32) × 5/9 transforma Fahrenheit em Celsius. O código precisa aplicar essa fórmula exatamente como na matemática.',
      example: `# Recebendo a temperatura em Fahrenheit
fahrenheit = float(input("Temperatura em Fahrenheit: "))

# Aplicando a fórmula de conversão
celsius = (fahrenheit - 32) * 5 / 9

# Mostrando o resultado
print(f"{fahrenheit}°F = {round(celsius, 1)}°C")`,
      steps: [
        'Peça a temperatura em Fahrenheit com float().',
        'Aplique a fórmula: celsius = (fahrenheit - 32) * 5 / 9',
        'Mostre o resultado com 1 casa decimal.',
      ],
    },
  },
  {
    id: 10,
    title: 'Celsius para Fahrenheit',
    description: 'Faça um programa que peça a temperatura em Celsius e mostre em Fahrenheit.',
    tips: [
      'Fórmula inversa: F = (C × 9/5) + 32',
    ],
    lesson: {
      concept: 'Agora fazemos o caminho inverso: de Celsius para Fahrenheit. A fórmula muda, mas a lógica do código é a mesma. Isso mostra como um pequeno ajuste na fórmula cria um programa completamente diferente.',
      example: `# Recebendo a temperatura em Celsius
celsius = float(input("Temperatura em Celsius: "))

# Aplicando a fórmula inversa
fahrenheit = (celsius * 9 / 5) + 32

# Mostrando o resultado
print(f"{celsius}°C = {round(fahrenheit, 1)}°F")`,
      steps: [
        'Peça a temperatura em Celsius com float().',
        'Aplique a fórmula: fahrenheit = (celsius * 9 / 5) + 32',
        'Mostre o resultado.',
      ],
    },
  },
  {
    id: 11,
    title: 'Operações com inteiros e real',
    description: 'Peça 2 números inteiros e um número real. Calcule: o produto do dobro do primeiro com metade do segundo, a soma do triplo do primeiro com o terceiro, e o terceiro elevado ao cubo.',
    tips: [
      'Dobro = número × 2. Metade = número / 2.',
      'Cubo = número ** 3 (mesmo que número × número × número).',
      'Guarde cada resultado em uma variável antes de mostrar.',
    ],
    lesson: {
      concept: 'Este exercício combina vários conceitos: dois tipos de número (int e float), e várias operações na mesma linha. Guarde os resultados intermediários em variáveis com nomes claros para não se perder.',
      example: `# Recebendo os três números
n1 = int(input("Primeiro número inteiro: "))
n2 = int(input("Segundo número inteiro: "))
n3 = float(input("Número real: "))

# Calculando os resultados
resultado1 = (n1 * 2) * (n2 / 2)
resultado2 = (n1 * 3) + n3
resultado3 = n3 ** 3

# Mostrando
print(f"Dobro do 1º × metade do 2º: {resultado1}")
print(f"Triplo do 1º + 3º: {resultado2}")
print(f"3º elevado ao cubo: {resultado3}")`,
      steps: [
        'Peça os 2 inteiros com int() e o real com float().',
        'Calcule: (n1*2) * (n2/2)',
        'Calcule: (n1*3) + n3',
        'Calcule: n3 ** 3',
        'Mostre os três resultados.',
      ],
    },
  },
  {
    id: 12,
    title: 'Peso ideal',
    description: 'Dado a altura de uma pessoa, calcule o peso ideal usando a fórmula: (72.7 × altura) - 58',
    tips: [
      'A fórmula já está dada: (72.7 * altura) - 58',
      'Use float() para a altura.',
      'Mostre o resultado com 2 casas decimais.',
    ],
    lesson: {
      concept: 'Muitos programas usam fórmulas específicas de outras áreas (medicina, física, finanças). O segredo é traduzir a fórmula matemática para código Python linha por linha. A fórmula (72.7 × h) - 58 vira (72.7 * altura) - 58 em Python.',
      example: `# Recebendo a altura
altura = float(input("Digite sua altura em metros (ex: 1.70): "))

# Aplicando a fórmula do peso ideal
peso_ideal = (72.7 * altura) - 58

# Mostrando o resultado
print(f"Seu peso ideal é {round(peso_ideal, 2)} kg")`,
      steps: [
        'Peça a altura em metros com float() (ex: 1.70).',
        'Aplique a fórmula: peso = (72.7 * altura) - 58',
        'Mostre o resultado arredondado para 2 casas.',
      ],
    },
  },
  {
    id: 13,
    title: 'Salário com descontos',
    description: 'Peça o valor por hora e horas trabalhadas no mês. Calcule o salário bruto e os descontos: 11% IR, 8% INSS e 5% sindicato. Mostre o salário líquido.',
    tips: [
      'Salário Bruto = valor_hora × horas_mes',
      'Desconto IR = bruto × 0.11  (11% = 0.11)',
      'Salário Líquido = Bruto - IR - INSS - Sindicato',
    ],
    lesson: {
      concept: 'Percentuais em programação são representados como decimais: 11% = 0.11, 8% = 0.08, 5% = 0.05. Para calcular um desconto de 11% basta multiplicar o valor por 0.11. O salário líquido é o bruto menos todos os descontos.',
      example: `# Recebendo os dados
valor_hora = float(input("Valor por hora: R$ "))
horas_mes = float(input("Horas trabalhadas: "))

# Calculando salário bruto
bruto = valor_hora * horas_mes

# Calculando descontos
ir = bruto * 0.11       # 11% IR
inss = bruto * 0.08     # 8% INSS
sind = bruto * 0.05     # 5% sindicato

# Calculando líquido
liquido = bruto - ir - inss - sind

# Mostrando resultados
print(f"Salário Bruto:  R$ {bruto:.2f}")
print(f"Desconto IR:    R$ {ir:.2f}")
print(f"Desconto INSS:  R$ {inss:.2f}")
print(f"Desc. Sindicato: R$ {sind:.2f}")
print(f"Salário Líquido: R$ {liquido:.2f}")`,
      steps: [
        'Calcule o salário bruto (valor_hora × horas_mes).',
        'Calcule cada desconto multiplicando o bruto pelo percentual decimal.',
        'Some os descontos e subtraia do bruto para obter o líquido.',
        'Mostre todos os valores.',
      ],
    },
  },
  {
    id: 14,
    title: 'Latas de tinta',
    description: 'Peça a área em m² a ser pintada. A tinta cobre 3m² por litro; latas têm 18 litros e custam R$ 80,00. Calcule quantas latas são necessárias e o custo total.',
    tips: [
      'Litros necessários = área / 3',
      'Latas = math.ceil(litros / 18)  → arredonda para CIMA!',
      'Custo = latas × 80',
    ],
    lesson: {
      concept: 'math.ceil() arredonda um número para o inteiro mais próximo ACIMA. Isso é necessário porque se você precisar de 1.2 latas, terá que comprar 2. Não existe meia lata! Esse tipo de lógica aparece muito em programas do mundo real.',
      example: `import math

# Recebendo a área
area = float(input("Área a pintar (m²): "))

# Calculando litros necessários
litros = area / 3

# Calculando latas (arredonda para cima)
latas = math.ceil(litros / 18)

# Calculando custo
custo = latas * 80

# Mostrando resultado
print(f"Litros necessários: {litros:.1f}L")
print(f"Latas necessárias: {latas}")
print(f"Custo total: R$ {custo:.2f}")`,
      steps: [
        'Importe math no início: import math',
        'Peça a área com float().',
        'Calcule litros: area / 3',
        'Calcule latas com math.ceil(litros / 18).',
        'Multiplique por 80 para o custo.',
      ],
    },
  },
  {
    id: 15,
    title: 'Tempo de download',
    description: 'Peça o tamanho de um arquivo (em MB) e a velocidade da conexão (em Mbps). Calcule e mostre o tempo aproximado de download em minutos.',
    tips: [
      '1 MB = 8 megabits. Então converta: megabits = MB × 8',
      'Tempo (segundos) = megabits / velocidade_Mbps',
      'Tempo (minutos) = segundos / 60',
    ],
    lesson: {
      concept: 'MB (megabytes) e Mbps (megabits por segundo) são unidades diferentes! 1 byte = 8 bits. Por isso, para comparar um arquivo em MB com uma velocidade em Mbps, primeiro convertemos o arquivo para megabits multiplicando por 8. Depois dividimos pela velocidade para saber o tempo.',
      example: `# Recebendo os dados
tamanho_mb = float(input("Tamanho do arquivo (MB): "))
velocidade_mbps = float(input("Velocidade da conexão (Mbps): "))

# Convertendo MB para megabits (1 byte = 8 bits)
megabits = tamanho_mb * 8

# Tempo em segundos
segundos = megabits / velocidade_mbps

# Convertendo para minutos
minutos = segundos / 60

# Mostrando o resultado
print(f"Tempo de download: {round(minutos, 2)} minutos")`,
      steps: [
        'Peça tamanho em MB e velocidade em Mbps com float().',
        'Converta MB para megabits: mb × 8',
        'Calcule o tempo em segundos: megabits / velocidade',
        'Converta para minutos: segundos / 60',
        'Mostre o resultado arredondado.',
      ],
    },
  },
];
