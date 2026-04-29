import { LucideIcon } from "lucide-react";

export default function InputField({
  icon: Icon,
  ...props
}: {
  icon: LucideIcon;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-50 focus-within:ring-2 focus-within:ring-blue-500">
      <Icon size={18} className="text-gray-400 mr-2" />
      <input
        {...props}
        className="bg-transparent outline-none w-full text-sm"
      />
    </div>
  );
}