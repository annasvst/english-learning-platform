"use client";

import Link from "next/link";
import { Button, ButtonType } from "modules/app/components/Button";
import { useUserLevel } from "../UserLevelProvider";

export default function Result() {
  const { state } = useUserLevel();
  console.log(state);

  const readingLevel = state.reading;
  const listeningLevel = state.listening;
  const writingLevel = state.writing;

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1>Congratulations, you have completed the test</h1>
        <h2>Your result</h2>
        <p>Reading: {readingLevel}</p>
        <p>Listening: {listeningLevel}</p>
        <p>Writing: {writingLevel}</p>
        <Button type={ButtonType.Success}>
          <Link href="/">Return to the main page</Link>
        </Button>
      </main>
    </div>
  );
}
