"use client";

import { useState } from "react";

import BottomSheet from "@/components/custom/layout/bottom-sheet";

import { useRouter } from "next/navigation";

import {
  Search,
  ChevronRight,
  Building2,
  BriefcaseBusiness,
  BadgeCheck,
  Bell,
  Plus,
} from "lucide-react";

import ScreenLayout from "@/components/custom/layout/screen-layout";
import ScreenContent from "@/components/custom/layout/screen-content";

const categories = [
  "Textile",
  "Packaging",
  "Logistics",
];

export default function HomePage() {

  const router = useRouter();
  const [openSheet, setOpenSheet] = useState(false);

  return (
    <ScreenLayout>

      {/* TOPBAR */}
      <div className="sticky top-0 z-30 bg-[#fcfbf8]/95 backdrop-blur border-b border-[#ece4d8]">

        <div className="h-16 px-4 flex items-center justify-between">

          <div>

            <h1 className="text-[16px] font-bold text-[#1f2937]">
              Mandar Business Group
            </h1>

            <p className="text-[11px] text-gray-400 mt-0.5">
              Community Business Ecosystem
            </p>

          </div>

          <button className="relative w-10 h-10 rounded-xl bg-white border border-[#ece4d8] flex items-center justify-center shadow-sm">

  <Bell
    size={18}
    className="text-[#1f2937]"
  />

  {/* DOT */}
  <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-[#c67c2e]" />

</button>

        </div>

      </div>

      {/* CONTENT */}
      <ScreenContent>

        {/* SEARCH */}
        <button className="w-full h-12 bg-white border border-[#e7dfd4] rounded-2xl flex items-center px-4 shadow-sm">

          <Search
            size={18}
            className="text-gray-400"
          />

          <span className="ml-3 text-sm text-gray-400">
            Search businesses or products...
          </span>

        </button>

       {/* CREATE ACTION */}
<button
  onClick={() => setOpenSheet(true)}
  className="w-full bg-[#1f2937] rounded-2xl p-4 flex items-center justify-between shadow-sm"
>

  <div className="text-left">

    <p className="text-white text-[14px] font-semibold">
      Post Requirement or Advertisement
    </p>

    <p className="text-white/60 text-[11px] mt-1">
      Reach businesses across the community
    </p>

  </div>

  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">

    <Plus
      size={18}
      className="text-white"
    />

  </div>

</button>

        {/* CATEGORIES */}
        <div>

          <div className="flex items-center justify-between">

            <h2 className="text-[15px] font-bold text-[#1f2937]">
              Industries
            </h2>

            <button className="flex items-center gap-1 text-[12px] font-semibold text-[#c67c2e]">

              View All

              <ChevronRight size={13} />

            </button>

          </div>

          <div className="mt-3 flex items-center gap-2">

            {categories.map((category) => (
              <button
                key={category}
                className="flex-1 bg-white border border-[#e8dfd2] py-2 rounded-xl text-[11px] font-semibold text-[#1f2937] shadow-sm"
              >
                {category}
              </button>
            ))}

          </div>

        </div>

        {/* STATS */}
        <div className="grid grid-cols-3 gap-3">

          <div className="bg-white border border-[#ece4d8] rounded-2xl p-4 shadow-sm">

            <Building2
              size={17}
              className="text-[#c67c2e]"
            />

            <h3 className="text-[17px] font-bold text-[#1f2937] mt-3">
              320+
            </h3>

            <p className="text-[11px] text-gray-500 mt-1">
              Businesses
            </p>

          </div>

          <div className="bg-white border border-[#ece4d8] rounded-2xl p-4 shadow-sm">

            <BriefcaseBusiness
              size={17}
              className="text-[#c67c2e]"
            />

            <h3 className="text-[17px] font-bold text-[#1f2937] mt-3">
              84
            </h3>

            <p className="text-[11px] text-gray-500 mt-1">
              Leads
            </p>

          </div>

          <div className="bg-white border border-[#ece4d8] rounded-2xl p-4 shadow-sm">

            <BadgeCheck
              size={17}
              className="text-[#c67c2e]"
            />

            <h3 className="text-[17px] font-bold text-[#1f2937] mt-3">
              210
            </h3>

            <p className="text-[11px] text-gray-500 mt-1">
              Verified
            </p>

          </div>

        </div>

        {/* FEATURED */}
        <div>

          <div className="flex items-center justify-between">

            <h2 className="text-[15px] font-bold text-[#1f2937]">
              Featured Businesses
            </h2>

            <button className="text-[12px] font-semibold text-[#c67c2e]">
              View All
            </button>

          </div>

          <div className="mt-3 space-y-3">

            {/* CARD */}
            <div className="bg-white border border-[#ece4d8] rounded-2xl p-4 shadow-sm">

              <div className="flex items-center justify-between gap-3">

                <div className="min-w-0">

                  <div className="flex items-center gap-2">

                    <h3 className="text-[14px] font-bold text-[#1f2937] truncate">
                      Jain Packaging
                    </h3>

                    <span className="bg-[#eef7ee] text-[#2e8b57] text-[10px] px-2 py-1 rounded-full font-semibold">
                      Verified
                    </span>

                  </div>

                  <p className="text-[11px] text-gray-400 mt-1">
                    Surat, Gujarat
                  </p>

                  <p className="text-[12px] text-gray-500 mt-3 leading-relaxed line-clamp-2">
                    Corrugated packaging boxes manufacturer for textile businesses.
                  </p>

                </div>

              </div>

            </div>

            {/* CARD */}
            <div className="bg-white border border-[#ece4d8] rounded-2xl p-4 shadow-sm">

              <div className="flex items-center justify-between gap-3">

                <div className="min-w-0">

                  <div className="flex items-center gap-2">

                    <h3 className="text-[14px] font-bold text-[#1f2937] truncate">
                      Mahavir Textiles
                    </h3>

                    <span className="bg-[#eef7ee] text-[#2e8b57] text-[10px] px-2 py-1 rounded-full font-semibold">
                      Verified
                    </span>

                  </div>

                  <p className="text-[11px] text-gray-400 mt-1">
                    Ahmedabad
                  </p>

                  <p className="text-[12px] text-gray-500 mt-3 leading-relaxed line-clamp-2">
                    Premium cotton fabric wholesaler supplying across Gujarat.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </ScreenContent>

      {/* CREATE SHEET */}
<BottomSheet
  open={openSheet}
  onClose={() => setOpenSheet(false)}
>

  <h2 className="text-[18px] font-bold text-[#1f2937]">
    Create Post
  </h2>

  <p className="text-sm text-gray-500 mt-2 leading-relaxed">
    Choose what you would like to post.
  </p>

  <div className="mt-6 space-y-3">

    {/* REQUIREMENT */}
    <button
      onClick={() => {
        setOpenSheet(false);
        router.push("/create/requirement");
      }}
      className="w-full bg-white border border-[#ece4d8] rounded-2xl p-4 text-left shadow-sm"
    >

      <h3 className="text-[15px] font-bold text-[#1f2937]">
        Requirement
      </h3>

      <p className="text-[12px] text-gray-500 mt-1 leading-relaxed">
        Find suppliers, services or business opportunities.
      </p>

    </button>

    {/* AD */}
    <button
      onClick={() => {
        setOpenSheet(false);
        router.push("/create/ad");
      }}
      className="w-full bg-white border border-[#ece4d8] rounded-2xl p-4 text-left shadow-sm"
    >

      <h3 className="text-[15px] font-bold text-[#1f2937]">
        Advertisement
      </h3>

      <p className="text-[12px] text-gray-500 mt-1 leading-relaxed">
        Promote your business, products or services.
      </p>

    </button>

  </div>

</BottomSheet>

    </ScreenLayout>
  );
}