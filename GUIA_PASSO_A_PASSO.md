# Guia de Exercícios APC: Passo a Passo Detalhado

Este guia explica o **porquê** de cada linha de código nos exercícios fundamentais. Ideal para quem nunca programou.

---

## 1. O "Alô Mundo" (Seu Primeiro Código)
**Problema**: Mostrar uma mensagem na tela.

### Em Python (Simplicidade)
```python
print("Alô Mundo!") # A função 'print' escreve o que está entre aspas na tela.
```
*   **Por que as aspas?** Para indicar que é um **Texto** (String). Se não tivesse aspas, o computador acharia que é o nome de uma variável.

### Em C (Estrutura)
```c
#include <stdio.h> // Inclui a biblioteca de Entrada (Standard Input) e Saída (Output).

int main() { // O ponto de entrada. Tudo o que o computador rodar estará aqui dentro.
    printf("Alô Mundo!\n"); // O 'f' em printf significa 'formatted'. \n pula uma linha.
    return 0; // Diz ao Windows/Linux: "Deu tudo certo, o programa terminou bem".
}
```

---

## 2. Calculadora de Área (Matemática básica)
**Problema**: Pedir o raio de um círculo e mostrar sua área. (Área = 3.14 * raio * raio)

### Em Python (Arquitetura Moderna)
```python
import math # Importamos o 'math' para usar o PI exato.

raio = float(input("Digite o raio: ")) # float() transforma o texto em número com vírgula.
area = math.pi * (raio ** 2) # ** 2 significa elevar ao quadrado.

print(f"A área é: {area:.2f}") # .2f limita para 2 casas decimais.
```

### Em C (Controle Total)
```c
#include <stdio.h>
#define PI 3.14159 // Define uma constante.

int main() {
    float raio, area; // Declaramos as variáveis antes de usar.
    printf("Digite o raio: ");
    scanf("%f", &raio); // %f espera um float. &raio aponta para o lugar na memória onde vamos guardar o valor.

    area = PI * raio * raio;
    printf("A área é: %.2f\n", area);
    return 0;
}
```

---

## 3. Verificador de Notas (Tomada de Decisão)
**Problema**: Ler duas notas, calcular a média e dizer se o aluno foi aprovado (média >= 7).

### Em Python (Clareza)
```python
n1 = float(input("Nota 1: "))
n2 = float(input("Nota 2: "))
media = (n1 + n2) / 2

if media >= 7: # Os ':' são obrigatórios.
    print("Aprovado!") # Este espaço antes do print é a indentação. Define o que está "dentro" do SE.
else:
    print("Reprovado.")
```

### Em C (Blocos com Chaves)
```c
#include <stdio.h>

int main() {
    float n1, n2, media;
    printf("Notas: ");
    scanf("%f %f", &n1, &n2);
    media = (n1 + n2) / 2.0;

    if (media >= 7.0) { // Parênteses e Chaves são obrigatórios.
        printf("Aprovado!\n");
    } else {
        printf("Reprovado.\n");
    }
    return 0;
}
```

---

## Dicas de Ouro para Iniciantes:
1.  **Erre sem medo**: Se o código não rodar, leia a mensagem de erro. Ela diz em qual linha o erro está.
2.  **Use nomes claros**: Em vez de `x`, use `valor_total`. Isso ajuda você a entender seu próprio código no futuro.
3.  **Comente tudo**: Use `#` no Python ou `//` no C para escrever notas para você mesmo explicando o que aquela parte faz.
