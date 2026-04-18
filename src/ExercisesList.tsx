import { useState } from 'react';
import type { Language } from './App';
import type { Exercise, ExerciseListDef } from './types';
import CodeEditor from './CodeEditor';
import { useInterpreter } from './hooks/useInterpreter';
import { useCInterpreter } from './hooks/useCInterpreter';
import { getAIReview, getApiKey, setApiKey } from './services/aiService';
import { Settings, CheckCircle2, ChevronDown, Sword, BookOpen, Lightbulb, CodeXml, Trophy, ChevronRight, Lock, Cpu } from 'lucide-react';

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
  const { runPython, isInitializing: isPyInitializing } = useInterpreter();
  const { runC } = useCInterpreter();

  const isInitializing = language === 'python' ? isPyInitializing : false;

  async function handleSubmission(currentCode: string) {
    setFeedback(null);
    setAiThinking(true);

    let executionOutput: string[] = [];
    if (language === 'python') {
      executionOutput = (await runPython(currentCode)) ?? [];
    } else if (language === 'c') {
      let stdin = "";
      if (currentCode.includes('scanf')) {
        stdin = window.prompt("O programa possui 'scanf'. Digite os valores de entrada (separe por espaços):") || "";
      }
      executionOutput = await runC(currentCode, stdin);
    }

    try {
      const review = await getAIReview(currentCode, executionOutput, exercise, language, listId);
      setAiThinking(false);
      setFeedback({
        msg: review.feedback,
        ok: review.approved,
        score: review.score
      });

      if (review.approved && !completed) {
        onComplete();
      }
    } catch (err) {
      setAiThinking(false);
      console.error(err);
    }
  }

  if (language === 'logic') {
    return (
      <div style={{
        background: 'rgba(255,255,255,0.03)',
        borderRadius: 20,
        padding: 24,
        border: '1px solid rgba(255,255,255,0.05)',
        display: 'flex',
        flexDirection: 'column',
        gap: 20
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 40, height: 40, borderRadius: 10, background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: 'rgba(255,255,255,0.4)', fontSize: 14 }}>
              {index + 1}
            </div>
            <h3 style={{ margin: 0, fontSize: 18, fontWeight: 700, color: '#f3f4f6' }}>{exercise.title}</h3>
          </div>
          {completed && (
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#10b981', fontSize: 13, background: 'rgba(16,185,129,0.1)', padding: '6px 12px', borderRadius: 20, border: '1px solid rgba(16,185,129,0.2)' }}>
              <CheckCircle2 size={16} />
              <span>Concluído</span>
            </div>
          )}
        </div>

        <div style={{ background: 'rgba(0,0,0,0.2)', padding: 20, borderRadius: 16, border: '1px solid rgba(255,255,255,0.03)' }}>
           <p style={{ margin: 0, color: 'rgba(255,255,255,0.7)', lineHeight: '1.6', fontSize: 17 }}>{exercise.description}</p>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
          {exercise.options?.map((opt, i) => (
            <button
              key={i}
              onClick={() => {
                if (opt === exercise.correctAnswer) {
                  onComplete();
                } else {
                  alert("Tente novamente!");
                }
              }}
              style={{
                background: 'rgba(139, 92, 246, 0.1)',
                border: '1px solid rgba(139, 92, 246, 0.2)',
                color: '#fff',
                padding: '12px 24px',
                borderRadius: 12,
                cursor: 'pointer',
                fontSize: 14,
                transition: 'all 0.2s',
              }}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div style={{
      background: 'rgba(25,25,35,0.6)',
      backdropFilter: 'blur(10px)',
      borderRadius: 24,
      border: `1px solid ${completed ? 'rgba(16,185,129,0.2)' : 'rgba(255,255,255,0.05)'}`,
      overflow: 'hidden',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      boxShadow: completed ? '0 10px 40px -10px rgba(16,185,129,0.1)' : '0 10px 40px -10px rgba(0,0,0,0.3)',
      position: 'relative'
    }}>
      {completed && <div style={{ position: 'absolute', top: 0, right: 0, width: 60, height: 60, background: 'linear-gradient(225deg, rgba(16,185,129,0.2) 0%, transparent 70%)', display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-end', padding: 8 }}>
        <Trophy size={20} color="#10b981" />
      </div>}

      <div style={{ padding: '24px 28px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: isExpanded ? 24 : 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
             <div style={{ 
               width: 48, height: 48, borderRadius: 14, 
               background: completed ? 'rgba(16,185,129,0.1)' : 'rgba(255,255,255,0.03)', 
               display: 'flex', alignItems: 'center', justifyContent: 'center',
               border: `1px solid ${completed ? 'rgba(16,185,129,0.2)' : 'rgba(255,255,255,0.05)'}`
             }}>
               {completed ? <CheckCircle2 size={24} color="#10b981" /> : <span style={{ fontSize: 16, fontWeight: 800, color: 'rgba(255,255,255,0.3)' }}>{index + 1}</span>}
             </div>
             <div>
               <h3 style={{ margin: 0, fontSize: 19, fontWeight: 700, color: completed ? '#10b981' : '#f3f4f6' }}>{exercise.title}</h3>
               <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 4 }}>
                 <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', display: 'flex', alignItems: 'center', gap: 4 }}>
                   <Cpu size={12} /> {exercise.lesson.concept}
                 </span>
                 <span style={{ width: 3, height: 3, borderRadius: '50%', background: 'rgba(255,255,255,0.2)' }} />
                 <span style={{ fontSize: 12, color: '#fbbf24', fontWeight: 600, whiteSpace: 'nowrap' }}>+50 XP</span>
               </div>
             </div>
          </div>
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            style={{ 
              width: 40, height: 40, borderRadius: 12, background: 'rgba(255,255,255,0.03)', border: 'none', 
              color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
              transform: isExpanded ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.3s ease'
            }}
          >
            <ChevronDown size={20} />
          </button>
        </div>

        {isExpanded && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24, animation: 'fadeIn 0.3s ease' }}>
            <div style={{ display: 'flex', background: 'rgba(0,0,0,0.2)', padding: 6, borderRadius: 14, alignSelf: 'flex-start' }}>
              <button 
                onClick={() => setActiveTab('lesson')}
                style={{ 
                  padding: '8px 20px', borderRadius: 10, border: 'none', fontSize: 13, fontWeight: 600,
                  background: activeTab === 'lesson' ? 'rgba(255,255,255,0.05)' : 'transparent',
                  color: activeTab === 'lesson' ? '#fff' : 'rgba(255,255,255,0.4)',
                  cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8
                }}
              >
                <BookOpen size={14} /> Lição
              </button>
              <button 
                onClick={() => setActiveTab('editor')}
                style={{ 
                  padding: '8px 20px', borderRadius: 10, border: 'none', fontSize: 13, fontWeight: 600,
                  background: activeTab === 'editor' ? 'rgba(255,255,255,0.05)' : 'transparent',
                  color: activeTab === 'editor' ? '#fff' : 'rgba(255,255,255,0.4)',
                  cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8
                }}
              >
                <CodeXml size={14} /> Laboratório
              </button>
            </div>

            {activeTab === 'lesson' ? (
              <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: 24 }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  <div style={{ background: 'rgba(139,92,246,0.05)', border: '1px solid rgba(139,92,246,0.1)', borderRadius: 16, padding: 24 }}>
                    <h4 style={{ margin: '0 0 10px', fontSize: 14, fontWeight: 700, color: '#a78bfa', display: 'flex', alignItems: 'center', gap: 8 }}>
                      <Lightbulb size={16} /> O Desafio
                    </h4>
                    <p style={{ margin: 0, fontSize: 18, lineHeight: 1.6, color: 'rgba(255,255,255,0.8)' }}>
                      {exercise.description}
                    </p>
                  </div>
                  <div style={{ background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.03)', borderRadius: 16, padding: 20 }}>
                    <h4 style={{ margin: '0 0 10px', fontSize: 14, fontWeight: 700, color: '#e2e8f0' }}>Instruções do Mestre</h4>
                    <div style={{ margin: 0, fontSize: 16, lineHeight: 1.6, color: 'rgba(255,255,255,0.5)' }}>
                      {exercise.lesson.instructions ? (
                        <p style={{ margin: 0 }}>{exercise.lesson.instructions}</p>
                      ) : (
                        <ul style={{ margin: 0, paddingLeft: 20 }}>
                          {exercise.lesson.steps.map((step, i) => (
                            <li key={i}>{step}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  {(exercise.lesson.expectedOutput || exercise.description) && (
                    <div style={{ background: 'rgba(0,0,0,0.4)', borderRadius: 16, padding: 20, border: '1px solid rgba(16,185,129,0.1)' }}>
                      <h4 style={{ margin: '0 0 12px', fontSize: 13, fontWeight: 700, color: '#10b981', textTransform: 'uppercase' }}>Objetivo Final</h4>
                      <code style={{ fontSize: 15, color: '#fff', fontFamily: 'JetBrains Mono, monospace' }}>
                        {exercise.lesson.expectedOutput || 'Observe a descrição do desafio'}
                      </code>
                    </div>
                  )}
                  <button 
                    onClick={() => setActiveTab('editor')}
                    style={{ 
                      marginTop: 'auto', padding: '16px', borderRadius: 16, border: 'none',
                      background: 'linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)',
                      color: '#fff', fontWeight: 800, fontSize: 15, cursor: 'pointer',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
                      boxShadow: '0 8px 20px -6px rgba(139,92,246,0.5)'
                    }}
                  >
                    Começar Missão <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            ) : (
              <div style={{ height: 540 }}>
                 <div style={{ height: '100%', borderRadius: 16, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column' }}>
                    <CodeEditor 
                      initialCode={exercise.initialCode || exercise.lesson.example} 
                      language={language}
                      onExecute={handleSubmission}
                      isInitializing={isInitializing}
                      aiThinking={aiThinking}
                      feedback={feedback}
                    />
                 </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default function ExercisesList({
  lists,
  language,
  completeExercise,
  isCompleted,
  isListUnlocked,
  getListProgress
}: {
  lists: ExerciseListDef[];
  language: Language;
  completeExercise: (listId: number, exId: number, xp: number) => void;
  isCompleted: (listId: number, exId: number) => boolean;
  isListUnlocked: (listId: number) => boolean;
  getListProgress: (listId: number) => { completed: number; total: number };
}) {
  const [activeListId, setActiveListId] = useState<number>(1);
  const [showFundamentals, setShowFundamentals] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [tempKey, setTempKey] = useState(getApiKey());

  const activeList = lists.find(l => l.id === activeListId) || lists[0];

  return (
    <div style={{
      maxWidth: '1200px',
      margin: '0 auto',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      gap: 32,
      paddingBottom: 60,
      marginTop: '4%'
    }}>
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
                  📖 Conceitos Fundamentais de {language === 'python' ? 'Python' : language === 'c' ? 'C' : 'Lógica'}
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
              transform: showFundamentals ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.3s ease'
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
                  <p style={{ margin: '0 0 16px', fontSize: 15, lineHeight: '1.6', color: 'rgba(255,255,255,0.6)' }} dangerouslySetInnerHTML={{ __html: item.summary }} />
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* 🚀 Seção de Exercícios Práticos */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 8, padding: '0 8px' }}>
          <div style={{ width: 44, height: 44, borderRadius: 12, background: 'linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 12px rgba(139,92,246,0.3)' }}>
            <Sword size={22} color="#fff" />
          </div>
          <h2 style={{ margin: 0, fontSize: 24, fontWeight: 800, color: '#fff' }}>
            {language === 'python' ? '🐍 Missões — Python' : language === 'c' ? '⚙️ Missões — Linguagem C' : '🧠 Desafios de Lógica'}
          </h2>
        </div>

        {/* Tab Menu das Listas */}
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: 12, overflowX: 'auto', paddingBottom: 8, scrollbarWidth: 'none' }}>
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
          
          <div style={{ width: 1, height: 24, background: 'rgba(255,255,255,0.1)', margin: '0 8px', flexShrink: 0 }} />
          
          <div style={{ position: 'relative', flexShrink: 0 }}>
            <button 
              onClick={() => setShowSettings(!showSettings)}
              style={{ 
                background: showSettings ? 'rgba(139,92,246,0.2)' : 'rgba(255,255,255,0.05)', 
                border: `1px solid ${showSettings ? 'rgba(139,92,246,0.4)' : 'rgba(255,255,255,0.1)'}`,
                borderRadius: 12, width: 44, height: 44, display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', color: showSettings ? '#a78bfa' : 'rgba(255,255,255,0.5)', transition: '0.2s'
              }}
              title="Configurar IA"
              id="ai-settings-button"
            >
              <Settings size={20} />
            </button>

            {showSettings && (
              <div style={{
                position: 'absolute', top: '120%', right: 0, width: 320, zIndex: 9999,
                background: '#1a1a24', border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 20, padding: 20, boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
                animation: 'fadeIn 0.2s ease'
              }}>
                <h4 style={{ margin: '0 0 12px', fontSize: 14, color: '#fff', display: 'flex', alignItems: 'center', gap: 8 }}>
                   <Cpu size={16} color="#8b5cf6" /> Configuração da IA
                </h4>
                <p style={{ margin: '0 0 16px', fontSize: 12, color: 'rgba(255,255,255,0.5)', lineHeight: 1.4 }}>
                  Recomendado: <b>Groq API</b> (gsk_...) - Mais rápido e estável.<br/>
                  Alternativo: <b>Google Gemini</b> (AIza...)
                </p>
                <input 
                  type="password"
                  value={tempKey}
                  onChange={(e) => setTempKey(e.target.value)}
                  placeholder="Cole sua chave aqui (gsk_... ou AIza...)"
                  id="gemini-api-key-input"
                  style={{
                    width: '100%', background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: 12, padding: '12px', color: '#fff', fontSize: 13, marginBottom: 16,
                    outline: 'none', transition: 'border-color 0.2s'
                  }}
                />
                <button 
                  onClick={() => {
                    setApiKey(tempKey);
                    setShowSettings(false);
                    alert("Configuração salva com sucesso!");
                  }}
                  style={{
                    width: '100%', background: '#8b5cf6', color: '#fff', border: 'none',
                    borderRadius: 12, padding: '12px', fontWeight: 700, cursor: 'pointer',
                    transition: '0.2s'
                  }}
                >
                  Salvar Chave
                </button>
              </div>
            )}
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
    </div>
  );
}
