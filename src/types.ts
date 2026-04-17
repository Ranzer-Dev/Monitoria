export type Lesson = {
  concept: string;
  example: string;
  instructions?: string;
  expectedOutput?: string;
  steps: string[];
  explanation?: { // Para o "Passo a Passo"
    line: string;
    text: string;
  }[];
};

export type Exercise = {
  id: number;
  title: string;
  description: string;
  tips: string[];
  lesson: Lesson;
  initialCode?: string; // Código inicial para o editor
  // Novos campos para desafios de lógica (múltipla escolha)
  options?: string[];
  correctAnswer?: string;
  answer?: string; // Mantido para compatibilidade com dados existentes
};

export type Language = 'python' | 'c' | 'logic';

export type Fundamental = {
  id: string;
  icon: string;
  title: string;
  summary: string;
  example: string;
};

export type ExerciseListDef = {
  id: number;
  title: string;
  topic: string;
  icon: string;
  fundamentals: Fundamental[];
  exercises: Exercise[];
};
