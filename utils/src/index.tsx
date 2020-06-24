import React, { createContext, FC, useContext } from "react";

const Context = createContext<string>("");

export const TextProvider: FC<{ value: string }> = ({ children, value }) => (
  <Context.Provider value={value}>{children}</Context.Provider>
);

export const useText = () => useContext(Context);
