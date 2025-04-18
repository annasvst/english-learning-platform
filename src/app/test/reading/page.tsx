"use client";
import { Button } from "@components/Button";

import { ReadingTestComponent } from "./ReadingTestComponent";
import { useState } from "react";
import { useTestAnswers } from "../TestAnswersProvider";
import { redirect } from "next/navigation";
import { data } from "../data";
import { useUserLevel } from "../UserLevelProvider";
import { Level } from "@lib/models/level";
import { ReadingTest, Test } from "@lib/models/test";
import { calculateTestScore } from "@utils/calculateTestScore";
import { CombinedLevel } from "@lib/models/level";
import { handleScore } from "@utils/handleScore";
import { TestPage } from "../_components/TestPage";

// TODO: Add error handling (e.g. if user passed this test already but navigates back in the browser)
export default function ReadingTestHome() {
  const { state: testAnswersState } = useTestAnswers();
  const { dispatch } = useUserLevel();
  const [errorDilogOpen, setErrorDialogOpen] = useState(false);

  const [currentLevel, setCurrentLevel] = useState<CombinedLevel>(
    CombinedLevel.B1_B2,
  );
  const [currentTest, setCurrentTest] = useState<ReadingTest>(
    data.reading.B1_B2[0],
  );

  function dispatchLevel(level: Level) {
    dispatch({ type: "SET_LEVEL", payload: { section: "reading", level } });
  }

  async function handleSubmitAnswers() {
    const currentAnswers = testAnswersState.reading?.[currentTest.id] ?? {};

    if (Object.keys(currentAnswers).length !== 10) {
      setErrorDialogOpen(true);
      return;
    }

    try {
      const request = await fetch("/api/answers", {
        method: "POST",
        body: JSON.stringify({
          reading: {
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
      () => redirect("/test/listening"),
      setCurrentLevel,
      setCurrentTest as React.Dispatch<React.SetStateAction<Test>>,
      data.reading,
    );
  }

  return (
    <>
    <TestPage
      title="Reading test"
      cta={<Button onClick={handleSubmitAnswers}>Submit answers</Button>}
      errorDilogOpen={errorDilogOpen}
      setErrorDialogOpen={setErrorDialogOpen}
    >
      <ReadingTestComponent data={currentTest} />
    </TestPage>
    </>
  );
}
