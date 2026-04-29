export default function ProgressBar({ step }: { step: number }) {
  const total = 5;
  const percent = (step / total) * 100;

  return (
    <div className="mb-6">
      <div className="h-2 bg-gray-200 rounded-full">
        <div
          className="h-2 bg-blue-600 rounded-full transition-all"
          style={{ width: `${percent}%` }}
        />
      </div>
      <p className="text-xs text-gray-500 mt-1">
        Step {step} of {total}
      </p>
    </div>
  );
}