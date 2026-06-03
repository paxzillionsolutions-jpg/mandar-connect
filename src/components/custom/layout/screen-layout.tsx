import AppShell from "@/components/custom/layout/app-shell";

interface ScreenLayoutProps {
  children: React.ReactNode;
  noScroll?: boolean;
}

export default function ScreenLayout({
  children,
  noScroll = false,
}: ScreenLayoutProps) {
  return (
    <AppShell noScroll={noScroll}>

      <div className="h-full">
        {children}
      </div>

    </AppShell>
  );
}