interface AuthContainerProps {
  children: React.ReactNode;
}

export default function AuthContainer({
  children,
}: AuthContainerProps) {
  return (
    <div className="h-screen bg-[#f3efe8] flex justify-center overflow-hidden">

      <div className="w-full max-w-md h-screen bg-[#fcfbf8] overflow-y-auto">

        {children}

      </div>

    </div>
  );
}