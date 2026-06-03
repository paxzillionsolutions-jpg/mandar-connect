"use client";

import { useRouter } from "next/navigation";

import AuthContainer from "@/components/custom/auth/auth-container";
import AppLogo from "@/components/custom/shared/app-logo";
import PrimaryButton from "@/components/custom/shared/primary-button";
import PrimaryInput from "@/components/custom/shared/primary-input";
import BottomAction from "@/components/custom/layout/bottom-action";

export default function LoginPage() {

  const router = useRouter();

  return (
    <AuthContainer>

      <div className="px-5 pt-8 pb-32">

        {/* APP BRAND */}
        <div className="flex flex-col items-center">

          <AppLogo size={72} />

          <h1 className="text-[22px] font-bold text-[#1f2937] mt-5">
            Mandar Business
          </h1>

          <p className="text-[13px] text-gray-500 mt-2 text-center leading-relaxed max-w-[260px]">
            Trusted community business ecosystem.
          </p>

        </div>

        {/* FORM */}
        <div className="mt-10 space-y-4">

          <PrimaryInput
            placeholder="Mobile Number"
          />

          <PrimaryInput
            placeholder="Password"
            type="password"
          />

        </div>

        {/* FORGOT */}
        <div className="mt-4 flex justify-end">

          <button
            onClick={() => router.push("/forgot-password")}
            className="text-[13px] font-semibold text-[#c67c2e]"
          >
            Forgot Password?
          </button>

        </div>

      </div>

      {/* FIXED ACTION */}
      <BottomAction>

        <div className="space-y-3">

          <PrimaryButton
            text="Login"
            onClick={() => router.push("/home")}
          />

          <button
            onClick={() => router.push("/signup")}
            className="w-full text-[13px] font-semibold text-[#c67c2e]"
          >
            Create New Account
          </button>

        </div>

      </BottomAction>

    </AuthContainer>
  );
}