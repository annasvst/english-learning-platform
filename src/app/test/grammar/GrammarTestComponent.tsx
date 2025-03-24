"use client";

import { GrammarTest, Locale } from "@lib/models/test";
import { useTestAnswers } from "../TestAnswersProvider";
import Image from "next/image";

interface GrammarTestComponentProps {
  data: GrammarTest;
}

export const GrammarTestComponent = ({ data }: GrammarTestComponentProps) => {
  const { state, dispatch } = useTestAnswers();
  const section = "grammar";

  const handleOptionChange = (questionId: string, optionId: string) => {
    dispatch({
      type: "SET_ANSWER",
      payload: { section: section, testId: data.id, questionId, optionId },
    });
  };

  return (
    <>
      <div className="text-gray-600 mt-6  mb-12 flex gap-4 italic">
        <ul>
          {data.instructions[Locale.EN].split("\n").map((paragraph, index) => (
            <li key={index}>{paragraph}</li>
          ))}
        </ul>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          {data.image && (
            <Image
              src={data.image?.src}
              alt={data.image?.alt}
              width={640}
              height={960}
            />
          )}
        </div>

        <div>
          {data.questions.map((question) => (
            <div key={question.id} className="mb-10 text-gray-700 text-lg">
              <p className="font-semibold mb-2">{question.title}</p>
              <form>
                {question.options.map((option) => (
                  <div
                    key={option.id}
                    className="flex gap-6 items-center p-4 my-4 bg-gray-50 rounded shadow"
                    onClick={() => handleOptionChange(question.id, option.id)}
                  >
                    <div className="group grid size-4 grid-cols-1 shrink-0" >
                      <input
                        type="radio"
                        id={option.id}
                        className="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-teal-700 checked:bg-teal-700 indeterminate:border-gray-200 indeterminate:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                        onChange={() =>
                          handleOptionChange(question.id, option.id)
                        }
                        value={option.title}
                        checked={
                          state[section]?.[data.id]?.[question.id] === option.id
                        }
                      />
                      <svg
                        fill="none"
                        viewBox="0 0 14 14"
                        className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                      >
                        <path
                          d="M3 8L6 11L11 3.5"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="opacity-0 group-has-[:checked]:opacity-100"
                        />
                      </svg>
                    </div>
                    <label htmlFor={option.id}>{option.title}</label>
                  </div>
                ))}
              </form>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
