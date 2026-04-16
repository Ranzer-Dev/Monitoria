import { useState, useEffect } from 'react';
import type { Language } from '../App';
import { allPythonLists } from '../exerciseLists';
import { allCLists } from '../exerciseListsC';
import { allLogicLists } from '../exerciseListsLogic';

export interface UserStats {
  xp: number;
  level: number;
  streak: number;
  completedPython: string[]; // now stores 'listId-exId'
  completedC: string[];      // now stores 'listId-exId'
  completedLogic: string[];  // NEW: support for logic challenges
  lastActive: string | null;
}

const INITIAL_STATS: UserStats = {
  xp: 0,
  level: 1,
  streak: 0,
  completedPython: [],
  completedC: [],
  completedLogic: [],
  lastActive: null,
};

export function useGamification() {
  const [stats, setStats] = useState<UserStats>(() => {
    const saved = localStorage.getItem('gamified_stats_v3');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        // Garante que novos campos (como completedLogic) existam mesmo em saves antigos
        return { ...INITIAL_STATS, ...parsed };
      } catch (e) {
        return INITIAL_STATS;
      }
    }
    return INITIAL_STATS;
  });

  useEffect(() => {
    localStorage.setItem('gamified_stats_v3', JSON.stringify(stats));
  }, [stats]);

  const levelUpThreshold = (lvl: number) => lvl * 100;

  const addXP = (amount: number) => {
    setStats(prev => {
      let newXP = prev.xp + amount;
      let newLevel = prev.level;

      while (newXP >= levelUpThreshold(newLevel)) {
        newXP -= levelUpThreshold(newLevel);
        newLevel += 1;
      }

      return { ...prev, xp: newXP, level: newLevel };
    });
  };

  const completeExercise = (listId: number, exId: number, language: Language, xpReward: number = 50) => {
    const key = language === 'python' ? 'completedPython' : language === 'c' ? 'completedC' : 'completedLogic';
    const compoundId = `${listId}-${exId}`;
    if (stats[key].includes(compoundId)) return;

    setStats(prev => ({
      ...prev,
      [key]: [...prev[key], compoundId],
    }));
    addXP(xpReward);
    updateStreak();
  };

  const isCompleted = (listId: number, exId: number, language: Language) => {
    const key = language === 'python' ? 'completedPython' : language === 'c' ? 'completedC' : 'completedLogic';
    const compoundId = `${listId}-${exId}`;
    return stats[key].includes(compoundId);
  };

  const isListCompleted = (listId: number, language: Language) => {
    const lists = language === 'python' ? allPythonLists : language === 'c' ? allCLists : allLogicLists;
    const list = lists.find(l => l.id === listId);
    if (!list) return false;
    
    // Check if every exercise in the list is completed
    return list.exercises.every(ex => isCompleted(listId, ex.id, language));
  };

  const isListUnlocked = (_listId: number, _language: Language) => {
    // Liberar todas as missões desde o início conforme pedido do usuário
    return true;
  };

  const getListProgress = (listId: number, language: Language) => {
    const lists = language === 'python' ? allPythonLists : language === 'c' ? allCLists : allLogicLists;
    const list = lists.find(l => l.id === listId);
    if (!list) return { completed: 0, total: 0 };
    
    const completedCount = list.exercises.filter(ex => isCompleted(listId, ex.id, language)).length;
    return { completed: completedCount, total: list.exercises.length };
  };

  const totalCompleted = stats.completedPython.length + stats.completedC.length + stats.completedLogic.length;

  const updateStreak = () => {
    const now = new Date().toISOString().split('T')[0];
    setStats(prev => {
      if (prev.lastActive === now) return prev;

      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const yesterdayStr = yesterday.toISOString().split('T')[0];

      if (prev.lastActive === yesterdayStr) {
        return { ...prev, streak: prev.streak + 1, lastActive: now };
      } else {
        return { ...prev, streak: 1, lastActive: now };
      }
    });
  };

  return {
    stats,
    totalCompleted,
    addXP,
    completeExercise,
    isCompleted,
    isListCompleted,
    isListUnlocked,
    getListProgress,
  };
}
