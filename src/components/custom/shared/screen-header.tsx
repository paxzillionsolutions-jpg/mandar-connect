interface ScreenHeaderProps {
  title: string;
  subtitle?: string;
}

export default function ScreenHeader({
  title,
  subtitle,
}: ScreenHeaderProps) {
  return (
    <div>
      <h1 className="text-[24px] font-bold text-[#1f2937]">
        {title}
      </h1>

      {subtitle && (
        <p className="text-sm text-gray-500 mt-2 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}