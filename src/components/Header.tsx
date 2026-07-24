import React from 'react';

export function Header() {
  return (
    <header className="sticky top-0 z-50 glass-panel border-b border-white/10 px-6 py-4 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center font-bold text-white shadow-lg shadow-red-600/30 group-hover:scale-105 transition-transform">
            V
          </div>
          <div>
            <span className="text-xl font-extrabold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400">
              VINFAST
            </span>
            <span className="block text-[10px] tracking-widest text-cyan-400 font-semibold uppercase">
              ELECTRIC SHOWROOM
            </span>
          </div>
        </a>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#models" className="hover:text-cyan-400 transition-colors">Dòng xe VinFast</a>
          <a href="#configurator" className="hover:text-cyan-400 transition-colors">Bộ cấu hình 360°</a>
          <a href="#features" className="hover:text-cyan-400 transition-colors">Công nghệ ADAS</a>
          <a href="#test-drive" className="hover:text-cyan-400 transition-colors">Đăng ký Lái thử</a>
        </nav>

        {/* CTA Buttons */}
        <div className="flex items-center gap-4">
          <a
            href="#test-drive"
            className="hidden sm:inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-all hover:border-cyan-500/50"
          >
            Đăng ký lái thử
          </a>
          <a
            href="#models"
            className="px-5 py-2 rounded-full text-xs font-bold text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 shadow-lg shadow-red-600/30 transition-all transform active:scale-95"
          >
            Đặt cọc ngay
          </a>
        </div>
      </div>
    </header>
  );
}
