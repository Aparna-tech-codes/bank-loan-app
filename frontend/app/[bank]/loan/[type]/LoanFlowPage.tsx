"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { loanFlows } from "@/config/loanFlows";
import Stepper from "../../../../src/components/Stepper";
import PersonalInfo from "./steps/PersonalInfo";
import Documents from "./steps/Documents";
import Review from "./steps/Review";
import GoldDetails from "./steps/GoldDetails";
import BusinessInfo from "./steps/BusinessInfo";
import Employment from "./steps/Employment";
import { useLoan } from "@/context/LoanContext";
  import { submitLoan } from "@/services/loanService";

export default function LoanFlowPage() {
  const params = useParams();
  const type = params.type as keyof typeof loanFlows;
const { data, updateData } = useLoan();

  const steps = loanFlows[type];
  const [stepIndex, setStepIndex] = useState(0);
  const [formData, setFormData] = useState<any>({});

  const next = (newData?: any) => {
  if (newData) updateData(newData);
  setStepIndex((prev) => prev + 1);
};

  const back = () => setStepIndex((prev) => Math.max(prev - 1, 0));



const submit = async () => {
  const finalData = {
    ...formData,
    bankCode: params.bank,     // ✅ dynamic bank
    loanType: params.type,     // ✅ dynamic loan type
  };

  console.log("FINAL SUBMIT:", finalData);

  try {
    const res = await submitLoan(finalData);
    alert("Loan Submitted ✅");
    console.log(res);
  } catch (err) {
    console.error(err);
    alert("Submission failed ❌");
  }
};

  const step = steps[stepIndex];

  const renderStep = () => {
    switch (step) {
      case "personalInfo":
        return <PersonalInfo next={next} defaultValues={formData} />;
      case "employment":
        return <Employment next={next} back={back} defaultValues={formData} />;
      case "documents":
        return <Documents next={next} back={back} />;
      case "review":
        return (
         <Review
  data={data}
  submit={submit}
  edit={(index: number) => setStepIndex(index)}
/>
        );
      case "goldDetails":
        return <GoldDetails next={next} back={back} />;
      case "businessInfo":
        return <BusinessInfo next={next} back={back} />;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4 space-y-6">

      {/* ✅ Stepper */}
      <Stepper steps={steps} current={stepIndex} />

      {/* ✅ Step UI */}
      <div className="bg-white p-6 rounded-2xl shadow">
        {renderStep()}
      </div>

    </div>
  );
}