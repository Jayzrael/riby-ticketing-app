import { useState } from "react";
import { createContext } from "react";

export const CheckedContext = createContext(false);

const CheckedProvider = ({ children }) => {
  const [isChecked, setIschecked] = useState(false);

  return (
    <CheckedContext.Provider value={{ isChecked, setIschecked }}>
      {children}
    </CheckedContext.Provider>
  );
};

export default CheckedProvider;
