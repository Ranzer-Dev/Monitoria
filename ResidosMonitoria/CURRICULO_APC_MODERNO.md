---
marp: true
theme: uncover
class: invert
paginate: true
backgroundColor: #1a1a1a
color: #ffffff
style: |
  section {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  code {
    background: #2d2d2d;
    color: #f8f8f2;
  }
  h1 {
    color: #00d4ff;
  }
  h3 {
    color: #ffcc00;
  }
---

# Módulo 1: O Primeiro Passo
### A Caminhada de Mil Léguas
**Objetivo**: Do zero ao primeiro código hoje.

---

# O que é Programar?
- **Conceito**: Instruções para o computador.
- **Python (Intérprete)**: Tradutor simultâneo. Foco em agilidade.
- **C (Compilador)**: Tradutor de livros. Foco em performance máxima.

---

# Configurando o Ambiente
1. **VS Code**: Seu editor de texto inteligente.
2. **Extensões**: C/C++ e Python (Microsoft).
3. **Ferramentas**: `gcc` (C) e `python 3.12+`.

---

# O "Alô Mundo" (Hello World)

**Em C (Moderno)**:
```c
#include <stdio.h>
int main() {
    printf("Alô Mundo!\n");
    return 0;
}
```

**Em Python (Moderno)**:
```python
print("Alô Mundo!")
```

---

# Entendendo a Estrutura
- **C**: Exige `{}` para blocos e `;` no fim das frases. É "rígido".
- **Python**: Usa espaços (indentação). É "fluido".

---

# Desafio 01: Boas-vindas
**Problema**: Pergunte o nome e saúde o usuário.

**Python (F-Strings)**:
```python
nome = input("Digite seu nome: ")
print(f"Olá, {nome}!")
```

**C (Segurança)**:
```c
char nome[50];
printf("Nome: ");
scanf("%49s", nome);
printf("Olá, %s!\n", nome);
```

---

# Módulo 2: Dados e Matemática
### A Calculadora do Futuro
**Variáveis**: int (1), float (3.14), char ('A').

---

# Matemática Limpa
- `+`, `-`, `*`, `/`
- `%` (Resto da divisão)

**Dica**: Use nomes claros: `salario_bruto` em vez de `sb`.

---

# Exercício: Salário Real
**Cálculo de Impostos (IR/INSS)**

```python
# Constantes em MAIÚSCULO
TAXA_IR = 0.11
salario_bruto = float(input("Salário: "))
ir = salario_bruto * TAXA_IR
```

---

# Módulo 3: O Fluxo do Pensamento
### Tomando Decisões

**if / else**: O programa escolhe caminhos.

---

# Módulo 4: Repetição
### O Poder da Escala
- **while**: Repita "enquanto".
- **for**: Repita "para cada".

---

# Módulo 5: Coleções
### Organizando a Bagunça
- **C (Vetores)**: Tamanho fixo, rápido.
- **Python (Listas)**: Tamanho dinâmico, versátil.

---

# Módulo 6: Funções
### Código Reutilizável
- **DRY**: Don't Repeat Yourself (Não se repita).

---

# Conclusão
### Próximos Passos
- Prática diária.
- Estudo de Algoritmos.
- **Consistência > Intensidade**.
