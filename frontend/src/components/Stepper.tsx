"use client";

export default function Stepper({
  steps,
  current,
}: {
  steps: string[];
  current: number;
}) {
  return (
    <div className="flex items-center justify-between">

      {steps.map((_, i) => (
        <div key={i} className="flex-1 flex items-center">

          <div
            className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-semibold
              ${i <= current ? "bg-blue-600 text-white" : "bg-gray-200"}
            `}
          >
            {i + 1}
          </div>

          {i !== steps.length - 1 && (
            <div
              className={`flex-1 h-1 ${
                i < current ? "bg-blue-600" : "bg-gray-200"
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
}