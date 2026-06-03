import { ChevronDown } from "lucide-react";

interface PrimarySelectProps {
  placeholder: string;
}

export default function PrimarySelect({
  placeholder,
}: PrimarySelectProps) {
  return (
    <button className="w-full h-12 bg-white border border-[#e7dfd4] rounded-2xl px-4 flex items-center justify-between shadow-sm">

      <span className="text-sm text-gray-400">
        {placeholder}
      </span>

      <ChevronDown
        size={18}
        className="text-gray-400"
      />

    </button>
  );
}