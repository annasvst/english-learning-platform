"use client";
import { Button, ButtonType } from "modules/app/components/Button";

import Link from "next/link";
import { ReadingTestComponent } from "./ReadingTestComponent";
import { readingPassages } from "./readingData";
import { useState } from "react";

export default function ReadingTestHome() {
  const [currentPassageIndex, setCurrentPassageIndex] = useState(0);

  const handleNextPassage = () => {
    if (currentPassageIndex < readingPassages.length - 1) {
      setCurrentPassageIndex(currentPassageIndex + 1);
    }
  };

  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20 bg-gray-100">
      <main className="max-w-5xl mx-auto bg-white p-8 rounded shadow-md">
        <h1 className="text-3xl font-bold mb-8 text-center">Reading test</h1>
        <ReadingTestComponent
          key={currentPassageIndex}
          data={readingPassages[currentPassageIndex]}
          section="reading"
        />

        <div className="flex items-center justify-center mt-8 text-center">
          {currentPassageIndex < readingPassages.length - 1 ? (
            <Button onClick={handleNextPassage}>Next Passage</Button>
          ) : (
            <Button type={ButtonType.Success}>
              <Link href="/test/listening">
                Complete and go to the next section
              </Link>
            </Button>
          )}
        </div>
      </main>
    </div>
  );
}
