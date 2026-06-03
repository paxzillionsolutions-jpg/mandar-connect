import AppShell from "@/components/custom/layout/app-shell";

interface ScreenLayoutProps {
  children: React.ReactNode;
}

export default function ScreenLayout({
  children,
}: ScreenLayoutProps) {
  return (
    <AppShell>

      <div className="h-full overflow-y-auto scrollbar-hide">
        {children}
      </div>

    </AppShell>
  );
}