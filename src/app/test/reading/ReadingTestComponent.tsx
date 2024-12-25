'use client';

import { useTestAnswers } from "../TestAnswersProvider";
import { Passage } from "./readingData";

interface ReadingTestComponentProps {
  data: Passage;
  section: string;
}

export const ReadingTestComponent: React.FC<ReadingTestComponentProps> = ({ data, section }) => {
  const { state, dispatch } = useTestAnswers();

  const handleOptionChange = (questionIndex: number, optionIndex: number) => {
    dispatch({ type: 'SET_ANSWER', payload: { section, testId: data.passageId, questionIndex, optionIndex } });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg">
      <h2 className="text-2xl font-bold mb-4">{data.passageTitle}</h2>
      <p className="text-gray-700 mb-6">{data.passageText}</p>
      <div>
        {data.questions.map((question, index) => (
          <div key={index} className="mb-6">
            <p className="text-lg font-semibold mb-2">{question.title}</p>
            <form className="space-y-2">
              {question.options.map((option, optionIndex) => (
                <div key={option} className="flex items-center">
                  <input
                    type="radio"
                    id={`question-${index}-option-${optionIndex}`}
                    name={`question-${index}`}
                    value={option}
                    className="mr-2"
                    onChange={() => handleOptionChange(index, optionIndex)}
                    checked={state[section]?.[data.passageId]?.[index] === optionIndex}
                  />
                  <label htmlFor={`question-${index}-option-${optionIndex}`} className="text-gray-700">
                    {option}
                  </label>
                </div>
              ))}
            </form>
          </div>
        ))}
      </div>
    </div>
  );
};