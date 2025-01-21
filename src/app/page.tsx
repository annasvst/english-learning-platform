"use client";

import { redirect } from "next/navigation";
import { useTestAnswers } from "./test/TestAnswersProvider";
import { Hero } from "./_landingPageComponents/Hero";
import { Features } from "./_landingPageComponents/Features";
import { StartTestForm } from "./_landingPageComponents/StartTestForm";
import { Info } from "./_landingPageComponents/Info";

export default function Home() {
  const { dispatch } = useTestAnswers();

  const handleStartTest = () => {
    dispatch({ type: "RESET_ANSWERS" });
    redirect("/test/reading");
  };

  return (
    <>
      <Hero />
      <Features />
      <Info />
      <StartTestForm />

      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <h1>Welcome to the test</h1>
          <p>Instructions to be here</p>
          <button
            onClick={handleStartTest}
            className="px-4 py-2 bg-green-600 text-white rounded shadow hover:bg-green-600 transition-colors"
          >
            Start test
          </button>
        </main>
      </div>
    </>
  );
}
