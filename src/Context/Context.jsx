import React, { createContext, useState } from "react";
let ParamContext = createContext(null);
export const ParamsContext = ({ children }) => {
  let [PageID, setPageID] = useState([]);

  let [total, setTotal] = useState(0);
  let value = {
    PageID,
    setPageID,
    total,
    setTotal,
  };
  return (
    <ParamContext.Provider value={value}>{children}</ParamContext.Provider>
  );
};
export default ParamContext;
