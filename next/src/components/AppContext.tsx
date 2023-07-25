"use client"
import { log } from "console";
import { createContext, FC } from "react";
import { useState, useEffect } from "react";

type ContextValues = {
  SaveBasketCartDataToLocalStorage: () => void;
  bye: () => void;
};

const AppContext = createContext<ContextValues | null>(null);

const AppContextProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  
  const SaveBasketCartDataToLocalStorage = () =>{

  }

  const bye = ()=>{
    console.log("hye");
    
  }

  const contextValues: ContextValues = {
    SaveBasketCartDataToLocalStorage,
    bye,
  };

  return <AppContext.Provider value={contextValues}>{children}</AppContext.Provider>;
};

export { AppContext, AppContextProvider };
