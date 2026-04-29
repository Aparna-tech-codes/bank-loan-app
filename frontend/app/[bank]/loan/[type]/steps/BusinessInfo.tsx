"use client";

import { useForm } from "react-hook-form";

export default function BusinessInfo({ next, back }: any) {
  const { register, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit(next)} className="space-y-4">

      <h2 className="text-xl font-semibold">Business Details</h2>

      <input
        {...register("businessName")}
        placeholder="Business Name"
        className="input"
      />

      <select {...register("businessType")} className="input">
        <option value="">Business Type</option>
        <option>Proprietorship</option>
        <option>Partnership</option>
        <option>Private Ltd</option>
      </select>

      <input
        {...register("turnover")}
        placeholder="Annual Turnover ₹"
        className="input"
      />

      <input
        {...register("gst")}
        placeholder="GST Number"
        className="input"
      />

      <textarea
        {...register("businessAddress")}
        placeholder="Business Address"
        className="input"
      />

      <div className="flex gap-3">
        <button type="button" onClick={back} className="btn-secondary">
          Back
        </button>

        <button className="btn-primary">Continue</button>
      </div>

    </form>
  );
}