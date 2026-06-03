import {
  Pin,
  CheckCheck,
} from "lucide-react";

interface ChatCardProps {
  personName: string;
  businessName: string;
  lastMessage: string;
  time: string;
  unreadCount?: number;
  pinned?: boolean;
  onClick?: () => void;
}

export default function ChatCard({
  personName,
  businessName,
  lastMessage,
  time,
  unreadCount,
  pinned,
  onClick,
}: ChatCardProps) {
  return (
    <div
      onClick={onClick}
      className="w-full cursor-pointer px-1 py-3 active:bg-[#f8f5ef] transition"
    >

      <div className="flex items-start gap-3">

        {/* AVATAR */}
        <div className="w-12 h-12 rounded-full bg-[#f4ece0] shrink-0 flex items-center justify-center text-[#c67c2e] text-[15px] font-semibold">

          {personName.charAt(0)}

        </div>

        {/* CONTENT */}
        <div className="flex-1 min-w-0 border-b border-[#ece4d8] pb-3">

          {/* TOP */}
          <div className="flex items-start justify-between gap-3">

            <div className="min-w-0 flex-1">

              {/* NAME */}
              <div className="flex items-center gap-1.5 min-w-0">

                <h3 className="text-[15px] font-semibold text-[#1f2937] truncate">

                  {personName}

                </h3>

                {pinned && (
                  <Pin
                    size={12}
                    className="text-[#c67c2e] fill-[#c67c2e] shrink-0"
                  />
                )}

              </div>

              {/* BUSINESS */}
              <p className="text-[11px] text-[#c67c2e] font-medium truncate mt-[1px]">

                {businessName}

              </p>

            </div>

            {/* RIGHT */}
            <div className="flex flex-col items-end gap-1 shrink-0">

              <span className="text-[10px] text-gray-400">

                {time}

              </span>

              {unreadCount ? (
                <div className="min-w-5 h-5 px-1.5 rounded-full bg-[#c67c2e] text-white text-[10px] font-semibold flex items-center justify-center">

                  {unreadCount}

                </div>
              ) : (
                <CheckCheck
                  size={14}
                  className="text-gray-300"
                />
              )}

            </div>

          </div>

          {/* MESSAGE */}
          <p className="text-[13px] text-gray-500 truncate mt-1.5 leading-relaxed">

            {lastMessage}

          </p>

        </div>

      </div>

    </div>
  );
}