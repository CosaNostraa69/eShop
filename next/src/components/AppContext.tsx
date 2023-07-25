"use client"
import { log } from "console";
import { createContext, FC } from "react";

type ContextValues = {
  sayHello: () => void;
  bye: () => void;
};

const AppContext = createContext<ContextValues | null>(null);

const AppContextProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const sayHello = () => {
    console.log('hello magle');
  };

  const bye = ()=>{
    console.log("hye");
    
  }

  const contextValues: ContextValues = {
    sayHello,
    bye,
  };

  return <AppContext.Provider value={contextValues}>{children}</AppContext.Provider>;
};

export { AppContext, AppContextProvider };
