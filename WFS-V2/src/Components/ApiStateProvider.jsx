import { createContext, useState } from "react";

export const ApiStateContext = createContext(null);

export default function ApiStateProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <ApiStateContext.Provider value={[isLoading, setIsLoading]}>
      {children}
    </ApiStateContext.Provider>
  );
}
