"use client";

import Link from "next/link";
import { useState } from "react";
import { redirect } from "next/navigation";

import { useTestAnswers } from "../TestAnswersProvider";
import { useUserLevel } from "../UserLevelProvider";
import { data } from "../data";
import { CombinedLevel } from "modules/app/lib/models/level";
import { GrammarTest } from "modules/app/lib/models/test";
import { Level } from "modules/app/lib/models/level";
import { calculateTestScore } from "modules/app/utils";
import { thresholds } from "../thresholds";
import { GrammarTestComponent } from "./GrammarTestComponent";

export default function grammarTest() {
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
    if (currentLevel === CombinedLevel.B1_B2) {
      if (score >= thresholds.B1_B2.high) {
        setCurrentLevel(CombinedLevel.C1_C2);
        setCurrentTest(data.grammar.C1_C2[0]);
      } else if (score < thresholds.B1_B2.low) {
        setCurrentLevel(CombinedLevel.A1_A2);
        setCurrentTest(data.grammar.A1_A2[0]);
      } else if (score >= thresholds.B1_B2.mid.high) {
        dispatchLevel(Level.B2);
        console.log("Current level is B2");
        redirect("/test/result");
      } else if (score < thresholds.B1_B2.mid.high) {
        dispatchLevel(Level.B1);
        console.log("Current level is B1");
        redirect("/test/result");
      }
    } else if (currentLevel === CombinedLevel.A1_A2) {
      if (score >= thresholds.A1_A2.high) {
        dispatchLevel(Level.A2);
        console.log("Current level is A2");
        redirect("/test/result");
      } else if (score < thresholds.A1_A2.high) {
        dispatchLevel(Level.A1);
        console.log("Current level is A1");
        redirect("/test/result");
      }
    } else if (currentLevel === CombinedLevel.C1_C2) {
      if (score >= thresholds.C1_C2.high) {
        dispatchLevel(Level.C2);
        console.log("Current level is C2");
        redirect("/test/result");
      } else if (score < thresholds.C1_C2.high) {
        dispatchLevel(Level.C1);
        console.log("Current level is C1");
        redirect("/test/result");
      }
    }
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1>Welcome to the grammar test</h1>
        <GrammarTestComponent key={currentTest.id} data={currentTest} />
        <button
          onClick={handleSubmitAnswers}
          className="px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600 transition-colors"
        >
          Submit Answers
        </button>
      </main>
    </div>
  );
}
