import Link from 'next/link';
import { navigationConfig } from '@/config/navigation';

export function Navbar() {
  return (
    <nav className="hidden items-center space-x-6 text-sm font-medium md:flex">
      {navigationConfig.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="text-muted-foreground hover:text-foreground focus-visible:ring-ring transition-colors focus-visible:outline-none focus-visible:ring-2"
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
}
