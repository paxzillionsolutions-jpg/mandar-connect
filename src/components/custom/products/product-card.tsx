import { Pencil, Trash2 } from "lucide-react";
import Image from "next/image"
import { useRouter } from "next/navigation";
interface ProductCardProps {
  image: string;
  name: string;
  category: string;
  description: string;
}

export default function ProductCard({
  image,
  name,
  category,
  description,
}: ProductCardProps) {
  const router = useRouter();
  return (
    <div className="bg-white border border-[#ece4d8] rounded-3xl p-4 shadow-sm">

      <div className="flex gap-4">

        {/* PRODUCT IMAGE */}
        <div className="w-20 h-20 rounded-2xl overflow-hidden bg-[#f4efe7] shrink-0">

          <Image
  src={image}
  alt={name}
  width={80}
  height={80}
  className="w-full h-full object-cover"
/>

        </div>

        {/* PRODUCT INFO */}
        <div className="flex-1 min-w-0">

          <div className="flex items-start justify-between gap-3">

            <div className="min-w-0">

              <h3 className="text-[15px] font-bold text-[#1f2937] truncate">
                {name}
              </h3>

              <p className="text-[11px] text-[#c67c2e] font-semibold mt-1">
                {category}
              </p>

            </div>

          </div>

          <p className="text-[12px] text-gray-500 leading-relaxed mt-2 line-clamp-2">
            {description}
          </p>

          {/* ACTIONS */}
          <div className="flex items-center gap-2 mt-4">

            <button
  onClick={() => router.push("/profile/products/edit")}
  className="h-9 px-4 rounded-xl bg-[#f7f4ee] text-[#1f2937] text-[12px] font-semibold flex items-center gap-2"
>

              <Pencil size={14} />

              Edit

            </button>

            <button className="h-9 px-4 rounded-xl bg-[#fff1f1] text-[#d44848] text-[12px] font-semibold flex items-center gap-2">

              <Trash2 size={14} />

              Delete

            </button>

          </div>

        </div>

      </div>

    </div>
  );
}