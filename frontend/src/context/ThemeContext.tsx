"use client";

import { createContext, useContext } from "react";
import { bankThemes, BankKey } from "../config/banks";

type ThemeType = typeof bankThemes.hdfc;

const ThemeContext = createContext<ThemeType>(bankThemes.hdfc);

export const ThemeProvider = ({
  bank,
  children,
}: {
  bank: BankKey;
  children: React.ReactNode;
}) => {
  const theme = bankThemes[bank] || bankThemes.hdfc;

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);