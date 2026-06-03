import Image from "next/image";

import {
  Pencil,
  Check,
  Trash2,
} from "lucide-react";

import { useRouter } from "next/navigation";

interface RequirementCardProps {
  image?: string;
  title: string;
  industry: string;
  description: string;
  postedTime: string;
  validTill: string;
  status: "Active" | "Fulfilled";
}

export default function RequirementCard({
  image,
  title,
  industry,
  description,
  postedTime,
  validTill,
  status,
}: RequirementCardProps) {

  const router = useRouter();

  return (
    <div className="bg-white border border-[#ece4d8] rounded-3xl p-4 shadow-sm">

      <div className="flex gap-4">

        {/* IMAGE */}
        <div className="w-20 h-20 rounded-2xl overflow-hidden bg-[#f4efe7] shrink-0">

          {image ? (
  <Image
    src={image}
    alt={title}
    width={80}
    height={80}
    className="w-full h-full object-cover"
  />
) : (
  <div className="w-full h-full bg-[#f4ece0] flex items-center justify-center text-[11px] font-semibold text-[#a47a3d] text-center px-2">
    No Image
  </div>
)}

        </div>

        {/* CONTENT */}
        <div className="flex-1 min-w-0">

          {/* TOP */}
          <div className="flex items-center justify-between gap-3">

            <div className="flex items-center gap-2 min-w-0">

              <span className="text-[11px] font-semibold text-[#c67c2e] truncate">
                {industry}
              </span>

              <span className="text-[11px] text-gray-400">
                • {postedTime}
              </span>

            </div>

            <div
              className={`h-7 px-3 rounded-full text-[11px] font-semibold flex items-center shrink-0 ${
                status === "Active"
                  ? "bg-[#eef7ee] text-[#2e8b57]"
                  : "bg-[#f3f4f6] text-gray-500"
              }`}
            >
              {status}
            </div>

          </div>

          {/* TITLE */}
          <h3 className="text-[15px] font-bold text-[#1f2937] mt-2 leading-snug line-clamp-1">
            {title}
          </h3>

          {/* DESCRIPTION */}
          <p className="text-[12px] text-gray-500 leading-relaxed mt-2 line-clamp-2">
            {description}
          </p>

          {/* VALIDITY */}
          <p className="text-[11px] text-gray-400 mt-3">
            Valid till {validTill}
          </p>

        </div>

      </div>

      {/* ACTIONS */}
      <div className="flex items-center gap-2 mt-4 flex-wrap">

        {status === "Active" && (
          <button
            onClick={() => router.push("/profile/requirements/edit")}
            className="h-9 px-4 rounded-xl bg-[#f7f4ee] text-[#1f2937] text-[12px] font-semibold flex items-center gap-2"
          >
            <Pencil size={14} />
            Edit
          </button>
        )}

        <button
          className="h-9 px-4 rounded-xl bg-[#fff1f1] text-[#d44848] text-[12px] font-semibold flex items-center gap-2"
        >
          <Trash2 size={14} />
          Delete
        </button>

        {status === "Active" && (
          <button
            className="h-9 px-4 rounded-xl bg-[#eef7ee] text-[#2e8b57] text-[12px] font-semibold flex items-center gap-2"
          >
            <Check size={14} />
            Mark Fulfilled
          </button>
        )}

      </div>

    </div>
  );
}