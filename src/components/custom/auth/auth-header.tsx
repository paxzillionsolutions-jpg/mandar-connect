interface AuthHeaderProps {
  title: string;
  subtitle: string;
}

export default function AuthHeader({
  title,
  subtitle,
}: AuthHeaderProps) {
  return (
    <div>
      <h1 className="text-[28px] font-bold text-[#1f2937]">
        {title}
      </h1>

      <p className="text-sm text-gray-500 mt-2 leading-relaxed">
        {subtitle}
      </p>
    </div>
  );
}