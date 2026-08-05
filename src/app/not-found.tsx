import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 text-center">
      <h1 className="text-primary text-6xl font-extrabold">404</h1>
      <h2 className="mt-4 text-xl font-semibold">Trang không tồn tại</h2>
      <p className="text-muted-foreground mt-2">
        Rất tiếc, nội dung bạn tìm kiếm không có hoặc đã di chuyển.
      </p>
      <Link href="/" className="bg-primary mt-6 rounded-md px-4 py-2 text-white">
        Trở về trang chủ
      </Link>
    </div>
  );
}
