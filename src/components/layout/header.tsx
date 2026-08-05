import Link from 'next/link';
import { Logo } from './logo';
import { Navbar } from './navbar';
import { MobileMenu } from './mobile-menu';
import { ThemeToggle } from '@/components/theme-toggle';

export function Header() {
  return (
    <header className="border-border/40 bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40 w-full border-b backdrop-blur">
      <div className="layout-container flex h-16 items-center justify-between">
        <Logo />
        <Navbar />

        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <Link
            href="/login"
            className="bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-ring hidden rounded-md px-4 py-2 text-sm font-medium shadow transition-colors focus-visible:outline-none focus-visible:ring-2 md:inline-flex"
          >
            Đăng nhập
          </Link>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
