"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  const pathname = usePathname();
  const isSignIn = pathname === '/sign-in'
  return (
    <main className="bg-neutral-100 min-h-screen">
      <div className="mx-auto max-w-screen-2xl p-4">
        {/* 상단 네비게이션 */}
        <nav className="flex justify-between items-center">
          <Image
            src="/logo.svg"
            alt="logo"
            width={152}
            height={56}
            className="w-auto h-auto max-w-[120px]"
          />
          <Button asChild variant="secondary">
            <Link href={isSignIn ? "/sign-up" : "/sign-in"}>
            {isSignIn ? "Sign Up" : "Login"}
            </Link>
            
            </Button>
        </nav>

        {/* 본문 */}
        <div className="flex flex-col items-center justify-center p-4">
          {children}
        </div>
      </div>
    </main>
  );
};

export default AuthLayout;