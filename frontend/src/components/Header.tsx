"use client";

import { useTheme } from "@/context/ThemeContext";

export default function Header() {
  const theme = useTheme();

  return (
    <header
      className="w-full shadow-sm"
      style={{ background: theme.primary }}
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* LEFT */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-white font-bold">
            ₹
          </div>
          <h1 className="text-white text-lg font-semibold">
            {theme.name}
          </h1>
        </div>

        {/* RIGHT */}
        <div className="text-white text-sm opacity-90">
          Secure Loan Portal
        </div>

      </div>
    </header>
  );
}