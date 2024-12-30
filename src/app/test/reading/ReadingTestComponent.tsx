'use client';

import { useTestAnswers } from "../TestAnswersProvider";
import { Passage } from "./readingData";

interface ReadingTestComponentProps {
  data: Passage;
  section: string;
}

export const ReadingTestComponent: React.FC<ReadingTestComponentProps> = ({ data, section }) => {
  const { state, dispatch } = useTestAnswers();

  const handleOptionChange = (questionIndex: string, optionIndex: string) => {
    dispatch({ type: 'SET_ANSWER', payload: { section, testId: data.id, questionIndex, optionIndex } });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg">
      <h2 className="text-2xl font-bold mb-4">{data.title}</h2>
      <p className="text-gray-700 mb-6">{data.text}</p>
      <div>
        {data.questions.map((question) => (
          <div key={question.id} className="mb-6">
            <p className="text-lg font-semibold mb-2">{question.title}</p>
            <form className="space-y-2">
              {question.options.map((option) => (
                <div key={option.id} className="flex items-center">
                  <input
                    type="radio"
                    id={option.id}
                    name={option.id}
                    value={option.title}
                    className="mr-2"
                    onChange={() => handleOptionChange(question.id, option.id)}
                    checked={state[section]?.[data.id]?.[question.id] === option.id}
                  />
                  <label htmlFor={option.id} className="text-gray-700">
                    {option.title}
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