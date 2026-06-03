import BottomNav from "@/components/navigation/bottom-nav";

interface AppShellProps {
  children: React.ReactNode;
  noScroll?: boolean;
}

export default function AppShell({
  children,
  noScroll = false,
}: AppShellProps) {
  return (
    <div className="h-screen bg-[#f3efe8] flex justify-center overflow-hidden">

      <div className="relative w-full max-w-md h-screen bg-[#fcfbf8] overflow-hidden border-x border-[#e8dfd2] shadow-[0_10px_40px_rgba(0,0,0,0.08)]">

        {/* APP CONTENT */}
        <div
          className={`h-full scrollbar-hide ${
            noScroll
              ? "overflow-hidden"
              : "overflow-y-auto"
          }`}
        >

          {children}

        </div>

        {/* FIXED BOTTOM NAV */}
        <BottomNav />

      </div>

    </div>
  );
}