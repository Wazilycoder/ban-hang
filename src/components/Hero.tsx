import React from 'react';

export function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden py-20 px-6">
      {/* Background Glow Overlay */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-600/20 via-blue-600/10 to-red-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Column: Text Showcase */}
        <div className="space-y-8 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold tracking-wide">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            THẾ HỆ Ô TÔ ĐIỆN THÔNG MINH MỚI
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-white leading-tight tracking-tight">
            VINFAST <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-red-400 to-amber-400">VF 9</span>
            <span className="block text-2xl sm:text-4xl font-extralight text-slate-300 mt-2">
              Mãnh liệt Tinh thần Việt Nam
            </span>
          </h1>

          <p className="text-slate-400 text-base sm:text-lg max-w-xl leading-relaxed">
            Dòng SUV điện 7 chỗ hạng sang đỉnh cao. Tích hợp trợ lý AI Vivi, hệ thống lái tự động ADAS nâng cao cùng quãng đường di chuyển lên tới <strong className="text-white">626 km</strong> chỉ với một lần sạc.
          </p>

          {/* Stat Badges */}
          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-800">
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white">402 HP</div>
              <div className="text-xs text-slate-400 uppercase mt-1">Công suất tối đa</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400">626 KM</div>
              <div className="text-xs text-slate-400 uppercase mt-1">Phạm vi WLTP</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white">6.5 Giây</div>
              <div className="text-xs text-slate-400 uppercase mt-1">Tăng tốc 0-100km/h</div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#configurator"
              className="px-8 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 shadow-xl shadow-red-600/30 transition-all hover:scale-105 active:scale-95"
            >
              Cấu hình & Đặt cọc
            </a>
            <a
              href="#test-drive"
              className="px-8 py-4 rounded-xl font-semibold text-slate-200 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 transition-all hover:border-slate-500"
            >
              Đăng ký lái thử
            </a>
          </div>
        </div>

        {/* Right Column: High-Res Car Showcase Frame */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-red-500/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-100 transition-opacity" />
          <div className="relative glass-card p-4 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1200&q=80"
              alt="VinFast VF 9 Showcase"
              className="w-full h-[380px] sm:h-[450px] object-cover rounded-2xl transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute bottom-6 left-6 right-6 p-4 glass-panel rounded-xl flex items-center justify-between">
              <div>
                <span className="text-xs font-semibold text-cyan-400 uppercase">Màu sắc mặc định</span>
                <p className="text-sm font-bold text-white">Đen Executive (Jet Black)</p>
              </div>
              <span className="px-3 py-1 bg-red-600/20 border border-red-500/40 rounded-full text-xs font-bold text-red-400">
                Giá từ 1.580.000.000 VNĐ
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
