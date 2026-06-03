interface PrimaryInputProps {
  placeholder: string;
  type?: string;
}

export default function PrimaryInput({
  placeholder,
  type = "text",
}: PrimaryInputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-full h-12 bg-white border border-[#e7dfd4] rounded-2xl px-4 text-sm outline-none focus:border-[#c67c2e] transition"
    />
  );
}