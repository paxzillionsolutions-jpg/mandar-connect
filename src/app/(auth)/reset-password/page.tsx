"use client";

import { useRouter } from "next/navigation";

import AuthContainer from "@/components/custom/auth/auth-container";
import AppTopbar from "@/components/custom/layout/app-topbar";
import BottomAction from "@/components/custom/layout/bottom-action";
import PrimaryButton from "@/components/custom/shared/primary-button";
import PrimaryInput from "@/components/custom/shared/primary-input";

export default function ResetPasswordPage() {

  const router = useRouter();

  return (
    <AuthContainer>

      <AppTopbar
        title="Reset Password"
      />

      <div className="px-5 pt-6 pb-32">

        <p className="text-[13px] text-gray-500 leading-relaxed">
          Create a new secure password for your account.
        </p>

        <div className="mt-8 space-y-4">

          <PrimaryInput
            placeholder="New Password"
            type="password"
          />

          <PrimaryInput
            placeholder="Confirm Password"
            type="password"
          />

        </div>

      </div>

      <BottomAction>

        <PrimaryButton
          text="Update Password"
          onClick={() => router.push("/login")}
        />

      </BottomAction>

    </AuthContainer>
  );
}