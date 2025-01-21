"use client";
import React, { createContext, useReducer, ReactNode, useContext } from "react";
import { Level } from "../lib/models/level";

export interface UserLevelState {
  reading?: Level;
  listening?: Level;
  writing?: Level;
  grammar?: Level;
}

type SetLevelAction = {
  type: "SET_LEVEL";
  payload: {
    section: keyof UserLevelState;
    level: Level;
  };
};

type ClearAllAction = {
  type: "CLEAR_ALL";
};

type UserLevelActions = SetLevelAction | ClearAllAction;

const initialState: UserLevelState = {};

const userLevelReducer = (
  state: UserLevelState,
  action: UserLevelActions
): UserLevelState => {
  switch (action.type) {
    case "SET_LEVEL": {
      const { section, level } = action.payload;
      return {
        ...state,
        [section]: level,
      };
    }
    case "CLEAR_ALL": {
      return initialState;
    }
    default:
      throw new Error("Unhandled action type");
  }
};

const UserLevelContext = createContext<
  | {
      state: UserLevelState;
      dispatch: React.Dispatch<UserLevelActions>;
    }
  | undefined
>(undefined);

const UserLevelProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(userLevelReducer, initialState);

  return (
    <UserLevelContext.Provider value={{ state, dispatch }}>
      {children}
    </UserLevelContext.Provider>
  );
};

const useUserLevel = () => {
  const context = useContext(UserLevelContext);
  if (context === undefined) {
    throw new Error("useUserLevel must be used within a UserLevelProvider");
  }
  return context;
};

export { UserLevelProvider, useUserLevel };
