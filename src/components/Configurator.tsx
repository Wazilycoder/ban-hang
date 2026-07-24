'use client';

import React, { useState } from 'react';
import { VINFAST_CARS, VinFastCar } from '@/data/cars';

export function Configurator() {
  const [selectedCar, setSelectedCar] = useState<VinFastCar>(VINFAST_CARS[2]); // Mặc định VF 7
  const [selectedColorIndex, setSelectedColorIndex] = useState<number>(0);
  const [buyBattery, setBuyBattery] = useState<boolean>(false);
  const [selectedVersion, setSelectedVersion] = useState<'Eco' | 'Plus'>('Plus');

  const activeColor = selectedCar.colors[selectedColorIndex] || selectedCar.colors[0];

  // Tính tổng chi phí ước tính chính xác
  const calculatedPrice = selectedCar.priceBase + (buyBattery ? selectedCar.batteryDeposit : 0) + (selectedVersion === 'Plus' ? 80 : 0);

  return (
    <section id="configurator" className="py-20 px-6 relative border-t border-slate-800/80 bg-slate-950/50">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <span className="px-3 py-1 bg-red-600/10 border border-red-500/30 rounded-full text-xs font-bold text-red-400 uppercase tracking-widest">
            BỘ CẤU HÌNH TƯƠNG TÁC 360°
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Tùy Chỉnh Dòng Xe VinFast Của Bạn
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
            Lựa chọn phiên bản, màu sơn ngoại thất và gói Pin để tính toán chi phí lăn bánh chính xác nhất theo thông số VinFast Auto Việt Nam.
          </p>
        </div>

        {/* Smooth Animated Car Selection Tabs */}
        <div className="flex items-center justify-center gap-3 flex-wrap">
          {VINFAST_CARS.map((car) => (
            <button
              key={car.id}
              onClick={() => {
                setSelectedCar(car);
                setSelectedColorIndex(0);
              }}
              className={`px-6 py-3 rounded-2xl text-sm font-extrabold transition-all duration-300 transform active:scale-95 ${
                selectedCar.id === car.id
                  ? 'bg-gradient-to-r from-red-600 via-red-500 to-amber-500 text-white shadow-xl shadow-red-600/40 scale-105 ring-2 ring-red-400/50'
                  : 'bg-slate-900/90 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {car.name}
            </button>
          ))}
        </div>

        {/* Workspace: Interactive Dynamic Vector Showcase vs Config Panel */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left 7 Cols: Dynamic Vector Showcase with Motion Effects */}
          <div className="lg:col-span-7 space-y-6">
            <div className="relative glass-card rounded-3xl p-8 overflow-hidden border border-slate-800 shadow-2xl min-h-[380px] flex flex-col items-center justify-center transition-all duration-500">
              
              {/* Dynamic Light Rays */}
              <div
                className="absolute inset-0 opacity-30 transition-all duration-700 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 50% 50%, ${activeColor.hex} 0%, transparent 70%)`
                }}
              />

              {/* Dynamic SVG Vehicle Profile according to selected VinFast Car */}
              <div className="w-full h-[280px] sm:h-[340px] relative z-10 flex items-center justify-center">
                <svg className="w-full h-full p-4 drop-shadow-[0_20px_35px_rgba(0,0,0,0.8)] transition-all duration-500" viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Front Winged LED Light */}
                  <path d="M 160 210 Q 400 250 640 210" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" />
                  <path d="M 360 230 L 400 260 L 440 230" stroke="#E51937" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />

                  {/* Main Car Profile Fill dynamically colored by active color */}
                  <path d={selectedCar.svgPath} fill={activeColor.hex} opacity="0.9" className="transition-all duration-500" />

                  {/* Windows / Glass Silhouette */}
                  <path d="M 280 180 Q 400 130 520 150" stroke="#38BDF8" strokeWidth="4" strokeLinecap="round" opacity="0.8" />

                  {/* Wheels */}
                  <circle cx="240" cy="275" r="42" fill="#0F172A" stroke="#475569" strokeWidth="6" />
                  <circle cx="240" cy="275" r="20" fill="#334155" />
                  <circle cx="560" cy="275" r="42" fill="#0F172A" stroke="#475569" strokeWidth="6" />
                  <circle cx="560" cy="275" r="20" fill="#334155" />

                  {/* Road Shadow Underglow */}
                  <ellipse cx="400" cy="320" rx="340" ry="12" fill={activeColor.hex} opacity="0.4" />
                </svg>
              </div>

              <div className="absolute top-6 left-6 px-4 py-2 glass-panel rounded-full text-xs font-semibold text-slate-200 border border-white/10">
                Phiên bản chọn: <strong className="text-cyan-400">{selectedCar.name} {selectedVersion}</strong>
              </div>

              <div className="absolute bottom-6 right-6 px-4 py-2 glass-panel rounded-full text-xs font-bold text-slate-300 border border-white/10">
                Màu sắc: <strong style={{ color: activeColor.hex }}>{activeColor.name}</strong>
              </div>
            </div>

            {/* Exterior Color Selector */}
            <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-white uppercase tracking-wider">
                  Chọn màu sơn ngoại thất: <span className="text-cyan-400">{activeColor.name}</span>
                </span>
                <span className="text-xs text-slate-400">{selectedCar.colors.length} Tùy chọn màu chính hãng</span>
              </div>
              <div className="flex items-center gap-4">
                {selectedCar.colors.map((color, idx) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColorIndex(idx)}
                    title={color.name}
                    className={`w-12 h-12 rounded-full border-2 transition-all duration-300 transform active:scale-90 ${
                      selectedColorIndex === idx
                        ? 'border-cyan-400 scale-115 ring-4 ring-cyan-500/20 shadow-xl'
                        : 'border-slate-700 opacity-70 hover:opacity-100 hover:scale-105'
                    }`}
                    style={{ backgroundColor: color.hex }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right 5 Cols: Config Controls & Final Cost */}
          <div className="lg:col-span-5 glass-panel p-8 rounded-3xl border border-slate-800 space-y-8">
            <div>
              <span className="text-xs text-cyan-400 font-extrabold uppercase tracking-widest">{selectedCar.segment}</span>
              <h3 className="text-3xl font-extrabold text-white mt-1">{selectedCar.name}</h3>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">{selectedCar.description}</p>
            </div>

            {/* Spec Highlights Grid */}
            <div className="grid grid-cols-2 gap-3 p-4 bg-slate-900/80 rounded-2xl border border-slate-800 text-xs">
              <div>
                <span className="text-slate-400">Quãng đường di chuyển:</span>
                <p className="font-bold text-cyan-400 text-sm mt-0.5">{selectedCar.rangeWLTP} km (WLTP)</p>
              </div>
              <div>
                <span className="text-slate-400">Công suất tối đa:</span>
                <p className="font-bold text-white text-sm mt-0.5">{selectedCar.powerHp} HP</p>
              </div>
              <div>
                <span className="text-slate-400">Hệ dẫn động:</span>
                <p className="font-bold text-white mt-0.5">{selectedCar.drivetrain}</p>
              </div>
              <div>
                <span className="text-slate-400">Thời gian tăng tốc:</span>
                <p className="font-bold text-white mt-0.5">{selectedCar.acceleration}</p>
              </div>
            </div>

            {/* Version Selector */}
            <div className="space-y-3">
              <label className="text-xs font-extrabold text-slate-300 uppercase tracking-wider">Phiên bản trang bị</label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setSelectedVersion('Eco')}
                  className={`p-3.5 rounded-2xl text-left border text-xs transition-all duration-300 ${
                    selectedVersion === 'Eco'
                      ? 'border-cyan-500 bg-cyan-500/10 text-white font-bold ring-1 ring-cyan-500'
                      : 'border-slate-800 bg-slate-900/40 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <div className="font-bold">Bản Eco</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">Trang bị tiêu chuẩn VinFast</div>
                </button>
                <button
                  onClick={() => setSelectedVersion('Plus')}
                  className={`p-3.5 rounded-2xl text-left border text-xs transition-all duration-300 ${
                    selectedVersion === 'Plus'
                      ? 'border-cyan-500 bg-cyan-500/10 text-white font-bold ring-1 ring-cyan-500'
                      : 'border-slate-800 bg-slate-900/40 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <div className="font-bold text-cyan-400">Bản Plus (+80 Tr)</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">Nâng cấp option cao cấp</div>
                </button>
              </div>
            </div>

            {/* Battery Rental or Purchase Option */}
            <div className="space-y-3">
              <label className="text-xs font-extrabold text-slate-300 uppercase tracking-wider">Hình thức sở hữu bộ Pin</label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setBuyBattery(false)}
                  className={`p-3.5 rounded-2xl text-left border text-xs transition-all duration-300 ${
                    !buyBattery
                      ? 'border-red-500 bg-red-500/10 text-white font-bold ring-1 ring-red-500'
                      : 'border-slate-800 bg-slate-900/40 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <div className="font-bold">Thuê Pin (Tối ưu)</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">Giảm chi phí vốn mua xe</div>
                </button>
                <button
                  onClick={() => setBuyBattery(true)}
                  className={`p-3.5 rounded-2xl text-left border text-xs transition-all duration-300 ${
                    buyBattery
                      ? 'border-red-500 bg-red-500/10 text-white font-bold ring-1 ring-red-500'
                      : 'border-slate-800 bg-slate-900/40 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <div className="font-bold">Mua kèm Pin</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">+{selectedCar.batteryDeposit} Triệu VNĐ</div>
                </button>
              </div>
            </div>

            {/* Final Price Result */}
            <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-400 uppercase font-semibold">Giá xe niêm yết</span>
                <div className="text-2xl sm:text-3xl font-black text-red-500">
                  {calculatedPrice.toLocaleString('vi-VN')} <span className="text-sm font-normal text-slate-300">Triệu VNĐ</span>
                </div>
              </div>
              <button
                onClick={() => alert(`Yêu cầu đặt cọc giữ xe ${selectedCar.name} (${selectedVersion}) của bạn đã được gửi thành công đến Showroom VinFast!`)}
                className="px-6 py-3.5 rounded-2xl font-extrabold text-white bg-gradient-to-r from-red-600 via-red-500 to-amber-500 hover:from-red-500 hover:to-amber-400 shadow-xl shadow-red-600/30 transition-all hover:scale-105 active:scale-95 text-xs tracking-wide"
              >
                Đặt Cọc Giữ Xe (10 Tr)
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
