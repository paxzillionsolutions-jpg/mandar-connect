interface AppShellProps {
  children: React.ReactNode;
}

export default function AppShell({
  children,
}: AppShellProps) {
  return (
    <div className="h-screen bg-[#f3efe8] flex justify-center overflow-hidden">

      <div className="relative w-full max-w-md h-screen bg-[#fcfbf8] overflow-hidden border-x border-[#e8dfd2]">

        {children}

      </div>

    </div>
  );
}