import Image from "next/image";
import Link from "next/link";

export const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <Link href="/" className="flex items-center gap-2 font-medium py-2">
          <Image src="/logos/logo.svg" alt="logo" width={36} height={36} />
          <h2 className="text-xl font-semibold">Nodebase</h2>
        </Link>
        {children}
      </div>
    </div>
  );
};
