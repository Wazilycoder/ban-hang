'use client';

import React from 'react';

export function Header() {
  return (
    <header className="sticky top-4 z-50 px-4 sm:px-6 transition-all duration-300">
      <div className="max-w-7xl mx-auto liquid-glass rounded-full px-6 py-3.5 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-2xl bg-gradient-to-br from-red-600 via-red-700 to-amber-600 flex items-center justify-center font-black text-white text-xl shadow-lg shadow-red-600/40 group-hover:scale-110 transition-transform duration-500 ease-out">
            V
            <div className="absolute -inset-1 bg-red-500 rounded-2xl blur-md opacity-40 group-hover:opacity-80 transition duration-500" />
          </div>
          <div>
            <span className="text-xl font-black tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-slate-300">
              VINFAST
            </span>
            <span className="block text-[9px] tracking-[0.28em] text-cyan-400 font-extrabold uppercase -mt-1">
              EV SHOWROOM VIỆT NAM
            </span>
          </div>
        </a>

        {/* Navigation Links with iOS Liquid Hover Tabs */}
        <nav className="hidden md:flex items-center gap-2 p-1.5 rounded-full bg-slate-900/40 border border-white/5">
          <a
            href="#models"
            className="px-5 py-2 rounded-full text-xs font-bold text-slate-300 hover:text-white hover:bg-white/10 transition-all duration-300"
          >
            Dòng Xe VinFast
          </a>
          <a
            href="#configurator"
            className="px-5 py-2 rounded-full text-xs font-bold text-slate-300 hover:text-white hover:bg-white/10 transition-all duration-300"
          >
            Bộ Tùy Chỉnh 360°
          </a>
          <a
            href="#test-drive"
            className="px-5 py-2 rounded-full text-xs font-bold text-slate-300 hover:text-white hover:bg-white/10 transition-all duration-300"
          >
            Đăng Ký Lái Thử
          </a>
        </nav>

        {/* CTA Buttons */}
        <div className="flex items-center gap-3">
          <a
            href="#test-drive"
            className="hidden sm:inline-flex items-center px-5 py-2.5 rounded-full text-xs font-bold text-slate-200 liquid-pill"
          >
            Lái thử ngay
          </a>
          <a
            href="#configurator"
            className="px-6 py-2.5 rounded-full text-xs font-black text-white liquid-red-btn tracking-wide uppercase"
          >
            Đặt cọc giữ xe
          </a>
        </div>
      </div>
    </header>
  );
}
