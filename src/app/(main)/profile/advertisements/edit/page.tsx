"use client";

import UploadBox from "@/components/custom/shared/upload-box";

import AppTopbar from "@/components/custom/layout/app-topbar";
import BottomAction from "@/components/custom/layout/bottom-action";
import ScreenContent from "@/components/custom/layout/screen-content";
import ScreenLayout from "@/components/custom/layout/screen-layout";

import PrimaryButton from "@/components/custom/shared/primary-button";
import PrimaryInput from "@/components/custom/shared/primary-input";
import PrimarySelect from "@/components/custom/shared/primary-select";
import PrimaryTextarea from "@/components/custom/shared/primary-textarea";

export default function EditAdvertisementPage() {
  return (
    <ScreenLayout>

      <AppTopbar
        title="Edit Advertisement"
      />

      <ScreenContent className="space-y-5 pb-28">

        {/* AD DETAILS */}
        <div className="bg-white border border-[#ece4d8] rounded-3xl p-5 shadow-sm space-y-5">

          <div>

            <h2 className="text-[15px] font-bold text-[#1f2937]">
              Advertisement Details
            </h2>

            <p className="text-[12px] text-gray-500 mt-1 leading-relaxed">
              Update your business or promotional advertisement.
            </p>

          </div>

          <PrimaryInput
            placeholder="Business or Product Title"
          />

          <PrimaryTextarea
            placeholder="Describe your business or offer..."
          />

          <PrimarySelect
            placeholder="Select Industry"
          />

        </div>

        {/* LOCATION */}
        <div className="bg-white border border-[#ece4d8] rounded-3xl p-5 shadow-sm space-y-5">

          <div>

            <h2 className="text-[15px] font-bold text-[#1f2937]">
              Business Location
            </h2>

            <p className="text-[12px] text-gray-500 mt-1 leading-relaxed">
              Update your business location details.
            </p>

          </div>

          <PrimarySelect
            placeholder="Select State"
          />

          <PrimarySelect
            placeholder="Select City"
          />

        </div>

        {/* IMAGE */}
        <div className="bg-white border border-[#ece4d8] rounded-3xl p-5 shadow-sm space-y-5">

          <div>

            <h2 className="text-[15px] font-bold text-[#1f2937]">
              Advertisement Image
            </h2>

            <p className="text-[12px] text-gray-500 mt-1 leading-relaxed">
              Update promotional or product images.
            </p>

          </div>

          <UploadBox
            title="Upload Advertisement Image"
          />

        </div>

      </ScreenContent>

      <BottomAction>

        <PrimaryButton
          text="Save Changes"
        />

      </BottomAction>

    </ScreenLayout>
  );
}