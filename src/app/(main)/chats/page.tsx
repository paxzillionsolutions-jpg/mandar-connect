"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

import {
  Search,
  SlidersHorizontal,
} from "lucide-react";

import AppTopbar from "@/components/custom/layout/app-topbar";
import ScreenContent from "@/components/custom/layout/screen-content";
import ScreenLayout from "@/components/custom/layout/screen-layout";

import ChatCard from "@/components/custom/chat/chat-card";

export default function ChatsPage() {

  const router = useRouter();

  const [selectedFilter, setSelectedFilter] = useState("All");

  return (
    <ScreenLayout>

      <AppTopbar
        title="Chats"
        showBack={false}
      />

      <ScreenContent className="pb-24">

        {/* SEARCH + FILTER */}
        <div className="flex items-center gap-3 mb-4">

          {/* SEARCH */}
          <div className="flex-1 h-12 bg-white border border-[#ece4d8] rounded-2xl px-4 flex items-center gap-3 shadow-sm">

            <Search
              size={17}
              className="text-gray-400"
            />

            <input
              placeholder="Search chats..."
              className="flex-1 bg-transparent outline-none text-[14px] text-[#1f2937] placeholder:text-gray-400"
            />

          </div>

          {/* FILTER */}
          <button className="w-12 h-12 rounded-2xl bg-white border border-[#ece4d8] shadow-sm flex items-center justify-center shrink-0">

            <SlidersHorizontal
              size={18}
              className="text-[#1f2937]"
            />

          </button>

        </div>

        {/* FILTER TABS */}
        <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide pb-3">

          {[
            "All",
            "Unread (3)",
            "Archived (12)",
          ].map((filter) => (

            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`h-9 px-4 rounded-full text-[12px] font-medium whitespace-nowrap transition ${
                selectedFilter === filter
                  ? "bg-[#1f2937] text-white"
                  : "bg-white border border-[#ece4d8] text-[#1f2937]"
              }`}
            >

              {filter}

            </button>

          ))}

        </div>

        {/* CHAT LIST */}
        <div className="mt-1">

          <ChatCard
            personName="Rahul Jain"
            businessName="Jain Packaging"
            lastMessage="We can provide bulk packaging supplies for your business."
            time="2m"
            unreadCount={2}
            pinned
            onClick={() => router.push("/chats/conversation")}
          />

          <ChatCard
            personName="Amit Shah"
            businessName="Shree Textile Hub"
            lastMessage="Please share your fabric requirement details."
            time="1h"
            onClick={() => router.push("/chats/conversation")}
          />

          <ChatCard
            personName="Vikas Mehta"
            businessName="Apex Machinery"
            lastMessage="Can you send pricing for industrial sealing machines?"
            time="4h"
            unreadCount={1}
            onClick={() => router.push("/chats/conversation")}
          />

          <ChatCard
            personName="Rohit Patel"
            businessName="RK Traders"
            lastMessage="Thank you for sharing the quotation."
            time="Yesterday"
            onClick={() => router.push("/chats/conversation")}
          />

        </div>

      </ScreenContent>

    </ScreenLayout>
  );
}