import React from 'react';

export function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden py-20 px-6">
      {/* Dynamic Animated Glow Backdrops */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-cyan-600/25 via-red-600/20 to-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Column: Brand Content */}
        <div className="space-y-8 text-left">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-extrabold tracking-widest uppercase shadow-lg shadow-red-500/10">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
            SHOWROOM CHÍNH HÃNG VINFAST VIỆT NAM
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-white leading-none tracking-tight">
            MÃNH LIỆT <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-red-400 to-amber-400">TINH THẦN VIỆT</span>
            <span className="block text-2xl sm:text-4xl font-light text-slate-300 mt-4 tracking-normal">
              Thế hệ Ô tô & Xe máy Điện Thông Minh
            </span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-xl leading-relaxed font-normal">
            Trải nghiệm hệ sinh thái xe điện thông minh hàng đầu từ <strong className="text-white">VinFast Auto</strong>. Tích hợp Trợ lý ảo ViVi tiếng Việt, hệ thống tự lái ADAS cùng chính sách bảo hành 10 năm vượt trội.
          </p>

          {/* Key VinFast Badges */}
          <div className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-800/80">
            <div>
              <div className="text-3xl font-black text-white tracking-tight">10 <span className="text-xs font-normal text-slate-400">Năm</span></div>
              <div className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider mt-1">Bảo hành chính hãng</div>
            </div>
            <div>
              <div className="text-3xl font-black text-cyan-400 tracking-tight">150.000+</div>
              <div className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider mt-1">Cổng sạc toàn quốc</div>
            </div>
            <div>
              <div className="text-3xl font-black text-white tracking-tight">0 VNĐ</div>
              <div className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider mt-1">Phí bảo dưỡng động cơ</div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="#configurator"
              className="px-8 py-4 rounded-2xl font-extrabold text-white bg-gradient-to-r from-red-600 via-red-500 to-amber-500 hover:from-red-500 hover:to-amber-400 shadow-2xl shadow-red-600/40 transition-all hover:scale-105 active:scale-95 text-sm tracking-wide"
            >
              Khám phá & Đặt cọc ngay
            </a>
            <a
              href="#test-drive"
              className="px-8 py-4 rounded-2xl font-bold text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700 transition-all hover:border-cyan-500/50 text-sm"
            >
              Đăng ký lái thử miễn phí
            </a>
          </div>
        </div>

        {/* Right Column: High-End VinFast Official Futuristic Frame */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-red-500/20 to-amber-500/20 rounded-3xl blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative glass-card p-8 rounded-3xl overflow-hidden border border-white/10 shadow-2xl space-y-6">
            
            {/* VinFast Signature Metallic SUV Visual Graphic */}
            <div className="relative h-[280px] sm:h-[340px] flex items-center justify-center bg-gradient-to-b from-slate-900/90 via-slate-950/95 to-slate-950 rounded-2xl border border-slate-800/80 overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />

              <svg className="w-full h-full p-4 relative z-10 drop-shadow-[0_15px_30px_rgba(229,25,55,0.4)]" viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* VinFast Signature V-Wing Front Light Bar */}
                <path d="M150 190 Q 400 240 650 190" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" />
                <path d="M360 215 L 400 250 L 440 215" stroke="#E51937" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
                
                {/* SUV Aero Body Profile */}
                <path d="M120 280 C 140 280, 180 260, 220 230 C 280 180, 360 115, 460 110 C 580 105, 660 150, 700 190 C 740 210, 770 260, 780 280 Z" fill="url(#vfOfficialMetal)" opacity="0.95" />
                
                {/* Cyan Intelligent Sensor ADAS Line */}
                <path d="M240 220 Q 400 110 600 160" stroke="#00F0FF" strokeWidth="3" strokeDasharray="6 6" />

                {/* Wheels */}
                <circle cx="240" cy="285" r="44" fill="#0F172A" stroke="#E51937" strokeWidth="6" />
                <circle cx="240" cy="285" r="22" fill="#334155" />
                <circle cx="640" cy="285" r="44" fill="#0F172A" stroke="#E51937" strokeWidth="6" />
                <circle cx="640" cy="285" r="22" fill="#334155" />

                {/* Underglow Road Light */}
                <ellipse cx="440" cy="330" rx="380" ry="14" fill="url(#vfGlow)" opacity="0.7" />

                <defs>
                  <linearGradient id="vfOfficialMetal" x1="120" y1="110" x2="780" y2="280" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#1E293B" />
                    <stop offset="0.5" stopColor="#0F172A" />
                    <stop offset="1" stopColor="#020617" />
                  </linearGradient>
                  <linearGradient id="vfGlow" x1="60" y1="330" x2="820" y2="330" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#E51937" stopOpacity="0.9" />
                    <stop offset="0.5" stopColor="#00F0FF" stopOpacity="0.6" />
                    <stop offset="1" stopColor="#0066FF" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div className="flex items-center justify-between p-4 glass-panel rounded-xl border border-slate-800">
              <div>
                <span className="text-[10px] font-extrabold text-cyan-400 uppercase tracking-widest">DÒNG Ô TÔ ĐIỆN VINFAST CAO CẤP</span>
                <p className="text-base font-extrabold text-white">VinFast VF 9 (7 Chỗ Thương Gia)</p>
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
