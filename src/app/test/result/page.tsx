'use client';

import Link from "next/link";
import { useTestAnswers } from "../TestAnswersProvider";
import { readingPassages } from "../reading/readingData";

export default function Result() {
  const { state } = useTestAnswers();
  console.log(state);

  const calculateResult = () => {
    let correctAnswers = 0;
    let totalQuestions = 0;

    readingPassages.forEach((passage) => {
      passage.questions.forEach((question, questionIndex) => {
        totalQuestions++;
        const section = 'reading'; // Assuming the section is 'reading'
        const testId = passage.passageId;
        if (state[section]?.[testId]?.[questionIndex] === question.correctAnswer) {
          correctAnswers++;
        }
      });
    });

    const score = (correctAnswers / totalQuestions) * 100;
    let level = "";

    if (score >= 90) {
      level = "Advanced (C1-C2)";
    } else if (score >= 70) {
      level = "Upper-Intermediate (B2)";
    } else if (score >= 50) {
      level = "Intermediate (B1)";
    } else {
      level = "Beginner (A1-A2)";
    }

    return { score, level };
  };

  const { score, level } = calculateResult();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1>Congratulations, you have completed the test</h1>
        <h2>Your result</h2>
        <p>Score: {score.toFixed(2)}%</p>
        <p>Level: {level}</p>
        <Link href="/" className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition-colors">
            Return to the main page
        </Link>
      </main>
    </div>
  );
}