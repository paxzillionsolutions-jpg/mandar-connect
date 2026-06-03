interface MessageBubbleProps {
  message: string;
  time: string;
  isSender?: boolean;
}

export default function MessageBubble({
  message,
  time,
  isSender,
}: MessageBubbleProps) {
  return (
    <div
      className={`flex ${
        isSender
          ? "justify-end"
          : "justify-start"
      }`}
    >

      <div
        className={`max-w-[74%] px-4 py-2.5 ${
          isSender
            ? "bg-[#ebe4d8] text-[#1f2937] rounded-[22px] rounded-br-md"
            : "bg-white border border-[#ece4d8] text-[#1f2937] rounded-[22px] rounded-bl-md"
        }`}
      >

        {/* MESSAGE */}
        <p className="text-[13px] leading-relaxed whitespace-pre-wrap">

          {message}

        </p>

        {/* TIME */}
        <div
          className={`text-[9px] mt-1.5 ${
            isSender
              ? "text-gray-500"
              : "text-gray-400"
          }`}
        >

          {time}

        </div>

      </div>

    </div>
  );
}