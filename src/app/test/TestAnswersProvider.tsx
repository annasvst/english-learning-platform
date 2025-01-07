'use client';
import React, { createContext, useReducer, ReactNode, useContext } from 'react';

interface TestAnswersState {
  [section: string]: {
    [testId: string]: {
      [questionIndex: string]: string;
    };
  };
}

interface Action {
  type: 'SET_ANSWER' | 'RESET_ANSWERS';
  payload?: {
    section: string;
    testId: string;
    questionIndex: string;
    optionIndex: string;
  };
}

const initialState: TestAnswersState = {};

const testAnswersReducer = (state: TestAnswersState, action: Action): TestAnswersState => {
  switch (action.type) {
    case 'SET_ANSWER': {
      const { section, testId, questionIndex, optionIndex } = action.payload!;
      return {
        ...state,
        [section]: {
          ...state[section],
          [testId]: {
            ...state[section]?.[testId],
            [questionIndex]: optionIndex,
          },
        },
      };
    }
    case 'RESET_ANSWERS': {
      return initialState;
    }
    default:
      throw new Error('Unhandled action type');
  }
};

const TestAnswersContext = createContext<{
  state: TestAnswersState;
  dispatch: React.Dispatch<Action>;
} | undefined>(undefined);

const TestAnswersProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(testAnswersReducer, initialState);

  return (
    <TestAnswersContext.Provider value={{ state, dispatch }}>
      {children}
    </TestAnswersContext.Provider>
  );
};

const useTestAnswers = () => {
  const context = useContext(TestAnswersContext);
  if (context === undefined) {
    throw new Error('useTestAnswers must be used within a TestAnswersProvider');
  }
  return context;
};

export { TestAnswersProvider, useTestAnswers };