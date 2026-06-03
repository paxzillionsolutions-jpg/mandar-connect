"use client";

import UploadBox from "@/components/custom/shared/upload-box";
import AppTopbar from "@/components/custom/layout/app-topbar";
import BottomAction from "@/components/custom/layout/bottom-action";
import ScreenContent from "@/components/custom/layout/screen-content";
import ScreenLayout from "@/components/custom/layout/screen-layout";

import MultiSelect from "@/components/custom/shared/multi-select";
import PrimaryButton from "@/components/custom/shared/primary-button";
import PrimaryInput from "@/components/custom/shared/primary-input";
import PrimarySelect from "@/components/custom/shared/primary-select";
import PrimaryTextarea from "@/components/custom/shared/primary-textarea";

export default function AdPage() {
  return (
    <ScreenLayout>

      <AppTopbar
        title="Create Advertisement"
        subtitle="Promote your business or services"
      />

      <ScreenContent>

        <PrimaryInput
          placeholder="Business or Product Title"
        />

        <PrimaryTextarea
          placeholder="Describe your business or offer..."
        />

        <PrimarySelect
          placeholder="Select Industry"
        />

        <PrimarySelect
          placeholder="Select City"
        />

        <UploadBox
  title="Upload Reference Image"
/>

        <MultiSelect
          title="Preferred Contact"
          options={[
            "WhatsApp",
            "Call",
            "Chat",
          ]}
        />

      </ScreenContent>

      <BottomAction>

        <PrimaryButton
          text="Publish Advertisement"
        />

      </BottomAction>

    </ScreenLayout>
  );
}