"use client";
import { useState } from "react";
import { Button } from "@components/Button";
import { useTestAnswers } from "../TestAnswersProvider";
import { redirect } from "next/navigation";
import { data } from "../data";
import { useUserLevel } from "../UserLevelProvider";
import { CombinedLevel, Level } from "@lib/models/level";
import { ListeningTestComponent } from "./ListeningTestComponent";
import { ListeningTest, Test } from "@lib/models/test";
import { TestPage } from "../_components/TestPage";
import { calculateTestScore } from "@utils/calculateTestScore";
import { handleScore } from "@utils/handleScore";

export default function ListeningTestHome() {
  const { state: testAnswersState } = useTestAnswers();
  const { dispatch } = useUserLevel();
  const [errorDilogOpen, setErrorDialogOpen] = useState(false);


  const [currentLevel, setCurrentLevel] = useState<CombinedLevel>(
    CombinedLevel.B1_B2,
  );
  const [currentTest, setCurrentTest] = useState<ListeningTest>(
    data.listening.B1_B2[0],
  );

  function dispatchLevel(level: Level) {
    dispatch({ type: "SET_LEVEL", payload: { section: "listening", level } });
  }

  async function handleSubmitAnswers() {
    const currentAnswers = testAnswersState.listening?.[currentTest.id] ?? {};

    if (Object.keys(currentAnswers).length !== 10) {
      setErrorDialogOpen(true);
      return;
    }

    try {
      const request = await fetch("/api/answers", {
        method: "POST",
        body: JSON.stringify({
          listening: {
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
      () => redirect("/test/grammar"),
      setCurrentLevel,
      setCurrentTest as React.Dispatch<React.SetStateAction<Test>>,
      data.grammar,
    );
  }

  // TODO: replace with an error boundary
  if (!currentTest) return <div>Loading...</div>;

  return (
    <TestPage
      title="Listening test"
      cta={<Button onClick={handleSubmitAnswers}>Submit answers</Button>}
      errorDilogOpen={errorDilogOpen}
      setErrorDialogOpen={setErrorDialogOpen}
    >
      <ListeningTestComponent data={currentTest} />
    </TestPage>
  );
}
