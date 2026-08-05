'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Unhandled Application Error:', error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 text-center">
      <h2 className="mb-4 text-2xl font-bold">Đã xảy ra lỗi ngoài dự kiến!</h2>
      <button
        onClick={() => reset()}
        className="bg-primary rounded-md px-4 py-2 text-white hover:opacity-90"
      >
        Thử lại
      </button>
    </div>
  );
}
