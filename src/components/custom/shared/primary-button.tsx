interface PrimaryButtonProps {
  text: string;
  onClick?: () => void;
}

export default function PrimaryButton({
  text,
  onClick,
}: PrimaryButtonProps) {
  return (
    <button
      onClick={onClick}
      className="w-full h-12 bg-[#1f2937] rounded-2xl text-white text-sm font-semibold shadow-sm active:scale-[0.98] transition"
    >
      {text}
    </button>
  );
}