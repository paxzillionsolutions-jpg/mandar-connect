import AppShell from "@/components/custom/layout/app-shell";

interface AuthContainerProps {
  children: React.ReactNode;
}

export default function AuthContainer({
  children,
}: AuthContainerProps) {
  return (
    <AppShell>
      <div className="h-full overflow-y-auto scrollbar-hide">
        {children}
      </div>
    </AppShell>
  );
}