interface AppLogoProps {
  size?: number;
}

export default function AppLogo({
  size = 72,
}: AppLogoProps) {
  return (
    <div
      style={{
        width: size,
        height: size,
      }}
      className="relative"
    >
      {/* MAIN ICON */}
      <div className="w-full h-full rounded-[26%] bg-gradient-to-br from-[#c67c2e] to-[#9a5b16] shadow-[0_10px_25px_rgba(198,124,46,0.35)] flex items-center justify-center relative overflow-hidden">

        {/* LIGHT EFFECT */}
        <div className="absolute top-0 left-0 w-full h-1/2 bg-white/10" />

        {/* BUSINESS ICON */}
        <div className="relative flex items-end gap-[5px]">

          {/* BUILDING 1 */}
          <div className="w-[10px] h-[26px] rounded-t-md bg-white/95 relative">

            <div className="absolute top-[5px] left-[2px] w-[2px] h-[2px] bg-[#c67c2e]/70 rounded-full" />
            <div className="absolute top-[10px] left-[2px] w-[2px] h-[2px] bg-[#c67c2e]/70 rounded-full" />
            <div className="absolute top-[15px] left-[2px] w-[2px] h-[2px] bg-[#c67c2e]/70 rounded-full" />

            <div className="absolute top-[5px] right-[2px] w-[2px] h-[2px] bg-[#c67c2e]/70 rounded-full" />
            <div className="absolute top-[10px] right-[2px] w-[2px] h-[2px] bg-[#c67c2e]/70 rounded-full" />
            <div className="absolute top-[15px] right-[2px] w-[2px] h-[2px] bg-[#c67c2e]/70 rounded-full" />

          </div>

          {/* BUILDING 2 */}
          <div className="w-[12px] h-[34px] rounded-t-md bg-white relative">

            <div className="absolute top-[5px] left-[3px] w-[2px] h-[2px] bg-[#c67c2e]/70 rounded-full" />
            <div className="absolute top-[11px] left-[3px] w-[2px] h-[2px] bg-[#c67c2e]/70 rounded-full" />
            <div className="absolute top-[17px] left-[3px] w-[2px] h-[2px] bg-[#c67c2e]/70 rounded-full" />

            <div className="absolute top-[5px] right-[3px] w-[2px] h-[2px] bg-[#c67c2e]/70 rounded-full" />
            <div className="absolute top-[11px] right-[3px] w-[2px] h-[2px] bg-[#c67c2e]/70 rounded-full" />
            <div className="absolute top-[17px] right-[3px] w-[2px] h-[2px] bg-[#c67c2e]/70 rounded-full" />

          </div>

          {/* BUILDING 3 */}
          <div className="w-[10px] h-[22px] rounded-t-md bg-white/90 relative">

            <div className="absolute top-[5px] left-[2px] w-[2px] h-[2px] bg-[#c67c2e]/70 rounded-full" />
            <div className="absolute top-[10px] left-[2px] w-[2px] h-[2px] bg-[#c67c2e]/70 rounded-full" />

            <div className="absolute top-[5px] right-[2px] w-[2px] h-[2px] bg-[#c67c2e]/70 rounded-full" />
            <div className="absolute top-[10px] right-[2px] w-[2px] h-[2px] bg-[#c67c2e]/70 rounded-full" />

          </div>

        </div>
      </div>
    </div>
  );
}