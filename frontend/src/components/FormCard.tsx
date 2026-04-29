import type { ReactNode } from "react";

type FormCardProps = {
  title: string;
  children: ReactNode;
};

export default function FormCard({ title, children }: FormCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 max-w-2xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      {children}
    </div>
  );
}