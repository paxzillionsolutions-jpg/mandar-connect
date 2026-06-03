interface ScreenContentProps {
  children: React.ReactNode;
  className?: string;
}

export default function ScreenContent({
  children,
  className = "",
}: ScreenContentProps) {
  return (
    <div
      className={`
        px-4
        pt-5
        pb-28
        space-y-5
        ${className}
      `}
    >
      {children}
    </div>
  );
}