interface ScreenLayoutProps {
  children: React.ReactNode;
}

export default function ScreenLayout({
  children,
}: ScreenLayoutProps) {
  return (
    <div className="min-h-full bg-[#fcfbf8]">
      {children}
    </div>
  );
}