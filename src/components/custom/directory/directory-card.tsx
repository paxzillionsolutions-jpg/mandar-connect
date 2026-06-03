import Image from "next/image";

import {
  Phone,
  BadgeCheck,
  Bookmark,
} from "lucide-react";

import { FaWhatsapp } from "react-icons/fa6";

interface DirectoryCardProps {
  image: string;
  businessName: string;
  personName: string;
  industry: string;
  location: string;
  description: string;
  verified?: boolean;
  saved?: boolean;
}

export default function DirectoryCard({
  image,
  businessName,
  personName,
  industry,
  location,
  description,
  verified,
  saved = false,
}: DirectoryCardProps) {
  return (
    <div className="bg-white border border-[#ece4d8] rounded-3xl p-4 shadow-sm">

      <div className="flex gap-4">

        {/* LOGO */}
        <div className="w-16 h-16 rounded-2xl overflow-hidden bg-[#f4efe7] shrink-0">

          {image ? (
            <Image
              src={image}
              alt={businessName}
              width={64}
              height={64}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-[11px] font-semibold text-[#a47a3d]">
              Logo
            </div>
          )}

        </div>

        {/* CONTENT */}
        <div className="flex-1 min-w-0">

          {/* TOP */}
          <div className="flex items-start justify-between gap-3">

            <div className="min-w-0">

              {/* BUSINESS NAME */}
              <div className="flex items-center gap-2">

                <h3 className="text-[15px] font-bold text-[#1f2937] truncate">
                  {businessName}
                </h3>

                {verified && (
                  <BadgeCheck
                    size={16}
                    className="text-[#2e8b57] shrink-0"
                  />
                )}

              </div>

              {/* META */}
              <p className="text-[12px] text-[#c67c2e] font-medium mt-1">

                {industry} • {location}

              </p>

              {/* PERSON */}
              <p className="text-[11px] text-gray-400 mt-1">

                by {personName}

              </p>

            </div>

            {/* BOOKMARK */}
            <button className="w-9 h-9 rounded-2xl bg-[#f7f4ee] border border-[#ece4d8] flex items-center justify-center shrink-0">

              <Bookmark
                size={18}
                className={`${
                  saved
                    ? "fill-[#c67c2e] text-[#c67c2e]"
                    : "text-[#c67c2e]"
                }`}
              />

            </button>

          </div>

          {/* DESCRIPTION */}
          <p className="text-[12px] text-gray-500 leading-relaxed mt-3 line-clamp-2">

            {description}

          </p>

          {/* ACTIONS */}
          <div className="flex items-center gap-2 mt-4">

            <button className="w-10 h-10 rounded-2xl bg-[#f7f4ee] border border-[#ece4d8] flex items-center justify-center">

              <FaWhatsapp
                size={18}
                className="text-[#25D366]"
              />

            </button>

            <button className="w-10 h-10 rounded-2xl bg-[#f7f4ee] border border-[#ece4d8] flex items-center justify-center">

              <Phone
                size={18}
                className="text-[#1f2937]"
              />

            </button>

          </div>

        </div>

      </div>

    </div>
  );
}