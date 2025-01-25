import { Test } from "../lib/models/test";

interface Answers {
  [questionId: string]: string;
}

export function calculateTestScore(answers: Answers, test: Test) {
  let correctAnswers = 0;
  const totalQuestions = test.questions.length;

  test.questions.forEach((question) => {
    if (answers[question.id] === question.correctAnswer) {
      correctAnswers += 1;
    }
  });

  return correctAnswers / totalQuestions;
}

