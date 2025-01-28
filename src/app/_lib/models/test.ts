export interface Option {
  id: string;
  title: string;
}

export interface Question {
  id: string;
  title: string;
  options: Option[];
  correctAnswer: string;
}

export type ReadingTest = {
  id: string;
  title: string;
  text: string;
  questions: Question[];
}

export type ListeningTest = {
  id: string;
  title: string;
  audioUrl: string;
  questions: Question[];
}

export type GrammarTest = {
  id: string;
  title: string;
  text: string;
  questions: Question[];
}

export type Test = ReadingTest | ListeningTest | GrammarTest;