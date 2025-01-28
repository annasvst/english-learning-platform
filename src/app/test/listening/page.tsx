"use client";
import { useState } from "react";
import { Button } from "modules/app/_components/Button";
import { useTestAnswers } from "../TestAnswersProvider";
import { thresholds } from "../thresholds";
import { redirect } from "next/navigation";
import { data } from "../data";
import { useUserLevel } from "../UserLevelProvider";
import { Level } from '../../_lib/models/level';
import { ListeningTestComponent } from "./ListeningTestComponent";
import { ListeningTest } from "../../_lib/models/test";

enum CombinedLevel {
  A1_A2 = "A1_A2",
  B1_B2 = "B1_B2",
  C1_C2 = "C1_C2",
}

interface Answers {
  [questionId: string]: string;
}

function calculateTestScore(answers: Answers, test: ListeningTest) {
  let correctAnswers = 0;
  const totalQuestions = test.questions.length;

  test.questions.forEach((question) => {
    if (answers[question.id] === question.correctAnswer) {
      correctAnswers += 1;
    }
  });

  return correctAnswers / totalQuestions;
}

export default function ListeningTestHome() {
  const { state: testAnswersState } = useTestAnswers();
  const { dispatch } = useUserLevel();

  const [currentLevel, setCurrentLevel] = useState<CombinedLevel>(
    CombinedLevel.B1_B2,
  );
  const [currentTest, setCurrentTest] = useState<ListeningTest>(
    data.listening.B1_B2[0],
  );

  function dispatchLevel (level: Level) {
    dispatch({ type: 'SET_LEVEL', payload: { section: 'listening', level } });
  }

  function handleSubmitAnswers() {
    const currentAnswers = testAnswersState.listening[currentTest.id];
    const score = calculateTestScore(currentAnswers, currentTest);
    if (currentLevel === CombinedLevel.B1_B2) {
      if (score >= thresholds.B1_B2.high) {
        setCurrentLevel(CombinedLevel.C1_C2);
        setCurrentTest(data.listening.C1_C2[0]);
      } else if (score < thresholds.B1_B2.low) {
        setCurrentLevel(CombinedLevel.A1_A2);
        setCurrentTest(data.listening.A1_A2[0]);
      } else if (score >= thresholds.B1_B2.mid.high) {
        dispatchLevel(Level.B2);
        console.log("Current level is B2");
        redirect("/test/grammar");
      } else if (score < thresholds.B1_B2.mid.high) {
        dispatchLevel(Level.B1);
        console.log("Current level is B1");
        redirect("/test/grammar");
      }
    } else if (currentLevel === CombinedLevel.A1_A2) {
      if (score >= thresholds.A1_A2.high) {
        dispatchLevel(Level.A2);
        console.log("Current level is A2");
        redirect("/test/grammar");
      } else if (score < thresholds.A1_A2.high) {
        dispatchLevel(Level.A1);
        console.log("Current level is A1");
        redirect("/test/grammar");
      }
    } else if (currentLevel === CombinedLevel.C1_C2) {
      if (score >= thresholds.C1_C2.high) {
        dispatchLevel(Level.C2);
        console.log("Current level is C2");
        redirect("/test/grammar");
      } else if (score < thresholds.C1_C2.high) {
        dispatchLevel(Level.C1);
        console.log("Current level is C1");
        redirect("/test/grammar");
      }
  };
}

// TODO: replace with an error boundary
if (!currentTest) return <div>Loading...</div>;

  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20 bg-gray-100">
      <main className="max-w-5xl mx-auto bg-white p-8 rounded shadow-md">
        <h1 className="text-3xl font-bold mb-8 text-center">Listening test</h1>
        <ListeningTestComponent key={currentTest.id} data={currentTest} />

        <div className="mt-8 flex justify-center">
          <Button
            onClick={handleSubmitAnswers}
          >
            Submit answers
          </Button>
        </div>
      </main>
    </div>
  );
}