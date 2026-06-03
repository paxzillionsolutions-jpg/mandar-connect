"use client";

import {
  ArrowLeft,
  Phone,
  EllipsisVertical,
} from "lucide-react";

import { useRouter } from "next/navigation";

export default function ConversationHeader() {

  const router = useRouter();

  return (
    <div className="shrink-0 border-b border-[#ece4d8] bg-[#f8f5ef] px-4 py-3">

      <div className="flex items-start justify-between gap-3">

        {/* LEFT */}
        <div className="flex items-start gap-3 min-w-0">

          {/* BACK */}
          <button
            onClick={() => router.back()}
            className="w-10 h-10 rounded-2xl bg-white border border-[#ece4d8] flex items-center justify-center shrink-0"
          >

            <ArrowLeft
              size={18}
              className="text-[#1f2937]"
            />

          </button>

          {/* INFO */}
          <div className="min-w-0">

            <h2 className="text-[15px] font-semibold text-[#1f2937] truncate">

              Rahul Jain

            </h2>

            <p className="text-[11px] text-[#c67c2e] font-medium truncate mt-[1px]">

              Jain Packaging

            </p>

            <button className="text-[11px] text-[#1f2937] font-medium mt-1">

              View Profile

            </button>

          </div>

        </div>

        {/* ACTIONS */}
        <div className="flex items-center gap-2 shrink-0">

          <button className="w-10 h-10 rounded-2xl bg-white border border-[#ece4d8] flex items-center justify-center">

            <Phone
              size={18}
              className="text-[#1f2937]"
            />

          </button>

          <button className="w-10 h-10 rounded-2xl bg-white border border-[#ece4d8] flex items-center justify-center">

            <EllipsisVertical
              size={18}
              className="text-[#1f2937]"
            />

          </button>

        </div>

      </div>

    </div>
  );
}