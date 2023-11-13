import React, { createContext, useState } from "react";
let ParamContext = createContext(null);
export const ParamsContext = ({ children }) => {
  let [PageID, setPageID] = useState([]);
  return (
    <ParamContext.Provider value={{ PageID, setPageID }}>
      {children}
    </ParamContext.Provider>
  );
};
export default ParamContext;
