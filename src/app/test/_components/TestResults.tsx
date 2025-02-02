"use client";

import { useUserLevel } from "../UserLevelProvider";

export const TestResults = () => {
  const { state } = useUserLevel();

  const readingLevel = state.reading;
  const listeningLevel = state.listening;
  const grammarLevel = state.grammar;

  return (
    <>
      <p>Reading: {readingLevel}</p>
      <p>Listening: {listeningLevel}</p>
      <p>Grammar: {grammarLevel}</p>
    </>
  );
};
