import React from 'react';

export function Header() {
  return (
    <header className="sticky top-0 z-50 glass-panel border-b border-white/10 px-6 py-4 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-red-600 via-red-700 to-amber-600 flex items-center justify-center font-black text-white text-xl shadow-lg shadow-red-600/40 group-hover:scale-105 transition-transform duration-300">
            V
            <div className="absolute -inset-0.5 bg-red-500 rounded-xl blur opacity-30 group-hover:opacity-70 transition duration-300" />
          </div>
          <div>
            <span className="text-2xl font-black tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-slate-400">
              VINFAST
            </span>
            <span className="block text-[10px] tracking-[0.25em] text-cyan-400 font-bold uppercase -mt-1">
              EV SHOWROOM VIỆT NAM
            </span>
          </div>
        </a>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-300">
          <a href="#models" className="hover:text-cyan-400 transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-cyan-400 hover:after:w-full after:transition-all">
            Dòng Xe VinFast
          </a>
          <a href="#configurator" className="hover:text-cyan-400 transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-cyan-400 hover:after:w-full after:transition-all">
            Bộ Tùy Chỉnh 360°
          </a>
          <a href="#features" className="hover:text-cyan-400 transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-cyan-400 hover:after:w-full after:transition-all">
            Công Nghệ ADAS
          </a>
          <a href="#test-drive" className="hover:text-cyan-400 transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-cyan-400 hover:after:w-full after:transition-all">
            Đăng Ký Lái Thử
          </a>
        </nav>

        {/* CTA Buttons */}
        <div className="flex items-center gap-4">
          <a
            href="#test-drive"
            className="hidden sm:inline-flex items-center px-5 py-2.5 rounded-full text-xs font-bold text-slate-200 bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700 transition-all hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10"
          >
            Đăng ký lái thử
          </a>
          <a
            href="#configurator"
            className="px-6 py-2.5 rounded-full text-xs font-extrabold text-white bg-gradient-to-r from-red-600 via-red-500 to-amber-500 hover:from-red-500 hover:to-amber-400 shadow-xl shadow-red-600/30 transition-all transform hover:scale-105 active:scale-95 tracking-wide"
          >
            Đặt cọc giữ xe
          </a>
        </div>
      </div>
    </header>
  );
}
