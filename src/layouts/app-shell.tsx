import BottomNav from "@/components/navigation/bottom-nav";

interface AppShellProps {
  children: React.ReactNode;
}

export default function AppShell({
  children,
}: AppShellProps) {
  return (
    <div className="h-screen bg-[#f3efe8] flex justify-center overflow-hidden">
      <div className="w-full max-w-md h-screen bg-[#fcfbf8] relative overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
        
        {/* SCROLLABLE APP CONTENT */}
        <div className="h-full overflow-y-auto pb-24 scrollbar-hide">
          {children}
        </div>

        {/* FIXED NAV */}
        <BottomNav />
      </div>
    </div>
  );
}