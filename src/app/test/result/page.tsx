"use client";

import Link from "next/link";
import { useUserLevel } from "../UserLevelProvider";

export default function Result() {
  const { state } = useUserLevel();
  console.log(state);

  const readingLevel = state.reading;
  const listeningLevel = state.listening;
  const writingLevel = state.writing;
  const grammarLevel = state.grammar;

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1>Congratulations, you have completed the test</h1>
        <h2>Your result</h2>
        <p>Reading: {readingLevel}</p>
        <p>Listening: {listeningLevel}</p>
        <p>Writing: {writingLevel}</p>
        <p>Grammar: {grammarLevel}</p>
        <Link
          href="/"
          className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition-colors"
        >
          Return to the main page
        </Link>
      </main>
    </div>
  );
}
