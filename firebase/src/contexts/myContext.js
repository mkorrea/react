import { useState } from "react";
import { createContext } from "react";

export const MyContext = createContext()

export const MyProvider = ({ children }) => {
   const [value, setValue] = useState('Hello, World!');
 
   return (
      <MyContext.Provider value={{ value, setValue }}>
         {children}
      </MyContext.Provider>
   );
};