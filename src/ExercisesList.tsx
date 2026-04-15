import { useState, useEffect, useRef } from 'react';
import type { Language } from './App';
import type { Exercise, Fundamental, ExerciseListDef } from './types';
import CodeEditor from './CodeEditor';
import { useInterpreter } from './hooks/useInterpreter';
import { useCInterpreter } from './hooks/useCInterpreter';
import { simulateAIAnalysis } from './aiSimulator';
import { CheckCircle2, ChevronDown, Clock, Zap, Sword, BookOpen, Lightbulb, CodeXml, Trophy, ChevronRight, Lock, Play, Cpu, Terminal as TerminalIcon, Sparkles, Send } from 'lucide-react';

function ExerciseCard({ exercise, index, completed, onComplete, language, listId }: {
  exercise: Exercise,
  index: number,
  completed: boolean,
  language: Language,
  listId: number,
  onComplete: () => void
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState<'lesson' | 'editor'>('lesson');
  const [feedback, setFeedback] = useState<{ msg: string; ok: boolean; score?: number } | null>(null);
  const [aiThinking, setAiThinking] = useState(false);
  const [code, setCode] = useState("");
  const { runPython, output: pyOutput, isLoading: pyLoading, isInitializing: pyInit } = useInterpreter();
  const { runC, output: cOutput, isLoading: cLoading, isInitializing: cInit } = useCInterpreter();

  const output = language === 'python' ? pyOutput : cOutput;
  const isLoading = language === 'python' ? pyLoading : cLoading;
  const isInitializing = language === 'python' ? pyInit : cInit;

  // Função para executar a lógica da IA Simulation
  async function handleSubmission(currentCode: string) {
    setFeedback(null);
    setAiThinking(true);
    
    // 1. Execução Real
    let executionOutput: string[] = [];
    if (language === 'python') {
      executionOutput = await runPython(currentCode);
    } else {
      executionOutput = await runC(currentCode);
    }

    // Pequeno delay para simular a IA "pensando"
    setTimeout(() => {
      const review = simulateAIAnalysis(currentCode, executionOutput, listId, exercise.id, language);
      
      setAiThinking(false);
      setFeedback({ 
        msg: review.feedback, 
        ok: review.approved, 
        score: review.score 
      });

      if (review.approved && !completed) {
        onComplete();
      }
    }, 1500);
  }

  return (
    <div
      style={{
        background: completed ? 'rgba(34,197,94,0.05)' : 'rgba(30, 30, 36, 0.4)',
        border: completed ? '1px solid rgba(34, 197, 94, 0.2)' : '1px solid rgba(255, 255, 255, 0.05)',
        borderRadius: 16,
        overflow: 'hidden',
        transition: 'all 0.2s ease',
      }}
    >
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        style={{
          width: '100%',
          background: 'none',
          border: 'none',
          padding: '24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          textAlign: 'center',
          position: 'relative'
        }}
      >
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 8 }}>
            <span style={{ fontSize: 13, fontWeight: 700, color: 'rgba(255,255,255,0.4)', letterSpacing: 1 }}>MISSÃO {index + 1}</span>
            {completed && <span style={{ fontSize: 12, fontWeight: 600, color: '#4ade80', background: 'rgba(34,197,94,0.1)', padding: '2px 8px', borderRadius: 12 }}>Concluída</span>}
          </div>
          <h3 style={{ margin: '0 0 8px', fontSize: 20, fontWeight: 700, color: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12 }}>
            <div style={{
              width: 32, height: 32, borderRadius: '50%',
              background: completed ? 'rgba(34, 197, 94, 0.1)' : 'rgba(139, 92, 246, 0.1)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
            }}>
              {completed ? <CheckCircle2 size={18} color="#4ade80" /> : <Trophy size={16} color="#8b5cf6" />}
            </div>
            {exercise.title}
          </h3>
          <p style={{ margin: '0 auto', fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.5, maxWidth: 600 }}>
            {exercise.description}
          </p>
        </div>

        <div style={{
          position: 'absolute', right: 24, top: '50%', marginTop: -16,
          width: 32, height: 32, borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center',
          transform: isExpanded ? 'rotate(180deg)' : 'rotate(0)' , transition: 'transform 0.3s ease'
        }}>
          <ChevronDown size={18} color="rgba(255,255,255,0.5)" />
        </div>
      </button>

      {isExpanded && (
        <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
          {/* Tabs: Mini Aula | Editor */}
          <div style={{ display: 'flex', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
            <button
              onClick={() => setActiveTab('lesson')}
              style={{
                flex: 1, padding: '16px', background: activeTab === 'lesson' ? 'rgba(255,255,255,0.03)' : 'transparent',
                border: 'none', borderBottom: activeTab === 'lesson' ? '2px solid #fbbf24' : '2px solid transparent',
                color: activeTab === 'lesson' ? '#fbbf24' : 'rgba(255,255,255,0.4)',
                fontSize: 14, fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8
              }}
            >
              <Lightbulb size={18} /> Mini Aula
            </button>
            <button
              onClick={() => setActiveTab('editor')}
              style={{
                flex: 1, padding: '16px', background: activeTab === 'editor' ? 'rgba(255,255,255,0.03)' : 'transparent',
                border: 'none', borderBottom: activeTab === 'editor' ? '2px solid #8b5cf6' : '2px solid transparent',
                color: activeTab === 'editor' ? '#a78bfa' : 'rgba(255,255,255,0.4)',
                fontSize: 14, fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8
              }}
            >
              <CodeXml size={18} /> Resolva Aqui
            </button>
          </div>

          {/* Tab: Lesson */}
          {activeTab === 'lesson' && (
            <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: 24 }}>
              <div style={{ padding: '16px', background: 'rgba(0,0,0,0.2)', borderRadius: 12, borderLeft: '4px solid #fbbf24' }}>
                <h4 style={{ margin: '0 0 8px', fontSize: 13, textTransform: 'uppercase', color: '#fbbf24', letterSpacing: 1 }}>1. O que você precisa saber</h4>
                <p style={{ margin: 0, fontSize: 14, lineHeight: '1.6', color: 'rgba(255,255,255,0.8)' }}>
                  {exercise.lesson.concept}
                </p>
              </div>

              <div>
                <h4 style={{ margin: '0 0 12px', fontSize: 13, textTransform: 'uppercase', color: '#60a5fa', letterSpacing: 1 }}>2. Exemplo de Código</h4>
                <div style={{ background: '#111', padding: '16px', borderRadius: 12, border: '1px solid rgba(255,255,255,0.1)' }}>
                  <code style={{ fontFamily: 'monospace', fontSize: 13, lineHeight: '1.6', color: '#4ade80' }}>
                    {exercise.lesson.example.split('\n').map((line: string, i: number) => {
                      const isComment = line.trim().startsWith(language === 'python' ? '#' : '//');
                      return (
                        <div key={i} style={{ whiteSpace: 'pre', color: isComment ? '#94a3b8' : '#e2e8f0' }}>{line || ' '}</div>
                      );
                    })}
                  </code>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <div style={{ padding: '16px', background: 'rgba(255,255,255,0.02)', borderRadius: 12 }}>
                  <h4 style={{ margin: '0 0 12px', fontSize: 13, textTransform: 'uppercase', color: '#a78bfa', letterSpacing: 1 }}>3. Passo a Passo</h4>
                  <ul style={{ margin: 0, paddingLeft: 20, color: 'rgba(255,255,255,0.6)', fontSize: 13, lineHeight: '1.6', display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {exercise.lesson.steps.map((step: string, i: number) => <li key={i}>{step}</li>)}
                  </ul>
                </div>
                
                <div style={{ padding: '16px', background: 'rgba(255,255,255,0.02)', borderRadius: 12 }}>
                  <h4 style={{ margin: '0 0 12px', fontSize: 13, textTransform: 'uppercase', color: '#f472b6', letterSpacing: 1 }}>4. Dicas Extras</h4>
                  <ul style={{ margin: 0, paddingLeft: 20, color: 'rgba(255,255,255,0.6)', fontSize: 13, lineHeight: '1.6', display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {exercise.tips.map((tip: string, i: number) => <li key={i}>{tip}</li>)}
                  </ul>
                </div>
              </div>

              <button
                onClick={() => setActiveTab('editor')}
                style={{
                  background: 'linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)', color: '#fff', border: 'none', padding: '14px', borderRadius: 12,
                  fontSize: 15, fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, boxShadow: '0 4px 12px rgba(139,92,246,0.3)'
                }}
              >
                Ir para o Editor <ChevronRight size={18} />
              </button>
            </div>
          )}

          {/* Tab: Editor */}
          {activeTab === 'editor' && (
            <div style={{ padding: '16px 20px 24px', display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: 20 }}>
                {/* Lado Esquerdo: Editor */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <CodeEditor 
                    onChange={(newCode) => setCode(newCode)}
                    onSubmit={(currentCode) => {
                      handleSubmission(currentCode);
                    }} 
                  />
                  {/* Botões de Ação Rápidos */}
                  <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                    <button
                      onClick={() => language === 'python' ? runPython(code) : runC(code)}
                      style={{
                        padding: '10px 16px', borderRadius: 10, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
                        color: '#fff', fontSize: 13, fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8
                      }}
                    >
                      <Play size={14} /> Testar Código
                    </button>

                    <button
                      disabled={!code.trim()}
                      onClick={() => handleSubmission(code)}
                      style={{
                        padding: '10px 20px', borderRadius: 10, background: '#8b5cf6', border: 'none',
                        color: '#fff', fontSize: 13, fontWeight: 700, cursor: code.trim() ? 'pointer' : 'not-allowed', 
                        display: 'flex', alignItems: 'center', gap: 8, opacity: code.trim() ? 1 : 0.5,
                        boxShadow: code.trim() ? '0 4px 12px rgba(139,92,246,0.3)' : 'none',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      <Send size={14} /> Enviar Missão
                    </button>

                    {(isLoading || isInitializing) && (
                      <span style={{ fontSize: 12, color: '#fbbf24', display: 'flex', alignItems: 'center', gap: 6 }}>
                        <Cpu size={14} className="animate-spin" /> {isInitializing ? 'Iniciando...' : 'Executando...'}
                      </span>
                    )}
                  </div>
                </div>

                {/* Lado Direito: Console & Feedback IA */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  {/* Terminal / Console */}
                  <div style={{ 
                    flex: 1, background: '#0a0a0c', borderRadius: 12, border: '1px solid rgba(255,255,255,0.1)',
                    display: 'flex', flexDirection: 'column', overflow: 'hidden'
                  }}>
                    <div style={{ padding: '8px 12px', background: 'rgba(255,255,255,0.03)', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', gap: 8 }}>
                      <TerminalIcon size={14} color="rgba(255,255,255,0.4)" />
                      <span style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase' }}>Console Output</span>
                    </div>
                    <div style={{ 
                      padding: '12px', flex: 1, fontFamily: 'monospace', fontSize: 13, color: '#4ade80', overflowY: 'auto',
                      minHeight: 120, maxHeight: 200, whiteSpace: 'pre-wrap'
                    }}>
                      {output.length > 0 ? output.join('\n') : (language === 'python' ? '> Aguardando execução...' : '> Clique em enviar para validar.')}
                    </div>
                  </div>

                  {/* IA Analysis Feedback Panel */}
                  <div style={{ 
                    padding: '16px', borderRadius: 12, background: 'rgba(139,92,246,0.05)', border: '1px solid rgba(139,92,246,0.15)',
                    display: 'flex', flexDirection: 'column', gap: 12, position: 'relative', overflow: 'hidden'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <Sparkles size={16} color="#a78bfa" />
                      <span style={{ fontSize: 12, fontWeight: 700, color: '#a78bfa', textTransform: 'uppercase' }}>Review da Inteligência Artificial</span>
                    </div>

                    {aiThinking ? (
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                        <div style={{ height: 14, width: '90%', background: 'rgba(255,255,255,0.05)', borderRadius: 4 }} className="animate-pulse" />
                        <div style={{ height: 14, width: '70%', background: 'rgba(255,255,255,0.05)', borderRadius: 4 }} className="animate-pulse" />
                        <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)' }}>IA analisando estratégia e lógica...</span>
                      </div>
                    ) : feedback ? (
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                        <p style={{ margin: 0, fontSize: 13, lineHeight: '1.5', color: feedback.ok ? '#e2e8f0' : '#fca5a5' }}>
                          {feedback.msg}
                        </p>
                        {feedback.ok && (
                          <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, fontWeight: 700, color: '#4ade80', background: 'rgba(34,197,94,0.1)', padding: '4px 8px', borderRadius: 8, width: 'fit-content' }}>
                            <CheckCircle2 size={14} /> Missão Aprovada
                          </div>
                        )}
                      </div>
                    ) : (
                      <p style={{ margin: 0, fontSize: 12, color: 'rgba(255,255,255,0.3)', fontStyle: 'italic' }}>
                        Submeta seu código para receber um feedback inteligente da nossa IA.
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <button
                onClick={() => setActiveTab('lesson')}
                style={{ alignSelf: 'flex-start', fontSize: 12, color: 'rgba(255,255,255,0.4)', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6 }}
              >
                ← Voltar para a Mini Aula
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function ExercisesList({ 
  lists, 
  language,
  completeExercise, 
  isCompleted,
  isListCompleted,
  isListUnlocked,
  getListProgress
}: { 
  lists: ExerciseListDef[];
  language: Language;
  completeExercise: (listId: number, exId: number, xp: number) => void;
  isCompleted: (listId: number, exId: number) => boolean;
  isListCompleted: (listId: number) => boolean;
  isListUnlocked: (listId: number) => boolean;
  getListProgress: (listId: number) => { completed: number; total: number };
}) {
  const [activeListId, setActiveListId] = useState<number>(1);
  const [showFundamentals, setShowFundamentals] = useState(false);

  const activeList = lists.find(l => l.id === activeListId) || lists[0];

  return (
    <div style={{ 
      maxWidth: '1200px', 
      margin: '0 auto', 
      width: '100%', 
      display: 'flex', 
      flexDirection: 'column', 
      gap: 32, 
      paddingBottom: 60 
    }}>
      {/* 📚 Seção de Conceitos Fundamentais (Apenas da Lista Ativa) */}
      {activeList.fundamentals.length > 0 && (
        <div style={{ 
          background: 'linear-gradient(145deg, rgba(251,191,36,0.1) 0%, rgba(217,119,6,0.05) 100%)',
          border: '1px solid rgba(251,191,36,0.2)',
          borderRadius: 20,
          overflow: 'hidden',
          boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
        }}>
          <button
            onClick={() => setShowFundamentals(!showFundamentals)}
            style={{
              width: '100%', background: 'none', border: 'none', cursor: 'pointer', padding: '32px 24px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', position: 'relative'
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
              <div style={{ width: 56, height: 56, borderRadius: 16, background: 'rgba(251,191,36,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <BookOpen size={28} color="#fbbf24" />
              </div>
              <div>
                <p style={{ margin: 0, fontWeight: 800, fontSize: 15, color: '#fbbf24', textTransform: 'uppercase', letterSpacing: 1 }}>
                  📖 Conceitos Fundamentais de {language === 'python' ? 'Python' : 'C'}
                </p>
                <h2 style={{ margin: '8px 0 0', fontSize: 26, fontWeight: 800, color: '#fff' }}>
                  Antes de começar a Lista {activeList.id}...
                </h2>
                <p style={{ margin: '12px auto 0', fontSize: 15, color: 'rgba(255,255,255,0.6)', lineHeight: '1.6', maxWidth: 600 }}>
                  Expanda para ler o material base necessário para resolver os desafios desta lista.
                </p>
              </div>
            </div>
            <div style={{ 
               position: 'absolute', right: 24, top: '50%', marginTop: -16,
               width: 32, height: 32, borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center',
               transform: showFundamentals ? 'rotate(180deg)' : 'rotate(0)' , transition: 'transform 0.3s ease'
            }}>
              <ChevronDown size={18} color="#fbbf24" />
            </div>
          </button>

          {showFundamentals && (
            <div style={{ padding: '0 24px 32px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 16 }}>
              {activeList.fundamentals.map((item) => (
                <div key={item.id} style={{
                  background: 'rgba(0,0,0,0.2)', borderRadius: 16, padding: '20px', border: '1px solid rgba(255,255,255,0.03)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                    <span style={{ fontSize: 24, textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>{item.icon}</span>
                    <h3 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: '#f3f4f6' }}>{item.title}</h3>
                  </div>
                  <p style={{ margin: '0 0 16px', fontSize: 13, lineHeight: '1.6', color: 'rgba(255,255,255,0.6)' }}>
                    {item.summary}
                  </p>
                  <div style={{ background: '#111', padding: '16px', borderRadius: 12, border: '1px solid rgba(255,255,255,0.05)' }}>
                    <code style={{ fontFamily: 'monospace', fontSize: 13, lineHeight: '1.5', color: '#4ade80' }}>
                      {item.example.split('\n').map((line: string, i: number) => (
                        <div key={i} style={{ whiteSpace: 'pre' }}>{line || ' '}</div>
                      ))}
                    </code>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      <div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 16 }}>
          <Sword size={24} color="#8b5cf6" />
          <h2 style={{ margin: 0, fontSize: 24, fontWeight: 800, color: '#fff' }}>
            {language === 'python' ? '🐍 Missões — Python' : '⚙️ Missões — Linguagem C'}
          </h2>
        </div>

        {/* Tab Menu das Listas */}
        <div style={{ display: 'flex', gap: 12, overflowX: 'auto', paddingBottom: 16, scrollbarWidth: 'none', justifyContent: 'center' }}>
          {lists.map((list) => {
            const unlocked = isListUnlocked(list.id);
            const { completed, total } = getListProgress(list.id);
            const isFullyDone = completed === total && total > 0;
            const isActive = list.id === activeListId;

            return (
              <button
                key={list.id}
                disabled={!unlocked}
                onClick={() => setActiveListId(list.id)}
                style={{
                  display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0,
                  padding: '12px 20px', borderRadius: 20, border: 'none',
                  background: isActive ? '#8b5cf6' : unlocked ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.02)',
                  color: isActive ? '#fff' : unlocked ? '#e2e8f0' : 'rgba(255,255,255,0.3)',
                  cursor: unlocked ? 'pointer' : 'not-allowed',
                  transition: 'all 0.2s ease',
                  fontWeight: isActive ? 700 : 500,
                  boxShadow: isActive ? '0 4px 12px rgba(139,92,246,0.3)' : 'none',
                }}
              >
                {!unlocked ? <Lock size={16} /> : isFullyDone ? <CheckCircle2 size={16} /> : <span>{list.icon}</span>}
                <span>Lista {list.id}</span>
                {unlocked && (
                  <span style={{ 
                    marginLeft: 4, fontSize: 12, 
                    background: isActive ? 'rgba(0,0,0,0.2)' : 'rgba(255,255,255,0.1)', 
                    padding: '2px 8px', borderRadius: 12 
                  }}>
                    {completed}/{total}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Exercícios da Lista Selecionada */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {activeList.exercises.map((ex, index) => (
          <ExerciseCard
            key={ex.id}
            listId={activeList.id}
            exercise={ex}
            index={index}
            language={language}
            completed={isCompleted(activeList.id, ex.id)}
            onComplete={() => completeExercise(activeList.id, ex.id, 50)}
          />
        ))}
      </div>
    </div>
  );
}
