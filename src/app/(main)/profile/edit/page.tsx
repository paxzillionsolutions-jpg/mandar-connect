"use client";

import AppTopbar from "@/components/custom/layout/app-topbar";
import BottomAction from "@/components/custom/layout/bottom-action";
import ScreenContent from "@/components/custom/layout/screen-content";
import ScreenLayout from "@/components/custom/layout/screen-layout";

import UploadBox from "@/components/custom/shared/upload-box";
import PrimaryButton from "@/components/custom/shared/primary-button";
import PrimaryInput from "@/components/custom/shared/primary-input";
import PrimarySelect from "@/components/custom/shared/primary-select";
import PrimaryTextarea from "@/components/custom/shared/primary-textarea";

export default function EditProfilePage() {
  return (
    <ScreenLayout>

      <AppTopbar
        title="Edit Profile"
      />

      <ScreenContent className="space-y-6 pb">

        {/* BUSINESS IDENTITY */}
        <div className="bg-white border border-[#ece4d8] rounded-3xl p-5 shadow-sm space-y-5">

          <div>

            <h2 className="text-[15px] font-bold text-[#1f2937]">
              Business Identity
            </h2>

            <p className="text-[12px] text-gray-500 mt-1 leading-relaxed">
              Build your professional business presence.
            </p>

          </div>

          <UploadBox
            title="Upload Business Logo"
          />

          <PrimaryInput
            placeholder="Business Name"
          />

          <PrimaryInput
            placeholder="Contact Person Name"
          />

          <PrimarySelect
            placeholder="Select Industry"
          />

          <PrimarySelect
            placeholder="Select Business Type"
          />

        </div>

        {/* LOCATION */}
        <div className="bg-white border border-[#ece4d8] rounded-3xl p-5 shadow-sm space-y-5">

          <div>

            <h2 className="text-[15px] font-bold text-[#1f2937]">
              Business Location
            </h2>

            <p className="text-[12px] text-gray-500 mt-1 leading-relaxed">
              Add your business location details.
            </p>

          </div>

          <PrimarySelect
            placeholder="Select State"
          />

          <PrimarySelect
            placeholder="Select City"
          />

          <PrimaryTextarea
            placeholder="Full Business Address"
          />

        </div>

        {/* CONTACT DETAILS */}
        <div className="bg-white border border-[#ece4d8] rounded-3xl p-5 shadow-sm space-y-5">

          <div>

            <h2 className="text-[15px] font-bold text-[#1f2937]">
              Contact Details
            </h2>

            <p className="text-[12px] text-gray-500 mt-1 leading-relaxed">
              Businesses will use these details to connect with you.
            </p>

          </div>

          {/* MOBILE INPUT */}
          <div className="h-14 bg-[#fcfbf8] border border-[#e7dfd4] rounded-2xl px-4 flex items-center">

            <span className="text-[14px] font-semibold text-[#1f2937]">
              +91
            </span>

            <div className="w-px h-5 bg-[#e7dfd4] mx-3" />

            <input
              type="tel"
              placeholder="Enter mobile number"
              className="flex-1 bg-transparent outline-none text-[14px] text-[#1f2937] placeholder:text-gray-400"
            />

          </div>

          <PrimaryInput
            placeholder="Email Address"
            type="email"
          />

        </div>

        {/* BUSINESS DESCRIPTION */}
        <div className="bg-white border border-[#ece4d8] rounded-3xl p-5 shadow-sm space-y-5">

          <div>

            <h2 className="text-[15px] font-bold text-[#1f2937]">
              Business Description
            </h2>

            <p className="text-[12px] text-gray-500 mt-1 leading-relaxed">
              Describe your business, services or products.
            </p>

          </div>

          <PrimaryTextarea
            placeholder="Write business description..."
          />

        </div>

      </ScreenContent>

      <BottomAction>

        <PrimaryButton
          text="Save Profile"
        />

      </BottomAction>

    </ScreenLayout>
  );
}