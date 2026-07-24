'use client';

import React, { useState } from 'react';
import { VINFAST_CARS, VinFastCar } from '@/data/cars';

export function Configurator() {
  const [selectedCar, setSelectedCar] = useState<VinFastCar>(VINFAST_CARS[3]); // Mặc định VF 9
  const [selectedColorIndex, setSelectedColorIndex] = useState<number>(0);
  const [buyBattery, setBuyBattery] = useState<boolean>(false);
  const [selectedVersion, setSelectedVersion] = useState<'Eco' | 'Plus'>('Plus');

  const activeColor = selectedCar.colors[selectedColorIndex] || selectedCar.colors[0];

  // Tính tổng chi phí
  const calculatedPrice = selectedCar.priceBase + (buyBattery ? selectedCar.batteryDeposit : 0) + (selectedVersion === 'Plus' ? 80 : 0);

  return (
    <section id="configurator" className="py-24 px-6 relative overflow-hidden">
      {/* Background Animated iOS Liquid Blobs */}
      <div
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[550px] h-[550px] opacity-25 blur-[120px] animate-liquid-blob pointer-events-none transition-colors duration-1000"
        style={{ backgroundColor: activeColor.hex }}
      />

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <span className="px-4 py-1.5 rounded-full text-xs font-black text-red-400 liquid-pill uppercase tracking-widest inline-block">
            BỘ CẤU HÌNH TƯƠNG TÁC 360° (iOS SLIDING LIQUID TOGGLE)
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Tùy Chỉnh Dòng Xe VinFast Của Bạn
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto font-normal">
            Trải nghiệm bộ chuyển đổi dòng xe với thanh trượt nền mượt tuyệt đối chuẩn iOS Fluid Spring.
          </p>
        </div>

        {/* ULTRA SMOOTH iOS LIQUID SLIDING SEGMENT CONTROL */}
        <div className="relative p-2 rounded-full liquid-glass max-w-3xl mx-auto grid grid-cols-4 gap-1 items-center overflow-hidden border border-white/15 shadow-2xl">
          
          {/* iOS Animated Sliding Pill Background Tracker */}
          <div
            className="absolute top-2 bottom-2 rounded-full bg-gradient-to-r from-red-600 via-red-500 to-amber-500 shadow-lg shadow-red-600/50 transition-all duration-500 cubic-bezier(0.175, 0.885, 0.32, 1.275) pointer-events-none"
            style={{
              width: 'calc(25% - 6px)',
              left: `calc(${VINFAST_CARS.findIndex(c => c.id === selectedCar.id) * 25}% + 3px)`
            }}
          >
            {/* Liquid Surface Highlight */}
            <div className="absolute inset-0 rounded-full bg-white/20 blur-[1px]" />
          </div>

          {/* Interactive Button Items */}
          {VINFAST_CARS.map((car) => {
            const isSelected = selectedCar.id === car.id;
            return (
              <button
                key={car.id}
                onClick={() => {
                  setSelectedCar(car);
                  setSelectedColorIndex(0);
                }}
                className={`relative z-10 py-3.5 px-2 rounded-full text-xs sm:text-sm font-black transition-all duration-300 transform active:scale-95 text-center ${
                  isSelected
                    ? 'text-white scale-105 drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]'
                    : 'text-slate-400 hover:text-slate-100 hover:scale-102'
                }`}
              >
                {car.name}
              </button>
            );
          })}
        </div>

        {/* Main Interactive Workspace */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left 7 Cols: Dynamic Vector Showcase with Motion Effects */}
          <div className="lg:col-span-7 space-y-6">
            <div className="relative liquid-glass rounded-3xl p-8 overflow-hidden min-h-[400px] flex flex-col items-center justify-center">
              
              {/* Dynamic Color Rays */}
              <div
                className="absolute inset-0 opacity-40 blur-3xl transition-all duration-700 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 50% 50%, ${activeColor.hex} 0%, transparent 70%)`
                }}
              />

              {/* Dynamic Animated Vector Profile */}
              <div className="w-full h-[280px] sm:h-[340px] relative z-10 flex items-center justify-center">
                <svg className="w-full h-full p-4 drop-shadow-[0_25px_40px_rgba(0,0,0,0.9)] transition-all duration-700 ease-out transform hover:scale-105" viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M 160 210 Q 400 250 640 210" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" />
                  <path d="M 360 230 L 400 260 L 440 230" stroke="#E51937" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />

                  <path d={selectedCar.svgPath} fill={activeColor.hex} opacity="0.95" className="transition-all duration-700 ease-out" />

                  <path d="M 280 180 Q 400 130 520 150" stroke="#38BDF8" strokeWidth="4" strokeLinecap="round" opacity="0.85" />

                  <circle cx="240" cy="275" r="44" fill="#0F172A" stroke="#E51937" strokeWidth="6" />
                  <circle cx="240" cy="275" r="22" fill="#334155" />
                  <circle cx="560" cy="275" r="44" fill="#0F172A" stroke="#E51937" strokeWidth="6" />
                  <circle cx="560" cy="275" r="22" fill="#334155" />

                  <ellipse cx="400" cy="320" rx="350" ry="14" fill={activeColor.hex} opacity="0.6" />
                </svg>
              </div>

              <div className="absolute top-6 left-6 px-4 py-2 liquid-pill rounded-full text-xs font-bold text-slate-200">
                Phiên bản: <strong className="text-cyan-400">{selectedCar.name} {selectedVersion}</strong>
              </div>

              <div className="absolute bottom-6 right-6 px-4 py-2 liquid-pill rounded-full text-xs font-black text-white">
                Màu sơn: <strong style={{ color: activeColor.hex }}>{activeColor.name}</strong>
              </div>
            </div>

            {/* Liquid Exterior Color Picker */}
            <div className="liquid-glass p-6 rounded-3xl space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-extrabold text-white uppercase tracking-wider">
                  Sơn ngoại thất: <span className="text-cyan-400">{activeColor.name}</span>
                </span>
                <span className="text-xs text-slate-400 font-medium">{selectedCar.colors.length} Tùy chọn chính hãng</span>
              </div>
              <div className="flex items-center gap-5">
                {selectedCar.colors.map((color, idx) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColorIndex(idx)}
                    title={color.name}
                    className={`w-12 h-12 rounded-full border-2 transition-all duration-500 transform ${
                      selectedColorIndex === idx
                        ? 'border-white scale-125 ring-4 ring-cyan-400/40 shadow-2xl'
                        : 'border-slate-700 opacity-60 hover:opacity-100 hover:scale-110'
                    }`}
                    style={{ backgroundColor: color.hex }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right 5 Cols: Config Panel */}
          <div className="lg:col-span-5 liquid-glass p-8 rounded-3xl space-y-8">
            <div>
              <span className="text-xs text-cyan-400 font-black uppercase tracking-widest">{selectedCar.segment}</span>
              <h3 className="text-3xl font-black text-white mt-1">{selectedCar.name}</h3>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed font-normal">{selectedCar.description}</p>
            </div>

            {/* Specs Grid */}
            <div className="grid grid-cols-2 gap-3 p-4 rounded-2xl bg-slate-900/60 border border-white/10 text-xs">
              <div>
                <span className="text-slate-400">Tầm di chuyển:</span>
                <p className="font-extrabold text-cyan-400 text-sm mt-0.5">{selectedCar.rangeWLTP} km (WLTP)</p>
              </div>
              <div>
                <span className="text-slate-400">Công suất:</span>
                <p className="font-extrabold text-white text-sm mt-0.5">{selectedCar.powerHp} HP</p>
              </div>
              <div>
                <span className="text-slate-400">Dẫn động:</span>
                <p className="font-extrabold text-white mt-0.5">{selectedCar.drivetrain}</p>
              </div>
              <div>
                <span className="text-slate-400">Tăng tốc:</span>
                <p className="font-extrabold text-white mt-0.5">{selectedCar.acceleration}</p>
              </div>
            </div>

            {/* Version Selection */}
            <div className="space-y-3">
              <label className="text-xs font-black text-slate-300 uppercase tracking-wider">Phiên bản trang bị</label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setSelectedVersion('Eco')}
                  className={`p-4 rounded-2xl text-left border text-xs transition-all duration-300 ${
                    selectedVersion === 'Eco'
                      ? 'border-cyan-400 bg-cyan-500/20 text-white font-bold ring-2 ring-cyan-400/50'
                      : 'border-white/10 bg-slate-900/30 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <div className="font-black">Bản Eco</div>
                  <div className="text-[10px] text-slate-400 mt-1">Trang bị tiêu chuẩn VinFast</div>
                </button>
                <button
                  onClick={() => setSelectedVersion('Plus')}
                  className={`p-4 rounded-2xl text-left border text-xs transition-all duration-300 ${
                    selectedVersion === 'Plus'
                      ? 'border-cyan-400 bg-cyan-500/20 text-white font-bold ring-2 ring-cyan-400/50'
                      : 'border-white/10 bg-slate-900/30 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <div className="font-black text-cyan-400">Bản Plus (+80 Tr)</div>
                  <div className="text-[10px] text-slate-400 mt-1">Nâng cấp option cao cấp</div>
                </button>
              </div>
            </div>

            {/* Battery Option */}
            <div className="space-y-3">
              <label className="text-xs font-black text-slate-300 uppercase tracking-wider">Hình thức Bộ Pin</label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setBuyBattery(false)}
                  className={`p-4 rounded-2xl text-left border text-xs transition-all duration-300 ${
                    !buyBattery
                      ? 'border-red-500 bg-red-500/20 text-white font-bold ring-2 ring-red-500/50'
                      : 'border-white/10 bg-slate-900/30 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <div className="font-black">Thuê Pin (Tối ưu)</div>
                  <div className="text-[10px] text-slate-400 mt-1">Giảm chi phí vốn ban đầu</div>
                </button>
                <button
                  onClick={() => setBuyBattery(true)}
                  className={`p-4 rounded-2xl text-left border text-xs transition-all duration-300 ${
                    buyBattery
                      ? 'border-red-500 bg-red-500/20 text-white font-bold ring-2 ring-red-500/50'
                      : 'border-white/10 bg-slate-900/30 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <div className="font-black">Mua kèm Pin</div>
                  <div className="text-[10px] text-slate-400 mt-1">+{selectedCar.batteryDeposit} Triệu VNĐ</div>
                </button>
              </div>
            </div>

            {/* Final Price Box */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-400 uppercase font-bold">Giá xe dự toán</span>
                <div className="text-2xl sm:text-3xl font-black text-red-500">
                  {calculatedPrice.toLocaleString('vi-VN')} <span className="text-sm font-normal text-slate-300">Triệu VNĐ</span>
                </div>
              </div>
              <button
                onClick={() => alert(`Yêu cầu đặt cọc xe ${selectedCar.name} (${selectedVersion}) đã ghi nhận thành công!`)}
                className="px-6 py-4 rounded-2xl font-black text-white liquid-red-btn text-xs tracking-wider uppercase"
              >
                Đặt Cọc Giữ Xe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
