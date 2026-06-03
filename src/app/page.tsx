"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import AppLogo from "@/components/custom/shared/app-logo";

export default function SplashPage() {

  const router = useRouter();

  useEffect(() => {

    const timer = setTimeout(() => {
      router.replace("/login");
    }, 2200);

    return () => clearTimeout(timer);

  }, [router]);

  return (
    <div className="h-screen bg-[#fcfbf8] flex justify-center overflow-hidden">

      {/* MOBILE SHELL */}
      <div className="w-full max-w-md h-screen bg-[#fcfbf8] flex flex-col items-center justify-center relative">

        {/* LOGO */}
        <AppLogo size={92} />

        {/* BRAND */}
        <h1 className="text-[26px] font-bold text-[#1f2937] mt-6">
          Mandar Business
        </h1>

        <p className="text-[13px] text-gray-500 mt-2 text-center px-10 leading-relaxed">
          Trusted community business ecosystem
        </p>

        {/* LOADING */}
        <div className="absolute bottom-14 flex items-center gap-1.5">

          <div className="w-2 h-2 rounded-full bg-[#c67c2e] animate-bounce" />

          <div
            className="w-2 h-2 rounded-full bg-[#c67c2e] animate-bounce"
            style={{ animationDelay: "0.15s" }}
          />

          <div
            className="w-2 h-2 rounded-full bg-[#c67c2e] animate-bounce"
            style={{ animationDelay: "0.3s" }}
          />

        </div>

      </div>

    </div>
  );
}