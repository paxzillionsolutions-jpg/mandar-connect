"use client";

import { useRouter } from "next/navigation";

import AuthContainer from "@/components/custom/auth/auth-container";
import AppTopbar from "@/components/custom/layout/app-topbar";
import BottomAction from "@/components/custom/layout/bottom-action";
import AppLogo from "@/components/custom/shared/app-logo";
import PrimaryButton from "@/components/custom/shared/primary-button";
import PrimaryInput from "@/components/custom/shared/primary-input";

export default function SignupPage() {

  const router = useRouter();

  return (
    <AuthContainer>

      <AppTopbar
        title="Create Account"
      />

      <div className="px-5 pt-6 pb-32">

        {/* LOGO */}
        <div className="flex flex-col items-center">

          <AppLogo size={64} />

          <p className="text-[13px] text-gray-500 mt-4 text-center leading-relaxed max-w-[260px]">
            Join the trusted community business ecosystem.
          </p>

        </div>

        {/* FORM */}
        <div className="mt-8 space-y-4">

          <PrimaryInput
            placeholder="Full Name"
          />

          <PrimaryInput
            placeholder="Mobile Number"
          />

          <PrimaryInput
            placeholder="Password"
            type="password"
          />

          <PrimaryInput
            placeholder="Community Invite Code"
          />

        </div>

      </div>

      {/* FIXED ACTION */}
      <BottomAction>

        <div className="space-y-3">

          <PrimaryButton
            text="Continue"
            onClick={() => router.push("/setup-business")}
          />

          <button
            onClick={() => router.push("/login")}
            className="w-full text-[13px] font-semibold text-[#c67c2e]"
          >
            Already have an account?
          </button>

        </div>

      </BottomAction>

    </AuthContainer>
  );
}