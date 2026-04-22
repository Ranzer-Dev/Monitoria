import React, { useState } from 'react';
import { 
  RotateCcw, Box, GitBranch, Search, Brain,
  Trash2, Scissors, Zap, Code2, Layers, Cpu, 
  HelpCircle, Share2, MousePointer2, Sparkles, AlertTriangle, Binary, ChevronRight
} from 'lucide-react';

export default function ProgrammingTechniques() {
  // Estados para os Mini-Games
  const [duckIndex, setDuckIndex] = useState(0);
  const [isKISS, setIsKISS] = useState(false);
  const [isModular, setIsModular] = useState(false);
  const [recursionDepth, setRecursionDepth] = useState(0);
  const [selectedAddress, setSelectedAddress] = useState<string | null>(null);
  const [crashKey, setCrashKey] = useState(0);
  const [stack, setStack] = useState<string[]>([]);
  const [queue, setQueue] = useState<string[]>([]);
  const [pooObjects, setPooObjects] = useState<{id: number, emoji: string}[]>([]);
  const [carPos, setCarPos] = useState(0);
  const [carStatus, setCarStatus] = useState<'stop' | 'go' | 'turn'>('stop');
  const [complexDataSize, setComplexDataSize] = useState(10);
  const [mesaStep, setMesaStep] = useState(0);
  const [refactorState, setRefactorState] = useState(0);
  const [pseudoStep, setPseudoStep] = useState(0);

  const duckQuotes = [
    "Quack! Verbalizar aciona o Córtex Pré-Frontal. Continue...",
    "Quack! Explicar o código força você a organizar o pensamento lógico.",
    "Quack! Essa variável faz o que o nome dela diz?",
    "Quack! Desacelere. O cérebro pula detalhes quando lemos em silêncio.",
    "Quack! Divida o problema. Qual a menor parte que funciona?",
    "Quack! A resposta estava aí o tempo todo, você só precisava falar!"
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 40, animation: 'fadeIn 0.5s ease-out' }}>
      
      {/* --- SEÇÃO 1: WORKFLOW --- */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <SectionHeader title="Workflow: A Arte de Trabalhar" icon={<Zap size={20} color="#fbbf24" />} color="#fbbf24" />
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: 24 }}>
           <TechCard 
            title="O Pato de Borracha" 
            icon={<HelpCircle size={24} />} 
            color="#fbbf24"
            desc="Psicologia da Aprendizagem: Explicar o código em voz alta ativa áreas de estruturação de linguagem no cérebro, revelando falhas de lógica."
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div 
                onClick={() => setDuckIndex((duckIndex + 1) % duckQuotes.length)}
                style={{ 
                  background: 'rgba(251,191,36,0.05)', padding: 16, borderRadius: 16, border: '1px solid rgba(251,191,36,0.2)',
                  cursor: 'pointer', transition: 'all 0.2s', position: 'relative'
                }}
              >
                 <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                    <span style={{ fontSize: 40, transform: `scale(${1 + (duckIndex % 2) * 0.1})`, transition: 'transform 0.2s' }}>🦆</span>
                    <div style={{ flex: 1 }}>
                      <div style={{ background: '#fff', color: '#000', padding: '8px 12px', borderRadius: '12px 12px 12px 0', fontSize: 12, fontWeight: 700, boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                        {duckQuotes[duckIndex]}
                      </div>
                    </div>
                 </div>
                 <div style={{ position: 'absolute', bottom: 4, right: 8, fontSize: 9, color: 'rgba(251,191,36,0.4)' }}>Clique no pato para conversar</div>
              </div>
            </div>
          </TechCard>
           
           <TechCard 
            title="KISS (Keep It Simple)" 
            icon={<Scissors size={24} />} 
            color="#a78bfa"
            desc="Carga Cognitiva: O cérebro humano só retém ~7 itens na memória de curto prazo. Código complexo causa sobrecarga mental."
          >
             <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ fontSize: 10, fontWeight: 900, color: isKISS ? '#a78bfa' : '#ef4444', letterSpacing: 1 }}>
                     {isKISS ? '🟢 BAIXA CARGA COGNITIVA' : '🔴 ALTA CARGA COGNITIVA'}
                  </div>
                </div>
                
                <code style={{ 
                  fontSize: 11, background: 'rgba(0,0,0,0.3)', padding: 12, borderRadius: 12, 
                  border: `1px solid ${isKISS ? 'rgba(167,139,250,0.3)' : 'rgba(239,68,68,0.3)'}`, 
                  color: isKISS ? '#e2e8f0' : '#fca5a5', transition: 'all 0.3s',
                  filter: isKISS ? 'none' : 'contrast(1.2)'
                }}>
                  {isKISS 
                    ? <div><span style={{color: '#a78bfa'}}>float</span> m = (n1 + n2) / 2;</div>
                    : <div>
                        <span style={{color: '#f87171'}}>float</span> m;<br/>
                        <span style={{color: '#f87171'}}>if</span>(n1 {'>'} 0) {'{'}<br/>
                        &nbsp;&nbsp;<span style={{color: '#f87171'}}>if</span>(n2 {'>'} 0) {'{'}<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;m = (n1+n2)/2;<br/>
                        &nbsp;&nbsp;{'}'} <span style={{color: '#f87171'}}>else</span> {'{'}<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;m = n1/2;<br/>
                        &nbsp;&nbsp;{'}'}<br/>
                        {'}'}
                      </div>
                  }
                </code>
                <button 
                  onClick={() => setIsKISS(!isKISS)}
                  style={{ 
                    background: isKISS ? 'rgba(167,139,250,0.1)' : 'linear-gradient(135deg, #a78bfa, #8b5cf6)', 
                    border: isKISS ? '1px solid rgba(167,139,250,0.3)' : 'none', 
                    color: isKISS ? '#a78bfa' : '#fff', padding: '10px', borderRadius: 8, fontSize: 12, fontWeight: 800, cursor: 'pointer'
                  }}
                >
                  {isKISS ? 'Ver Código Confuso' : '✨ Simplificar (Aplicar KISS)'}
                </button>
             </div>
          </TechCard>

           <TechCard 
            title="Modularização (Chunking)" 
            icon={<Box size={24} />} 
            color="#60a5fa"
            desc="O cérebro agrupa informações (Chunking) para entender sistemas gigantes. Módulos são 'gavetas' lógicas isoladas."
          >
             <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div style={{ display: 'flex', gap: 6, height: 50, perspective: '1000px' }}>
                   {isModular ? (
                     <>
                       <div style={{ flex: 1, background: 'rgba(96,165,250,0.1)', border: '1px solid #60a5fa', borderRadius: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', animation: 'flipIn 0.5s ease' }}>
                         <span style={{ fontSize: 16 }}>💾</span><span style={{ fontSize: 8, fontWeight: 800, color: '#60a5fa', marginTop: 2 }}>DADOS</span>
                       </div>
                       <div style={{ flex: 1, background: 'rgba(96,165,250,0.1)', border: '1px solid #60a5fa', borderRadius: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', animation: 'flipIn 0.5s ease 0.1s backwards' }}>
                         <span style={{ fontSize: 16 }}>⚙️</span><span style={{ fontSize: 8, fontWeight: 800, color: '#60a5fa', marginTop: 2 }}>LÓGICA</span>
                       </div>
                       <div style={{ flex: 1, background: 'rgba(96,165,250,0.1)', border: '1px solid #60a5fa', borderRadius: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', animation: 'flipIn 0.5s ease 0.2s backwards' }}>
                         <span style={{ fontSize: 16 }}>🖥️</span><span style={{ fontSize: 8, fontWeight: 800, color: '#60a5fa', marginTop: 2 }}>TELA</span>
                       </div>
                     </>
                   ) : (
                     <div style={{ width: '100%', background: 'rgba(239,68,68,0.1)', border: '1px dashed #ef4444', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
                       <span style={{ fontSize: 20 }}>🍝</span>
                       <span style={{ fontSize: 10, fontWeight: 800, color: '#ef4444' }}>CÓDIGO ESPAGUETE (MONOLITO)</span>
                     </div>
                   )}
                </div>
                <button 
                  onClick={() => setIsModular(!isModular)}
                  style={{ background: isModular ? 'rgba(96,165,250,0.1)' : '#60a5fa', border: isModular ? '1px solid #60a5fa' : 'none', color: isModular ? '#60a5fa' : '#fff', padding: '10px', borderRadius: 8, fontSize: 12, fontWeight: 800, cursor: 'pointer' }}
                >
                  {isModular ? 'Misturar Tudo (Ruim)' : '🧱 Separar Responsabilidades'}
                </button>
             </div>
          </TechCard>

          <TechCard 
            title="Refatoração" 
            icon={<Trash2 size={24} />} 
            color="#34d399"
            desc="Teoria das Janelas Quebradas: Um código ruim atrai mais gambiarras. Refatorar é arrumar a casa antes que piore."
          >
             <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div style={{ position: 'relative', background: 'rgba(0,0,0,0.3)', padding: 16, borderRadius: 12, border: `1px solid ${refactorState === 2 ? '#34d399' : 'rgba(255,255,255,0.1)'}`, overflow: 'hidden', minHeight: 70 }}>
                   {refactorState === 0 && (
                     <div style={{ fontSize: 11, color: '#ef4444', fontFamily: 'monospace' }}>
                       // TODO: Arrumar isso depois<br/>
                       if (usr.age {'>='} 18 && usr.st == 1) {'{'} ... {'}'}
                     </div>
                   )}
                   {refactorState === 1 && (
                     <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: '#34d399', fontSize: 12, fontWeight: 800, animation: 'pulse 1s infinite' }}>
                       🧹 Limpando código...
                     </div>
                   )}
                   {refactorState === 2 && (
                     <div style={{ fontSize: 11, color: '#34d399', fontFamily: 'monospace', animation: 'fadeIn 0.5s ease' }}>
                       const isAdult = user.age {'>='} 18;<br/>
                       const isActive = user.status === 'ACTIVE';<br/>
                       if (isAdult && isActive) {'{'} ... {'}'}
                     </div>
                   )}
                </div>
                <button 
                  onClick={() => {
                    if (refactorState === 0) {
                      setRefactorState(1); setTimeout(() => setRefactorState(2), 1200);
                    } else if (refactorState === 2) { setRefactorState(0); }
                  }}
                  disabled={refactorState === 1}
                  style={{ background: refactorState === 2 ? 'rgba(52,211,153,0.1)' : '#34d399', color: refactorState === 2 ? '#34d399' : '#000', border: refactorState === 2 ? '1px solid #34d399' : 'none', padding: '10px', borderRadius: 8, fontSize: 12, fontWeight: 800, cursor: refactorState === 1 ? 'wait' : 'pointer' }}
                >
                  {refactorState === 2 ? 'Ver código sujo' : '🧹 Iniciar Refatoração'}
                </button>
             </div>
          </TechCard>
        </div>
      </div>

      {/* --- SEÇÃO 2: LÓGICA AVANÇADA --- */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <SectionHeader title="Lógica Avançada: O Pensamento" icon={<Brain size={20} color="#c026d3" />} color="#c026d3" />
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: 24 }}>
           <TechCard 
            title="Pseudocódigo" 
            icon={<Code2 size={24} />} 
            color="#c026d3"
            desc="Tradução Mental: A ponte entre o pensamento humano (abstrato) e o rigor sintático da máquina (concreto)."
          >
             <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div style={{ display: 'flex', justifyContent: 'center', gap: 4, marginBottom: 4 }}>
                   {[0, 1, 2].map(step => (
                     <div key={step} style={{ height: 4, flex: 1, background: pseudoStep >= step ? '#c026d3' : 'rgba(255,255,255,0.1)', borderRadius: 2, transition: 'background 0.3s' }} />
                   ))}
                </div>
                <div style={{ minHeight: 70, fontSize: 11, background: 'rgba(0,0,0,0.3)', padding: 16, borderRadius: 12, lineHeight: 1.6, color: '#f5d0fe', border: '1px solid rgba(192,38,211,0.2)' }}>
                  {pseudoStep === 0 && <div><strong>1. Ideia Humana:</strong><br/>"Se o cara tiver dinheiro, deixa sacar, senão avisa."</div>}
                  {pseudoStep === 1 && <div><strong>2. Pseudocódigo:</strong><br/>SE saldo {'>='} valor_saque ENTÃO<br/>&nbsp;&nbsp;liberar(valor)<br/>SENÃO mostrar_erro()</div>}
                  {pseudoStep === 2 && <div><strong>3. Código Final (C/Python):</strong><br/><span style={{color: '#c026d3'}}>if</span> (saldo {'>='} valor) {'{'}<br/>&nbsp;&nbsp;sacar(valor);<br/>{'}'} <span style={{color: '#c026d3'}}>else</span> {'{'} erro(); {'}'}</div>}
                </div>
                <button 
                  onClick={() => setPseudoStep((pseudoStep + 1) % 3)}
                  style={{ background: 'rgba(192,38,211,0.1)', border: '1px solid #c026d3', color: '#f5d0fe', padding: '10px', borderRadius: 8, fontSize: 12, fontWeight: 700, cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 8 }}
                >
                  Evoluir Pensamento <ChevronRight size={16} />
                </button>
             </div>
          </TechCard>

           <TechCard 
            title="Teste de Mesa" 
            icon={<Layers size={24} />} 
            color="#2dd4bf"
            desc="Simulação Cognitiva: Executar mentalmente passo-a-passo cria um modelo mental correto de como o PC processa variáveis."
          >
             <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div style={{ display: 'flex', gap: 12 }}>
                   <div style={{ flex: 1, background: 'rgba(0,0,0,0.3)', padding: 12, borderRadius: 12, border: '1px solid rgba(255,255,255,0.05)' }}>
                     <code style={{ fontSize: 11, color: '#94a3b8', display: 'block', lineHeight: 1.8 }}>
                       <div style={{ background: mesaStep === 0 ? 'rgba(45,212,191,0.2)' : 'transparent', paddingLeft: 4, borderRadius: 4 }}>1. int x = 2;</div>
                       <div style={{ background: mesaStep === 1 ? 'rgba(45,212,191,0.2)' : 'transparent', paddingLeft: 4, borderRadius: 4 }}>2. x = x * 3;</div>
                       <div style={{ background: mesaStep === 2 ? 'rgba(45,212,191,0.2)' : 'transparent', paddingLeft: 4, borderRadius: 4 }}>3. x = x - 1;</div>
                     </code>
                   </div>
                   <div style={{ flex: 1, background: 'rgba(45,212,191,0.1)', borderRadius: 12, border: '1px solid rgba(45,212,191,0.3)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                      <div style={{ fontSize: 10, color: '#2dd4bf', fontWeight: 800, marginBottom: 8 }}>MEMÓRIA (x)</div>
                      <div style={{ fontSize: 28, fontWeight: 900, background: '#2dd4bf', padding: '4px 20px', borderRadius: 8, color: '#000', transition: 'all 0.3s' }}>
                        {mesaStep === 0 ? '2' : mesaStep === 1 ? '6' : '5'}
                      </div>
                   </div>
                </div>
                <button 
                  onClick={() => setMesaStep((mesaStep + 1) % 3)}
                  style={{ background: '#2dd4bf', color: '#000', border: 'none', padding: '10px', borderRadius: 8, fontSize: 12, fontWeight: 800, cursor: 'pointer' }}
                >
                  {mesaStep === 2 ? 'Reiniciar Simulação 🔄' : 'Avançar 1 Linha ➡️'}
                </button>
             </div>
          </TechCard>

           <TechCard 
            title="Recursividade" 
            icon={<RotateCcw size={24} />} 
            color="#f472b6"
            desc="O Efeito Matryoshka: Uma função chama a si mesma, resolvendo pedaços menores do problema, até chegar no 'Caso Base'."
          >
             <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, height: 110, justifyContent: 'flex-end', background: 'rgba(0,0,0,0.2)', borderRadius: 12, paddingBottom: 8 }}>
                   {[...Array(recursionDepth + 1)].map((_, i) => (
                     <div key={i} style={{ 
                       width: 140 - (i * 20), padding: '4px', background: i === recursionDepth ? '#f472b6' : 'rgba(244,114,182,0.1)',
                       border: `1px solid ${i === recursionDepth ? '#f472b6' : 'rgba(244,114,182,0.3)'}`, borderRadius: 6, textAlign: 'center', fontSize: 10, fontWeight: 800,
                       color: i === recursionDepth ? '#000' : '#f472b6', animation: 'slideDown 0.3s ease-out'
                     }}>
                       {i === 4 ? 'CASO BASE (Parada)' : `Fatorial(${5 - i})`}
                     </div>
                   )).reverse()}
                </div>
                <button 
                  onClick={() => setRecursionDepth(recursionDepth === 4 ? 0 : recursionDepth + 1)}
                  style={{ background: recursionDepth === 4 ? 'rgba(244,114,182,0.2)' : '#f472b6', border: recursionDepth === 4 ? '1px solid #f472b6' : 'none', color: recursionDepth === 4 ? '#f472b6' : '#000', padding: '10px', borderRadius: 8, fontSize: 12, fontWeight: 800, cursor: 'pointer' }}
                >
                  {recursionDepth === 4 ? 'Retornar Valores (Desempilhar) ↩️' : 'Mergulhar mais fundo ↘️'}
                </button>
             </div>
          </TechCard>

           <TechCard 
            title="Casos de Borda (Edge Cases)" 
            icon={<AlertTriangle size={24} />} 
            color="#ef4444"
            desc="A Lei de Murphy: O cérebro humano foca no 'Caminho Feliz'. Computadores exigem que você preveja o imprevisível."
          >
             <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.6)' }}>Simulação: Idade do Usuário:</div>
                <div style={{ display: 'flex', gap: 6 }}>
                  {[25, 0, -5, 999].map(age => (
                    <button
                      key={age}
                      onClick={() => setCrashKey(age)}
                      style={{ 
                        flex: 1, padding: '8px 0', background: crashKey === age ? '#ef4444' : 'rgba(255,255,255,0.05)', 
                        border: 'none', borderRadius: 8, color: crashKey === age ? '#fff' : 'rgba(255,255,255,0.6)', cursor: 'pointer', fontWeight: 800, transition: 'all 0.2s'
                      }}
                    >
                      {age}
                    </button>
                  ))}
                </div>
                <div style={{ 
                   padding: 12, borderRadius: 8, background: crashKey === -5 || crashKey === 999 ? 'rgba(239,68,68,0.2)' : 'rgba(74,222,128,0.1)',
                   border: `1px solid ${crashKey === -5 || crashKey === 999 ? '#ef4444' : '#4ade80'}`,
                   color: crashKey === -5 || crashKey === 999 ? '#fca5a5' : '#86efac', fontSize: 11, minHeight: 44, display: 'flex', alignItems: 'center'
                }}>
                   {crashKey === 0 ? '👶 Recém-nascido? Incomum, mas matematicamente válido.' :
                    crashKey === 25 ? '✅ Usuário normal. (Caminho Feliz)' :
                    crashKey === -5 ? '💥 ERRO FATAL: Idade negativa corrompe a lógica!' :
                    crashKey === 999 ? '💥 BUG: Humanos não vivem 999 anos! (Falta validação)' : 'Clique em uma idade para testar a robustez.'}
                </div>
             </div>
          </TechCard>
        </div>
      </div>

      {/* --- SEÇÃO 3: ARQUITETURA E MEMÓRIA --- */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <SectionHeader title="Arquitetura & Memória: O Alicerce" icon={<Cpu size={20} color="#60a5fa" />} color="#60a5fa" />
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: 24 }}>
           <TechCard 
            title="Ponteiros (Referências)" 
            icon={<MousePointer2 size={24} />} 
            color="#4ade80"
            desc="Memória Espacial: Você não clona uma casa de 2GB para mostrar a um amigo, você dá a ele o 'Endereço' de 8 bytes."
          >
             <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(0,0,0,0.3)', padding: 16, borderRadius: 12, border: '1px solid rgba(255,255,255,0.05)' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
                    <div style={{ background: '#4ade8020', border: '1px solid #4ade80', padding: '8px 16px', borderRadius: 8, color: '#4ade80', fontSize: 11, fontWeight: 800 }}>0x1A4B (Ponteiro)</div>
                    <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.4)' }}>Leve (8 bytes)</span>
                  </div>
                  <div style={{ fontSize: 24, color: 'rgba(255,255,255,0.2)' }}>👉</div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
                    <div style={{ background: 'rgba(255,255,255,0.05)', padding: '8px 16px', borderRadius: 8, color: '#fff', fontSize: 11, display: 'flex', alignItems: 'center', gap: 6, fontWeight: 800 }}>
                      <Box size={14} color="#4ade80" /> Objeto Real
                    </div>
                    <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.4)' }}>Pesado (2GB)</span>
                  </div>
                </div>
                <p style={{ margin: 0, fontSize: 11, color: 'rgba(255,255,255,0.5)', lineHeight: 1.5, textAlign: 'center' }}>
                   Isso otimiza a performance. Vários ponteiros podem olhar para o mesmo objeto!
                </p>
             </div>
          </TechCard>

          <TechCard 
            title="Abstração (Caixa Preta)" 
            icon={<Sparkles size={24} />} 
            color="#fbbf24"
            desc="Filtro de Informação: Ocultar a complexidade do 'como' e focar na simplicidade do 'o quê'."
          >
             <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div style={{ position: 'relative', height: 80, perspective: 1000, cursor: 'pointer' }} onClick={() => setSelectedAddress(selectedAddress === 'open' ? null : 'open')}>
                   <div style={{ 
                     position: 'absolute', width: '100%', height: '100%', background: '#fbbf24', borderRadius: 12, 
                     display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000', fontWeight: 900, fontSize: 16,
                     transformStyle: 'preserve-3d', transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)', transform: selectedAddress === 'open' ? 'rotateX(180deg)' : 'rotateX(0deg)',
                     backfaceVisibility: 'hidden'
                   }}>
                      🚗 AcelerarCarro() <span style={{ fontSize: 10, marginLeft: 8, opacity: 0.6 }}>(Clique para abrir)</span>
                   </div>
                   <div style={{ 
                     position: 'absolute', width: '100%', height: '100%', background: 'rgba(251,191,36,0.1)', border: '1px solid #fbbf24', borderRadius: 12, 
                     display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fde68a', fontSize: 11, fontFamily: 'monospace',
                     transformStyle: 'preserve-3d', transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)', transform: selectedAddress === 'open' ? 'rotateX(0deg)' : 'rotateX(-180deg)',
                     backfaceVisibility: 'hidden', padding: 8, textAlign: 'center'
                   }}>
                      injecao.sendGas();<br/>motor.rpm += 500;<br/>transmissao.check();
                   </div>
                </div>
                <p style={{ margin: 0, fontSize: 11, color: 'rgba(255,255,255,0.4)', textAlign: 'center' }}>Você pilota o carro pela interface (pedal), não mexendo nos pistões do motor.</p>
             </div>
          </TechCard>

           <TechCard 
            title="Pilha (Stack) vs Fila (Queue)" 
            icon={<Layers size={24} />} 
            color="#f43f5e"
            desc="Regras de Fluxo: Como o programa estrutura dados no tempo."
          >
             <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div style={{ display: 'flex', gap: 16 }}>
                   <div style={{ flex: 1, display: 'flex', flexDirection: 'column-reverse', gap: 2, height: 70, borderLeft: '2px solid rgba(244,63,94,0.3)', borderBottom: '2px solid rgba(244,63,94,0.3)', borderRight: '2px solid rgba(244,63,94,0.3)', padding: 4 }} title="LIFO">
                      {stack.map((item, i) => (
                        <div key={i} style={{ padding: '4px', background: '#f43f5e', borderRadius: 4, fontSize: 10, textAlign: 'center', color: '#fff', fontWeight: 800 }}>Ação Ctrl+Z</div>
                      ))}
                      {stack.length === 0 && <span style={{ fontSize: 9, textAlign: 'center', color: 'rgba(255,255,255,0.2)', marginTop: 'auto' }}>PILHA VAZIA<br/>LIFO (Último a Entrar, Primeiro a Sair)</span>}
                   </div>
                   <div style={{ flex: 1, display: 'flex', gap: 2, height: 70, borderTop: '2px solid rgba(52,211,153,0.3)', borderBottom: '2px solid rgba(52,211,153,0.3)', padding: 4, alignItems: 'center', overflow: 'hidden' }} title="FIFO">
                      {queue.map((item, i) => (
                        <div key={i} style={{ padding: '6px', background: '#34d399', borderRadius: 4, fontSize: 10, color: '#000', fontWeight: 800, writingMode: 'vertical-rl' }}>Música {i+1}</div>
                      ))}
                      {queue.length === 0 && <span style={{ fontSize: 9, textAlign: 'center', width: '100%', color: 'rgba(255,255,255,0.2)' }}>FILA VAZIA<br/>FIFO (Primeiro a Entrar, Primeiro a Sair)</span>}
                   </div>
                </div>
                <div style={{ display: 'flex', gap: 8 }}>
                   <button onClick={() => stack.length < 3 ? setStack([...stack, 'X']) : setStack(stack.slice(0, -1))} style={{ flex: 1, fontSize: 11, padding: '10px', background: 'rgba(244,63,94,0.1)', border: '1px solid #f43f5e', color: '#f43f5e', borderRadius: 8, cursor: 'pointer', fontWeight: 700 }}>{stack.length < 3 ? 'Empilhar (Push)' : 'Desfazer (Pop)'}</button>
                   <button onClick={() => queue.length < 4 ? setQueue([...queue, 'X']) : setQueue(queue.slice(1))} style={{ flex: 1, fontSize: 11, padding: '10px', background: 'rgba(52,211,153,0.1)', border: '1px solid #34d399', color: '#34d399', borderRadius: 8, cursor: 'pointer', fontWeight: 700 }}>{queue.length < 4 ? 'Enfileirar' : 'Tocar (Dequeue)'}</button>
                </div>
             </div>
          </TechCard>

          <TechCard 
            title="Eficiência (Notação Big O)" 
            icon={<Search size={24} />} 
            color="#facc15"
            desc="Escalabilidade: Avaliar como o código se comporta quando os dados passam de 10 para 1 Milhão."
          >
             <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <input 
                  type="range" min="10" max="1000" step="10" 
                  value={complexDataSize} onChange={(e) => setComplexDataSize(Number(e.target.value))}
                  style={{ width: '100%', accentColor: '#facc15', cursor: 'ew-resize' }}
                />
                <div style={{ fontSize: 11, color: '#fef08a', textAlign: 'center', fontWeight: 700 }}>Procurando em {complexDataSize} registros:</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8, background: 'rgba(0,0,0,0.3)', padding: 12, borderRadius: 12 }}>
                   <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: '#4ade80', fontWeight: 700 }}><span>O(log n) - Busca Inteligente</span> <span>{Math.round(Math.log2(complexDataSize))} passos</span></div>
                   <div style={{ width: '100%', height: 6, background: 'rgba(255,255,255,0.05)', borderRadius: 3 }}><div style={{ width: `${(Math.log2(complexDataSize)/10)*100}%`, height: '100%', background: '#4ade80', borderRadius: 3, transition: 'width 0.2s' }} /></div>
                   
                   <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: '#ef4444', fontWeight: 700, marginTop: 4 }}><span>O(n) - Busca Força Bruta</span> <span>{complexDataSize} passos</span></div>
                   <div style={{ width: '100%', height: 6, background: 'rgba(255,255,255,0.05)', borderRadius: 3 }}><div style={{ width: `${(complexDataSize/1000)*100}%`, height: '100%', background: '#ef4444', borderRadius: 3, transition: 'width 0.2s' }} /></div>
                </div>
             </div>
          </TechCard>
        </div>
      </div>

       {/* --- SEÇÃO 4: PARADIGMAS --- */}
       <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <SectionHeader title="Paradigmas: A Filosofia do Código" icon={<Share2 size={20} color="#a78bfa" />} color="#a78bfa" />
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: 24 }}>
           <TechCard 
            title="Programação Orientada a Objetos" 
            icon={<Box size={24} />} 
            color="#a78bfa"
            desc="Mundo das Ideias de Platão: A Classe é a Ideia Perfeita (molde abstrato). O Objeto é a manifestação física (instância concreta)."
          >
             <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div style={{ display: 'flex', gap: 12 }}>
                  <div style={{ flex: 1, padding: 12, background: 'rgba(167,139,250,0.1)', border: '1px solid #a78bfa', borderRadius: 12, textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <div style={{ fontSize: 10, color: '#a78bfa', fontWeight: 800, marginBottom: 4 }}>CLASSE (MOLDE)</div>
                    <div style={{ fontSize: 32 }}>🍪</div>
                    <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.5)', marginTop: 4 }}>cor = "marrom"<br/>sabor() {'{}'}</div>
                  </div>
                  <div style={{ flex: 2, display: 'flex', flexWrap: 'wrap', gap: 4, padding: 8, background: 'rgba(0,0,0,0.2)', borderRadius: 12, border: '1px dashed rgba(167,139,250,0.3)', alignItems: 'center', justifyContent: 'center' }}>
                     {pooObjects.map(obj => (
                       <div key={obj.id} style={{ fontSize: 24, animation: 'scaleIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)' }}>
                         {obj.emoji}
                       </div>
                     ))}
                     {pooObjects.length === 0 && <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.3)' }}>Crie objetos (Instâncias físicas)</span>}
                  </div>
                </div>
                <button 
                  onClick={() => setPooObjects([...pooObjects, { id: Date.now(), emoji: ['🍩','🍪','🥞','🧇'][Math.floor(Math.random()*4)] }])}
                  style={{ background: '#a78bfa', border: 'none', color: '#000', padding: '10px', borderRadius: 8, fontSize: 12, fontWeight: 800, cursor: 'pointer' }}
                >
                  Instanciar Objeto (new)
                </button>
             </div>
          </TechCard>

          <TechCard 
            title="Tipos de Dados (Tipagem)" 
            icon={<Binary size={24} />} 
            color="#fbbf24"
            desc="Princípio da Categorização: O cérebro prevê interações lógicas com base na categoria. Você não soma uma maçã com o número 2."
          >
             <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  <div style={{ background: 'rgba(251,191,36,0.1)', border: '1px solid #fbbf24', borderRadius: 8, padding: '12px', flex: 1, minWidth: 100, textAlign: 'center' }}>
                    <div style={{ fontSize: 10, color: '#fbbf24', fontWeight: 800 }}>INT (Inteiro)</div>
                    <div style={{ fontSize: 16, color: '#fff', fontWeight: 700, marginTop: 4 }}>42</div>
                  </div>
                  <div style={{ background: 'rgba(52,211,153,0.1)', border: '1px solid #34d399', borderRadius: 8, padding: '12px', flex: 1, minWidth: 100, textAlign: 'center' }}>
                    <div style={{ fontSize: 10, color: '#34d399', fontWeight: 800 }}>STRING (Texto)</div>
                    <div style={{ fontSize: 16, color: '#fff', fontWeight: 700, marginTop: 4 }}>"Olá"</div>
                  </div>
                  <div style={{ background: 'rgba(96,165,250,0.1)', border: '1px solid #60a5fa', borderRadius: 8, padding: '12px', flex: 1, minWidth: 100, textAlign: 'center' }}>
                    <div style={{ fontSize: 10, color: '#60a5fa', fontWeight: 800 }}>BOOLEAN</div>
                    <div style={{ fontSize: 16, color: '#fff', fontWeight: 700, marginTop: 4 }}>true/false</div>
                  </div>
                </div>
                <div style={{ fontSize: 11, background: 'rgba(239,68,68,0.1)', padding: 10, borderRadius: 8, color: '#fca5a5', display: 'flex', alignItems: 'center', gap: 8 }}>
                   <AlertTriangle size={16} /> Misturar tipos sem converter causa TypeErrors, pois ocupam formatos de memória diferentes!
                </div>
             </div>
          </TechCard>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes flipIn {
          from { transform: rotateX(-90deg); opacity: 0; }
          to { transform: rotateX(0); opacity: 1; }
        }
        @keyframes scaleIn {
          from { transform: scale(0); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        @keyframes slideDown {
          from { transform: translateY(-10px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}} />
    </div>
  );
}


function SectionHeader({ title, icon, color }: { title: string; icon: React.ReactNode; color: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, borderBottom: `1px solid ${color}20`, paddingBottom: 12 }}>
      <div style={{ background: `${color}15`, padding: 10, borderRadius: 12 }}>{icon}</div>
      <h3 style={{ margin: 0, fontSize: 20, fontWeight: 900, color: '#fff', letterSpacing: '-0.01em' }}>{title}</h3>
    </div>
  );
}

function TechCard({ title, icon, desc, color, children }: { title: string; icon: React.ReactNode; desc: string; color: string; children: React.ReactNode }) {
  return (
    <div style={{
      background: 'rgba(30, 30, 36, 0.4)',
      border: '1px solid rgba(255, 255, 255, 0.05)',
      borderRadius: 20,
      padding: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      transition: 'all 0.3s',
    }} className="hover:border-white/10 hover:bg-white/5 group">
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <div style={{ 
          width: 48, height: 48, borderRadius: 12, background: `${color}10`, 
          display: 'flex', alignItems: 'center', justifyContent: 'center', color: color,
          border: `1px solid ${color}20`
        }}>
          {icon}
        </div>
        <h4 style={{ margin: 0, fontSize: 17, fontWeight: 800, color: '#fff' }}>{title}</h4>
      </div>
      <p style={{ margin: 0, fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>{desc}</p>
      <div style={{ 
        flex: 1, 
        marginTop: 4, 
        paddingTop: 16, 
        borderTop: '1px solid rgba(255,255,255,0.03)' 
      }}>
        {children}
      </div>
    </div>
  );
}
