import React, { createContext, useContext, useState } from "react";

export const GlobalContext = createContext<any>(null);

export function useGlobal() {
  return useContext(GlobalContext);
}

export function GlobalProvider({ children }: React.PropsWithChildren) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(true);

  return (
    <GlobalContext.Provider
      value={{
        isMobileMenuOpen,
        setIsMobileMenuOpen,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
