import { ThemeProvider } from "@/context/ThemeContext";
import { BankKey } from "@/config/banks";
import Header from "@/components/Header";

export default async function BankLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ bank: string }>;
}) {
  const { bank } = await params; // ✅ FIX

  return (
    <ThemeProvider bank={bank as BankKey}>
      <div className="min-h-screen bg-slate-50 flex flex-col">
        <Header />

        <main className="flex-1 flex justify-center px-4 py-8">
          <div className="w-full max-w-3xl">{children}</div>
        </main>
      </div>
    </ThemeProvider>
  );
}