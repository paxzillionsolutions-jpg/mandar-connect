"use client";

import { useRouter } from "next/navigation";

import AppTopbar from "@/components/custom/layout/app-topbar";
import BottomAction from "@/components/custom/layout/bottom-action";
import ScreenContent from "@/components/custom/layout/screen-content";
import ScreenLayout from "@/components/custom/layout/screen-layout";

import PrimaryButton from "@/components/custom/shared/primary-button";

import RequirementCard from "@/components/custom/requirements/requirement-card";

export default function MyRequirementsPage() {

  const router = useRouter();

  return (
    <ScreenLayout>

      <AppTopbar
        title="My Requirements"
      />

      <ScreenContent className="space-y-4 pb-28">

        <RequirementCard
          title="Packaging Box Supplier Needed"
          industry="Packaging"
          postedTime="2h ago"
          validTill="Jun 17"
          status="Active"
          description="Need corrugated packaging boxes for textile business operations in Surat."
        />

        <RequirementCard
          title="Cotton Fabric Wholesaler Required"
          industry="Textile"
          postedTime="1 day ago"
          validTill="Jun 16"
          status="Fulfilled"
          description="Looking for cotton fabric wholesalers for bulk textile manufacturing."
        />

      </ScreenContent>

      <BottomAction>

        <PrimaryButton
          text="Post Requirement"
          onClick={() => router.push("/create/requirement")}
        />

      </BottomAction>

    </ScreenLayout>
  );
}