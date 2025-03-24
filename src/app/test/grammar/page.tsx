"use client";

import { useState } from "react";
import { redirect } from "next/navigation";

import { useTestAnswers } from "../TestAnswersProvider";
import { useUserLevel } from "../UserLevelProvider";
import { data } from "../data";
import { CombinedLevel } from "@lib/models/level";
import { Level } from "@lib/models/level";
import { calculateTestScore } from "@utils/calculateTestScore";
import { GrammarTestComponent } from "./GrammarTestComponent";
import { handleScore } from "@utils/handleScore";
import { GrammarTest } from "@lib/models/test";
import { Button } from "@components/Button";
import { TestPage } from "../_components/TestPage";

export default function GrammarTestHome() {
  const { state: testAnswersState } = useTestAnswers();
  const { dispatch } = useUserLevel();
  const [errorDilogOpen, setErrorDialogOpen] = useState(false);


  const [currentLevel, setCurrentLevel] = useState<CombinedLevel>(
    CombinedLevel.B1_B2,
  );
  const [currentTest, setCurrentTest] = useState<GrammarTest>(
    data.grammar.B1_B2[0],
  );

  function dispatchLevel(level: Level) {
    dispatch({ type: "SET_LEVEL", payload: { section: "grammar", level } });
  }

  async function handleSubmitAnswers() {
    const currentAnswers = testAnswersState.grammar?.[currentTest.id] ?? {};

    if (Object.keys(currentAnswers).length !== 10) {
      setErrorDialogOpen(true);
      return;
    }

    try {
      const request = await fetch("/api/answers", {
        method: "POST",
        body: JSON.stringify({
          grammar: {
            [currentTest.id]: currentAnswers,
          },
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!request.ok) {
        throw new Error("Failed to submit answers");
      }
    } catch (error) {
      // TODO: Handle error
      console.error("Failed to submit answers", error);
      return;
    }
    
    const score = calculateTestScore(currentAnswers, currentTest);
    handleScore(
      score,
      currentLevel,
      dispatchLevel,
      () => redirect("/test/result"),
      setCurrentLevel,
      setCurrentTest,
      data.grammar,
    );
  }

  return (
    <TestPage
      title="Grammar test"
      cta={<Button onClick={handleSubmitAnswers}>Submit answers</Button>}
      errorDilogOpen={errorDilogOpen}
      setErrorDialogOpen={setErrorDialogOpen}
    >
      <GrammarTestComponent data={currentTest} />
    </TestPage>
  );
}
