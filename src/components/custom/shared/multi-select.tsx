interface MultiSelectProps {
  title: string;
  options: string[];
}

export default function MultiSelect({
  title,
  options,
}: MultiSelectProps) {
  return (
    <div>

      <p className="text-sm font-semibold text-[#1f2937] mb-3">
        {title}
      </p>

      <div className="flex flex-wrap gap-2">

        {options.map((option) => (
          <button
            key={option}
            className="px-4 py-2 rounded-xl border border-[#e7dfd4] bg-white text-[13px] font-medium text-[#1f2937] shadow-sm"
          >
            {option}
          </button>
        ))}

      </div>

    </div>
  );
}