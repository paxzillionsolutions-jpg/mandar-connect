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

export default function EditProductPage() {
  return (
    <ScreenLayout>

      <AppTopbar
        title="Edit Product"
      />

      <ScreenContent className="space-y-6 pb-28">

        {/* PRODUCT DETAILS */}
        <div className="bg-white border border-[#ece4d8] rounded-3xl p-5 shadow-sm space-y-5">

          <div>

            <h2 className="text-[15px] font-bold text-[#1f2937]">
              Product Details
            </h2>

            <p className="text-[12px] text-gray-500 mt-1 leading-relaxed">
              Update your business product information.
            </p>

          </div>

          <UploadBox
            title="Upload Product Image"
          />

          <PrimaryInput
            placeholder="Product Name"
          />

          <PrimarySelect
            placeholder="Select Product Category"
          />

          <PrimaryTextarea
            placeholder="Write product description..."
          />

        </div>

      </ScreenContent>

      <BottomAction>

        <PrimaryButton
          text="Save Product"
        />

      </BottomAction>

    </ScreenLayout>
  );
}