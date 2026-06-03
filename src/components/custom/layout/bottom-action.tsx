interface BottomActionProps {
  children: React.ReactNode;
}

export default function BottomAction({
  children,
}: BottomActionProps) {
  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md bg-[#fcfbf8] border-t border-[#ece4d8] p-4 z-30">
      {children}
    </div>
  );
}