import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "PHONEHUB - Hệ Thống Bán Lẻ Điện Thoại Flagship VN/A",
  description: "Mua điện thoại iPhone 16 Pro Max, Samsung Galaxy S25 Ultra chính hãng VN/A. Trả góp 0%, thu cũ đổi mới trợ giá 5 triệu đồng.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${inter.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#050b18] text-slate-100 font-sans">{children}</body>
    </html>
  );
}
