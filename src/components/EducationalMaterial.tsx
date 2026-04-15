import { useState } from 'react';
import { Cpu, HardDrive, Brain, Binary, AlertTriangle, ArrowRight, CheckCircle2, XCircle, Info, Image as ImageIcon, Zap, Layers, Code2 } from 'lucide-react';

export default function EducationalMaterial() {
  return (
    <div style={{ 
      maxWidth: 1200, 
      margin: '0 auto', 
      width: '100%',
      display: 'flex', 
      flexDirection: 'column', 
      gap: 32, 
      paddingBottom: 60,
      paddingLeft: 20,
      paddingRight: 20
    }}>
      
      {/* 🚀 Header da Aula Theory */}
      <div style={{
        background: 'linear-gradient(145deg, rgba(139, 92, 246, 0.1) 0%, rgba(109, 40, 217, 0.05) 100%)',
        border: '1px solid rgba(139, 92, 246, 0.2)',
        borderRadius: 24,
        padding: '60px 24px',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 20
      }}>
        <div style={{ 
          width: 72, height: 72, borderRadius: '50%', background: 'rgba(139, 92, 246, 0.15)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 8
        }}>
          <Brain size={40} color="#a78bfa" />
        </div>
        <h1 style={{ margin: 0, fontSize: 42, fontWeight: 900, letterSpacing: '-0.03em', color: '#fff' }}>
          Fundamentos da <span style={{ color: '#a78bfa' }}>Engenharia Digital</span>
        </h1>
        <p style={{ margin: 0, fontSize: 18, color: 'rgba(255,255,255,0.5)', maxWidth: 750, lineHeight: 1.6 }}>
          A ciência por trás do código. Entenda a jornada do bit até a inteligência lógica 
          com uma visão profunda do hardware e software.
        </p>
      </div>

      {/* 🔮 Módulo 1: O Mundo Binário, ASCII e Imagens */}
      <TheoryCard 
        index={1}
        title="Bits, Caracteres e Imagens"
        description="A linguagem universal: como impulsos elétricos formam toda a informação digital."
        icon={<Binary size={20} color="#fbbf24" />}
        accentColor="#fbbf24"
      >
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.2fr) 1px minmax(0, 1fr)', gap: 40, alignItems: 'start' }}>
          {/* LADO ESQUERDO: TRADUTORES */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, paddingBottom: 10 }}>
              <h4 style={{ margin: 0, fontSize: 13, fontWeight: 900, color: '#fbbf24', textTransform: 'uppercase', letterSpacing: 1 }}>🔠 Do Caractere à Frase</h4>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, margin: 0 }}>
                Cada letra é um código (ASCII). Uma frase é simplesmente uma <strong>sequência de bytes</strong> guardados em ordem.
              </p>
            </div>
            <AsciiTool />
            <PhraseTranslator />
          </div>

          {/* DIVISOR VERTICAL */}
          <div style={{ alignSelf: 'stretch', background: 'rgba(255,255,255,0.05)' }} />

          {/* LADO DIREITO: IMAGENS */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, paddingBottom: 10 }}>
              <h4 style={{ margin: 0, fontSize: 13, fontWeight: 900, color: '#fbbf24', textTransform: 'uppercase', letterSpacing: 1 }}>🖼️ Visão de Máquina</h4>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, margin: 0 }}>
                Fotos não são "fotos" para o robô, são <strong>tabelas gigantes de números</strong> representando cores.
              </p>
            </div>
            
            <div style={{ padding: '24px', background: 'rgba(255,255,255,0.02)', borderRadius: 24, border: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <ImageIcon size={24} color="#fbbf24" />
                <h4 style={{ margin: 0, fontSize: 15, fontWeight: 800, color: '#fff' }}>A Anatomia do Pixel</h4>
              </div>
              <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', lineHeight: 1.6, margin: 0 }}>
                Para o computador, imagens são <strong>tabelas de RGB</strong>. Quando você as vê, os bits estão "viajando" do armazenamento pelo <strong>barramento</strong> até o monitor.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, fontSize: 11, color: 'rgba(255,255,255,0.4)' }}>
                <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                  <div style={{ width: 12, height: 12, borderRadius: 3, background: '#ef4444' }} />
                  <span><strong>R (Red):</strong> 1 Byte (0-255)</span>
                </div>
                <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                  <div style={{ width: 12, height: 12, borderRadius: 3, background: '#22c55e' }} />
                  <span><strong>G (Green):</strong> 1 Byte (0-255)</span>
                </div>
                <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                  <div style={{ width: 12, height: 12, borderRadius: 3, background: '#3b82f6' }} />
                  <span><strong>B (Blue):</strong> 1 Byte (0-255)</span>
                </div>
              </div>
            </div>

            {/* Simulação de Bits de uma Imagem */}
            <div style={{ padding: '24px', background: 'rgba(0,0,0,0.2)', borderRadius: 24, border: '1px solid rgba(251,191,36,0.1)', flex: 1 }}>
              <div style={{ fontSize: 9, fontWeight: 900, color: 'rgba(255,255,255,0.2)', textTransform: 'uppercase', marginBottom: 12, letterSpacing: 1 }}>Fluxo de Bits de um Ícone 16x16 (Simulado)</div>
              <div style={{ 
                fontSize: 8, 
                fontFamily: 'monospace', 
                color: 'rgba(251,191,36,0.4)', 
                wordBreak: 'break-all', 
                lineHeight: 1.2,
                maxHeight: 280,
                overflow: 'hidden',
                textAlign: 'justify'
              }}>
                {Array.from({ length: 6144 }).map(() => Math.round(Math.random())).join('')}
              </div>
              <div style={{ marginTop: 12, padding: '12px 16px', background: 'rgba(251,191,36,0.05)', borderRadius: 12, border: '1px solid rgba(251,191,36,0.1)', display: 'flex', alignItems: 'start', gap: 12 }}>
                <Info size={16} color="#fbbf24" style={{ marginTop: 2, flexShrink: 0 }} />
                <p style={{ margin: 0, fontSize: 13, color: 'rgba(255,255,255,0.7)', lineHeight: 1.5 }}>
                  <strong>Realidade:</strong> Cada "0" e "1" acima representa uma instrução de cor. 
                  Mesmo um ícone minúsculo já exige milhares de bits trafegando pelo <strong>barramento</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </TheoryCard>

      {/* 🏗️ Módulo 2: O Mapa da Memória (Multi-Byte Deep Dive) */}
      <TheoryCard 
        index={2}
        title="A Hierarquia da Memória"
        description="Como o computador organiza blocos de 8 bits para representar dados complexos."
        icon={<HardDrive size={20} color="#60a5fa" />}
        accentColor="#60a5fa"
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(400px, 1fr) 1fr', gap: 40, alignItems: 'start' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <Layers size={18} color="#60a5fa" />
                <h4 style={{ margin: 0, fontSize: 14, fontWeight: 800, color: '#60a5fa', textTransform: 'uppercase' }}>Profundidade de Bits por Tipo</h4>
              </div>
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, margin: 0 }}>
                A memória é sempre composta de bytes (8 bits). Tipos maiores apenas empilham mais bytes em sequência. 
                Observe como os "interruptores" aumentam:
              </p>
              <MultiByteBitView />
            </div>
            <MemorySimulator />
          </div>
        </div>
      </TheoryCard>

      {/* 🤖 Módulo 3: Algoritmos Detalhados */}
      <TheoryCard 
        index={3}
        title="Pensamento em Código"
        description="A transição da linguagem cotidiana para a precisão computacional."
        icon={<Cpu size={20} color="#f472b6" />}
        accentColor="#f472b6"
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 32 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <h4 style={{ margin: 0, fontSize: 13, fontWeight: 800, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase' }}>🧠 Algoritmo Natural</h4>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.5 }}>Imagine uma receita passo a passo para uma <strong>pessoa</strong>:</p>
              <div style={{ padding: '24px', background: 'rgba(255,255,255,0.02)', borderRadius: 20, border: '1px dotted rgba(255,255,255,0.1)' }}>
                <ol style={{ fontSize: 13, color: 'rgba(255,255,255,0.8)', paddingLeft: 16, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <li>Veja se tem água na cafeteira.</li>
                  <li>Se estiver vazia, coloque água até a marca.</li>
                  <li>Ligue o botão de esquentar.</li>
                  <li>Espere sair fumaça e desligue.</li>
                </ol>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <h4 style={{ margin: 0, fontSize: 14, fontWeight: 800, color: '#f472b6' }}>💻 Algoritmo Computacional</h4>
              <div style={{ background: '#0a0a0c', padding: '24px', borderRadius: 24, border: '1px solid rgba(244,114,182,0.2)' }}>
                <code style={{ fontSize: 12, fontFamily: 'monospace', color: '#94a3b8', lineHeight: 1.7 }}>
                  <span style={{ color: '#4ade80' }}>// Variáveis de Entrada</span><br/>
                  <span style={{ color: '#f472b6' }}>int</span> nivel_agua_ml = 200;<br/>
                  <span style={{ color: '#f472b6' }}>bool</span> aquecedor_ligado = false;<br/>
                  <br/>
                  <span style={{ color: '#4ade80' }}>// Lógica de Processamento</span><br/>
                  <span style={{ color: '#f472b6' }}>if</span> (nivel_agua_ml &lt; 100) &#123;<br/>
                  &nbsp;&nbsp;nivel_agua_ml = 500;<br/>
                  &#125;<br/>
                  <br/>
                  aquecedor_ligado = true;<br/>
                  <span style={{ color: '#4ade80' }}>printf</span>("Iniciando Aquecimento...");
                </code>
              </div>
            </div>
          </div>
        </div>
      </TheoryCard>

      {/* ⚠️ Módulo 4: Error Lab 2.0 (Side-by-Side Scaled) */}
      <TheoryCard 
        index={4}
        title="O Laboratório de Erros"
        description="Analise códigos quebramos e aprenda a solução com comparação direta."
        icon={<AlertTriangle size={20} color="#f87171" />}
        accentColor="#f87171"
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
          <PremiumErrorLab />
        </div>
      </TheoryCard>

      {/* 🛠️ Módulo 5: IDEs & Tradutores */}
      <TheoryCard 
        index={5}
        title="O Ecossistema: IDEs & Tradutores"
        description="A jornada do texto ao pulso elétrico: como o código ganha vida sob o capô."
        icon={<Layers size={20} color="#2dd4bf" />}
        accentColor="#2dd4bf"
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 50 }}>
          
          {/* Metáfora da Cozinha */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
            <div style={{ padding: '24px', background: 'rgba(255,255,255,0.02)', borderRadius: 24, border: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff4e4e' }} />
                <h5 style={{ margin: 0, fontSize: 14, fontWeight: 900, color: '#fff' }}>O Bloco de Notas (A Faca)</h5>
              </div>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.6, margin: 0 }}>
                Escrever código puro é como cozinhar apenas com uma faca. Você é o responsável por tudo: 
                cortar, mexer, controlar o tempo e limpar. Se errar, ninguém te avisa.
              </p>
            </div>
            <div style={{ padding: '24px', background: 'rgba(45,212,191,0.05)', borderRadius: 24, border: '1px solid rgba(45,212,191,0.2)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#2dd4bf' }} />
                <h5 style={{ margin: 0, fontSize: 14, fontWeight: 900, color: '#fff' }}>A IDE (Cozinha Industrial)</h5>
              </div>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, margin: 0 }}>
                A IDE é o ambiente integrado: tem corretores ortográficos de código, compilação com um clique 
                e automações que garantem que sua "receita" seja entregue perfeita.
              </p>
            </div>
          </div>

          <div style={{ height: 1, background: 'rgba(255,255,255,0.05)' }} />

          {/* Motores Detalhados: C vs Python */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
            <h4 style={{ margin: 0, fontSize: 14, fontWeight: 900, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', textAlign: 'center', letterSpacing: 2 }}>A Anatomia da Execução</h4>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: 50 }}>
              {/* Fluxo C Detalhado */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ fontSize: 10, fontWeight: 900, padding: '4px 8px', background: 'rgba(96,165,250,0.1)', color: '#60a5fa', borderRadius: 6 }}>ESTÁTICA / COMPILADA</div>
                  <h5 style={{ margin: 0, fontSize: 16, fontWeight: 800, color: '#fff' }}>Pipeline da Linguagem C</h5>
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                  <DeepStep label="Código Fonte (.c)" desc="O texto que você escreveu." icon={<Code2 size={14} />} />
                  <FlowArrow />
                  <DeepStep label="Pré-processador" desc="Cola as bibliotecas (#include) e resolve macros." icon={<Layers size={14} />} color="#60a5fa" />
                  <FlowArrow />
                  <DeepStep label="Compilador" desc="Transforma texto em Instruções de Máquina (Binário)." icon={<Cpu size={14} />} color="#60a5fa" />
                  <FlowArrow />
                  <DeepStep label="Linker" desc="Une seu código com as funções do Sistema Operacional." icon={<Zap size={14} />} color="#60a5fa" />
                  <FlowArrow />
                  <DeepStep label="Executável Final (.exe)" desc="Arquivo otimizado e pronto para rodar sozinho." icon={<CheckCircle2 size={14} />} color="#4ade80" />
                </div>
              </div>

              {/* Fluxo Python Detalhado */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ fontSize: 10, fontWeight: 900, padding: '4px 8px', background: 'rgba(251,191,36,0.1)', color: '#fbbf24', borderRadius: 6 }}>DINÂMICA / INTERPRETADA</div>
                  <h5 style={{ margin: 0, fontSize: 16, fontWeight: 800, color: '#fff' }}>Pipeline do Python</h5>
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                  <DeepStep label="Código Fonte (.py)" desc="O script pronto para teste." icon={<Code2 size={14} />} />
                  <FlowArrow />
                  <DeepStep label="Compilador Bytecode" desc="Gera o arquivo .pyc (instruções rápidas)." icon={<Layers size={14} />} color="#fbbf24" />
                  <FlowArrow />
                  <DeepStep label="PVM (Virtual Machine)" desc="O motor que executa o bytecode no PC." icon={<Cpu size={14} />} color="#fbbf24" />
                  <FlowArrow />
                  <DeepStep label="Execução em Runtime" desc="Instruções processadas enquanto o programa roda." icon={<Zap size={14} />} color="#4ade80" />
                </div>
                <div style={{ padding: '16px', background: 'rgba(251,191,36,0.03)', borderRadius: 16, border: '1px solid rgba(251,191,36,0.1)', fontSize: 11, fontStyle: 'italic', color: 'rgba(255,255,255,0.4)', lineHeight: 1.5 }}>
                  <strong>Curiosidade:</strong> No Python, se houver um erro na linha 50, as primeiras 49 linhas rodam normalmente antes de parar.
                </div>
              </div>
            </div>
          </div>

          <div style={{ height: 1, background: 'rgba(255,255,255,0.05)' }} />

          {/* Simulador de Debugger */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ background: '#2dd4bf15', padding: 8, borderRadius: 10 }}>
                <Info size={20} color="#2dd4bf" />
              </div>
              <h5 style={{ margin: 0, fontSize: 18, fontWeight: 900, color: '#fff' }}>Simulador de Debug: Parando o Tempo</h5>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 1fr)', gap: 32 }}>
              {/* Código com Breakpoint */}
              <div style={{ background: '#0a0a0c', borderRadius: 24, border: '1px solid rgba(255,255,255,0.1)', overflow: 'hidden' }}>
                <div style={{ padding: '10px 20px', background: 'rgba(255,255,255,0.03)', fontSize: 10, fontWeight: 900, color: 'rgba(255,255,255,0.3)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>EDITOR DE CÓDIGO (PAUSADO)</div>
                <div style={{ padding: '20px', fontFamily: 'monospace', fontSize: 13, lineHeight: 1.8 }}>
                  <div style={{ display: 'flex', gap: 16, color: 'rgba(255,255,255,0.2)' }}><span>1</span> <span style={{ color: '#fff' }}>int main() &#123;</span></div>
                  <div style={{ display: 'flex', gap: 16, color: 'rgba(255,255,255,0.2)' }}><span>2</span> <span style={{ color: '#fff' }}>  int x = 10;</span></div>
                  <div style={{ display: 'flex', gap: 16, color: 'rgba(255,255,255,0.3)', background: 'rgba(239,68,68,0.15)', borderLeft: '3px solid #ef4444' }}>
                    <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ef4444', marginTop: 7, marginLeft: -5 }} />
                    <span style={{ color: '#fff' }}>3</span> <span style={{ color: '#fff' }}>  x = x + 5; </span>
                    <span style={{ fontSize: 10, background: '#ef4444', color: '#fff', padding: '0 6px', borderRadius: 4, marginLeft: 'auto', fontWeight: 900, height: 18, alignSelf: 'center' }}>BREAKPOINT</span>
                  </div>
                  <div style={{ display: 'flex', gap: 16, color: 'rgba(255,255,255,0.2)' }}><span>4</span> <span style={{ color: '#fff' }}>  printf("%d", x);</span></div>
                  <div style={{ display: 'flex', gap: 16, color: 'rgba(255,255,255,0.2)' }}><span>5</span> <span style={{ color: '#fff' }}>&#125;</span></div>
                </div>
              </div>

              {/* Watch Window */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div style={{ flex: 1, background: 'rgba(255,255,255,0.02)', borderRadius: 24, border: '1px solid rgba(255,255,255,0.05)', padding: '24px' }}>
                  <h6 style={{ margin: 0, fontSize: 11, fontWeight: 900, color: '#2dd4bf', textTransform: 'uppercase', marginBottom: 20 }}>🔍 Janela de Inspeção (WATCH)</h6>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                    <WatchItem name="x" value="10" type="int" />
                    <WatchItem name="main()" value="Running..." type="function" />
                  </div>
                  <p style={{ marginTop: 24, fontSize: 11, color: 'rgba(255,255,255,0.4)', lineHeight: 1.5 }}>
                    O programa <strong>parou na linha 3</strong>. Note que `x` ainda vale 10, porque a linha 3 ainda não foi executada! 
                    Isso permite espiar o passado do código.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </TheoryCard>

    </div>
  );
}

// -----------------------------------------------------------------------------
// Componentes Auxiliares
// -----------------------------------------------------------------------------
function DeepStep({ label, desc, icon, color = 'rgba(255,255,255,0.1)' }: { label: string, desc: string, icon: React.ReactNode, color?: string }) {
  return (
    <div style={{ 
      padding: '20px', background: 'rgba(255,255,255,0.02)', borderRadius: 20, border: '1px solid rgba(255,255,255,0.05)',
      display: 'flex', alignItems: 'center', gap: 20, borderLeft: `5px solid ${color}`, transition: 'transform 0.2s',
      cursor: 'default'
    }}>
      <div style={{ 
        width: 32, height: 32, borderRadius: 8, background: `${color}20`,
        display: 'flex', alignItems: 'center', justifyContent: 'center', color: color, flexShrink: 0
      }}>
        {icon}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <span style={{ fontSize: 13, fontWeight: 900, color: '#fff' }}>{label}</span>
        <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)' }}>{desc}</span>
      </div>
    </div>
  );
}

function WatchItem({ name, value, type }: { name: string, value: string, type: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px', background: 'rgba(255,255,255,0.03)', borderRadius: 12 }}>
      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <span style={{ fontSize: 12, fontWeight: 900, color: '#2dd4bf', fontFamily: 'monospace' }}>{name}</span>
        <span style={{ fontSize: 9, color: 'rgba(255,255,255,0.2)', textTransform: 'uppercase' }}>{type}</span>
      </div>
      <span style={{ fontSize: 12, fontWeight: 900, color: '#fff', fontFamily: 'monospace' }}>{value}</span>
    </div>
  );
}

function FlowArrow() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '2px 0' }}>
      <div style={{ width: 2, height: 16, background: 'linear-gradient(to bottom, rgba(255,255,255,0.1), rgba(255,255,255,0.01))' }} />
    </div>
  );
}


// -----------------------------------------------------------------------------
// Componente: MultiByteBitView (Expanded Bit Blocks)
// -----------------------------------------------------------------------------
function MultiByteBitView() {
  const [selected, setSelected] = useState<'char' | 'short' | 'float'>('char');

  const configs = {
    char: { bytes: 1, label: 'char', color: '#fbbf24' },
    short: { bytes: 2, label: 'short', color: '#4ade80' },
    float: { bytes: 4, label: 'float', color: '#34d399' }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div style={{ display: 'flex', gap: 8 }}>
        {Object.keys(configs).map((key) => (
          <button
            key={key}
            onClick={() => setSelected(key as any)}
            style={{
              padding: '8px 16px', borderRadius: 8, fontSize: 11, fontWeight: 900, cursor: 'pointer',
              border: `1px solid ${selected === key ? configs[key as keyof typeof configs].color : 'rgba(255,255,255,0.05)'}`,
              background: selected === key ? `${configs[key as keyof typeof configs].color}15` : 'transparent',
              color: selected === key ? configs[key as keyof typeof configs].color : 'rgba(255,255,255,0.3)',
              transition: 'all 0.2s'
            }}
          >
            {key.toUpperCase()}
          </button>
        ))}
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
        {Array.from({ length: configs[selected].bytes }).map((_, bIdx) => (
          <div key={bIdx} style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <div style={{ fontSize: 9, fontWeight: 900, color: 'rgba(255,255,255,0.2)', textAlign: 'center' }}>BYTE {bIdx + 1}</div>
            <div style={{ display: 'flex', gap: 4, padding: '10px', background: 'rgba(255,255,255,0.02)', borderRadius: 10, border: '1px solid rgba(255,255,255,0.05)' }}>
              {Array.from({ length: 8 }).map((_, bitIdx) => (
                <div key={bitIdx} style={{
                  width: 14, height: 22, borderRadius: 3, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)',
                  fontSize: 10, fontWeight: 900, color: 'rgba(255,255,255,0.1)'
                }}>
                  0
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', margin: 0 }}>
        O tipo <strong>{configs[selected].label}</strong> ocupa {configs[selected].bytes} {configs[selected].bytes === 1 ? 'byte' : 'bytes'} na memória, 
        totalizando <strong>{configs[selected].bytes * 8} bits</strong>.
      </p>
    </div>
  );
}

// -----------------------------------------------------------------------------
// Componente: PremiumErrorLab (Wrong vs Right Side-by-Side Scaled)
// -----------------------------------------------------------------------------
function PremiumErrorLab() {
  const [lang, setLang] = useState<'c' | 'python'>('c');

  const content = {
    c: {
      syntax: {
        wrong: `#include <stdio.h>\nint main() {\n  prinf("Olá Mundo")\n}`,
        right: `#include <stdio.h>\nint main() {\n  printf("Olá Mundo");\n}`,
        desc: "Faltou o 't' em printf e o ponto-e-vírgula (;) no final da instrução.",
        title: "Erro de Sintaxe"
      },
      logic: {
        wrong: `float media = n1 + n2 / 2;`,
        right: `float media = (n1 + n2) / 2;`,
        desc: "A divisão vem antes da soma no C. Use parênteses para forçar a soma primeiro.",
        title: "Erro de Lógica"
      }
    },
    python: {
      syntax: {
        wrong: `if idade > 18\n  print("Adulto")`,
        right: `if idade > 18:\n  print("Adulto")`,
        desc: "Esqueceu os dois-pontos (:) que marcam o início do bloco em Python.",
        title: "Syntax Error"
      },
      logic: {
        wrong: `while contador < 10:\n  print(contador)`,
        right: `while contador < 10:\n  print(contador)\n  contador += 1`,
        desc: "Sem incrementar o contador, o programa fica preso para sempre no loop.",
        title: "Loop Infinito"
      }
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      {/* Lang Selector */}
      <div style={{ display: 'flex', gap: 12, alignSelf: 'center', background: 'rgba(255,255,255,0.03)', padding: 6, borderRadius: 16, border: '1px solid rgba(255,255,255,0.05)' }}>
        {['c', 'python'].map(l => (
          <button 
            key={l}
            onClick={() => setLang(l as any)}
            style={{ 
              padding: '10px 24px', borderRadius: 11, fontSize: 12, fontWeight: 900, cursor: 'pointer',
              border: 'none',
              background: lang === l ? 'rgba(255,255,255,0.1)' : 'transparent',
              color: lang === l ? '#fff' : 'rgba(255,255,255,0.3)', transition: 'all 0.2s'
            }}
          >
            {l === 'c' ? 'SINTAXE C' : 'SINTAXE PYTHON'}
          </button>
        ))}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
        {/* Syntax Section Card */}
        <ErrorSectionCard 
          icon={<Zap size={20} color="#fbbf24" />}
          title="Regras e Gramática (Sintaxe)"
          subtitle="O computador não entende o comando porque falta uma peça (ponto-e-vírgula, parênteses, etc)."
          accentColor="#fbbf24"
        >
          <ErrorCompareRow content={content[lang].syntax} />
        </ErrorSectionCard>

        {/* Logic Section Card */}
        <ErrorSectionCard 
          icon={<Brain size={20} color="#a78bfa" />}
          title="Sentido e Raciocínio (Lógica)"
          subtitle="O computador entende o comando, mas o resultado matemático ou o fluxo está errado."
          accentColor="#a78bfa"
        >
          <ErrorCompareRow content={content[lang].logic} />
        </ErrorSectionCard>
      </div>
    </div>
  );
}

function ErrorSectionCard({ icon, title, subtitle, accentColor, children }: { 
  icon: React.ReactNode, title: string, subtitle: string, accentColor: string, children: React.ReactNode 
}) {
  return (
    <div style={{ 
      background: 'rgba(255,255,255,0.015)', 
      borderRadius: 24, 
      border: '1px solid rgba(255,255,255,0.05)',
      overflow: 'hidden'
    }}>
      <div style={{ 
        padding: '24px 32px', 
        background: `${accentColor}05`, 
        borderBottom: '1px solid rgba(255,255,255,0.05)',
        display: 'flex',
        alignItems: 'center',
        gap: 20
      }}>
        <div style={{ 
          width: 44, height: 44, borderRadius: 12, background: `${accentColor}10`,
          display: 'flex', alignItems: 'center', justifyContent: 'center', border: `1px solid ${accentColor}20`
        }}>
          {icon}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <h5 style={{ margin: 0, fontSize: 16, fontWeight: 900, color: '#fff' }}>{title}</h5>
          <p style={{ margin: 0, fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>{subtitle}</p>
        </div>
      </div>
      <div style={{ padding: 32 }}>
        {children}
      </div>
    </div>
  );
}

function ErrorCompareRow({ content }: { content: any }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 50px minmax(0, 1fr)', gap: 24, alignItems: 'center' }}>
        <div style={{ background: 'rgba(239,68,68,0.05)', borderRadius: 20, border: '1px solid rgba(239,68,68,0.2)', overflow: 'hidden' }}>
          <div style={{ padding: '8px 16px', background: 'rgba(239,68,68,0.1)', fontSize: 10, fontWeight: 900, color: '#f87171', display: 'flex', alignItems: 'center', gap: 8 }}>
             <XCircle size={12} /> CÓDIGO COM ERRO
          </div>
          <code style={{ display: 'block', padding: '24px', fontSize: 13, fontFamily: 'monospace', color: '#fca5a5', whiteSpace: 'pre-wrap', lineHeight: 1.6 }}>{content.wrong}</code>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <ArrowRight size={24} color="rgba(255,255,255,0.1)" />
        </div>

        <div style={{ background: 'rgba(34,197,94,0.05)', borderRadius: 20, border: '1px solid rgba(34,197,94,0.2)', overflow: 'hidden' }}>
          <div style={{ padding: '8px 16px', background: 'rgba(34,197,94,0.1)', fontSize: 10, fontWeight: 900, color: '#4ade80', display: 'flex', alignItems: 'center', gap: 8 }}>
             <CheckCircle2 size={12} /> CÓDIGO CORRIGIDO
          </div>
          <code style={{ display: 'block', padding: '24px', fontSize: 13, fontFamily: 'monospace', color: '#4ade80', whiteSpace: 'pre-wrap', lineHeight: 1.6 }}>{content.right}</code>
        </div>
      </div>
      <div style={{ 
        padding: '16px 20px', 
        background: 'rgba(34,197,94,0.04)', 
        borderRadius: 16, 
        border: '1px solid rgba(34,197,94,0.08)', 
        display: 'flex', 
        gap: 12, 
        alignItems: 'center' 
      }}>
        <div style={{ padding: '6px', borderRadius: '50%', background: 'rgba(34,197,94,0.1)' }}>
          <CheckCircle2 size={14} color="#4ade80" />
        </div>
        <p style={{ margin: 0, fontSize: 13, color: 'rgba(255,255,255,0.6)', lineHeight: 1.5 }}>
          <strong style={{ color: '#4ade80' }}>Dica:</strong> {content.desc}
        </p>
      </div>
    </div>
  );
}

// -----------------------------------------------------------------------------
// Componente: PhraseTranslator (Scaled Up)
// -----------------------------------------------------------------------------
function PhraseTranslator() {
  const [text, setText] = useState('Python');

  return (
    <div style={{ padding: '32px', background: 'rgba(255,255,255,0.02)', borderRadius: 24, border: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column', gap: 24 }}>
      <h4 style={{ margin: 0, fontSize: 12, fontWeight: 900, textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', letterSpacing: 1 }}>Tradutor de Frases (Byte Flow)</h4>
      <input 
        placeholder="Escreva algo para converter..."
        value={text}
        onChange={e => setText(e.target.value)}
        style={{ padding: '16px 20px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(251,191,36,0.3)', borderRadius: 16, fontSize: 16, color: '#fff', outline: 'none' }}
      />
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
        {text.split('').map((char, i) => {
          const code = char.charCodeAt(0);
          return (
            <div key={i} style={{ padding: '16px', background: 'rgba(251,191,36,0.05)', borderRadius: 16, border: '2px solid rgba(251,191,36,0.1)', textAlign: 'center', minWidth: 100, flexGrow: 0 }}>
              <div style={{ fontSize: 20, fontWeight: 900, color: '#fbbf24', marginBottom: 8 }}>{char}</div>
              <div style={{ fontSize: 12, color: '#fbbf24', fontFamily: 'monospace', fontWeight: 900, letterSpacing: 1 }}>
                {code.toString(2).padStart(8, '0')}
              </div>
              <div style={{ fontSize: 9, fontWeight: 900, color: 'rgba(255,255,255,0.2)', marginTop: 4, textTransform: 'uppercase' }}>
                1 Byte
              </div>
            </div>
          );
        })}
      </div>

      {/* Fluxo de Bits Brutos */}
      {text.length > 0 && (
        <div style={{ marginTop: 8, padding: '24px', background: 'rgba(0,0,0,0.2)', borderRadius: 20, border: '1px solid rgba(251,191,36,0.1)' }}>
          <div style={{ fontSize: 10, fontWeight: 900, color: 'rgba(255,255,255,0.2)', textTransform: 'uppercase', marginBottom: 12, letterSpacing: 1 }}>Fluxo de Bits no Barramento (Raw Stream)</div>
          <div style={{ 
            fontSize: 14, 
            fontFamily: 'monospace', 
            color: 'rgba(251,191,36,0.8)', 
            wordBreak: 'break-all', 
            lineHeight: 1.4,
            letterSpacing: 2,
            fontWeight: 800
          }}>
            {text.split('').map(char => char.charCodeAt(0).toString(2).padStart(8, '0')).join('')}
          </div>
        </div>
      )}
    </div>
  );
}

// -----------------------------------------------------------------------------
// Componente: AsciiTool
// -----------------------------------------------------------------------------
function AsciiTool() {
  const [char, setChar] = useState('A');
  const code = char.charCodeAt(0) || 0;

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 24, padding: '24px', background: 'rgba(255,255,255,0.02)', borderRadius: 24, border: '1px solid rgba(255,255,255,0.05)' }}>
      <input 
        maxLength={1}
        value={char}
        onChange={e => setChar(e.target.value)}
        style={{ 
          width: 64, height: 64, fontSize: 32, textAlign: 'center', background: 'rgba(255,255,255,0.03)', 
          border: '2px solid rgba(251,191,36,0.5)', borderRadius: 16, color: '#fbbf24', fontWeight: 900, outline: 'none'
        }}
      />
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 11, fontWeight: 900, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', marginBottom: 4 }}>Código ASCII Unitário</div>
        <div style={{ fontSize: 32, fontWeight: 900, color: '#fbbf24' }}>{code}</div>
      </div>
    </div>
  );
}

// -----------------------------------------------------------------------------
// Componente: MemorySimulator
// -----------------------------------------------------------------------------
function MemorySimulator() {
  const [active, setActive] = useState<null | string>(null);
  
  const types = [
    { id: 'char', label: 'char', size: 1, color: '#fbbf24' },
    { id: 'short', label: 'short', size: 2, color: '#4ade80' },
    { id: 'float', label: 'float', size: 4, color: '#34d399' },
    { id: 'int', label: 'int', size: 4, color: '#60a5fa' },
    { id: 'long', label: 'long / double', size: 8, color: '#f472b6' },
  ];

  const activeType = types.find(t => t.id === active);
  const activeSize = activeType?.size || 0;
  const activeColor = activeType?.color || '#fff';

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'minmax(140px, 160px) 1fr', gap: 32, padding: '32px', background: 'rgba(255,255,255,0.02)', borderRadius: 24, border: '1px solid rgba(255,255,255,0.1)' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <div style={{ fontSize: 10, fontWeight: 900, color: 'rgba(255,255,255,0.2)', marginBottom: 4, textTransform: 'uppercase' }}>Alocação Teórica</div>
        {types.map(t => (
          <button
            key={t.id}
            onClick={() => setActive(t.id)}
            style={{
              padding: '16px', borderRadius: 16, textAlign: 'left',
              background: active === t.id ? `${t.color}15` : 'rgba(255,255,255,0.03)',
              border: `1px solid ${active === t.id ? t.color : 'rgba(255,255,255,0.05)'}`,
              color: active === t.id ? t.color : 'rgba(255,255,255,0.4)',
              fontSize: 13, fontWeight: 800, cursor: 'pointer', transition: 'all 0.2s',
              display: 'flex', flexDirection: 'column', gap: 4
            }}
          >
            <span style={{ fontSize: 14 }}>{t.label}</span>
            <span style={{ fontSize: 10, opacity: 0.6, fontWeight: 900, textTransform: 'uppercase' }}>
              {t.size} {t.size === 1 ? 'byte' : 'bytes'}
            </span>
          </button>
        ))}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
        {Array.from({ length: 16 }).map((_, i) => (
          <div
            key={i}
            style={{
              width: '100%', aspectRatio: '1/1', borderRadius: 12,
              background: i < activeSize ? `${activeColor}20` : 'rgba(255,255,255,0.02)',
              border: `1px solid ${i < activeSize ? activeColor : 'rgba(255,255,255,0.04)'}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 10, fontWeight: 900, color: i < activeSize ? activeColor : 'rgba(255,255,255,0.05)'
            }}
          >
            {i < activeSize ? 'BYTE' : '0x' + i.toString(16).toUpperCase()}
          </div>
        ))}
      </div>
    </div>
  );
}

// -----------------------------------------------------------------------------
// Componente: TheoryCard
// -----------------------------------------------------------------------------
function TheoryCard({ index, title, description, icon, accentColor, children }: { 
  index: number, title: string, description: string, icon: React.ReactNode, accentColor: string, children: React.ReactNode 
}) {
  return (
    <div style={{
      background: 'rgba(30, 30, 36, 0.4)',
      border: '1px solid rgba(255, 255, 255, 0.05)',
      borderRadius: 24,
      padding: '48px 40px',
      display: 'flex',
      flexDirection: 'column',
      gap: 40
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 12 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ fontSize: 13, fontWeight: 900, color: 'rgba(255,255,255,0.2)', letterSpacing: 3 }}>MÓDULO {index}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <div style={{ width: 56, height: 56, borderRadius: '50%', background: `${accentColor}10`, display: 'flex', alignItems: 'center', justifyContent: 'center', border: `1px solid ${accentColor}25` }}>
            {icon}
          </div>
          <h2 style={{ margin: 0, fontSize: 32, fontWeight: 900, color: '#fff', letterSpacing: '-0.02em' }}>{title}</h2>
        </div>
        <p style={{ margin: 0, fontSize: 16, color: 'rgba(255,255,255,0.5)', maxWidth: 650, lineHeight: 1.6 }}>{description}</p>
      </div>
      
      <div style={{ height: 1, width: '100%', background: 'rgba(255,255,255,0.04)' }} />

      <div style={{ position: 'relative' }}>
        {children}
      </div>
    </div>
  );
}
