interface PrimaryTextareaProps {
  placeholder: string;
}

export default function PrimaryTextarea({
  placeholder,
}: PrimaryTextareaProps) {
  return (
    <textarea
      placeholder={placeholder}
      rows={5}
      className="w-full bg-white border border-[#e7dfd4] rounded-2xl px-4 py-4 text-sm outline-none resize-none focus:border-[#c67c2e] transition"
    />
  );
}