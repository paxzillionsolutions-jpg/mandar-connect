interface BottomSheetProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function BottomSheet({
  open,
  onClose,
  children,
}: BottomSheetProps) {

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-center">

      {/* MOBILE SHELL */}
      <div className="relative w-full max-w-md h-full">

        {/* BACKDROP */}
        <div
          onClick={onClose}
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        />

        {/* SHEET */}
        <div className="absolute bottom-0 left-0 right-0 bg-[#fcfbf8] rounded-t-[30px] p-5 animate-in slide-in-from-bottom duration-300">

          {/* HANDLE */}
          <div className="w-12 h-1.5 rounded-full bg-[#d8d0c4] mx-auto mb-5" />

          {children}

        </div>

      </div>

    </div>
  );
}