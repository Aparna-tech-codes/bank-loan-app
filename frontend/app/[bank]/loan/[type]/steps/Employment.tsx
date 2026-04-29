"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import FileUpload from "@/components/FileUpload";

type FormData = {
  type: "employee" | "self";
  company?: string;
  income?: string;
  businessName?: string;
  turnover?: string;
  businessType?: string;
};

export default function Employment({ next, back }: any) {
  const { register, handleSubmit, watch } = useForm<FormData>();
  const [file, setFile] = useState<File | null>(null);

  const type = watch("type");

  const onSubmit = (data: FormData) => {
    next({
      ...data,
      document: file,
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

      <h2 className="text-xl font-semibold">Employment Details</h2>

      {/* SELECT TYPE */}
      <select
        {...register("type", { required: true })}
        className="input"
      >
        <option value="">Select Employment Type</option>
        <option value="employee">Employee</option>
        <option value="self">Self Employed</option>
      </select>

      {/* ================= EMPLOYEE ================= */}
      {type === "employee" && (
        <div className="space-y-4">

          <input
            {...register("company", { required: true })}
            placeholder="Company Name"
            className="input"
          />

          <input
            {...register("income", { required: true })}
            placeholder="Monthly Income ₹"
            className="input"
          />

          <FileUpload
            label="Upload Salary Slip"
            onChange={(file: File) => setFile(file)}
          />

        </div>
      )}

      {/* ================= SELF EMPLOYED ================= */}
      {type === "self" && (
        <div className="space-y-4">

          <input
            {...register("businessName", { required: true })}
            placeholder="Business Name"
            className="input"
          />

          <input
            {...register("turnover", { required: true })}
            placeholder="Annual Turnover ₹"
            className="input"
          />

          <select
            {...register("businessType")}
            className="input"
          >
            <option value="">Business Type (Optional)</option>
            <option>Proprietorship</option>
            <option>Partnership</option>
            <option>Private Ltd</option>
          </select>

          <FileUpload
            label="Upload ITR / Business Proof"
            onChange={(file: File) => setFile(file)}
          />

        </div>
      )}

      {/* BUTTONS */}
      <div className="flex gap-3">
        <button
          type="button"
          onClick={back}
          className="btn-secondary"
        >
          Back
        </button>

        <button className="btn-primary">
          Continue
        </button>
      </div>

    </form>
  );
}