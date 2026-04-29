import { useForm } from "react-hook-form";
import { useLoan } from "@/context/LoanContext";

export default function PersonalInfo({ next, defaultValues }: any) {
  const { data } = useLoan();

  const { register, handleSubmit } = useForm({
     defaultValues: data,
  });

  return (
    <form onSubmit={handleSubmit(next)} className="space-y-4">

      <h2 className="text-xl font-semibold">Personal Details</h2>

      <input {...register("name")} placeholder="Full Name" className="input" />

      <input type="date" {...register("dob")} className="input" />

      <input {...register("mobile")} placeholder="Mobile" className="input" />

      <input {...register("email")} placeholder="Email" className="input" />

      {/* ADDRESS */}
      <textarea
        {...register("currentAddress")}
        placeholder="Current Address"
        className="input"
      />

      <textarea
        {...register("permanentAddress")}
        placeholder="Permanent Address"
        className="input"
      />

      <button className="btn-primary">Continue</button>
    </form>
  );
}