"use client";

import { createContext, useContext, useState } from "react";

type LoanData = {
  [key: string]: any;
};

const LoanContext = createContext<any>(null);

export function LoanProvider({ children }: any) {
  const [data, setData] = useState<LoanData>({});

  const updateData = (newData: any) => {
    setData((prev) => ({ ...prev, ...newData }));
  };

  return (
    <LoanContext.Provider value={{ data, updateData }}>
      {children}
    </LoanContext.Provider>
  );
}

export const useLoan = () => useContext(LoanContext);