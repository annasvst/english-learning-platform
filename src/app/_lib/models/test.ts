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

export enum Locale {
  EN = "en",
  TR = "tr",
}

export const Locales = Object.keys(Locale);

type Instructions = {
  [key in Locale]: string;
};

export type ReadingTest = {
  id: string;
  title: string;
  text: string;
  instructions: Instructions;
  image?: Image;
  questions: Question[];
}

export type ListeningTest = {
  id: string;
  title: string;
  audioUrl: string;
  instructions: Instructions;
  image?: Image;
  questions: Question[];
}

export type GrammarTest = {
  id: string;
  title: string;
  instructions: Instructions;
  image?: Image;
  questions: Question[];
}

interface Image {
  src: string;
  alt: string;
  credit?: string;
}

export type Test = ReadingTest | ListeningTest | GrammarTest;