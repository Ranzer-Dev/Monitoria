import { useState } from 'react';
import { Cpu, HardDrive, Brain, Binary, AlertTriangle, ArrowRight, CheckCircle2, XCircle, Info, Image as ImageIcon, Zap, Layers, Code2 } from 'lucide-react';
import DevTerm from './DevTerm';

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

      {/* 🚀 Header */}
      <div style={{
        background: 'linear-gradient(145deg, rgba(139, 92, 246, 0.1) 0%, rgba(109, 40, 217, 0.05) 100%)',
        border: '1px solid rgba(139, 92, 246, 0.2)',
        borderRadius: 24,
        padding: '60px 24px',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 20,
        marginTop: '6.5%'
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
          A ciência por trás do código — desde o transistor que liga uma lâmpada até o programa que você vai escrever.
        </p>
      </div>

      {/* 🌟 Módulo 0: Por que 0 e 1? */}
      <TheoryCard
        index={0}
        title="Por que o Computador Pensa em 0 e 1?"
        description="A origem de tudo: o transistor, o binário e a história da Tabela ASCII."
        icon={<Zap size={20} color="#a78bfa" />}
        accentColor="#a78bfa"
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>

          {/* Seção: O Transistor */}
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: 32, alignItems: 'start' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <h4 style={{ margin: 0, fontSize: 14, fontWeight: 900, color: '#a78bfa', textTransform: 'uppercase', letterSpacing: 1 }}>⚡ O Transistor: A Chave de Tudo</h4>
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, margin: 0 }}>
                Um computador moderno tem <strong>bilhões de transistores</strong> — componentes menores que um vírus, que funcionam como <strong>chaves de luz elétricas</strong>.
              </p>
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, margin: 0 }}>
                Como qualquer chave de luz, ela só tem dois estados possíveis:
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                <div style={{ padding: '20px', background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: 16, textAlign: 'center' }}>
                  <div style={{ fontSize: 32, marginBottom: 8 }}>💡</div>
                  <div style={{ fontSize: 20, fontWeight: 900, color: '#f87171', fontFamily: 'monospace' }}>1</div>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', marginTop: 4 }}>Corrente PASSOU</div>
                  <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', marginTop: 2 }}>Lâmpada ACESA</div>
                </div>
                <div style={{ padding: '20px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 16, textAlign: 'center' }}>
                  <div style={{ fontSize: 32, marginBottom: 8 }}>🌑</div>
                  <div style={{ fontSize: 20, fontWeight: 900, color: 'rgba(255,255,255,0.3)', fontFamily: 'monospace' }}>0</div>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', marginTop: 4 }}>Corrente BLOQUEADA</div>
                  <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.2)', marginTop: 2 }}>Lâmpada APAGADA</div>
                </div>
              </div>
              <div style={{ padding: '16px 20px', background: 'rgba(167,139,250,0.06)', border: '1px solid rgba(167,139,250,0.15)', borderRadius: 14 }}>
                <p style={{ margin: 0, fontSize: 13, color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>
                  <strong style={{ color: '#a78bfa' }}>Conclusão:</strong> O computador usa 0 e 1 porque a natureza da eletricidade só permite dois estados estáveis e confiáveis. Não é uma escolha — é física!
                </p>
              </div>
            </div>

            {/* Seção: ASCII History */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <h4 style={{ margin: 0, fontSize: 14, fontWeight: 900, color: '#a78bfa', textTransform: 'uppercase', letterSpacing: 1 }}>📜 A Tabela ASCII: Um Acordo Global</h4>
              <div style={{ padding: '20px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 16, display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <span style={{ fontSize: 24, flexShrink: 0 }}>🏛️</span>
                  <div>
                    <div style={{ fontWeight: 800, color: '#fff', fontSize: 13, marginBottom: 4 }}>1963 — Nasce a ASCII</div>
                    <p style={{ margin: 0, fontSize: 12, color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>
                      A empresa americana ASA (atual ANSI) criou um padrão: um dicionário com 128 "palavras", onde cada número representava um símbolo.
                    </p>
                  </div>
                </div>
                <div style={{ height: 1, background: 'rgba(255,255,255,0.05)' }} />
                <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <span style={{ fontSize: 24, flexShrink: 0 }}>🤝</span>
                  <div>
                    <div style={{ fontWeight: 800, color: '#fff', fontSize: 13, marginBottom: 4 }}>Por que foi necessário?</div>
                    <p style={{ margin: 0, fontSize: 12, color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>
                      Antes, empresas usavam tabelas diferentes. A IBM usava uma, a AT&T usava outra. Um texto no computador da IBM virava "lixo" no da AT&T. A ASCII criou um idioma comum para máquinas.
                    </p>
                  </div>
                </div>
                <div style={{ height: 1, background: 'rgba(255,255,255,0.05)' }} />
                <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <span style={{ fontSize: 24, flexShrink: 0 }}>🔢</span>
                  <div>
                    <div style={{ fontWeight: 800, color: '#fff', fontSize: 13, marginBottom: 4 }}>Como funciona?</div>
                    <p style={{ margin: 0, fontSize: 12, color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>
                      É simplesmente uma lista de combinações: <strong>"65 = A"</strong>, <strong>"97 = a"</strong>, <strong>"48 = '0'"</strong>. O computador nunca guarda a letra A — ele guarda o número 65. Quando exibe na tela, traduz de volta para a letra.
                    </p>
                  </div>
                </div>
              </div>

              {/* Mini tabela de grupos */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <div style={{ fontSize: 11, fontWeight: 900, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: 1 }}>Grupos da Tabela ASCII</div>
                {[
                  { range: '0 – 31', label: 'Controle (não imprimíveis)', desc: 'Enter, Tab, Delete...', color: '#6b7280' },
                  { range: '32', label: 'Espaço', desc: 'O espaço em branco', color: '#9ca3af' },
                  { range: '48 – 57', label: 'Dígitos', desc: '0, 1, 2, 3... 9', color: '#fbbf24' },
                  { range: '65 – 90', label: 'Maiúsculas', desc: 'A, B, C... Z', color: '#60a5fa' },
                  { range: '97 – 122', label: 'Minúsculas', desc: 'a, b, c... z', color: '#4ade80' },
                ].map(g => (
                  <div key={g.range} style={{ display: 'flex', gap: 12, alignItems: 'center', padding: '8px 12px', background: 'rgba(255,255,255,0.02)', borderRadius: 10 }}>
                    <span style={{ fontFamily: 'monospace', fontSize: 12, fontWeight: 900, color: g.color, minWidth: 70 }}>{g.range}</span>
                    <span style={{ fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.7)' }}>{g.label}</span>
                    <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', marginLeft: 'auto' }}>{g.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Interativo: Bits como lâmpadas */}
          <div style={{ height: 1, background: 'rgba(255,255,255,0.04)' }} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <h4 style={{ margin: 0, fontSize: 14, fontWeight: 900, color: '#a78bfa', textTransform: 'uppercase', letterSpacing: 1 }}>🔮 Experimento: Construa um Número com Bits!</h4>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.6, margin: 0 }}>
              Cada bit abaixo é uma "chave de luz". Clique para ligar (1) ou desligar (0). Observe como o número decimal à direita muda!
            </p>
            <BitLampBuilder />
          </div>
        </div>
      </TheoryCard>

      {/* 🔮 Módulo 1: O Mundo Binário, ASCII e Imagens */}
      <TheoryCard
        index={1}
        title="Bits, Caracteres e Imagens"
        description="A linguagem universal: como impulsos elétricos formam toda a informação digital."
        icon={<Binary size={20} color="#fbbf24" />}
        accentColor="#fbbf24"
      >
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1px 1fr', gap: 40, alignItems: 'start' }}>
          {/* LADO ESQUERDO: TRADUTORES */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, paddingBottom: 10 }}>
              <h4 style={{ margin: 0, fontSize: 13, fontWeight: 900, color: '#fbbf24', textTransform: 'uppercase', letterSpacing: 1 }}>🔠 Do Caractere à Frase</h4>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, margin: 0 }}>
                Cada letra é um código (ASCII). Uma frase é simplesmente uma <strong>sequência de bytes</strong> guardados em ordem.
                A ferramenta abaixo funciona nos <strong>dois sentidos</strong>: escreva uma letra ou um número (0–127)!
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
                Fotos não são "fotos" para o computador, são <strong>tabelas gigantes de números</strong> representando cores.
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
                <p style={{ margin: 0, fontSize: 14, color: 'rgba(255,255,255,0.7)', lineHeight: 1.5 }}>
                  <strong style={{ color: '#fbbf24' }}>Realidade:</strong> Cada "0" e "1" acima representa uma instrução de cor. 
                  Mesmo um ícone minúsculo já exige milhares de bits trafegando pelo <strong>barramento</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </TheoryCard>

      {/* 🏗️ Módulo 2: O Mapa da Memória */}
      <TheoryCard
        index={2}
        title="A Hierarquia da Memória (RAM)"
        description="O armário de gavetas do computador: como seus dados são guardados e recuperados."
        icon={<HardDrive size={20} color="#60a5fa" />}
        accentColor="#60a5fa"
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>

          {/* Narrativa da RAM */}
          <div style={{ padding: '28px 32px', background: 'rgba(96,165,250,0.05)', border: '1px solid rgba(96,165,250,0.15)', borderRadius: 20, display: 'flex', flexDirection: 'column', gap: 16 }}>
            <h4 style={{ margin: 0, fontSize: 15, fontWeight: 900, color: '#60a5fa' }}>🗄️ Pense na RAM como um Armário de Gavetas de Vidro</h4>
            <p style={{ margin: 0, fontSize: 14, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8 }}>
              Imagine um armário gigante com <strong>milhões de gavetas numeradas</strong>, e cada gaveta guarda exatamente <strong>1 byte</strong> de informação.
              Quando o sistema operacional abre seu programa, ele reserva algumas dessas gavetas para guardar os dados que você vai usar.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
              <div style={{ flex: '1 1 200px', padding: '16px', background: 'rgba(255,255,255,0.02)', borderRadius: 14, border: '1px solid rgba(255,255,255,0.06)' }}>
                <div style={{ fontSize: 11, fontWeight: 900, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', marginBottom: 8, letterSpacing: 1 }}>Exemplo em C</div>
                <code style={{ fontSize: 13, fontFamily: 'monospace', color: '#4ade80', lineHeight: 1.8 }}>
                  int x = 10;<br />
                  <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: 12, fontWeight: 700 }}>// Reserva 4 gavetas</span><br />
                  <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: 12, fontWeight: 700 }}>// Endereços: 0x00 a 0x03</span>
                </code>
              </div>
              <div style={{ flex: '1 1 200px', padding: '16px', background: 'rgba(255,255,255,0.02)', borderRadius: 14, border: '1px solid rgba(255,255,255,0.06)' }}>
                <div style={{ fontSize: 11, fontWeight: 900, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', marginBottom: 8, letterSpacing: 1 }}>Exemplo em Python</div>
                <code style={{ fontSize: 13, fontFamily: 'monospace', color: '#fbbf24', lineHeight: 1.8 }}>
                  x = 10<br />
                  <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: 12, fontWeight: 700 }}>// O Python gerencia</span><br />
                  <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: 12, fontWeight: 700 }}>// automaticamente!</span>
                </code>
              </div>
            </div>
            <div style={{ padding: '16px 20px', background: 'rgba(96,165,250,0.06)', border: '1px solid rgba(96,165,250,0.2)', borderRadius: 14, marginTop: 8 }}>
              <p style={{ margin: 0, fontSize: 14, color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>
                <strong style={{ color: '#60a5fa' }}>📫 Por que o Endereço (0x...)?</strong><br/>
                Imagine que o computador é uma cidade e a RAM é um bairro de hotéis. O <strong>Endereço</strong> é o número do quarto. Sem ele, a CPU (o hóspede) nunca saberia onde deixou sua mala (os dados). Usamos <strong>Hexadecimal</strong> porque é um <DevTerm id="trade-off">trade-off</DevTerm> elegante: uma forma curta de escrever binários gigantes!
              </p>
            </div>
          </div>

          {/* Escala Real: Uma RAM de 2GB */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <h4 style={{ margin: 0, fontSize: 14, fontWeight: 900, color: '#60a5fa', textTransform: 'uppercase', letterSpacing: 1 }}>📊 Escala Real: Uma Memória RAM de 2GB</h4>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.6, margin: 0 }}>
              2 Gigabytes = <strong>2.147.483.648 gavetas</strong>. Confira abaixo o quanto cada tipo de dado ocupa nesse armário imenso:
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                { emoji: '🔢', label: 'Uma variável int em C', bytes: 4, desc: '4 gavetas', color: '#60a5fa', pct: 0.001 },
                { emoji: '📝', label: 'Este parágrafo de texto', bytes: 500, desc: '~500 gavetas', color: '#a78bfa', pct: 0.01 },
                { emoji: '🎵', label: 'Uma música MP3 (4 min)', bytes: 4_000_000, desc: '~4 milhões de gavetas', color: '#4ade80', pct: 0.2 },
                { emoji: '📷', label: 'Uma foto de celular (12MP raw)', bytes: 36_000_000, desc: '~36 milhões de gavetas', color: '#fbbf24', pct: 1.6 },
                { emoji: '🎥', label: 'Um vídeo HD de 10 segundos', bytes: 200_000_000, desc: '~200 milhões de gavetas', color: '#f87171', pct: 9 },
              ].map(item => (
                <div key={item.label} style={{ padding: '16px 20px', background: 'rgba(255,255,255,0.02)', borderRadius: 14, border: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                      <span style={{ fontSize: 18 }}>{item.emoji}</span>
                      <span style={{ fontSize: 13, fontWeight: 700, color: 'rgba(255,255,255,0.8)' }}>{item.label}</span>
                    </div>
                    <span style={{ fontSize: 12, fontFamily: 'monospace', color: item.color, fontWeight: 900, whiteSpace: 'nowrap', flexShrink: 0 }}>{item.desc}</span>
                  </div>
                  <div style={{ height: 6, background: 'rgba(255,255,255,0.04)', borderRadius: 3, overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: `${Math.min(item.pct, 100)}%`, background: item.color, borderRadius: 3, minWidth: 4, transition: 'width 0.5s ease' }} />
                  </div>
                  <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.2)' }}>{item.pct.toFixed(3)}% da RAM de 2GB</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ height: 1, background: 'rgba(255,255,255,0.05)' }} />

          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: 32, alignItems: 'start' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24, minWidth: 0, overflow: 'hidden' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <Layers size={18} color="#60a5fa" />
                <h4 style={{ margin: 0, fontSize: 14, fontWeight: 800, color: '#60a5fa', textTransform: 'uppercase' }}>Profundidade de Bits por Tipo</h4>
              </div>
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, margin: 0 }}>
                No C, o programador escolhe <strong>manualmente</strong> o tamanho de cada variável. Isso é poder e responsabilidade: escolha um tipo pequeno demais e os dados "transbordam"!
              </p>
              <MultiByteBitView />
            </div>
            <div style={{ minWidth: 0, overflow: 'hidden' }}>
              <MemorySimulator />
            </div>
          </div>
        </div>
      </TheoryCard>

      {/* 🧩 Módulo 3: Lógica e Tabela Verdade */}
      <TheoryCard
        index={3}
        title="Lógica Booleana: A Tomada de Decisão"
        description="Como o computador decide o que fazer com base em condições Sim (1) ou Não (0)."
        icon={<Brain size={20} color="#c026d3" />}
        accentColor="#c026d3"
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
          <TruthTableSimulator />
        </div>
      </TheoryCard>

      {/* 🤖 Módulo 4: Algoritmos Detalhados */}
      <TheoryCard
        index={4}
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
                  <span style={{ color: '#4ade80' }}>// Variáveis de Entrada</span><br />
                  <span style={{ color: '#f472b6' }}>int</span> nivel_agua_ml = 200;<br />
                  <span style={{ color: '#f472b6' }}>bool</span> aquecedor_ligado = false;<br />
                  <br />
                  <span style={{ color: '#4ade80' }}>// Lógica de Processamento</span><br />
                  <span style={{ color: '#f472b6' }}>if</span> (nivel_agua_ml &lt; 100) &#123;<br />
                  &nbsp;&nbsp;nivel_agua_ml = 500;<br />
                  &#125;<br />
                  <br />
                  aquecedor_ligado = true;<br />
                  <span style={{ color: '#4ade80' }}>printf</span>("Iniciando Aquecimento...");
                </code>
              </div>
            </div>
          </div>
        </div>
      </TheoryCard>

      {/* ⚠️ Módulo 5: Error Lab */}
      <TheoryCard
        index={5}
        title="O Laboratório de Erros"
        description="Analise códigos quebrados e aprenda a solução com comparação direta."
        icon={<AlertTriangle size={20} color="#f87171" />}
        accentColor="#f87171"
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
          <PremiumErrorLab />
        </div>
      </TheoryCard>

      {/* 🛠️ Módulo 6: IDEs & Tradutores */}
      <TheoryCard
        index={6}
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

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 50 }}>
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
                <div style={{ padding: '16px', background: 'rgba(251,191,36,0.03)', borderRadius: 16, border: '1px solid rgba(251,191,36,0.1)', fontSize: 13, color: 'rgba(255,255,255,0.6)', lineHeight: 1.5 }}>
                  <strong style={{ color: '#fbbf24' }}>💡 Curiosidade:</strong> No Python, se houver um erro na linha 50, as primeiras 49 linhas rodam normalmente antes de parar.
                </div>
              </div>
            </div>

            <div style={{ padding: '24px 32px', background: 'rgba(255,255,255,0.02)', borderRadius: 24, border: '1px solid rgba(255,255,255,0.05)', marginTop: 10 }}>
              <h4 style={{ margin: '0 0 16px', fontSize: 14, fontWeight: 900, color: '#2dd4bf', textTransform: 'uppercase', letterSpacing: 1 }}>⚖️ O Grande Trade-off: Qual escolher?</h4>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
                <div>
                  <h5 style={{ margin: '0 0 8px', fontSize: 13, fontWeight: 800, color: '#60a5fa' }}>Por que usar C?</h5>
                  <p style={{ margin: 0, fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>
                    Para criar o <DevTerm id="backend">Backend</DevTerm> de <strong>Sistemas de Missão Crítica</strong>. Onde a velocidade é tudo: Motores de Jogos e Drivers.
                  </p>
                </div>
                <div>
                  <h5 style={{ margin: '0 0 8px', fontSize: 13, fontWeight: 800, color: '#fbbf24' }}>Por que usar Python?</h5>
                  <p style={{ margin: 0, fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>
                    Para o <DevTerm id="frontend">Frontend</DevTerm> de <strong>Soluções Rápidas</strong> ou IA, onde o tempo do programador é mais valioso.
                  </p>
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

            <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 32 }}>
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
// Componente: TruthTableSimulator
// -----------------------------------------------------------------------------
function TruthTableSimulator() {
  const [gate, setGate] = useState<'AND' | 'OR' | 'NOT'>('AND');
  const [inputA, setInputA] = useState(0);
  const [inputB, setInputB] = useState(0);
  const [viewMode, setViewMode] = useState<'scenario' | 'architecture'>('scenario');

  const getResult = () => {
    if (gate === 'AND') return inputA && inputB;
    if (gate === 'OR') return inputA || inputB;
    if (gate === 'NOT') return inputA ? 0 : 1;
    return 0;
  };

  const result = getResult();

  const scenarios = {
    AND: {
      title: "Cenário: Fazer um Bolo 🎂",
      desc: "Você só consegue fazer o bolo se tiver FARINHA **E** OVOS.",
      labelA: "Tem Farinha?",
      labelB: "Tem Ovos?",
      success: "Bolo Feito! 🎉",
      fail: "Faltam ingredientes... ❌"
    },
    OR: {
      title: "Cenário: Ir para a Escola 🚌",
      desc: "Você chega na escola se tiver ÔNIBUS **OU** se ganhar CARONA.",
      labelA: "Tem Ônibus?",
      labelB: "Tem Carona?",
      success: "Chegou na escola! ✅",
      fail: "Ficou em casa... 🏠"
    },
    NOT: {
      title: "Cenário: Sensor de Luz ☀️",
      desc: "A luz de segurança só liga se **NÃO** estiver de dia.",
      labelA: "Está de Dia?",
      labelB: "",
      success: "Luz Acesa! 💡",
      fail: "Luz Apagada! 🌑"
    }
  };

  const s = scenarios[gate];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>

      {/* Seletor de Porta e Modo */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20, alignItems: 'center' }}>
        <div style={{ display: 'flex', gap: 12 }}>
          {['AND', 'OR', 'NOT'].map(g => (
            <button
              key={g}
              onClick={() => { setGate(g as any); setInputA(0); setInputB(0); }}
              style={{
                padding: '12px 24px', borderRadius: 12, fontSize: 13, fontWeight: 900, cursor: 'pointer',
                background: gate === g ? 'rgba(192, 38, 211, 0.2)' : 'rgba(255,255,255,0.03)',
                border: `1px solid ${gate === g ? '#c026d3' : 'rgba(255,255,255,0.1)'}`,
                color: gate === g ? '#fff' : 'rgba(255,255,255,0.4)',
                transition: 'all 0.2s'
              }}
            >
              PORTA {g}
            </button>
          ))}
        </div>

        <div style={{ display: 'flex', background: 'rgba(255,255,255,0.04)', padding: 4, borderRadius: 12, border: '1px solid rgba(255,255,255,0.08)' }}>
          <button
            onClick={() => setViewMode('scenario')}
            style={{
              padding: '8px 16px', borderRadius: 8, fontSize: 11, fontWeight: 800, border: 'none', cursor: 'pointer',
              background: viewMode === 'scenario' ? '#c026d3' : 'transparent',
              color: viewMode === 'scenario' ? '#fff' : 'rgba(255,255,255,0.4)',
              transition: 'all 0.2s'
            }}
          >
            MODO HUMANO
          </button>
          <button
            onClick={() => setViewMode('architecture')}
            style={{
              padding: '8px 16px', borderRadius: 8, fontSize: 11, fontWeight: 800, border: 'none', cursor: 'pointer',
              background: viewMode === 'architecture' ? '#c026d3' : 'transparent',
              color: viewMode === 'architecture' ? '#fff' : 'rgba(255,255,255,0.4)',
              transition: 'all 0.2s'
            }}
          >
            MODO MÁQUINA
          </button>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>

        {/* Lado Interativo / Visualização */}
        <div style={{ padding: '32px', background: 'rgba(255,255,255,0.02)', borderRadius: 24, border: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column', gap: 20 }}>
          {viewMode === 'scenario' ? (
            <>
              <h4 style={{ margin: 0, fontSize: 18, fontWeight: 900, color: '#c026d3' }}>{s.title}</h4>
              <p style={{ margin: 0, fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.5 }}>{s.desc}</p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 10 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: 14, color: '#fff', fontWeight: 700 }}>{s.labelA}</span>
                  <button
                    onClick={() => setInputA(inputA ? 0 : 1)}
                    style={{ padding: '8px 20px', borderRadius: 10, border: 'none', cursor: 'pointer', background: inputA ? '#4ade80' : '#4b5563', color: '#fff', fontWeight: 900, fontSize: 12 }}
                  >
                    {inputA ? 'SIM (1)' : 'NÃO (0)'}
                  </button>
                </div>

                {gate !== 'NOT' && (
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: 14, color: '#fff', fontWeight: 700 }}>{s.labelB}</span>
                    <button
                      onClick={() => setInputB(inputB ? 0 : 1)}
                      style={{ padding: '8px 20px', borderRadius: 10, border: 'none', cursor: 'pointer', background: inputB ? '#4ade80' : '#4b5563', color: '#fff', fontWeight: 900, fontSize: 12 }}
                    >
                      {inputB ? 'SIM (1)' : 'NÃO (0)'}
                    </button>
                  </div>
                )}
              </div>

              <div style={{
                marginTop: 20, padding: '24px', borderRadius: 16, textAlign: 'center',
                background: result ? 'rgba(74, 222, 128, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                border: `1px solid ${result ? '#4ade80' : '#ef4444'}`
              }}>
                <div style={{ fontSize: 12, fontWeight: 900, textTransform: 'uppercase', color: result ? '#4ade80' : '#ef4444', marginBottom: 4 }}>Resultado (Saída)</div>
                <div style={{ fontSize: 24, fontWeight: 900, color: '#fff' }}>{result ? s.success : s.fail}</div>
              </div>
            </>
          ) : (
            <ArchitectureLogicView gate={gate} inputA={inputA} inputB={inputB} result={result} setInputA={setInputA} setInputB={setInputB} />
          )}
        </div>

        {/* Tabela Verdade Socializada */}
        <div style={{ padding: '32px', background: 'rgba(0,0,0,0.2)', borderRadius: 24, border: '1px solid rgba(192, 38, 211, 0.2)' }}>
          <h4 style={{ margin: 0, fontSize: 12, fontWeight: 900, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 20 }}>Tabela Verdade Oficial: PORTA {gate}</h4>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13, fontFamily: 'monospace' }}>
            <thead>
              <tr style={{ color: 'rgba(255,255,255,0.4)', textAlign: 'left' }}>
                <th style={{ padding: '12px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>ENTRADA A</th>
                {gate !== 'NOT' && <th style={{ padding: '12px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>ENTRADA B</th>}
                <th style={{ padding: '12px', borderBottom: '1px solid rgba(255,255,255,0.1)', color: '#c026d3' }}>RESULTADO</th>
              </tr>
            </thead>
            <tbody>
              {(gate === 'NOT' ? [0, 1] : [0, 1, 2, 3]).map((row) => {
                const a = gate === 'NOT' ? row : (row >> 1) & 1;
                const b = gate === 'NOT' ? 0 : row & 1;
                const r = gate === 'AND' ? (a && b) : gate === 'OR' ? (a || b) : (a ? 0 : 1);
                const isActive = gate === 'NOT' ? (inputA === a) : (inputA === a && inputB === b);

                return (
                  <tr key={row} style={{
                    background: isActive ? 'rgba(192, 38, 211, 0.15)' : 'transparent',
                    color: isActive ? '#fff' : 'rgba(255,255,255,0.2)',
                    transition: 'all 0.2s'
                  }}>
                    <td style={{ padding: '12px', fontWeight: isActive ? 900 : 400 }}>{a}</td>
                    {gate !== 'NOT' && <td style={{ padding: '12px', fontWeight: isActive ? 900 : 400 }}>{b}</td>}
                    <td style={{ padding: '12px', color: isActive ? '#c026d3' : 'inherit', fontWeight: 900 }}>{r}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div style={{ marginTop: 24, display: 'flex', gap: 12, alignItems: 'start' }}>
            <Info size={16} color="#c026d3" style={{ marginTop: 2, flexShrink: 0 }} />
            <p style={{ margin: 0, fontSize: 11, color: 'rgba(255,255,255,0.4)', lineHeight: 1.5 }}>
              A linha destacada representa o estado atual dos seus botões. Note que a matemática da lógica nunca muda, mudamos apenas os dados!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// -----------------------------------------------------------------------------
// Componente: BitLampBuilder — 8 bits interativos como chaves de luz
// -----------------------------------------------------------------------------
function BitLampBuilder() {
  const [bits, setBits] = useState<number[]>([0, 0, 0, 0, 0, 0, 0, 0]);

  const toggleBit = (index: number) => {
    const next = [...bits];
    next[index] = next[index] === 0 ? 1 : 0;
    setBits(next);
  };

  const decimal = parseInt(bits.join(''), 2);
  const ascii = decimal >= 32 && decimal <= 126 ? String.fromCharCode(decimal) : null;

  return (
    <div style={{ padding: '28px 32px', background: 'rgba(167,139,250,0.05)', border: '1px solid rgba(167,139,250,0.15)', borderRadius: 24, display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
        {bits.map((bit, i) => (
          <button
            key={i}
            onClick={() => toggleBit(i)}
            style={{
              width: 64, height: 80, borderRadius: 16, cursor: 'pointer',
              background: bit === 1 ? 'rgba(167,139,250,0.15)' : 'rgba(255,255,255,0.03)',
              border: `2px solid ${bit === 1 ? '#a78bfa' : 'rgba(255,255,255,0.08)'}`,
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 6,
              transition: 'all 0.15s ease',
              boxShadow: bit === 1 ? '0 0 20px rgba(167,139,250,0.3)' : 'none',
            }}
          >
            <span style={{ fontSize: 24 }}>{bit === 1 ? '💡' : '🌑'}</span>
            <span style={{ fontSize: 16, fontFamily: 'monospace', fontWeight: 900, color: bit === 1 ? '#a78bfa' : 'rgba(255,255,255,0.2)' }}>{bit}</span>
            <span style={{ fontSize: 9, color: 'rgba(255,255,255,0.2)', textTransform: 'uppercase' }}>Bit {7 - i}</span>
          </button>
        ))}
      </div>
      <div style={{ display: 'flex', gap: 24, justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
        <div style={{ textAlign: 'center', padding: '16px 28px', background: 'rgba(255,255,255,0.03)', borderRadius: 16, border: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ fontSize: 11, fontWeight: 900, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', marginBottom: 4 }}>Binário</div>
          <div style={{ fontSize: 20, fontFamily: 'monospace', fontWeight: 900, color: '#a78bfa', letterSpacing: 4 }}>{bits.join('')}</div>
        </div>
        <div style={{ textAlign: 'center', padding: '16px 28px', background: 'rgba(255,255,255,0.03)', borderRadius: 16, border: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ fontSize: 11, fontWeight: 900, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', marginBottom: 4 }}>Decimal</div>
          <div style={{ fontSize: 32, fontFamily: 'monospace', fontWeight: 900, color: '#60a5fa' }}>{decimal}</div>
        </div>
        {ascii && (
          <div style={{ textAlign: 'center', padding: '16px 28px', background: 'rgba(251,191,36,0.06)', borderRadius: 16, border: '1px solid rgba(251,191,36,0.2)' }}>
            <div style={{ fontSize: 11, fontWeight: 900, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', marginBottom: 4 }}>Caractere ASCII</div>
            <div style={{ fontSize: 32, fontFamily: 'monospace', fontWeight: 900, color: '#fbbf24' }}>{ascii}</div>
          </div>
        )}
      </div>
      <p style={{ margin: 0, fontSize: 12, color: 'rgba(255,255,255,0.3)', textAlign: 'center', lineHeight: 1.6 }}>
        Tente criar a letra <strong style={{ color: '#fbbf24' }}>A</strong> (decimal 65 = <span style={{ fontFamily: 'monospace' }}>01000001</span>)!
      </p>
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
// Componente: MultiByteBitView
// -----------------------------------------------------------------------------
function MultiByteBitView() {
  const [selected, setSelected] = useState<'char' | 'short' | 'float'>('char');

  const configs = {
    char: { bytes: 1, label: 'char', color: '#fbbf24', desc: 'Guarda um único caractere ou número de -128 a 127.' },
    short: { bytes: 2, label: 'short', color: '#4ade80', desc: 'Inteiro de -32.768 a 32.767. Útil para economizar memória.' },
    float: { bytes: 4, label: 'float', color: '#34d399', desc: 'Número com casas decimais com precisão de ~7 dígitos.' }
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
        O tipo <strong>{configs[selected].label}</strong> ocupa {configs[selected].bytes} {configs[selected].bytes === 1 ? 'byte' : 'bytes'} = <strong>{configs[selected].bytes * 8} bits</strong> na RAM.
        <br /><span style={{ color: 'rgba(255,255,255,0.3)', marginTop: 4, display: 'block' }}>{configs[selected].desc}</span>
      </p>
    </div>
  );
}

// -----------------------------------------------------------------------------
// Componente: PremiumErrorLab
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
        <ErrorSectionCard
          icon={<Zap size={20} color="#fbbf24" />}
          title="Regras e Gramática (Sintaxe)"
          subtitle="O computador não entende o comando porque falta uma peça (ponto-e-vírgula, parênteses, etc)."
          accentColor="#fbbf24"
        >
          <ErrorCompareRow content={content[lang].syntax} />
        </ErrorSectionCard>

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
// Componente: PhraseTranslator
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
                ASCII {code}
              </div>
            </div>
          );
        })}
      </div>

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
// Componente: AsciiTool — Bidirecional (Letra ↔ Número)
// -----------------------------------------------------------------------------
function AsciiTool() {
  const [mode, setMode] = useState<'char' | 'num'>('char');
  const [charInput, setCharInput] = useState('A');
  const [numInput, setNumInput] = useState('65');

  const fromChar = charInput.charCodeAt(0) || 0;
  const fromNum = Math.min(127, Math.max(0, parseInt(numInput) || 0));
  const fromNumChar = fromNum >= 32 ? String.fromCharCode(fromNum) : '(não imprimível)';
  const fromNumBin = fromNum.toString(2).padStart(8, '0');
  const fromCharBin = (charInput.charCodeAt(0) || 0).toString(2).padStart(8, '0');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, padding: '24px', background: 'rgba(255,255,255,0.02)', borderRadius: 24, border: '1px solid rgba(255,255,255,0.05)' }}>
      {/* Toggle de Modo */}
      <div style={{ display: 'flex', gap: 8, background: 'rgba(255,255,255,0.03)', padding: 4, borderRadius: 10 }}>
        <button onClick={() => setMode('char')} style={{ flex: 1, padding: '8px', borderRadius: 7, border: 'none', cursor: 'pointer', background: mode === 'char' ? 'rgba(255,255,255,0.1)' : 'transparent', color: mode === 'char' ? '#fbbf24' : 'rgba(255,255,255,0.3)', fontSize: 11, fontWeight: 900, transition: 'all 0.2s' }}>
          Letra → Número
        </button>
        <button onClick={() => setMode('num')} style={{ flex: 1, padding: '8px', borderRadius: 7, border: 'none', cursor: 'pointer', background: mode === 'num' ? 'rgba(255,255,255,0.1)' : 'transparent', color: mode === 'num' ? '#60a5fa' : 'rgba(255,255,255,0.3)', fontSize: 11, fontWeight: 900, transition: 'all 0.2s' }}>
          Número → Letra
        </button>
      </div>

      {mode === 'char' ? (
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'center' }}>
            <span style={{ fontSize: 10, fontWeight: 900, color: '#fbbf24', textTransform: 'uppercase', opacity: 0.6 }}>Digite aqui</span>
            <input
              maxLength={1}
              value={charInput}
              onChange={e => setCharInput(e.target.value)}
              placeholder="?"
              style={{ width: 64, height: 64, fontSize: 32, textAlign: 'center', background: 'rgba(255,255,255,0.03)', border: '2px solid rgba(251,191,36,0.5)', borderRadius: 16, color: '#fbbf24', fontWeight: 900, outline: 'none' }}
            />
          </div>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 4 }}>
            <div style={{ fontSize: 11, fontWeight: 900, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', marginBottom: 2 }}>Código ASCII → Binário</div>
            <div style={{ fontSize: 28, fontWeight: 900, color: '#fbbf24' }}>{fromChar}</div>
            <div style={{ fontFamily: 'monospace', fontSize: 14, color: 'rgba(251,191,36,0.6)', letterSpacing: 2 }}>{fromCharBin}</div>
          </div>
        </div>
      ) : (
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'center' }}>
            <span style={{ fontSize: 10, fontWeight: 900, color: '#60a5fa', textTransform: 'uppercase', opacity: 0.6 }}>Digite aqui</span>
            <input
              type="number" min={0} max={127}
              value={numInput}
              onChange={e => setNumInput(e.target.value)}
              style={{ width: 72, height: 64, fontSize: 22, textAlign: 'center', background: 'rgba(255,255,255,0.03)', border: '2px solid rgba(96,165,250,0.5)', borderRadius: 16, color: '#60a5fa', fontWeight: 900, outline: 'none' }}
            />
          </div>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 4 }}>
            <div style={{ fontSize: 11, fontWeight: 900, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', marginBottom: 2 }}>Caractere → Binário</div>
            <div style={{ fontSize: 28, fontWeight: 900, color: '#60a5fa' }}>{fromNumChar}</div>
            <div style={{ fontFamily: 'monospace', fontSize: 14, color: 'rgba(96,165,250,0.6)', letterSpacing: 2 }}>{fromNumBin}</div>
          </div>
        </div>
      )}
    </div>
  );
}

// -----------------------------------------------------------------------------
// Componente: MemorySimulator
// -----------------------------------------------------------------------------
function MemorySimulator() {
  const [active, setActive] = useState<null | string>(null);

  const types = [
    { id: 'char', label: 'char', size: 1, color: '#fbbf24', desc: '1 gaveta' },
    { id: 'short', label: 'short', size: 2, color: '#4ade80', desc: '2 gavetas' },
    { id: 'float', label: 'float', size: 4, color: '#34d399', desc: '4 gavetas' },
    { id: 'int', label: 'int', size: 4, color: '#60a5fa', desc: '4 gavetas' },
    { id: 'long', label: 'long / double', size: 8, color: '#f472b6', desc: '8 gavetas' },
  ];

  const activeType = types.find(t => t.id === active);
  const activeSize = activeType?.size || 0;
  const activeColor = activeType?.color || '#fff';

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'minmax(120px, 120px) 1fr',
      gap: 6,
      padding: '16px',
      background: 'rgba(255,255,255,0.02)',
      borderRadius: 24,
      border: '1px solid rgba(255,255,255,0.1)',
      minWidth: 0
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
        <div style={{ fontSize: 10, fontWeight: 900, color: 'rgba(255,255,255,0.2)', marginBottom: 4, textTransform: 'uppercase' }}>Clique para alocar</div>
        {types.map(t => (
          <button
            key={t.id}
            onClick={() => setActive(t.id)}
            style={{
              padding: '12px', borderRadius: 12, textAlign: 'left',
              background: active === t.id ? `${t.color}15` : 'rgba(255,255,255,0.03)',
              border: `1px solid ${active === t.id ? t.color : 'rgba(255,255,255,0.05)'}`,
              color: active === t.id ? t.color : 'rgba(255,255,255,0.4)',
              fontSize: 12, fontWeight: 800, cursor: 'pointer', transition: 'all 0.2s',
              display: 'flex', flexDirection: 'column', gap: 2
            }}
          >
            <span style={{ fontSize: 13 }}>{t.label}</span>
            <span style={{ fontSize: 10, opacity: 0.6, fontWeight: 900, textTransform: 'uppercase' }}>
              {t.size} {t.size === 1 ? 'byte' : 'bytes'} — {t.desc}
            </span>
          </button>
        ))}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
        {Array.from({ length: 16 }).map((_, i) => (
          <div
            key={i}
            style={{
              width: '90%', aspectRatio: '1/1', borderRadius: 12,
              background: i < activeSize ? `${activeColor}20` : 'rgba(255,255,255,0.02)',
              border: `1px solid ${i < activeSize ? activeColor : 'rgba(255,255,255,0.04)'}`,
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              fontSize: 9, fontWeight: 900, color: i < activeSize ? activeColor : 'rgba(255,255,255,0.1)',
              transition: 'all 0.2s'
            }}
          >
            <span style={{ fontSize: 7, opacity: 0.5 }}>{'0x' + i.toString(16).padStart(2, '0').toUpperCase()}</span>
            {i < activeSize ? <span>B</span> : <span>──</span>}
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

// -----------------------------------------------------------------------------
// Componente: ArchitectureLogicView — Visualização de "Arquitetura/Circuito"
// -----------------------------------------------------------------------------
function ArchitectureLogicView({ gate, inputA, inputB, result, setInputA, setInputB }: {
  gate: 'AND' | 'OR' | 'NOT',
  inputA: number,
  inputB: number,
  result: number,
  setInputA: (val: number) => void,
  setInputB: (val: number) => void
}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, alignItems: 'center', padding: '10px 0' }}>
      <div style={{ textAlign: 'center' }}>
        <h4 style={{ margin: 0, fontSize: 16, fontWeight: 900, color: '#c026d3', textTransform: 'uppercase', letterSpacing: 2 }}>Esquema de Portas Lógicas</h4>
        <p style={{ margin: '4px 0 0 0', fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>Como os elétrons decidem o fluxo no processador</p>
      </div>

      <div style={{
        position: 'relative', width: '100%', height: 240, background: 'rgba(0,0,0,0.2)',
        borderRadius: 20, border: '1px solid rgba(192, 38, 211, 0.1)', overflow: 'hidden',
        display: 'flex', alignItems: 'center', justifyContent: 'center'
      }}>
        {/* Background Grid */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(192, 38, 211, 0.1) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />

        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: 60, zIndex: 2 }}>

          {/* Entradas */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 80 }}>
            <GateInput active={inputA === 1} label="IN A" onClick={() => setInputA(inputA ? 0 : 1)} />
            {gate !== 'NOT' && <GateInput active={inputB === 1} label="IN B" onClick={() => setInputB(inputB ? 0 : 1)} />}
          </div>

          {/* Fios de Conexão (Entrada) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 80, marginLeft: -10 }}>
            <Wire active={inputA === 1} length={50} />
            {gate !== 'NOT' && <Wire active={inputB === 1} length={50} />}
          </div>

          {/* Porta Lógica Principal */}
          <div style={{ position: 'relative' }}>
            <LogicGateShape type={gate} active={result === 1} />
          </div>

          {/* Fio de Conexão (Saída) */}
          <div style={{ marginLeft: -10 }}>
            <Wire active={result === 1} length={50} />
          </div>

          {/* Saída */}
          <div style={{
            width: 50, height: 50, borderRadius: 12, border: `2px solid ${result ? '#4ade80' : 'rgba(255,255,255,0.1)'}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: result ? 'rgba(74, 222, 128, 0.1)' : 'transparent',
            boxShadow: result ? '0 0 20px rgba(74, 222, 128, 0.2)' : 'none',
            flexDirection: 'column', gap: 2, transition: 'all 0.3s'
          }}>
            <span style={{ fontSize: 14, fontWeight: 900, color: result ? '#4ade80' : 'rgba(255,255,255,0.2)' }}>{result}</span>
            <span style={{ fontSize: 8, fontWeight: 900, color: 'rgba(255,255,255,0.3)' }}>OUT</span>
          </div>
        </div>

        {/* Legend */}
        <div style={{ position: 'absolute', bottom: 12, right: 16, display: 'flex', gap: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#4ade80', boxShadow: '0 0 8px #4ade80' }} />
            <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.4)', fontWeight: 700 }}>SINAL ALTO (1)</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#4b5563' }} />
            <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.4)', fontWeight: 700 }}>SINAL BAIXO (0)</span>
          </div>
        </div>
      </div>

      <div style={{ padding: '16px 20px', background: 'rgba(192, 38, 211, 0.05)', borderRadius: 16, border: '1px solid rgba(192, 38, 211, 0.1)', width: '100%' }}>
        <p style={{ margin: 0, fontSize: 13, color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>
          <strong style={{ color: '#c026d3' }}>Visão de Engenharia:</strong> No computador, isso é um arranjo físico de transistores.
          Quando você clica na entrada, está simulando a aplicação de <strong>tensão elétrica (5 Volts)</strong>.
          A "Porta" é o componente que, por sua forma física, só permite a passagem da corrente se a condição lógica for atendida.
        </p>
      </div>
    </div>
  );
}

function GateInput({ active, label, onClick }: { active: boolean, label: string, onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      style={{
        width: 60, height: 36, borderRadius: 10, border: `2px solid ${active ? '#4ade80' : 'rgba(255,255,255,0.1)'}`,
        background: active ? 'rgba(74, 222, 128, 0.1)' : 'rgba(255,255,255,0.02)',
        cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s',
        boxShadow: active ? '0 0 15px rgba(74, 222, 128, 0.2)' : 'none',
        flexDirection: 'column', padding: '4px 0'
      }}
    >
      <span style={{ fontSize: 12, fontWeight: 900, color: active ? '#4ade80' : '#fff' }}>{active ? '1' : '0'}</span>
      <span style={{ fontSize: 8, fontWeight: 900, color: 'rgba(255,255,255,0.3)' }}>{label}</span>
    </button>
  );
}

function Wire({ active, length }: { active: boolean, length: number }) {
  return (
    <div style={{ position: 'relative', width: length, height: 2, background: 'rgba(255,255,255,0.05)' }}>
      <div style={{
        position: 'absolute', inset: 0, background: active ? '#4ade80' : 'transparent',
        boxShadow: active ? '0 0 10px #4ade80' : 'none',
        transition: 'all 0.3s'
      }} />
      {active && (
        <div style={{
          position: 'absolute', top: -2, width: 6, height: 6, borderRadius: '50%', background: '#fff',
          boxShadow: '0 0 10px #fff', left: 0, animation: 'electron-flow 1.5s linear infinite'
        }} />
      )}
      <style>{`
        @keyframes electron-flow {
          0% { left: 0; opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { left: 100%; opacity: 0; }
        }
      `}</style>
    </div>
  );
}

function LogicGateShape({ type, active }: { type: 'AND' | 'OR' | 'NOT', active: boolean }) {
  const color = active ? '#4ade80' : 'rgba(255,255,255,0.1)';

  return (
    <div style={{
      position: 'relative', height: 70, border: `2px solid ${color}`,
      background: active ? 'rgba(74, 222, 128, 0.05)' : 'rgba(255,255,255,0.02)',
      borderRadius: type === 'AND' ? '0 35px 35px 0' : type === 'OR' ? '10px 45px 45px 10px' : '0',
      clipPath: type === 'OR' ? 'polygon(0% 0%, 20% 0%, 100% 50%, 20% 100%, 0% 100%, 15% 50%)' : undefined,
      width: type === 'OR' ? 100 : 90,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      transition: 'all 0.3s',
      boxShadow: active ? `0 0 30px ${color}20` : 'none'
    }}>
      {type === 'NOT' && (
        <div style={{
          width: 0, height: 0, borderTop: '35px solid transparent', borderBottom: '35px solid transparent',
          borderLeft: `60px solid ${color}`, position: 'relative', marginLeft: -20
        }}>
          <div style={{
            position: 'absolute', top: -6, right: -72, width: 12, height: 12,
            border: `2px solid ${color}`, borderRadius: '50%', background: 'transparent'
          }} />
        </div>
      )}
      <span style={{
        position: 'absolute', fontSize: 16, fontWeight: 900, color: color,
        letterSpacing: 2, pointerEvents: 'none', marginLeft: type === 'OR' ? 10 : 0
      }}>
        {type}
      </span>
    </div>
  );
}

