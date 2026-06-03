import { ChevronRight } from "lucide-react";

interface ProfileRowProps {
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
  onClick?: () => void;
}

export default function ProfileRow({
  icon,
  title,
  subtitle,
  onClick,
}: ProfileRowProps) {
  return (
    <button
      onClick={onClick}
      className="w-full bg-white border border-[#ece4d8] rounded-2xl p-4 flex items-center justify-between shadow-sm"
    >

      <div className="flex items-center gap-3 min-w-0">

        <div className="w-11 h-11 rounded-2xl bg-[#f4ece0] flex items-center justify-center shrink-0">
          {icon}
        </div>

        <div className="text-left min-w-0">

          <h3 className="text-[14px] font-semibold text-[#1f2937] truncate">
            {title}
          </h3>

          {subtitle && (
            <p className="text-[11px] text-gray-400 mt-1 truncate">
              {subtitle}
            </p>
          )}

        </div>

      </div>

      <ChevronRight
        size={17}
        className="text-gray-400 shrink-0"
      />

    </button>
  );
}