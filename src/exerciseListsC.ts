import type { ExerciseListDef } from './types';

// LISTA 1: Variáveis e Operações Básicas
export const cList1: ExerciseListDef = {
  id: 1,
  title: 'Variáveis e Operações Básicas',
  topic: 'stdio, printf, scanf, Variáveis',
  icon: '📦',
  fundamentals: [
    {
      id: 'print_c',
      icon: '🖨️',
      title: 'Exibindo dados na tela (printf)',
      summary: 'Em C usamos printf() para exibir texto. Para mostrar variáveis, usamos "máscaras": %d para inteiros e %f para decimais.',
      example: `printf("Olá Mundo\\n");\nint x = 10;\nprintf("Valor: %d", x);`
    },
    {
      id: 'input_c',
      icon: '⌨️',
      title: 'Lendo dados (scanf)',
      summary: 'O scanf() lê o que o usuário digita. Importante: use o & antes do nome da variável (ex: &idade).',
      example: `int idade;\nscanf("%d", &idade);`
    }
  ],
  exercises: [
    {
      id: 1,
      title: 'Alo mundo',
      description: 'Faça um programa que mostre a mensagem "Alo mundo" na tela.',
      tips: ['Use printf("Alo mundo\\n");'],
      lesson: {
        concept: 'Todo programa em C precisa do #include <stdio.h> e da função main.',
        example: `#include <stdio.h>\nint main() {\n    printf("Alo mundo\\n");\n    return 0;\n}`,
        steps: ['Inclua stdio.h', 'Use printf', 'Retorne 0']
      }
    },
    {
      id: 2,
      title: 'Número informado',
      description: 'Peça um número e mostre a mensagem: "O número informado foi [número]".',
      tips: ['Use scanf("%d", &num);'],
      lesson: {
        concept: 'O %d é o marcador para números inteiros decimais.',
        example: `int n;\nscanf("%d", &n);\nprintf("O numero foi %d", n);`,
        steps: ['Declare int n', 'Leia com scanf', 'Printe com %d']
      }
    },
    {
      id: 3,
      title: 'Soma de dois números',
      description: 'Peça dois números e imprima a soma.',
      tips: ['soma = a + b;'],
      lesson: {
        concept: 'Operações matemáticas em C são diretas, mas as variáveis devem ser do mesmo tipo.',
        example: `int a, b, s;\nscanf("%d %d", &a, &b);\ns = a + b;\nprintf("%d", s);`,
        steps: ['Leia os dois números', 'Some', 'Mostre o resultado']
      }
    },
    {
      id: 4,
      title: 'Média bimestral',
      description: 'Peça as 4 notas bimestrais e mostre a média.',
      tips: ['Use float para notas.', 'media = (n1+n2+n3+n4)/4.0;'],
      lesson: {
        concept: 'Para números reais, use float e o marcador %f.',
        example: `float n1, n2, n3, n4, m;\nscanf("%f %f %f %f", &n1, &n2, &n3, &n4);\nm = (n1+n2+n3+n4)/4.0;\nprintf("%.2f", m);`,
        steps: ['Declare floats', 'Leia 4 notas', 'Calcule a média']
      }
    },
    {
      id: 5,
      title: 'Metros para centímetros',
      description: 'Converta metros para centímetros.',
      tips: ['1 metro = 100 centímetros.'],
      lesson: {
        concept: 'Simples multiplicação: metros * 100.',
        example: `float m, c;\nscanf("%f", &m);\nc = m * 100;\nprintf("%.0f cm", c);`,
        steps: ['Leia metros', 'Multiplique por 100', 'Mostre o resultado']
      }
    },
    {
      id: 6,
      title: 'Área do círculo',
      description: 'Peça o raio, calcule e mostre sua área (Use 3.14).',
      tips: ['area = 3.14 * raio * raio;'],
      lesson: {
        concept: 'A área utiliza o raio ao quadrado.',
        example: `float r, a;\nscanf("%f", &r);\na = 3.14 * r * r;\nprintf("Area: %f", a);`,
        steps: ['Leia o raio', 'Aplique a fórmula', 'Mostre a área']
      }
    },
    {
      id: 7,
      title: 'Área e dobro do quadrado',
      description: 'Calcule a área de um quadrado e mostre o dobro dessa área.',
      tips: ['area = lado * lado;'],
      lesson: {
        concept: 'Área é lado ao quadrado, o dobro é apenas multiplicar por 2.',
        example: `float l, a;\nscanf("%f", &l);\na = l * l;\nprintf("Dobro: %f", a * 2);`,
        steps: ['Leia o lado', 'Calcule área', 'Dobre e printe']
      }
    },
    {
      id: 8,
      title: 'Salário mensal',
      description: 'Pergunte ganho por hora e horas trabalhadas. Calcule o total.',
      tips: ['salario = valor_hora * horas;'],
      lesson: {
        concept: 'Multiplicação de valores monetários e tempo.',
        example: `float v, h;\nscanf("%f %f", &v, &h);\nprintf("Total: %.2f", v * h);`,
        steps: ['Leia valor e horas', 'Multiplique', 'Printe saldo']
      }
    },
    {
      id: 9,
      title: 'Fahrenheit para Celsius',
      description: 'Peça Fahrenheit e mostre em Celsius.',
      tips: ['C = (F - 32) * 5 / 9;'],
      lesson: {
        concept: 'Use 5.0 / 9.0 para não perder a precisão decimal no C!',
        example: `float f, c;\nscanf("%f", &f);\nc = (f - 32) * (5.0/9.0);\nprintf("Celsius: %.2f", c);`,
        steps: ['Leia F', 'Aplique a fórmula', 'Mostre C']
      }
    },
    {
      id: 10,
      title: 'Celsius para Fahrenheit',
      description: 'Peça Celsius e mostre em Fahrenheit.',
      tips: ['F = (C * 9 / 5) + 32;'],
      lesson: {
        concept: 'Inverso da anterior.',
        example: `float c, f;\nscanf("%f", &c);\nf = (c * 9.0/5.0) + 32;\nprintf("F: %.2f", f);`,
        steps: ['Leia C', 'Converta', 'Printe F']
      }
    },
    {
      id: 11,
      title: 'Operações com inteiros e real',
      description: 'Leia 2 int e 1 float. Calcule o produto do dobro do 1º com metade do 2º.',
      tips: ['res = (n1 * 2) * (n2 / 2.0);'],
      lesson: {
        concept: 'Misturar tipos exige atenção aos decimais.',
        example: `int a, b; float c;\nscanf("%d %d %f", &a, &b, &c);\nprintf("%f", (a*2) * (b/2.0));`,
        steps: ['Leia os 3', 'Faça os cálculos', 'Printe']
      }
    },
    {
      id: 12,
      title: 'Peso ideal',
      description: 'Dada a altura, calcule peso ideal: (72.7 * h) - 58.',
      tips: ['Use float para altura.'],
      lesson: {
        concept: 'Cálculos biométricos simples.',
        example: `float h, p;\nscanf("%f", &h);\np = (72.7 * h) - 58;\nprintf("Peso: %f", p);`,
        steps: ['Leia h', 'Calcule p', 'Printe']
      }
    },
    {
      id: 13,
      title: 'Salário com descontos',
      description: 'Calcule Bruto, IR (11%), INSS (8%), Sindicato (5%) e Líquido.',
      tips: ['ir = bruto * 0.11;'],
      lesson: {
        concept: 'Vários cálculos sequenciais e subtrações.',
        example: `float v, h, b, i, r, s, l;\nscanf("%f %f", &v, &h);\nb = v * h; i = b*0.11; r = b*0.08; s = b*0.05;\nl = b - i - r - s;\nprintf("Liquido: %.2f", l);`,
        steps: ['Calcule bruto', 'Calcule descontos', 'Printe líquido']
      }
    },
    {
      id: 14,
      title: 'Latas de tinta',
      description: 'Área em m². 1L cobre 3m². Lata tem 18L e custa 80 reais.',
      tips: ['Use litros = area/3.0 e depois arredonde.'],
      lesson: {
        concept: 'Logística básica de consumo.',
        example: `float a, l; int latas;\nscanf("%f", &a);\nl = a / 3.0;\nlatas = (int)(l / 18) + ( (int)l % 18 == 0 ? 0 : 1 );\nprintf("Latas: %d, Preco: %d", latas, latas * 80);`,
        steps: ['Calcule litros', 'Calcule latas', 'Printe custo']
      }
    },
    {
      id: 15,
      title: 'Tempo de download',
      description: 'Peça MB do arquivo e Mbps da net. Calcule minutos.',
      tips: ['Tempo seg = (MB * 8) / Mbps;'],
      lesson: {
        concept: 'Conversão de Bytes para bits e tempo.',
        example: `float mb, s, seg, min;\nscanf("%f %f", &mb, &s);\nseg = (mb * 8) / s;\nmin = seg / 60;\nprintf("Minutos: %.2f", min);`,
        steps: ['Converta MB p/ bits', 'Calcule tempo', 'Converta p/ min']
      }
    }
  ]
};

// LISTA 2: Estruturas Condicionais
export const cList2: ExerciseListDef = {
  id: 2,
  title: 'Estruturas Condicionais',
  topic: 'if, else if, else',
  icon: '🔀',
  fundamentals: [
    {
      id: 'if_else_c',
      icon: '🤔',
      title: 'Decisões com if/else',
      summary: 'Diferente de Python, C usa () para condições e {} para blocos. Não tem "elif", usamos "else if".',
      example: `if (x > 0) {\n    printf("Positivo");\n} else if (x < 0) {\n    printf("Negativo");\n} else {\n    printf("Zero");\n}`
    }
  ],
  exercises: [
    {
      id: 1,
      title: 'Maior de dois',
      description: 'Peça dois números inteiros e imprima o maior deles.',
      tips: ['Use if (a > b)'],
      lesson: {
        concept: 'Comparação básica binária.',
        example: `int a, b;\nscanf("%d %d", &a, &b);\nif (a > b) printf("%d", a);\nelse printf("%d", b);`,
        steps: ['Leia a, b', 'Compare com if', 'Printe maior']
      }
    },
    {
      id: 2,
      title: 'Positivo ou Negativo',
      description: 'Peça um valor e mostre se é positivo ou negativo.',
      tips: ['x >= 0'],
      lesson: {
        concept: 'Avaliação de sinal numérico.',
        example: `int x;\nscanf("%d", &x);\nif (x >= 0) printf("Positivo");\nelse printf("Negativo");`,
        steps: ['Leia x', 'Compare', 'Printe resultado']
      }
    },
    {
      id: 3,
      title: 'Vogal ou Consoante',
      description: 'Verifique se uma letra digitada é vogal ou consoante.',
      tips: ['Use a || b para "ou".'],
      lesson: {
        concept: 'Comparação de caracteres exige aspas simples.',
        example: `char c;\nscanf(" %c", &c);\nif(c=='a'||c=='e'||c=='i'||c=='o'||c=='u') printf("Vogal");\nelse printf("Consoante");`,
        steps: ['Leia char', 'Use if com ||', 'Printe categoria']
      }
    },
    {
      id: 4,
      title: 'Aprovado ou Reprovado',
      description: 'Peça duas notas, calcule média. >= 7 Aprovado, < 7 Reprovado, == 10 Distinção.',
      tips: ['A ordem do else if importa!'],
      lesson: {
        concept: 'Faixas de valores exclusivas.',
        example: `float n1, n2, m;\nscanf("%f %f", &n1, &n2);\nm = (n1+n2)/2.0;\nif(m==10) printf("Distincao");\nelse if(m>=7) printf("Aprovado");\nelse printf("Reprovado");`,
        steps: ['Calcule média', 'Check 10 primeiro', 'Check 7 depois']
      }
    },
    {
      id: 5,
      title: 'Decisão de Compra',
      description: 'Peça preço de 3 produtos e diga qual o mais barato.',
      tips: ['Assuma o primeiro como menor.'],
      lesson: {
        concept: 'Busca de mínimo entre 3 valores.',
        example: `float p1, p2, p3, min;\nscanf("%f %f %f", &p1, &p2, &p3);\nmin = p1;\nif(p2 < min) min = p2;\nif(p3 < min) min = p3;\nprintf("Menor: %f", min);`,
        steps: ['Leia os 3', 'Encontre o menor', 'Printe']
      }
    },
    {
      id: 6,
      title: 'Turno de Estudo',
      description: 'Peça turno (M, V, N) e printe Bom dia, Boa tarde ou Boa noite.',
      tips: ['scanf(" %c", &t);'],
      lesson: {
        concept: 'Mapeamento de caracteres para strings.',
        example: `char t;\nscanf(" %c", &t);\nif(t=='M') printf("Bom dia");\nelse if(t=='V') printf("Boa tarde");\nelse printf("Boa noite");`,
        steps: ['Leia o turno', 'Use else if', 'Saudação']
      }
    },
    {
      id: 7,
      title: 'Reajuste Salarial',
      description: 'Faça o reajuste salarial baseado em faixas.',
      tips: ['Calcule percentual e aumento.'],
      lesson: {
        concept: 'Cálculos condicionais complexos.',
        example: `float s, n; float p;\nscanf("%f", &s);\nif(s<=280) p=0.2; else if(s<=700) p=0.15; else p=0.1;\nn = s * (1+p);\nprintf("Novo: %.2f", n);`,
        steps: ['Leia salário', 'Defina taxa', 'Printe novo']
      }
    }
  ]
};

// LISTA 3: Laços de Repetição
export const cList3: ExerciseListDef = {
  id: 3,
  title: 'Laços de Repetição',
  topic: 'while, for, break',
  icon: '🔁',
  fundamentals: [
    {
      id: 'while_c',
      icon: '🔄',
      title: 'O laço while',
      summary: 'Repete enquanto a condição for verdadeira. Útil para validação.',
      example: `int x = 0;\nwhile(x < 5) {\n    printf("%d", x);\n    x++;\n}`
    },
    {
      id: 'for_c',
      icon: '🚂',
      title: 'O laço for',
      summary: 'Cuidado: C não tem range! O for tem 3 partes: inicialização; condição; incremento.',
      example: `for(int i=0; i<10; i++) {\n    printf("%d", i);\n}`
    }
  ],
  exercises: [
    {
      id: 1,
      title: 'Validar Nota',
      description: 'Peça nota de 0 a 10 até ser válida.',
      tips: ['while (nota < 0 || nota > 10)'],
      lesson: {
        concept: 'Loops de validação garantem integridade dos dados.',
        example: `int n = -1;\nwhile(n < 0 || n > 10) {\n    scanf("%d", &n);\n}`,
        steps: ['Declare n = -1', 'While inválido', 'Leia novamente']
      }
    },
    {
      id: 2,
      title: 'Validar Senha',
      description: 'Não aceite senha igual ao usuário.',
      tips: ['Use string.h e strcmp(s1, s2) == 0'],
      lesson: {
        concept: 'Em C, strings são complexas! strcmp compara se são iguais.',
        example: `#include <string.h>\nchar u[20], s[20];\ndo {\n  scanf("%s %s", u, s);\n} while(strcmp(u, s) == 0);`,
        steps: ['Use strcmp()', 'Loop de leitura', 'Check igualdade']
      }
    },
    {
      id: 3,
      title: 'Soma e Média de 5 números',
      description: 'Leia 5 números e informe soma e média.',
      tips: ['Use um acumulador: soma += n;'],
      lesson: {
        concept: 'Acumuladores devem iniciar com zero.',
        example: `int s=0, n;\nfor(int i=0; i<5; i++) {\n  scanf("%d", &n);\n  s += n;\n}\nprintf("Soma: %d", s);`,
        steps: ['soma = 0', 'For (5 vezes)', 'Some e printe']
      }
    },
    {
      id: 4,
      title: 'Calculadora de Tabuada',
      description: 'Gerar tabuada de 1 a 10.',
      tips: ['for (int i=1; i<=10; i++)'],
      lesson: {
        concept: 'Multiplicação iterativa.',
        example: `int n;\nscanf("%d", &n);\nfor(int i=1; i<=10; i++) printf("%d x %d = %d\\n", n, i, n*i);`,
        steps: ['Leia n', 'For de 1 a 10', 'Printe linha']
      }
    },
    {
      id: 5,
      title: 'Menor, Maior e Média',
      description: 'Leia 5 temperaturas e pegue o max e min.',
      tips: ['Use ifs dentro do loop.'],
      lesson: {
        concept: 'Rastrear extremos durante a leitura.',
        example: `int t, max=-999, min=999;\nfor(int i=0; i<5; i++){\n  scanf("%d", &t);\n  if(t > max) max = t;\n  if(t < min) min = t;\n}`,
        steps: ['Inicie max/min', 'Leia no loop', 'Update extremos']
      }
    },
    {
      id: 6,
      title: 'Citações de Fibonacci',
      description: 'Gere os N primeiros termos.',
      tips: ['a=0, b=1; b = a+b;'],
      lesson: {
        concept: 'Somas de termos anteriores.',
        example: `int n, a=0, b=1, aux;\nscanf("%d", &n);\nfor(int i=0; i<n; i++) {\n  printf("%d ", b);\n  aux = a+b; a=b; b=aux;\n}`,
        steps: ['Declare a=0, b=1', 'Calcule próximo', 'Swap de valores']
      }
    },
    {
      id: 7,
      title: 'Fatorial',
      description: 'Calcule o fatorial de N.',
      tips: ['fatorial *= i;'],
      lesson: {
        concept: 'Produtório acumulado.',
        example: `int n, f=1;\nscanf("%d", &n);\nfor(int i=1; i<=n; i++) f *= i;\nprintf("%d", f);`,
        steps: ['f = 1', 'Loop de 1 a n', 'Multiplique']
      }
    }
  ]
};

// LISTA 4: Vetores e Ponteiros
export const cList4: ExerciseListDef = {
  id: 4,
  title: 'Vetores e Ponteiros',
  topic: 'Arrays estáticos, Ponteiros',
  icon: '🗃️',
  fundamentals: [
    {
      id: 'vetor_c',
      icon: '📚',
      title: 'Vetores em C',
      summary: 'Vetores em C têm tamanho fixo. Declaramos com int v[tamanho].',
      example: `int v[5] = {1, 2, 3};\nprintf("%d", v[0]);`
    }
  ],
  exercises: [
    {
      id: 1,
      title: 'Lendo 5 números',
      description: 'Leia um vetor de 5 números e mostre-os.',
      tips: ['for (i=0; i<5; i++)'],
      lesson: {
        concept: 'Preenchimento e exibição sequencial.',
        example: `int v[5];\nfor(int i=0; i<5; i++) scanf("%d", &v[i]);\nfor(int i=0; i<5; i++) printf("%d ", v[i]);`,
        steps: ['Declare int v[5]', 'Use loop p/ ler', 'Use loop p/ print']
      }
    },
    {
      id: 2,
      title: 'Inverter Array', // Equivalente a Ordem Inversa no Python
      description: 'Leia 10 reais e mostre na ordem inversa.',
      tips: ['Leia no i=0 e printe no i=9.'],
      lesson: {
        concept: 'Iteração reversa usando índices.',
        example: `float v[10];\nfor(int i=0; i<10; i++) scanf("%f", &v[i]);\nfor(int i=9; i>=0; i--) printf("%.1f ", v[i]);`,
        steps: ['Leia 10 floats', 'For decrescente', 'Printe']
      }
    },
    {
      id: 3,
      title: 'Pares e Ímpares',
      description: 'Leia 20 inteiros. Separe em duas listas.',
      tips: ['Use dois vetores e contadores separados.'],
      lesson: {
        concept: 'Distribuição seletiva em memória.',
        example: `int p[20], im[20], n, cp=0, ci=0;\nfor(int i=0; i<20; i++){\n  scanf("%d", &n);\n  if(n%2==0) p[cp++] = n;\n  else im[ci++] = n;\n}`,
        steps: ['Declare 2 vetores', 'Check n%2', 'Increment contadores']
      }
    },
    {
      id: 4,
      title: 'Soma dos Quadrados',
      description: 'Leia 10 inteiros e mostre a soma dos quadrados.',
      tips: ['soma += v[i] * v[i];'],
      lesson: {
        concept: 'Operação acumulada sobre array.',
        example: `int v[10], s=0;\nfor(int i=0; i<10; i++){\n  scanf("%d", &v[i]);\n  s += v[i]*v[i];\n}\nprintf("%d", s);`,
        steps: ['Leia vetor', 'Some quadrados', 'Printe']
      }
    },
    {
      id: 5,
      title: 'Consoantes Lidas',
      description: 'Leia 10 caracteres e diga quantas consoantes.',
      tips: ['if (c != \'a\' && c != \'e\' ...)'],
      lesson: {
        concept: 'Filtro de caracteres em strings/vetores.',
        example: `char v[10]; int co=0;\nfor(int i=0; i<10; i++){\n  scanf(" %c", &v[i]);\n  if(v[i]!='a' && v[i]!='e') co++;\n}\nprintf("%d", co);`,
        steps: ['Leia 10 char', 'Negue vogais', 'Contador++']
      }
    },
    {
      id: 6,
      title: 'Média Acima de 7',
      description: 'Leia 4 notas de 10 alunos e conte quantos aprovados.',
      tips: ['Use um vetor de médias.'],
      lesson: {
        concept: 'Processamento de dados tabulares (Alunos x Notas).',
        example: `float m[10], n; int ap=0;\nfor(int i=0; i<10; i++){\n  float s=0;\n  for(int j=0; j<4; j++){ scanf("%f", &n); s+=n; }\n  m[i] = s/4.0;\n  if(m[i]>=7) ap++;\n}\nprintf("Aprovados: %d", ap);`,
        steps: ['Loop 10 alunos', 'Loop 4 notas', 'Conte aprovados']
      }
    }
  ]
};

// LISTA 5: Funções em C
export const cList5: ExerciseListDef = {
  id: 5,
  title: 'Funções em C',
  topic: 'void, int, parâmetros',
  icon: '⚙️',
  fundamentals: [
    {
      id: 'func_c',
      icon: '🛠️',
      title: 'Funções em C',
      summary: 'Precisamos definir o tipo de retorno e os parâmetros.',
      example: `int soma(int a, int b) {\n    return a + b;\n}`
    }
  ],
  exercises: [
    {
      id: 1,
      title: 'Soma de Três',
      description: 'Função que receba três argumentos e retorne a soma.',
      tips: ['int soma(int a, int b, int c)'],
      lesson: {
        concept: 'Passagem de parâmetros e retorno explícito.',
        example: `int soma(int a, int b, int c) { return a+b+c; }`,
        steps: ['Crie a função', 'Retorne soma', 'Chame no main']
      }
    },
    {
      id: 2,
      title: 'Positivo ou Negativo (Função)',
      description: 'Retorne \'P\' se positivo, \'N\' negativo.',
      tips: ['char verifica(int x)'],
      lesson: {
        concept: 'Lógica condicional modularizada.',
        example: `char testa(int x) { return x > 0 ? 'P' : 'N'; }`,
        steps: ['Declare char func', 'Use if ou ternário', 'Return char']
      }
    },
    {
      id: 3,
      title: 'Soma e Imposto',
      description: 'Altere o custo adicionando a taxa de imposto.',
      tips: ['func(float taxa, float custo)'],
      lesson: {
        concept: 'Cálculo de acréscimo em função.',
        example: `float imposto(float t, float c) { return c * (1 + t/100); }`,
        steps: ['Crie a função', 'Calcule taxa', 'Printe valor']
      }
    },
    {
      id: 4,
      title: 'Quantidade de Dígitos',
      description: 'Informe a quantidade de dígitos de um número.',
      tips: ['Use um loop: while(n > 0) { n /= 10; cont++; }'],
      lesson: {
        concept: 'Processamento numérico sem conversão de string (estilo C).',
        example: `int dig(int n) { int c=0; while(n>0){ n/=10; c++; } return c; }`,
        steps: ['Loop /10', 'Increment contador', 'Return total']
      }
    },
    {
      id: 5,
      title: 'Reverso do Número',
      description: 'Reverso do inteiro. ex: 127 -> 721.',
      tips: ['Use rev = rev * 10 + (n % 10);'],
      lesson: {
        concept: 'Inversão aritmética de números.',
        example: `int rev(int n) { int r=0; while(n>0){ r = r*10 + (n%10); n/=10; } return r; }`,
        steps: ['Loop de restos', 'Monte reverso', 'Printe resultado']
      }
    }
  ]
};

export const allCLists = [cList1, cList2, cList3, cList4, cList5];
