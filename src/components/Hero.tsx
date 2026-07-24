'use client';

import React from 'react';

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-32 pb-20 px-6 overflow-hidden">
      {/* Background Ambient Lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-600/20 blur-[180px] rounded-full pointer-events-none animate-ambient-glow" />

      <div className="max-w-7xl mx-auto space-y-12 relative z-10 text-center">
        {/* Badge Header */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass-card border border-red-500/30 text-xs font-black text-red-400 uppercase tracking-widest animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
          KỶ NGUYÊN DI CHUYỂN XANH TẠI VIỆT NAM
        </div>

        {/* Hero Title */}
        <div className="space-y-4 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-7xl font-black text-white tracking-tight leading-none">
            ĐẲNG CẤP XE ĐIỆN <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-red-400 to-amber-400">
              VINFAST CHÍNH HÃNG
            </span>
          </h1>
          <p className="text-slate-300 text-base sm:text-xl max-w-2xl mx-auto font-normal leading-relaxed">
            Khám phá hệ sinh thái xe điện thông minh vượt trội với thiết kế sang trọng, tầm di chuyển ấn tượng và công nghệ an toàn hàng đầu.
          </p>
        </div>

        {/* Main Showcase Image */}
        <div className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden glass-panel p-4 border border-white/15 shadow-2xl group">
          <div className="relative h-[300px] sm:h-[450px] rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1600&q=80"
              alt="VinFast Flagship"
              className="w-full h-full object-cover rounded-2xl transform group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
            
            {/* Overlay Info Card */}
            <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between gap-4 text-left">
              <div>
                <span className="text-xs text-cyan-400 font-extrabold uppercase tracking-widest">Dòng Xe Flagship</span>
                <h3 className="text-2xl sm:text-4xl font-black text-white">VinFast VF 9 Chủ Tịch</h3>
              </div>
              <a
                href="#configurator"
                className="px-6 py-3 rounded-full text-xs font-black text-white btn-primary-red uppercase tracking-wider cursor-pointer"
              >
                Khám Phá Chi Tiết
              </a>
            </div>
          </div>
        </div>

        {/* Key Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto pt-6">
          <div className="glass-card p-6 rounded-2xl border border-white/10 text-center">
            <div className="text-3xl sm:text-4xl font-black text-cyan-400">626 km</div>
            <div className="text-xs text-slate-400 font-bold uppercase mt-1">Tầm Di Chuyển / Sạc</div>
          </div>
          <div className="glass-card p-6 rounded-2xl border border-white/10 text-center">
            <div className="text-3xl sm:text-4xl font-black text-white">402 HP</div>
            <div className="text-xs text-slate-400 font-bold uppercase mt-1">Công Suất Đỉnh Cao</div>
          </div>
          <div className="glass-card p-6 rounded-2xl border border-white/10 text-center">
            <div className="text-3xl sm:text-4xl font-black text-amber-400">Level 2</div>
            <div className="text-xs text-slate-400 font-bold uppercase mt-1">Trợ Lái ADAS AI</div>
          </div>
          <div className="glass-card p-6 rounded-2xl border border-white/10 text-center">
            <div className="text-3xl sm:text-4xl font-black text-red-500">10 Năm</div>
            <div className="text-xs text-slate-400 font-bold uppercase mt-1">Bảo Hành Chính Hãng</div>
          </div>
        </div>
      </div>
    </section>
  );
}
