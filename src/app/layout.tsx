import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'OanhRussian - Học Tiếng Nga Trực Quan',
  description: 'Nền tảng học tiếng Nga hiện đại, trực quan và tối ưu cho người Việt.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans antialiased">{children}</body>
    </html>
  );
}
