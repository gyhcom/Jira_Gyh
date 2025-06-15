"use client";

import { Button } from '@/components/ui/button';
import Image from 'next/image';

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
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
          <Button variant="secondary">Sign Up</Button>
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