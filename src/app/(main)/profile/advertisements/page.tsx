"use client";

import { useRouter } from "next/navigation";

import AppTopbar from "@/components/custom/layout/app-topbar";
import BottomAction from "@/components/custom/layout/bottom-action";
import ScreenContent from "@/components/custom/layout/screen-content";
import ScreenLayout from "@/components/custom/layout/screen-layout";

import PrimaryButton from "@/components/custom/shared/primary-button";

import AdvertisementCard from "@/components/custom/advertisements/advertisement-card";

export default function MyAdvertisementsPage() {

  const router = useRouter();

  return (
    <ScreenLayout>

      <AppTopbar
        title="My Advertisements"
      />

      <ScreenContent className="space-y-5 pb-28">

        {/* MONTHLY LIMIT */}
        <div className="bg-white border border-[#ece4d8] rounded-3xl p-5 shadow-sm flex items-center gap-4">

          {/* PROGRESS RING */}
          <div className="relative w-16 h-16 shrink-0">

            {/* BACKGROUND */}
            <div className="absolute inset-0 rounded-full border-[6px] border-[#eee7dc]" />

            {/* ACTIVE */}
            <div
              className="absolute inset-0 rounded-full border-[6px] border-[#c67c2e]"
              style={{
                clipPath: "inset(0 33% 0 0)",
              }}
            />

            {/* TEXT */}
            <div className="absolute inset-0 flex items-center justify-center">

              <span className="text-[14px] font-bold text-[#1f2937]">
                2/3
              </span>

            </div>

          </div>

          {/* CONTENT */}
          <div>

            <h2 className="text-[15px] font-bold text-[#1f2937]">
              Monthly Advertisement Limit
            </h2>

            <p className="text-[12px] text-gray-500 mt-1 leading-relaxed">
              2 advertisements remaining this month.
            </p>

          </div>

        </div>

        {/* ADS */}
        <div className="space-y-4">

          <AdvertisementCard
            image="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d"
            title="Premium Packaging Solutions"
            industry="Packaging"
            postedTime="3h ago"
            validTill="Jul 03"
            status="Active"
            description="High quality packaging solutions for ecommerce and textile businesses."
          />

          <AdvertisementCard
            image="https://images.unsplash.com/photo-1521572267360-ee0c2909d518"
            title="Cotton Fabric Wholesale"
            industry="Textile"
            postedTime="2 days ago"
            validTill="Jul 01"
            status="Active"
            description="Wholesale cotton fabric available for garment and textile manufacturers."
          />

        </div>

      </ScreenContent>

      <BottomAction>

        <PrimaryButton
          text="Create Advertisement"
          onClick={() => router.push("/create/ad")}
        />

      </BottomAction>

    </ScreenLayout>
  );
}