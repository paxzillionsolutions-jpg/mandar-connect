"use client";

import { useState } from "react";

import DirectoryFilterDrawer from "@/components/custom/directory/directory-filter-drawer";

import {
  Search,
  SlidersHorizontal,
} from "lucide-react";

import AppTopbar from "@/components/custom/layout/app-topbar";
import ScreenContent from "@/components/custom/layout/screen-content";
import ScreenLayout from "@/components/custom/layout/screen-layout";

import DirectoryCard from "@/components/custom/directory/directory-card";

export default function DirectoryPage() {

  const [filterOpen, setFilterOpen] = useState(false);

  return (
    <ScreenLayout>

      <AppTopbar
        title="Business Directory"
      />

      <ScreenContent className="space-y-5 pb-24">

        {/* SEARCH */}
        <div className="flex items-center gap-3">

          {/* SEARCH BAR */}
          <div className="flex-1 h-14 bg-white border border-[#ece4d8] rounded-2xl px-4 flex items-center gap-3 shadow-sm">

            <Search
              size={18}
              className="text-gray-400"
            />

            <input
              placeholder="Search business, person, industry..."
              className="flex-1 bg-transparent outline-none text-[14px] text-[#1f2937] placeholder:text-gray-400"
            />

          </div>

          {/* FILTER BUTTON */}
          <button
            onClick={() => setFilterOpen(true)}
            className="w-14 h-14 rounded-2xl bg-white border border-[#ece4d8] shadow-sm flex items-center justify-center shrink-0"
          >

            <SlidersHorizontal
              size={20}
              className="text-[#1f2937]"
            />

          </button>

        </div>

        {/* DIRECTORY LIST */}
        <div className="space-y-4">

          <DirectoryCard
            image="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d"
            businessName="Jain Packaging"
            personName="Rahul Jain"
            industry="Packaging"
            location="Vadodara, Gujarat"
            verified
            saved
            description="Premium packaging solutions for ecommerce, textile and industrial businesses."
          />

          <DirectoryCard
            image="https://images.unsplash.com/photo-1521572267360-ee0c2909d518"
            businessName="Shree Textile Hub"
            personName="Amit Shah"
            industry="Textile"
            location="Surat, Gujarat"
            saved={false}
            description="Wholesale textile supplier offering cotton fabrics and garment materials."
          />

        </div>

      </ScreenContent>

      {/* FILTER DRAWER */}
      <DirectoryFilterDrawer
        open={filterOpen}
        onClose={() => setFilterOpen(false)}
      />

    </ScreenLayout>
  );
}