import type { Exercise, Fundamental } from './exercises';

export const fundamentalsC: Fundamental[] = [
  {
    id: 'estrutura',
    icon: '🏗️',
    title: 'Estrutura básica de um programa C',
    summary: 'Todo programa em C começa com a inclusão de bibliotecas e a função main(). O main() é o ponto de entrada — onde o programa começa a executar. Ao terminar, retornamos 0 para indicar que tudo ocorreu bem.',
    example: `#include <stdio.h>   // biblioteca para printf e scanf

int main() {
    // Seu código vai aqui
    printf("Olá, mundo!\\n");
    return 0;           // 0 = programa terminou sem erros
}`,
  },
  {
    id: 'printf',
    icon: '🖨️',
    title: 'Exibindo dados na tela (printf)',
    summary: 'O printf() exibe texto formatado na tela. Usamos "%d" para inteiros, "%f" para decimais e "%s" para strings. O \\n cria uma nova linha.',
    example: `#include <stdio.h>

int main() {
    int idade = 20;
    float altura = 1.75;

    printf("Idade: %d\\n", idade);
    printf("Altura: %.2f\\n", altura);  // .2f = 2 casas decimais
    printf("Nome: %s\\n", "Maria");
    return 0;
}`,
  },
  {
    id: 'scanf',
    icon: '⌨️',
    title: 'Lendo dados do usuário (scanf)',
    summary: 'O scanf() lê o que o usuário digita. Atenção: sempre coloque & antes da variável (exceto em strings/vetores). Isso indica ao C onde na memória guardar o valor lido.',
    example: `#include <stdio.h>

int main() {
    int numero;
    float preco;

    printf("Digite um número: ");
    scanf("%d", &numero);    // & = endereço de memória

    printf("Digite o preço: ");
    scanf("%f", &preco);

    printf("Número: %d, Preço: %.2f\\n", numero, preco);
    return 0;
}`,
  },
  {
    id: 'variaveis',
    icon: '📦',
    title: 'Variáveis e Tipos de Dados',
    summary: 'Em C você precisa declarar o tipo da variável antes de usá-la. Os tipos principais são: int (inteiro), float (decimal simples), double (decimal de precisão dupla) e char (caractere).',
    example: `#include <stdio.h>

int main() {
    int         idade    = 25;       // número inteiro
    float       altura   = 1.75f;   // decimal (simples)
    double      salario  = 3500.50; // decimal (dupla precisão)
    char        letra    = 'A';     // um único caractere
    char        nome[50] = "João";  // string (vetor de char)

    printf("Idade: %d\\n", idade);
    printf("Altura: %.2f\\n", altura);
    printf("Salário: %.2lf\\n", salario);  // %lf para double
    printf("Letra: %c\\n", letra);
    printf("Nome: %s\\n", nome);
    return 0;
}`,
  },
  {
    id: 'operacoes',
    icon: '➕',
    title: 'Operações Matemáticas',
    summary: 'C usa os mesmos operadores básicos: + - * / e % (módulo/resto). Atenção: divisão entre dois inteiros descarta a parte decimal! Para ter decimal, use float ou double.',
    example: `#include <stdio.h>

int main() {
    int a = 10, b = 3;

    printf("%d + %d = %d\\n", a, b, a + b);   // 13
    printf("%d - %d = %d\\n", a, b, a - b);   // 7
    printf("%d * %d = %d\\n", a, b, a * b);   // 30
    printf("%d / %d = %d\\n", a, b, a / b);   // 3 (inteiro!)
    printf("%d %% %d = %d\\n", a, b, a % b);  // 1 (resto)

    // Para divisão com decimal:
    float resultado = (float)a / b;
    printf("%.2f\\n", resultado);  // 3.33
    return 0;
}`,
  },
  {
    id: 'controle',
    icon: '🔀',
    title: 'Estruturas de Controle',
    summary: 'if/else toma decisões com base em condições. O for e while repetem blocos de código. Estes são os blocos de construção de qualquer lógica em C.',
    example: `#include <stdio.h>

int main() {
    int nota = 7;

    // if/else
    if (nota >= 7) {
        printf("Aprovado!\\n");
    } else {
        printf("Reprovado.\\n");
    }

    // for: repete 5 vezes
    for (int i = 1; i <= 5; i++) {
        printf("%d ", i);  // 1 2 3 4 5
    }
    printf("\\n");

    // while
    int x = 0;
    while (x < 3) {
        printf("x = %d\\n", x);
        x++;
    }
    return 0;
}`,
  },
];

export const exercisesC: Exercise[] = [
  {
    id: 1,
    title: 'Olá Mundo',
    description: 'Escreva um programa em C que exiba "Olá, Mundo!" na tela.',
    tips: [
      'Inclua a biblioteca #include <stdio.h> para usar o printf.',
      'Todo programa C precisa da função int main().',
      'Use printf("Olá, Mundo!\\n"); para exibir a mensagem.',
      'Não esqueça do return 0; no final do main().',
    ],
    lesson: {
      concept: 'Em C, todo programa tem uma estrutura básica obrigatória: inclui-se as bibliotecas necessárias com #include, define-se a função main() que é o ponto de entrada do programa, e usa-se printf() para exibir texto na tela. O \\n dentro do texto indica "nova linha".',
      example: `#include <stdio.h>

int main() {
    printf("Olá, Mundo!\\n");
    return 0;
}`,
      steps: [
        'Comece com #include <stdio.h> para ter acesso ao printf.',
        'Escreva int main() { ... } como estrutura principal.',
        'Use printf("Olá, Mundo!\\n"); para exibir a mensagem.',
        'Finalize com return 0; antes de fechar o main().',
      ],
    },
  },
  {
    id: 2,
    title: 'Número Informado',
    description: 'Faça um programa que leia um número inteiro e exiba: "O número informado foi: X".',
    tips: [
      'Use scanf("%d", &numero) para ler um inteiro.',
      'Lembre do & antes da variável no scanf!',
      'Use printf com %d para exibir o valor.',
    ],
    lesson: {
      concept: 'O scanf() lê dados digitados pelo usuário. O formato %d indica que queremos ler um número inteiro. O & (e comercial) antes do nome da variável é obrigatório — ele diz ao C onde na memória guardar o valor lido. Esquecer o & é um erro clássico!',
      example: `#include <stdio.h>

int main() {
    int numero;

    printf("Digite um número: ");
    scanf("%d", &numero);   // & é obrigatório!

    printf("O número informado foi: %d\\n", numero);
    return 0;
}`,
      steps: [
        'Declare uma variável int numero;',
        'Use printf para pedir o número ao usuário.',
        'Use scanf("%d", &numero) para ler o valor.',
        'Use printf para exibir a mensagem com %d.',
      ],
    },
  },
  {
    id: 3,
    title: 'Soma de Dois Números',
    description: 'Leia dois números inteiros e exiba a soma deles.',
    tips: [
      'Declare duas variáveis: int a, b, soma;',
      'Leia cada número com scanf separado.',
      'Some com soma = a + b;',
    ],
    lesson: {
      concept: 'Podemos declarar múltiplas variáveis do mesmo tipo separadas por vírgula. Para ler cada uma, chamamos scanf individualmente. A soma é feita com o operador + e o resultado guardado em uma terceira variável.',
      example: `#include <stdio.h>

int main() {
    int a, b, soma;

    printf("Primeiro número: ");
    scanf("%d", &a);

    printf("Segundo número: ");
    scanf("%d", &b);

    soma = a + b;
    printf("Soma: %d\\n", soma);
    return 0;
}`,
      steps: [
        'Declare int a, b, soma;',
        'Leia o primeiro número: scanf("%d", &a)',
        'Leia o segundo número: scanf("%d", &b)',
        'Calcule soma = a + b;',
        'Exiba o resultado com printf.',
      ],
    },
  },
  {
    id: 4,
    title: 'Média Bimestral',
    description: 'Leia 4 notas bimestrais (valores decimais) e calcule e exiba a média.',
    tips: [
      'Use float para notas com vírgula.',
      'scanf com float usa %f.',
      'Média = (n1 + n2 + n3 + n4) / 4.0',
    ],
    lesson: {
      concept: 'Para números decimais em C usamos o tipo float (ou double para maior precisão). O formato %f é usado no scanf e printf. Ao dividir por 4.0 (com ponto) garantimos que a divisão seja decimal, não inteira.',
      example: `#include <stdio.h>

int main() {
    float n1, n2, n3, n4, media;

    printf("1ª nota: "); scanf("%f", &n1);
    printf("2ª nota: "); scanf("%f", &n2);
    printf("3ª nota: "); scanf("%f", &n3);
    printf("4ª nota: "); scanf("%f", &n4);

    media = (n1 + n2 + n3 + n4) / 4.0f;

    printf("Média: %.2f\\n", media);  // 2 casas decimais
    return 0;
}`,
      steps: [
        'Declare 5 variáveis float (4 notas + média).',
        'Leia cada nota com scanf("%f", &variavel).',
        'Calcule: media = (n1 + n2 + n3 + n4) / 4.0f;',
        'Exiba com printf("%.2f\\n", media);',
      ],
    },
  },
  {
    id: 5,
    title: 'Metros para Centímetros',
    description: 'Leia um valor em metros e converta para centímetros.',
    tips: [
      '1 metro = 100 centímetros.',
      'Use float para aceitar valores decimais (ex: 1.75m).',
    ],
    lesson: {
      concept: 'Conversão de unidades é um dos usos mais diretos de variáveis e operações. Lemos o valor, aplicamos a fórmula de conversão e exibimos o resultado. O tipo float permite valores como 1.75 metros.',
      example: `#include <stdio.h>

int main() {
    float metros, centimetros;

    printf("Digite o valor em metros: ");
    scanf("%f", &metros);

    centimetros = metros * 100.0f;

    printf("%.2f metros = %.2f centímetros\\n", metros, centimetros);
    return 0;
}`,
      steps: [
        'Declare float metros, centimetros;',
        'Leia metros com scanf.',
        'Calcule centimetros = metros * 100.0f;',
        'Exiba o resultado.',
      ],
    },
  },
  {
    id: 6,
    title: 'Área do Círculo',
    description: 'Leia o raio de um círculo e calcule sua área. Use PI = 3.14159.',
    tips: [
      'Área = PI × raio²',
      'Em C: area = 3.14159 * raio * raio;',
      'Ou defina: #define PI 3.14159',
    ],
    lesson: {
      concept: 'Em C podemos definir constantes com #define. A instrução #define PI 3.14159 cria uma constante chamada PI. Para elevar ao quadrado simplesmente multiplicamos o número por ele mesmo (raio * raio), ou incluímos <math.h> e usamos pow(raio, 2).',
      example: `#include <stdio.h>
#define PI 3.14159

int main() {
    float raio, area;

    printf("Digite o raio: ");
    scanf("%f", &raio);

    area = PI * raio * raio;

    printf("Área do círculo: %.2f\\n", area);
    return 0;
}`,
      steps: [
        'Adicione #define PI 3.14159 após o #include.',
        'Declare float raio, area;',
        'Leia o raio com scanf.',
        'Calcule: area = PI * raio * raio;',
        'Exiba o resultado.',
      ],
    },
  },
  {
    id: 7,
    title: 'Salário Mensal',
    description: 'Leia o valor por hora e as horas trabalhadas no mês. Calcule e exiba o salário.',
    tips: [
      'Salário = valor_hora × horas_mes',
      'Use float para ambos os valores.',
      'Use %.2f para exibir em formato monetário.',
    ],
    lesson: {
      concept: 'Este exercício combina leitura de dois valores float e uma multiplicação simples. O formato %.2f no printf garante que o resultado seja exibido com exatamente 2 casas decimais, ideal para valores monetários.',
      example: `#include <stdio.h>

int main() {
    float valor_hora, horas_mes, salario;

    printf("Valor por hora: R$ ");
    scanf("%f", &valor_hora);

    printf("Horas trabalhadas: ");
    scanf("%f", &horas_mes);

    salario = valor_hora * horas_mes;

    printf("Salário do mês: R$ %.2f\\n", salario);
    return 0;
}`,
      steps: [
        'Declare três variáveis float.',
        'Leia valor_hora e horas_mes com scanf.',
        'Calcule salario = valor_hora * horas_mes;',
        'Exiba com R$ %.2f para formato monetário.',
      ],
    },
  },
  {
    id: 8,
    title: 'Fahrenheit para Celsius',
    description: 'Leia uma temperatura em Fahrenheit e converta para Celsius.',
    tips: [
      'Fórmula: C = (F - 32) × 5.0 / 9.0',
      'Use 5.0 e 9.0 (não 5 e 9) para divisão decimal.',
    ],
    lesson: {
      concept: 'Em C, dividir dois inteiros sempre resultará em um inteiro (5/9 = 0, não 0.55). Para forçar divisão decimal, pelo menos um dos valores deve ser float — por isso escrevemos 5.0 ou 9.0, ou fazemos cast com (float).',
      example: `#include <stdio.h>

int main() {
    float fahrenheit, celsius;

    printf("Temperatura em Fahrenheit: ");
    scanf("%f", &fahrenheit);

    celsius = (fahrenheit - 32) * 5.0f / 9.0f;

    printf("%.1f°F = %.1f°C\\n", fahrenheit, celsius);
    return 0;
}`,
      steps: [
        'Declare float fahrenheit, celsius;',
        'Leia fahrenheit com scanf.',
        'Aplique a fórmula com 5.0f e 9.0f.',
        'Exiba com 1 casa decimal.',
      ],
    },
  },
  {
    id: 9,
    title: 'Salário com Descontos',
    description: 'Calcule o salário líquido com descontos: 11% IR, 8% INSS e 5% sindicato.',
    tips: [
      'Salário Bruto = valor_hora × horas_mes',
      'IR = bruto * 0.11, INSS = bruto * 0.08, Sind. = bruto * 0.05',
      'Salário Líquido = Bruto - IR - INSS - Sindicato',
    ],
    lesson: {
      concept: 'Percentuais são convertidos para decimais: 11% = 0.11. Calcular primeiro o bruto e depois cada desconto separadamente torna o código mais claro e fácil de depurar. O líquido é o bruto menos a soma de todos os descontos.',
      example: `#include <stdio.h>

int main() {
    float valor_hora, horas, bruto, ir, inss, sind, liquido;

    printf("Valor/hora: "); scanf("%f", &valor_hora);
    printf("Horas/mês: "); scanf("%f", &horas);

    bruto  = valor_hora * horas;
    ir     = bruto * 0.11f;
    inss   = bruto * 0.08f;
    sind   = bruto * 0.05f;
    liquido = bruto - ir - inss - sind;

    printf("Bruto:   R$ %.2f\\n", bruto);
    printf("IR:      R$ %.2f\\n", ir);
    printf("INSS:    R$ %.2f\\n", inss);
    printf("Sind.:   R$ %.2f\\n", sind);
    printf("Líquido: R$ %.2f\\n", liquido);
    return 0;
}`,
      steps: [
        'Calcule o bruto (valor_hora × horas).',
        'Calcule cada desconto (bruto × percentual decimal).',
        'Some os descontos e subtraia do bruto.',
        'Exiba todos os valores.',
      ],
    },
  },
  {
    id: 10,
    title: 'Vetor de Inteiros',
    description: 'Declare um vetor de 10 inteiros, leia os valores e exiba-os na tela.',
    tips: [
      'Declaração: int v[10];',
      'Use for para ler e exibir cada elemento.',
      'Índices vão de 0 a 9 (não de 1 a 10!)',
    ],
    lesson: {
      concept: 'Um vetor (array) em C é um conjunto de variáveis do mesmo tipo guardadas em sequência na memória. Declaramos com int v[10]; e acessamos cada posição com v[0], v[1], ..., v[9]. O índice começa em 0, não em 1!',
      example: `#include <stdio.h>

int main() {
    int v[10];

    // Lendo os 10 valores
    for (int i = 0; i < 10; i++) {
        printf("v[%d]: ", i);
        scanf("%d", &v[i]);
    }

    // Exibindo o vetor
    printf("\\nVetor: ");
    for (int i = 0; i < 10; i++) {
        printf("%d ", v[i]);
    }
    printf("\\n");
    return 0;
}`,
      steps: [
        'Declare int v[10];',
        'Use um for de i=0 até i<10 para ler cada elemento.',
        'Use scanf("%d", &v[i]) dentro do loop.',
        'Use outro for para exibir todos os elementos.',
      ],
    },
  },
  {
    id: 11,
    title: 'Maior Valor do Vetor',
    description: 'Leia 10 inteiros em um vetor e encontre o maior valor.',
    tips: [
      'Comece assumindo que o maior é o primeiro elemento: maior = v[0].',
      'Compare com os demais usando um for.',
      'Se v[i] > maior, atualize: maior = v[i].',
    ],
    lesson: {
      concept: 'Para encontrar o maior valor, usamos uma estratégia de comparação sequencial: assumimos que o primeiro elemento é o maior, e percorremos o restante do vetor. Sempre que encontramos um valor maior que o atual, atualizamos nossa variável "maior".',
      example: `#include <stdio.h>

int main() {
    int v[10], maior;

    for (int i = 0; i < 10; i++) {
        printf("v[%d]: ", i);
        scanf("%d", &v[i]);
    }

    maior = v[0];  // assume o primeiro como maior
    for (int i = 1; i < 10; i++) {
        if (v[i] > maior) {
            maior = v[i];
        }
    }

    printf("Maior valor: %d\\n", maior);
    return 0;
}`,
      steps: [
        'Leia os 10 elementos com um for.',
        'Declare int maior = v[0]; (começa com o primeiro).',
        'Percorra de i=1 até 9 comparando v[i] com maior.',
        'Se v[i] > maior, faça maior = v[i].',
        'Exiba maior ao final.',
      ],
    },
  },
  {
    id: 12,
    title: 'Ponteiros Básicos',
    description: 'Declare uma variável inteira N e um ponteiro P. Leia N, aponte P para N e exiba: o valor de N, o endereço guardado em P e o valor apontado por P (*P).',
    tips: [
      'Ponteiro: int *p;',
      'Apontar: p = &n;  (p recebe o endereço de n)',
      '*p acessa o valor no endereço guardado em p.',
      'Use %p para exibir um endereço de memória.',
    ],
    lesson: {
      concept: 'Um ponteiro é uma variável que guarda um endereço de memória. Declaramos com int *p. Para fazer p apontar para n, escrevemos p = &n (o & retorna o endereço de n). Para acessar o valor no endereço, usamos *p (chamado de dereferência).',
      example: `#include <stdio.h>

int main() {
    int n;
    int *p;  // ponteiro para int

    printf("Digite um número: ");
    scanf("%d", &n);

    p = &n;  // p agora aponta para n

    printf("Valor de n:          %d\\n", n);
    printf("Endereço em p:       %p\\n", (void*)p);
    printf("Valor apontado (*p): %d\\n", *p);

    return 0;
}`,
      steps: [
        'Declare int n; e int *p;',
        'Leia n com scanf.',
        'Faça p = &n; para apontar p para n.',
        'Exiba n, p (o endereço com %p) e *p (o valor).',
      ],
    },
  },
  {
    id: 13,
    title: 'Struct — Dados de Aluno',
    description: 'Crie uma struct Aluno com nome (string), RA (inteiro) e nota (float). Leia os dados de 3 alunos e exiba-os.',
    tips: [
      'Declare a struct antes do main().',
      'Use fgets(aluno.nome, 50, stdin) para ler strings com espaços.',
      'Acesse campos com: aluno.nome, aluno.ra, aluno.nota',
    ],
    lesson: {
      concept: 'Uma struct (estrutura) agrupa diferentes tipos de dados em um único tipo. Isso evita ter que gerenciar variáveis separadas para cada informação. Um vetor de structs permite armazenar dados de múltiplos "objetos" de forma organizada.',
      example: `#include <stdio.h>

typedef struct {
    char  nome[50];
    int   ra;
    float nota;
} Aluno;

int main() {
    Aluno turma[3];

    for (int i = 0; i < 3; i++) {
        printf("--- Aluno %d ---\\n", i + 1);
        printf("Nome: ");
        // Limpa o buffer e lê a linha inteira
        scanf(" ");
        fgets(turma[i].nome, 50, stdin);
        printf("RA: ");
        scanf("%d", &turma[i].ra);
        printf("Nota: ");
        scanf("%f", &turma[i].nota);
    }

    printf("\\n=== TURMA ===\\n");
    for (int i = 0; i < 3; i++) {
        printf("Nome: %s RA: %d  Nota: %.1f\\n",
            turma[i].nome, turma[i].ra, turma[i].nota);
    }
    return 0;
}`,
      steps: [
        'Declare a typedef struct com nome, ra e nota.',
        'No main, declare Aluno turma[3];',
        'Use um for para ler os dados de cada aluno.',
        'Use outro for para exibir todos.',
      ],
    },
  },
];
