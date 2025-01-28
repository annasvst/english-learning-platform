'use client';

import { ListeningTest } from "modules/app/_lib/models/test";
import { useTestAnswers } from "../TestAnswersProvider";

interface ListeningTestComponentProps {
  data: ListeningTest;
}

export const ListeningTestComponent: React.FC<ListeningTestComponentProps> = ({ data }) => {
  const { state, dispatch } = useTestAnswers();

  const handleOptionChange = (questionId: string, optionId: string) => {
    dispatch({ type: 'SET_ANSWER', payload: { section: 'listening', testId: data.id, questionId, optionId } });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded">
      <h2 className="text-2xl font-bold mb-4">{data.title}</h2>
      <audio controls className="mb-6">
        <source src={data.audioUrl} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
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
                    name={question.id}
                    value={option.title}
                    className="mr-2"
                    onChange={() => handleOptionChange(question.id, option.id)}
                    checked={state['listening']?.[data.id]?.[question.id] === option.id}
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