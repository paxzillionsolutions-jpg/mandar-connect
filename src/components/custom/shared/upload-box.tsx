import { ImagePlus } from "lucide-react";

interface UploadBoxProps {
  title?: string;
}

export default function UploadBox({
  title = "Upload Image",
}: UploadBoxProps) {
  return (
    <button className="w-full bg-white border border-dashed border-[#d8cfc2] rounded-2xl p-5 flex flex-col items-center justify-center shadow-sm">

      <div className="w-12 h-12 rounded-2xl bg-[#f4ece0] flex items-center justify-center">

        <ImagePlus
          size={22}
          className="text-[#c67c2e]"
        />

      </div>

      <p className="text-[13px] font-semibold text-[#1f2937] mt-4">
        {title}
      </p>

      <p className="text-[11px] text-gray-400 mt-1">
        JPG, PNG up to 5MB
      </p>

    </button>
  );
}