import React from 'react';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-24 px-6">
      {/* Background Animated Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-cyan-600/20 via-red-600/15 to-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Column: Content */}
        <div className="space-y-8 text-left">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-bold tracking-widest uppercase">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
            SHOWROOM Ô TÔ ĐIỆN VINFAST VIỆT NAM
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-white leading-none tracking-tight">
            VINFAST <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-red-400 to-amber-400">VF 9</span>
            <span className="block text-2xl sm:text-4xl font-light text-slate-300 mt-3 tracking-normal">
              Mãnh liệt Tinh thần Việt Nam
            </span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-xl leading-relaxed font-normal">
            Khám phá tuyệt tác SUV 7 chỗ hạng sang đỉnh cao từ <strong className="text-white">VinFast</strong>. Động cơ điện công suất <strong className="text-cyan-400">402 HP</strong>, trang bị trợ lý ảo AI ViVi tiếng Việt cùng tầm di chuyển <strong className="text-white">626 km/lần sạc</strong>.
          </p>

          {/* Key Specs Bar */}
          <div className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-800/80">
            <div>
              <div className="text-3xl font-black text-white tracking-tight">402 <span className="text-xs font-normal text-slate-400">HP</span></div>
              <div className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider mt-1">Công suất tối đa</div>
            </div>
            <div>
              <div className="text-3xl font-black text-cyan-400 tracking-tight">626 <span className="text-xs font-normal text-slate-400">KM</span></div>
              <div className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider mt-1">Tầm xa WLTP</div>
            </div>
            <div>
              <div className="text-3xl font-black text-white tracking-tight">6.5 <span className="text-xs font-normal text-slate-400">Giây</span></div>
              <div className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider mt-1">Tăng tốc 0-100km/h</div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="#configurator"
              className="px-8 py-4 rounded-2xl font-extrabold text-white bg-gradient-to-r from-red-600 via-red-500 to-amber-500 hover:from-red-500 hover:to-amber-400 shadow-2xl shadow-red-600/40 transition-all hover:scale-105 active:scale-95 text-sm tracking-wide"
            >
              Cấu hình & Đặt cọc xe
            </a>
            <a
              href="#test-drive"
              className="px-8 py-4 rounded-2xl font-bold text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700 transition-all hover:border-cyan-500/50 text-sm"
            >
              Đăng ký lái thử ngay
            </a>
          </div>
        </div>

        {/* Right Column: Clean SVG Visual Frame */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-red-500/20 to-amber-500/20 rounded-3xl blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative glass-card p-8 rounded-3xl overflow-hidden border border-white/10 shadow-2xl space-y-6">
            
            {/* VinFast VF9 High-End SVG Render Graphic */}
            <div className="relative h-[280px] sm:h-[340px] flex items-center justify-center bg-gradient-to-b from-slate-900/80 to-slate-950/90 rounded-2xl border border-slate-800/80 overflow-hidden">
              {/* Dynamic Grid Lighting */}
              <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />

              <svg className="w-full h-full p-4 relative z-10 drop-shadow-[0_15px_25px_rgba(0,102,255,0.35)]" viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Car Silhouette (VinFast SUV Line) */}
                <path d="M100 280 C 120 280, 160 270, 200 240 C 250 200, 320 130, 420 125 C 540 120, 620 160, 680 200 C 720 220, 750 260, 760 280 Z" fill="url(#vfGradient)" opacity="0.9" />
                {/* Roofline Accent */}
                <path d="M220 230 Q 380 120 580 170" stroke="#00F0FF" strokeWidth="4" strokeLinecap="round" />
                {/* VinFast Signature Winged LED Headlight */}
                <path d="M660 205 L 750 205 L 720 215" stroke="#E51937" strokeWidth="5" strokeLinecap="round" />
                {/* Wheels */}
                <circle cx="230" cy="285" r="42" fill="#0F172A" stroke="#38BDF8" strokeWidth="6" />
                <circle cx="230" cy="285" r="20" fill="#334155" />
                <circle cx="630" cy="285" r="42" fill="#0F172A" stroke="#38BDF8" strokeWidth="6" />
                <circle cx="630" cy="285" r="20" fill="#334155" />
                {/* Road Glow */}
                <ellipse cx="430" cy="325" rx="360" ry="12" fill="url(#roadGlow)" opacity="0.6" />
                <defs>
                  <linearGradient id="vfGradient" x1="100" y1="125" x2="760" y2="280" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#1E293B" />
                    <stop offset="0.5" stopColor="#0F172A" />
                    <stop offset="1" stopColor="#020617" />
                  </linearGradient>
                  <linearGradient id="roadGlow" x1="70" y1="325" x2="790" y2="325" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#00F0FF" stopOpacity="0.8" />
                    <stop offset="0.5" stopColor="#E51937" stopOpacity="0.5" />
                    <stop offset="1" stopColor="#0066FF" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div className="flex items-center justify-between p-4 glass-panel rounded-xl border border-slate-800">
              <div>
                <span className="text-[10px] font-extrabold text-cyan-400 uppercase tracking-widest">Dòng xe Flagship</span>
                <p className="text-base font-extrabold text-white">VinFast VF 9 (7 Chỗ)</p>
              </div>
              <span className="px-4 py-1.5 bg-red-600/20 border border-red-500/40 rounded-full text-xs font-black text-red-400">
                Giá từ 1.580.000.000 VNĐ
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
