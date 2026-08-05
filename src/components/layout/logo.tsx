import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2 focus-visible:outline-none">
      <span className="text-primary text-xl font-bold tracking-tight">
        Oanh<span className="text-foreground">Russian</span>
      </span>
    </Link>
  );
}
