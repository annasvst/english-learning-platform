"use client";

import { useState } from "react";
import { redirect } from "next/navigation";

import { useTestAnswers } from "../TestAnswersProvider";
import { useUserLevel } from "../UserLevelProvider";
import { data } from "../data";
import { CombinedLevel } from "modules/app/_lib/models/level";
import { Level } from "modules/app/_lib/models/level";
import { calculateTestScore } from "modules/app/utils/calculateTestScore";
import { GrammarTestComponent } from "./GrammarTestComponent";
import { handleScore } from "modules/app/utils/handleScore";
import { GrammarTest } from "modules/app/_lib/models/test";
import { Button } from "modules/app/_components/Button";

export default function GrammarTestHome() {
  const { state: testAnswersState } = useTestAnswers();
  const { dispatch } = useUserLevel();

  const [currentLevel, setCurrentLevel] = useState<CombinedLevel>(
    CombinedLevel.B1_B2
  );
  const [currentTest, setCurrentTest] = useState<GrammarTest>(
    data.grammar.B1_B2[0]
  );

  function dispatchLevel(level: Level) {
    dispatch({ type: "SET_LEVEL", payload: { section: "grammar", level } });
  }

  function handleSubmitAnswers() {
    const currentAnswers = testAnswersState.grammar[currentTest.id];
    const score = calculateTestScore(currentAnswers, currentTest);
    handleScore(
      score,
      currentLevel,
      dispatchLevel,
      () => redirect("/test/result"),
      setCurrentLevel,
      setCurrentTest,
      data.grammar
    );
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1>Welcome to the grammar test</h1>
        <GrammarTestComponent key={currentTest.id} data={currentTest} />
        <Button onClick={handleSubmitAnswers}>Submit Answers</Button>
      </main>
    </div>
  );
}
