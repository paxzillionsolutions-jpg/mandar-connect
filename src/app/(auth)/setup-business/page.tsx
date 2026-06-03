"use client";

import { useRouter } from "next/navigation";

import AuthContainer from "@/components/custom/auth/auth-container";
import AppTopbar from "@/components/custom/layout/app-topbar";
import BottomAction from "@/components/custom/layout/bottom-action";

import PrimaryButton from "@/components/custom/shared/primary-button";
import PrimaryInput from "@/components/custom/shared/primary-input";
import PrimarySelect from "@/components/custom/shared/primary-select";
import MultiSelect from "@/components/custom/shared/multi-select";

export default function SetupBusinessPage() {

  const router = useRouter();

  return (
    <AuthContainer>

      <AppTopbar
        title="Business Setup"
      />

      <div className="px-5 pt-6 pb-36">

        <p className="text-[13px] text-gray-500 leading-relaxed">
          Add your business details to complete your profile.
        </p>

        {/* FORM */}
        <div className="mt-8 space-y-4">

          <PrimaryInput
            placeholder="Business Name"
          />

          <PrimarySelect
            placeholder="Select Industry"
          />

          <PrimarySelect
            placeholder="Select City"
          />

          <MultiSelect
            title="Business Type"
            options={[
              "Manufacturer",
              "Trader",
              "Distributor",
              "Exporter",
              "Service Provider",
            ]}
          />

          <PrimaryInput
            placeholder="Short Business Description"
          />

        </div>

      </div>

      <BottomAction>

        <PrimaryButton
          text="Complete Setup"
          onClick={() => router.push("/home")}
        />

      </BottomAction>

    </AuthContainer>
  );
}