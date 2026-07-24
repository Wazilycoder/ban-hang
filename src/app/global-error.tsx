'use client';

import React from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body className="bg-[#06090e] text-white flex items-center justify-center min-h-screen">
        <div className="text-center space-y-4 p-8 glass-panel rounded-2xl max-w-md">
          <h2 className="text-2xl font-bold text-red-500">Đã xảy ra lỗi!</h2>
          <p className="text-sm text-slate-400">{error?.message || 'Có lỗi hệ thống ngoài ý muốn.'}</p>
          <button
            onClick={() => reset()}
            className="px-6 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs transition-all"
          >
            Thử lại
          </button>
        </div>
      </body>
    </html>
  );
}
