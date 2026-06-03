"use client";

import { useRouter } from "next/navigation";

import AppTopbar from "@/components/custom/layout/app-topbar";
import BottomAction from "@/components/custom/layout/bottom-action";
import ScreenContent from "@/components/custom/layout/screen-content";
import ScreenLayout from "@/components/custom/layout/screen-layout";

import PrimaryButton from "@/components/custom/shared/primary-button";

import ProductCard from "@/components/custom/products/product-card";

export default function MyProductsPage() {

  const router = useRouter();

  return (
    <ScreenLayout>

      <AppTopbar
        title="My Products"
      />

      <ScreenContent className="space-y-4 pb-28">

        <ProductCard
          image="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d"
          name="Corrugated Packaging Box"
          category="Packaging"
          description="High quality corrugated packaging boxes for textile and ecommerce businesses."
        />

        <ProductCard
          image="https://images.unsplash.com/photo-1521572267360-ee0c2909d518"
          name="Cotton Fabric Rolls"
          category="Textile"
          description="Premium cotton fabric rolls available for wholesale textile requirements."
        />

        <ProductCard
          image="https://images.unsplash.com/photo-1504274066651-8d31a536b11a"
          name="Industrial Plastic Containers"
          category="Industrial"
          description="Durable industrial containers suitable for storage and logistics operations."
        />

      </ScreenContent>

      <BottomAction>

        <PrimaryButton
          text="Add Product"
          onClick={() => router.push("/profile/products/add")}
        />

      </BottomAction>

    </ScreenLayout>
  );
}