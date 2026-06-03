"use client";

import {
  ArrowLeft,
  Phone,
  EllipsisVertical,
  Plus,
  SendHorizonal,
} from "lucide-react";

import { useRouter } from "next/navigation";

import MessageBubble from "@/components/custom/chat/message-bubble";

export default function ConversationPage() {

  const router = useRouter();

  return (
    <div className="fixed inset-0 bg-[#f3efe8] flex justify-center">

      <div className="w-full max-w-md h-screen flex flex-col overflow-hidden border-x border-[#e8dfd2] bg-[#f8f5ef]">

        {/* HEADER */}
        <div className="shrink-0 border-b border-[#ece4d8] bg-[#f8f5ef] px-4 py-3">

          <div className="flex items-start justify-between gap-3">

            {/* LEFT */}
            <div className="flex items-start gap-3 min-w-0">

              <button
                onClick={() => router.back()}
                className="w-10 h-10 rounded-2xl bg-white border border-[#ece4d8] flex items-center justify-center shrink-0"
              >

                <ArrowLeft
                  size={18}
                  className="text-[#1f2937]"
                />

              </button>

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

            {/* RIGHT */}
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

        {/* MESSAGES */}
        <div className="flex-1 overflow-y-auto px-4 py-5 space-y-4 scrollbar-hide">

          {/* DATE */}
          <div className="flex justify-center">

            <div className="px-3 py-1 rounded-full bg-white border border-[#ece4d8] text-[11px] text-gray-500 font-medium">

              Today

            </div>

          </div>

          <MessageBubble
            message="Hello sir, we manufacture custom ecommerce packaging solutions."
            time="10:12 AM"
          />

          <MessageBubble
            message="Can you share pricing for bulk orders?"
            time="10:14 AM"
            isSender
          />

          <MessageBubble
            message="Sure. Please share your quantity requirements and box dimensions."
            time="10:16 AM"
          />

          <MessageBubble
            message="We require around 5000 corrugated boxes monthly."
            time="10:18 AM"
            isSender
          />

        </div>

        {/* INPUT */}
        <div className="shrink-0 border-t border-[#ece4d8] bg-[#f8f5ef] px-4 py-3">

          <div className="flex items-center gap-3">

            {/* ATTACH */}
            <button className="w-11 h-11 rounded-2xl bg-white border border-[#ece4d8] flex items-center justify-center shrink-0">

              <Plus
                size={20}
                className="text-[#1f2937]"
              />

            </button>

            {/* INPUT */}
            <div className="flex-1 h-11 rounded-2xl bg-white border border-[#ece4d8] px-4 flex items-center">

              <input
                placeholder="Type message..."
                className="flex-1 bg-transparent outline-none text-[14px] text-[#1f2937] placeholder:text-gray-400"
              />

            </div>

            {/* SEND */}
            <button className="w-11 h-11 rounded-2xl bg-[#1f2937] flex items-center justify-center shrink-0">

              <SendHorizonal
                size={18}
                className="text-white"
              />

            </button>

          </div>

        </div>

      </div>

    </div>
  );
}