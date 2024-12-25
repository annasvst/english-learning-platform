'use client';

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
        <ReadingTestComponent key={currentPassageIndex} data={readingPassages[currentPassageIndex]} section="reading" />
        
        <div className="mt-8 text-center">
          {currentPassageIndex < readingPassages.length - 1 ? (
            <button
              onClick={handleNextPassage}
              className="px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600 transition-colors"
            >
              Next Passage
            </button>
          ) : (
            <Link href="/test/listening" className="px-4 py-2 bg-green-600 text-white rounded shadow hover:bg-green-600 transition-colors">
                Complete and go to the next section
            </Link>
          )}
        </div>
      </main>
    </div>
  );
}