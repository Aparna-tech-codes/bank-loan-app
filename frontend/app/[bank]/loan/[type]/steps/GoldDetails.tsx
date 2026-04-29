"use client";

import { useForm } from "react-hook-form";

export default function GoldDetails({ next, back }: any) {
  const { register, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit(next)} className="space-y-4">

      <h2 className="text-xl font-semibold">Gold Loan Details</h2>

      <select {...register("goldType")} className="input">
        <option value="">Gold Type</option>
        <option>Jewellery</option>
        <option>Coins</option>
        <option>Bullion</option>
      </select>

      <input
        {...register("weight")}
        placeholder="Gold Weight (grams)"
        className="input"
      />

      <input
        {...register("estimatedValue")}
        placeholder="Estimated Value ₹"
        className="input"
      />

      <select {...register("purity")} className="input">
        <option value="">Purity</option>
        <option>18K</option>
        <option>22K</option>
        <option>24K</option>
      </select>

      <div className="flex gap-3">
        <button type="button" onClick={back} className="btn-secondary">
          Back
        </button>

        <button className="btn-primary">Continue</button>
      </div>

    </form>
  );
}