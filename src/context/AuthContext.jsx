import { createContext } from "react";
import data from "../AuthData.json";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const { user } = data;

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};
