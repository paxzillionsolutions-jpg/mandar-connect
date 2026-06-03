"use client";

import { useRouter } from "next/navigation";

import AuthContainer from "@/components/custom/auth/auth-container";
import AppTopbar from "@/components/custom/layout/app-topbar";
import BottomAction from "@/components/custom/layout/bottom-action";
import PrimaryButton from "@/components/custom/shared/primary-button";
import PrimaryInput from "@/components/custom/shared/primary-input";

export default function ForgotPasswordPage() {

  const router = useRouter();

  return (
    <AuthContainer>

      <AppTopbar
        title="Forgot Password"
      />

      <div className="px-5 pt-6 pb-32">

        <p className="text-[13px] text-gray-500 leading-relaxed">
          Enter your registered mobile number to reset your password.
        </p>

        <div className="mt-8">

          <PrimaryInput
            placeholder="Registered Mobile Number"
          />

        </div>

      </div>

      <BottomAction>

        <PrimaryButton
          text="Continue"
          onClick={() => router.push("/reset-password")}
        />

      </BottomAction>

    </AuthContainer>
  );
}