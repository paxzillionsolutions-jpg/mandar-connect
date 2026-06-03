"use client";

import { useRouter } from "next/navigation";

import {
  Package,
  BriefcaseBusiness,
  Megaphone,
  Building2,
  Bookmark,
  Bell,
  ShieldCheck,
  CircleHelp,
  LogOut,
} from "lucide-react";

import ScreenLayout from "@/components/custom/layout/screen-layout";
import AppTopbar from "@/components/custom/layout/app-topbar";
import ScreenContent from "@/components/custom/layout/screen-content";

import ProfileRow from "@/components/custom/profile/profile-row";

export default function ProfilePage() {

  const router = useRouter();

  return (
    <ScreenLayout>

      <AppTopbar
        title="Profile"
        showBack={false}
      />

      <ScreenContent>

        {/* BUSINESS HEADER */}
        <div className="bg-white border border-[#ece4d8] rounded-3xl p-5 shadow-sm">

  <div className="flex items-center gap-4">

            {/* AVATAR */}
            <div className="w-16 h-16 rounded-3xl bg-[#f4ece0] flex items-center justify-center text-[#c67c2e] text-[22px] font-bold">
              J
            </div>

            <div className="min-w-0">

              <h2 className="text-[18px] font-bold text-[#1f2937] truncate">
                Jain Packaging
              </h2>

              <p className="text-[12px] text-gray-500 mt-1">
                Packaging Industry • Surat
              </p>

              <div className="mt-2 flex items-center gap-2">

  <div className="inline-flex items-center px-2.5 py-1 rounded-full bg-[#eef7ee] text-[#2e8b57] text-[10px] font-semibold">
    Community Verified
  </div>

  <button
    onClick={() => router.push("/profile/edit")}
    className="h-6 px-2.5 rounded-full border border-[#e7dfd4] bg-[#fcfbf8] text-[10px] font-semibold text-[#1f2937]"
  >
    Edit Profile
  </button>

</div>

            </div>

          </div>

        </div>

        {/* QUICK STATS */}
        <div className="grid grid-cols-3 gap-3">

          <div className="bg-white border border-[#ece4d8] rounded-2xl p-4 text-center shadow-sm">

            <h3 className="text-[18px] font-bold text-[#1f2937]">
              12
            </h3>

            <p className="text-[11px] text-gray-500 mt-1">
              Products
            </p>

          </div>

          <div className="bg-white border border-[#ece4d8] rounded-2xl p-4 text-center shadow-sm">

            <h3 className="text-[18px] font-bold text-[#1f2937]">
              4
            </h3>

            <p className="text-[11px] text-gray-500 mt-1">
              Leads
            </p>

          </div>

          <div className="bg-white border border-[#ece4d8] rounded-2xl p-4 text-center shadow-sm">

            <h3 className="text-[18px] font-bold text-[#1f2937]">
              2
            </h3>

            <p className="text-[11px] text-gray-500 mt-1">
              Ads
            </p>

          </div>

        </div>

        {/* BUSINESS MANAGEMENT */}
        <div className="space-y-3">

          <h2 className="text-[14px] font-bold text-[#1f2937]">
            Business Management
          </h2>

          <ProfileRow
            icon={<Package size={20} className="text-[#c67c2e]" />}
            title="My Products"
            subtitle="Manage business products"
            onClick={() => router.push("/profile/products")}
          />

          <ProfileRow
            icon={<BriefcaseBusiness size={20} className="text-[#c67c2e]" />}
            title="My Requirements"
            subtitle="Manage posted requirements"
            onClick={() => router.push("/profile/requirements")}
          />

          <ProfileRow
            icon={<Megaphone size={20} className="text-[#c67c2e]" />}
            title="My Advertisements"
            subtitle="Manage advertisements"
            onClick={() => router.push("/profile/advertisements")}
          />

        </div>

        {/* COMMUNITY */}
        <div className="space-y-3">

          <h2 className="text-[14px] font-bold text-[#1f2937]">
            Community
          </h2>

          <ProfileRow
            icon={<Building2 size={20} className="text-[#c67c2e]" />}
            title="Business Directory"
            subtitle="Explore community businesses"
            onClick={() => router.push("/profile/directory")}
          />

          <ProfileRow
  icon={<Bookmark size={20} className="text-[#c67c2e]" />}
  title="Saved Businesses"
  subtitle="Your bookmarked businesses"
  onClick={() => router.push("/profile/saved-businesses")}
/>

        </div>

        {/* ACCOUNT */}
        <div className="space-y-3">

          <h2 className="text-[14px] font-bold text-[#1f2937]">
            Account
          </h2>

          <ProfileRow
            icon={<Bell size={20} className="text-[#c67c2e]" />}
            title="Notifications"
            subtitle="Manage notifications"
          />

          <ProfileRow
            icon={<ShieldCheck size={20} className="text-[#c67c2e]" />}
            title="Verification Status"
            subtitle="Business verification details"
          />

          <ProfileRow
            icon={<CircleHelp size={20} className="text-[#c67c2e]" />}
            title="Help & Support"
            subtitle="Support and assistance"
          />

          <ProfileRow
            icon={<LogOut size={20} className="text-red-500" />}
            title="Logout"
            subtitle="Sign out from account"
          />

        </div>

      </ScreenContent>

    </ScreenLayout>
  );
}