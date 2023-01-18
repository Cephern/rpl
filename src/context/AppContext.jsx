import { createContext } from "react";
import data from "../data.json";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const user = data[1];

  return <AppContext.Provider value={{ user }}>{children}</AppContext.Provider>;
};
