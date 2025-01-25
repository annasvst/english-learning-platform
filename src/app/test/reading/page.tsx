"use client";
import { Button, ButtonColor } from "modules/app/_components/Button";
import { ReadingTestComponent } from "./ReadingTestComponent";
import { useState } from "react";
import { useTestAnswers } from "../TestAnswersProvider";
import { redirect } from "next/navigation";
import { data } from "../data";
import { useUserLevel } from "../UserLevelProvider";
import { Level } from "../../_lib/models/level";
import { ReadingTest } from "modules/app/_lib/models/test";
import { calculateTestScore } from "modules/app/utils/calculateTestScore";
import { CombinedLevel } from "../../_lib/models/level";
import { handleScore } from "modules/app/utils/handleScore";

// TODO: Add error handling (e.g. if user passed this test already but navigates back in the browser)
export default function ReadingTestHome() {
  const { state: testAnswersState } = useTestAnswers();
  const { dispatch } = useUserLevel();

  const [currentLevel, setCurrentLevel] = useState<CombinedLevel>(
    CombinedLevel.B1_B2
  );
  const [currentTest, setCurrentTest] = useState<ReadingTest>(
    data.reading.B1_B2[0]
  );

  function dispatchLevel(level: Level) {
    dispatch({ type: "SET_LEVEL", payload: { section: "reading", level } });
  }

  function handleSubmitAnswers() {
    const currentAnswers = testAnswersState.reading[currentTest.id];
    const score = calculateTestScore(currentAnswers, currentTest);
    handleScore(
      score,
      currentLevel,
      dispatchLevel,
      () => redirect("/test/listening"),
      setCurrentLevel,
      setCurrentTest,
      data.reading
    );
  }

  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20 bg-gray-100">
      <main className="max-w-5xl mx-auto bg-white p-8 rounded shadow-md">
        <h1 className="text-3xl font-bold mb-8 text-center">Reading test</h1>
        <ReadingTestComponent key={currentTest.id} data={currentTest} />

        <div className="mt-8 flex justify-center">
          <Button onClick={handleSubmitAnswers}>Submit answers</Button>
        </div>
      </main>
    </div>
  );
}
