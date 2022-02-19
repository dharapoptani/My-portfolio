import React, { useContext, useState } from "react";

const modeContext = React.createContext();

export const ModeContext = () => useContext(modeContext);
const Light = ({ children }) => {
  const [dark, setDark] = useState(false);
  const data = {
    dark,
    setDark,
  };
  return <modeContext.Provider value={data}>{children}</modeContext.Provider>;
};

export default Light;
