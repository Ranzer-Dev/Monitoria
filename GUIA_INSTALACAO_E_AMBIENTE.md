# Guia de Instalação e Configuração do Ambiente (Passo 0)

Este guia foi feito para quem nunca instalou nada de programação. Siga a ordem e você estará pronto para o seu primeiro "Alô Mundo" em 10 minutos.

---

## 1. O Editor de Código: Visual Studio Code (VS Code)
O VS Code é onde você vai escrever seu código. É como um "Word" para programadores, mas muito mais inteligente.

1.  **Baixar**: Acesse [code.visualstudio.com](https://code.visualstudio.com/).
2.  **Instalar**: Clique no botão azul "Download for Windows".
3.  **Configuração**: Durante a instalação, marque todas as caixinhas (especialmente "Adicionar 'Abrir com Code' ao menu de contexto").
4.  **Abrir**: Abra o VS Code após terminar.

---

## 2. Instalando o Python (A Linguagem Moderna)
O Python é fácil de instalar e muito poderoso.

1.  **Baixar**: Vá em [python.org/downloads](https://www.python.org/downloads/).
2.  **Botão**: Clique em "Download Python 3.12.x" (ou a versão mais recente).
3.  **IMPORTANTE**: Na primeira tela da instalação, **marque a caixa "Add Python to PATH"**. Se esquecer isso, nada vai funcionar!
4.  **Instalar Agora**: Clique em "Install Now".
5.  **Verificar**: 
    *   No VS Code, aperte `Ctrl + '` (crase) para abrir o terminal.
    *   Digite `python --version` e dê Enter. Se aparecer o número da versão, deu certo!

---

## 3. Instalando o C (Compilador GCC)
Diferente do Python, o C precisa de um "tradutor" (compilador) externo no Windows. Vamos usar o **w64devkit**.

1.  **Baixar**: Acesse o [GitHub do w64devkit](https://github.com/skeeto/w64devkit/releases).
2.  **Arquivo**: Procure por `w64devkit-x.x.x.zip` e baixe.
3.  **Extrair**: Extraia a pasta em um lugar seguro (Ex: `C:\w64devkit`).
4.  **Configurar o PATH (O passo mais "difícil")**:
    *   No Windows, pesquise por "Variáveis de ambiente" e abra.
    *   Clique em "Variáveis de Ambiente" embaixo.
    *   Em "Variáveis do sistema", clique em **Path** e depois em **Editar**.
    *   Clique em **Novo** e cole o caminho da pasta `bin` (Ex: `C:\w64devkit\bin`).
    *   Dê OK em tudo.
5.  **Verificar**: No terminal do VS Code, digite `gcc --version`. Se aparecer um texto técnico, o C está pronto!

---

## 4. Turbinando o VS Code (Extensões)
Agora vamos deixar o editor inteligente para as linguagens.

1.  No VS Code, clique no ícone de **Extensões** (parecem 4 quadradinhos no lado esquerdo).
2.  Pesquise e instale:
    *   **Python** (da Microsoft).
    *   **C/C++** (da Microsoft).
    *   **Portuguese (Brazil) Language Pack** (se quiser o editor em português).
    *   **Marp for VS Code** (para ver e exportar os slides que eu criei).

---

## 5. Seu Primeiro Teste de Fogo
Vamos garantir que tudo funciona.

### Teste Python:
1. Clique em "Arquivo" > "Novo Arquivo de Texto".
2. Salve como `teste.py`.
3. Digite: `print("Python funcionando!")`.
4. Clique no botão de "Play" no canto superior direito.

### Teste C:
1. Clique em "Arquivo" > "Novo Arquivo de Texto".
2. Salve como `teste.c`.
3. Cole o código:
```c
#include <stdio.h>
int main() {
    printf("C funcionando!\n");
    return 0;
}
```
4. Aperte `Ctrl + '` e digite: `gcc teste.c -o teste` e dê Enter.
5. Depois digite: `./teste` (ou `teste.exe`) e dê Enter.

---

**Parabéns!** Seu laboratório de programação está montado. Agora você pode seguir para o **Módulo 1** do currículo.
