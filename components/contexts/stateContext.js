import React, { useState, createContext } from "react";

export const StateContext = createContext();

export const StateProvider = (props) => {
  const [words, setWords] = useState([]);

  return (
    <StateContext.Provider value={[words, setWords]}>
      {props.children}
    </StateContext.Provider>
  );
};
