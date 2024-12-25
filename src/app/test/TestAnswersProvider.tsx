'use client';

import React, { createContext, useReducer, useContext, ReactNode } from 'react';

// Define the shape of the context data
interface TestAnswersState {
  [section: string]: {
    [testId: string]: { [questionIndex: number]: number };
  };
}

interface SetAnswerAction {
  type: 'SET_ANSWER';
  payload: { section: string; testId: string; questionIndex: number; optionIndex: number };
}

interface ResetAnswersAction {
  type: 'RESET_ANSWERS';
}

type Action = SetAnswerAction | ResetAnswersAction;

const initialState: TestAnswersState = {};

// Create the context
const TestAnswersContext = createContext<{
  state: TestAnswersState;
  dispatch: React.Dispatch<Action>;
} | undefined>(undefined);

// Reducer function to handle state updates
const testAnswersReducer = (state: TestAnswersState, action: Action): TestAnswersState => {
  switch (action.type) {
    case 'SET_ANSWER': {
      const { section, testId, questionIndex, optionIndex } = action.payload;
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

// Create a provider component
const TestAnswersProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(testAnswersReducer, initialState);

  return (
    <TestAnswersContext.Provider value={{ state, dispatch }}>
      {children}
    </TestAnswersContext.Provider>
  );
};

// Custom hook to use the TestAnswersContext
const useTestAnswers = () => {
  const context = useContext(TestAnswersContext);
  if (context === undefined) {
    throw new Error('useTestAnswers must be used within a TestAnswersProvider');
  }
  return context;
};

export { TestAnswersProvider, useTestAnswers };