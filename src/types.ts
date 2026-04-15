export type Lesson = {
  concept: string;
  example: string;
  steps: string[];
};

export type Exercise = {
  id: number; // Will change to number inside list
  title: string;
  description: string;
  tips: string[];
  lesson: Lesson;
};

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
