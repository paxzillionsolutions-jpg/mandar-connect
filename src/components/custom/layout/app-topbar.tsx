"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

interface AppTopbarProps {
  title: string;
  subtitle?: string;
  showBack?: boolean;
}

export default function AppTopbar({
  title,
  subtitle,
  showBack = true,
}: AppTopbarProps) {

  const router = useRouter();

  return (
    <div className="sticky top-0 z-30 bg-[#fcfbf8]/95 backdrop-blur border-b border-[#ece4d8]">

      <div className="h-16 px-4 flex items-center gap-3">

        {showBack && (
          <button
            onClick={() => router.back()}
            className="w-9 h-9 rounded-xl bg-white border border-[#e7dfd4] flex items-center justify-center"
          >
            <ArrowLeft
              size={18}
              className="text-[#1f2937]"
            />
          </button>
        )}

        <div className="min-w-0">

          <h1 className="text-[16px] font-bold text-[#1f2937] truncate">
            {title}
          </h1>

          {subtitle && (
            <p className="text-[11px] text-gray-400 mt-0.5 truncate">
              {subtitle}
            </p>
          )}

        </div>

      </div>
    </div>
  );
}