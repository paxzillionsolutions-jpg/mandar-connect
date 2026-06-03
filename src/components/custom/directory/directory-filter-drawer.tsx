"use client";

import PrimaryButton from "@/components/custom/shared/primary-button";
import PrimarySelect from "@/components/custom/shared/primary-select";

interface DirectoryFilterDrawerProps {
  open: boolean;
  onClose: () => void;
}

export default function DirectoryFilterDrawer({
  open,
  onClose,
}: DirectoryFilterDrawerProps) {

  if (!open) return null;

  return (
    <div className="absolute inset-0 z-50 flex items-end">

      {/* OVERLAY */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/30 backdrop-blur-[1px]"
      />

      {/* DRAWER */}
      <div className="relative w-full bg-white rounded-t-[32px] p-5 space-y-5 animate-in slide-in-from-bottom duration-300">

        {/* HANDLE */}
        <div className="w-14 h-1.5 rounded-full bg-[#ddd3c5] mx-auto" />

        {/* TITLE */}
        <div>

          <h2 className="text-[18px] font-bold text-[#1f2937]">
            Filters
          </h2>

          <p className="text-[12px] text-gray-500 mt-1">
            Refine directory results.
          </p>

        </div>

        {/* FILTERS */}
        <div className="space-y-4">

          <PrimarySelect
            placeholder="Select Industry"
          />

          <PrimarySelect
            placeholder="Select State"
          />

          <PrimarySelect
            placeholder="Select City"
          />

          {/* VERIFIED */}
          <label className="flex items-center gap-3">

            <input
              type="checkbox"
              className="w-4 h-4 accent-[#c67c2e]"
            />

            <span className="text-[14px] text-[#1f2937] font-medium">
              Verified Businesses Only
            </span>

          </label>

        </div>

        {/* BUTTON */}
        <PrimaryButton
          text="Apply Filters"
        />

      </div>

    </div>
  );
}