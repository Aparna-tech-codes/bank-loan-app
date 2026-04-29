import LoanFlowPage from "./LoanFlowPage";
import { LoanProvider } from "@/context/LoanContext";

export default function Page() {
  return (
    <LoanProvider>
      <LoanFlowPage />
    </LoanProvider>
  );
}