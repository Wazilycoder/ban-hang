'use client';

import React, { useState, useEffect } from 'react';

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-3' : 'py-5'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={`flex items-center justify-between px-6 py-3.5 rounded-full transition-all duration-500 ${
          scrolled ? 'glass-panel shadow-2xl border-white/15 backdrop-blur-2xl' : 'bg-slate-950/40 backdrop-blur-md border border-white/10'
        }`}>
          
          {/* Logo Brand */}
          <a href="#" className="flex items-center gap-3 group cursor-pointer">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-red-600 to-amber-500 flex items-center justify-center font-black text-white text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
              V
            </div>
            <div>
              <span className="text-lg font-black tracking-wider text-white block leading-none group-hover:text-red-500 transition-colors">
                VINFAST
              </span>
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest block mt-0.5">
                SHOWROOM CHÍNH HÃNG
              </span>
            </div>
          </a>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-extrabold text-slate-300">
            <a href="#hero" className="hover:text-white transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-red-500 hover:after:w-full after:transition-all">
              Trang Chủ
            </a>
            <a href="#configurator" className="hover:text-white transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-red-500 hover:after:w-full after:transition-all">
              Bộ Tùy Chỉnh 360°
            </a>
            <a href="#test-drive" className="hover:text-white transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-red-500 hover:after:w-full after:transition-all">
              Đăng Ký Lái Thử
            </a>
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-3">
            <a
              href="#test-drive"
              className="hidden sm:inline-flex px-5 py-2.5 rounded-full text-xs font-black text-slate-300 glass-card hover:text-white border border-white/10"
            >
              Lái Thử Ngay
            </a>
            <a
              href="#configurator"
              className="px-6 py-2.5 rounded-full text-xs font-black text-white btn-primary-red uppercase tracking-wider cursor-pointer"
            >
              Đặt Cọc Xe
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
