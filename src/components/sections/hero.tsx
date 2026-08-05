import Link from 'next/link';

export function Hero() {
  return (
    <section className="py-20 md:py-32">
      <div className="layout-container flex flex-col items-center text-center">
        <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
          Chinh phục <span className="text-primary">tiếng Nga</span> dễ dàng hơn bao giờ hết
        </h1>
        <p className="text-muted-foreground mt-6 max-w-2xl text-lg">
          Nền tảng học tiếng Nga hiện đại với lộ trình từ cơ bản đến nâng cao, thiết kế tối ưu cho
          người Việt.
        </p>

        <div className="mt-8 flex flex-col space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0">
          <Link
            href="/courses"
            className="bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-ring inline-flex h-11 items-center justify-center rounded-md px-8 text-sm font-medium shadow transition-colors focus-visible:outline-none focus-visible:ring-2"
          >
            Bắt đầu học
          </Link>
          <Link
            href="/courses"
            className="border-input bg-background hover:bg-accent hover:text-accent-foreground focus-visible:ring-ring inline-flex h-11 items-center justify-center rounded-md border px-8 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2"
          >
            Xem khóa học
          </Link>
        </div>
      </div>
    </section>
  );
}
