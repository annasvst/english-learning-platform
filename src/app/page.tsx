"use client";

import { redirect } from "next/navigation";
import { useTestAnswers } from "./test/TestAnswersProvider";
import { Button } from "./components/Button";

export default function Home() {
  const { dispatch } = useTestAnswers();

  const handleStartTest = () => {
    dispatch({ type: "RESET_ANSWERS" });
    redirect("/test/reading");
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1>Welcome to the test</h1>
        <p>Instructions to be here</p>
        <Button text="Start test" onClick={handleStartTest} type="start"/>
      </main>
    </div>
  );
}
