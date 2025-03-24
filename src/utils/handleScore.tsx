import { CombinedLevel } from "../app/_lib/models/level";
import { thresholds } from "../app/test/thresholds";
import { Level } from "../app/_lib/models/level";
import { Data } from "../app/test/data";
import { Test } from "../app/_lib/models/test";
import { Dispatch, SetStateAction } from "react";

export function handleScore(
  score: number,
  currentLevel: CombinedLevel,
  dispatchLevel: (level: Level) => void,
  redirectToNext: () => void,
  setCurrentLevel: (level: CombinedLevel) => void,
  setCurrentTest: Dispatch<SetStateAction<Test>>,
  testData: Data["grammar"] | Data["listening"] | Data["reading"]
) {
  if (currentLevel === CombinedLevel.B1_B2) {
    if (score >= thresholds.B1_B2.high) {
      setCurrentLevel(CombinedLevel.C1_C2);
      setCurrentTest(testData.C1_C2[0]);
    } else if (score < thresholds.B1_B2.low) {
      setCurrentLevel(CombinedLevel.A1_A2);
      setCurrentTest(testData.A1_A2[0]);
    } else if (score >= thresholds.B1_B2.mid.high) {
      dispatchLevel(Level.B2);
      console.log("Current level is B2");
      redirectToNext();
    } else if (score < thresholds.B1_B2.mid.high) {
      dispatchLevel(Level.B1);
      console.log("Current level is B1");
      redirectToNext();
    }
  } else if (currentLevel === CombinedLevel.A1_A2) {
    if (score >= thresholds.A1_A2.high) {
      dispatchLevel(Level.A2);
      console.log("Current level is A2");
      redirectToNext();
    } else if (score < thresholds.A1_A2.high) {
      dispatchLevel(Level.A1);
      console.log("Current level is A1");
      redirectToNext();
    }
  } else if (currentLevel === CombinedLevel.C1_C2) {
    if (score >= thresholds.C1_C2.high) {
      dispatchLevel(Level.C2);
      console.log("Current level is C2");
      redirectToNext();
    } else if (score < thresholds.C1_C2.high) {
      dispatchLevel(Level.C1);
      console.log("Current level is C1");
      redirectToNext();
    }
  }
}
