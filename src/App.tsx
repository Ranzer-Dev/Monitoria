import { useState, useEffect, useRef } from 'react';
import Confetti from 'react-confetti';
import Header from './components/Header';
import AuthOverlay from './components/AuthOverlay';
import ExercisesList from './ExercisesList';
import EducationalMaterial from './components/EducationalMaterial';
import TermosDev from './components/TermosDev';
import ErrorCatcher from './ErrorCatcher';
import { useGamification } from './hooks/useGamification';
import { allPythonLists } from './exerciseLists';
import { allCLists } from './exerciseListsC';
import { allLogicLists } from './exerciseListsLogic';

export type Language = 'python' | 'c' | 'logic';

function App() {
  const {
    stats, totalCompleted,
    completeExercise, isCompleted,
    isListUnlocked, getListProgress
  } = useGamification();
  const [showConfetti, setShowConfetti] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const [language, setLanguage] = useState<Language>('python');
  const [view, setView] = useState<'practice' | 'theory'>('theory');
  const [theoryTab, setTheoryTab] = useState<'fundamentos' | 'tecnicas' | 'glossario'>('fundamentos');
  const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
    const handleResize = () => setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    const handleViewChange = (e: any) => {
      console.log("📍 App: Evento recebido:", e.detail);
      if (e.detail?.view) {
        if (e.detail.view === 'glossary') {
            setView('theory');
            setTheoryTab('glossario');
        } else {
            setView(e.detail.view);
            if (e.detail.tab) setTheoryTab(e.detail.tab);
        }
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Função Global de Navegação (Source of Truth)
    (window as any).monitoriaNavigate = (viewName: 'practice' | 'theory' | 'glossary', tabName?: 'fundamentos' | 'tecnicas' | 'glossario') => {
      console.log("🚀 App: Navegação Global disparada para:", viewName, tabName);
      if (viewName === 'glossary') {
        setView('theory');
        setTheoryTab('glossario');
      } else {
        setView(viewName as any);
        if (tabName) setTheoryTab(tabName);
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('monitoria-change-view', handleViewChange);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('monitoria-change-view', handleViewChange);
      delete (window as any).monitoriaNavigate;
    };
  }, []);

  // Track previous count so confetti only fires on NEW completions
  const prevCountRef = useRef(totalCompleted);

  useEffect(() => {
    if (totalCompleted > prevCountRef.current) {
      // Pequeno delay para garantir que o XP e o estado atualizaram
      const timer = setTimeout(() => {
        setShowConfetti(true);
        // Desligar o confete após alguns segundos
        setTimeout(() => setShowConfetti(false), 5000);
      }, 100);

      prevCountRef.current = totalCompleted;
      return () => clearTimeout(timer);
    }
    prevCountRef.current = totalCompleted;
  }, [totalCompleted]);

  const activeLists =
    language === 'python' ? allPythonLists :
      language === 'c' ? allCLists :
        allLogicLists;

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {showConfetti && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1000, pointerEvents: 'none' }}>
          <Confetti
            width={windowSize.width}
            height={windowSize.height}
            numberOfPieces={500}
            recycle={false}
            gravity={0.15}
            colors={['#a78bfa', '#7c3aed', '#f472b6', '#fbbf24', '#34d399', '#60a5fa', '#ffffff']}
          />
        </div>
      )}
      {showAuth && <AuthOverlay onClose={() => setShowAuth(false)} />}

      <Header
        stats={stats}
        language={language}
        onLanguageChange={setLanguage}
        view={view}
        onViewChange={(v, t) => {
          setView(v);
          if (t) setTheoryTab(t);
        }}
      />

      <main className="flex-1 w-full max-w-6xl mx-auto px-4 md:px-8 pt-40 pb-8">
        {view === 'practice' ? (
          <ExercisesList
            key={language}
            lists={activeLists}
            language={language}
            completeExercise={(listId, exId, xp) => completeExercise(listId, exId, language, xp)}
            isCompleted={(listId, exId) => isCompleted(listId, exId, language)}
            isListUnlocked={(listId) => isListUnlocked(listId, language)}
            getListProgress={(listId) => getListProgress(listId, language)}
          />
        ) : (
          <EducationalMaterial initialTab={theoryTab} />
        )}
      </main>

      <ErrorCatcher />
    </div>
  );
}

export default App;
