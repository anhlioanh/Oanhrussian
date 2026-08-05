'use client';

import * as React from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { navigationConfig } from '@/config/navigation';

export function MobileMenu() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-foreground hover:bg-accent focus-visible:ring-ring rounded-md p-2 focus-visible:outline-none focus-visible:ring-2"
        aria-label="Toggle mobile menu"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {isOpen && (
        <div className="border-border bg-background absolute inset-x-0 top-16 z-50 border-b px-4 pb-6 pt-2 shadow-lg">
          <nav className="flex flex-col space-y-3">
            {navigationConfig.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-muted-foreground hover:bg-accent hover:text-foreground rounded-md px-3 py-2 text-sm font-medium transition-colors"
              >
                {item.title}
              </Link>
            ))}
            <Link
              href="/login"
              onClick={() => setIsOpen(false)}
              className="bg-primary text-primary-foreground hover:bg-primary/90 mt-2 inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium shadow transition-colors"
            >
              Đăng nhập
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}
