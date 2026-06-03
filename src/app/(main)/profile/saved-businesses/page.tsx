"use client";

import { Search } from "lucide-react";

import AppTopbar from "@/components/custom/layout/app-topbar";
import ScreenContent from "@/components/custom/layout/screen-content";
import ScreenLayout from "@/components/custom/layout/screen-layout";

import SavedBusinessCard from "@/components/custom/saved/saved-business-card";

export default function SavedBusinessesPage() {
  return (
    <ScreenLayout>

      <AppTopbar
        title="Saved Businesses"
      />

      <ScreenContent className="space-y-5 pb-24">

        {/* SEARCH */}
        <div className="h-14 bg-white border border-[#ece4d8] rounded-2xl px-4 flex items-center gap-3 shadow-sm">

          <Search
            size={18}
            className="text-gray-400"
          />

          <input
            placeholder="Search saved businesses..."
            className="flex-1 bg-transparent outline-none text-[14px] text-[#1f2937] placeholder:text-gray-400"
          />

        </div>

        {/* LIST */}
        <div className="space-y-4">

          <SavedBusinessCard
            image="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d"
            businessName="Jain Packaging"
            personName="Rahul Jain"
            industry="Packaging"
            location="Vadodara, Gujarat"
            verified
            description="Premium packaging solutions for ecommerce, textile and industrial businesses."
          />

          <SavedBusinessCard
            image="https://images.unsplash.com/photo-1521572267360-ee0c2909d518"
            businessName="Shree Textile Hub"
            personName="Amit Shah"
            industry="Textile"
            location="Surat, Gujarat"
            description="Wholesale textile supplier offering cotton fabrics and garment materials."
          />

        </div>

      </ScreenContent>

    </ScreenLayout>
  );
}