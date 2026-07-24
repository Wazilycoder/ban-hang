'use client';

import React, { useState } from 'react';
import { VINFAST_CARS, VinFastCar } from '@/data/cars';

export function Configurator() {
  const [selectedCar, setSelectedCar] = useState<VinFastCar>(VINFAST_CARS[1]); // Mặc định VF 7
  const [selectedColorIndex, setSelectedColorIndex] = useState<number>(0);
  const [buyBattery, setBuyBattery] = useState<boolean>(false);
  const [selectedVersion, setSelectedVersion] = useState<'Eco' | 'Plus'>('Plus');

  const activeColor = selectedCar.colors[selectedColorIndex] || selectedCar.colors[0];

  // Tính tổng chi phí ước tính
  const calculatedPrice = selectedCar.priceBase + (buyBattery ? selectedCar.batteryDeposit : 0) + (selectedVersion === 'Plus' ? 80 : 0);

  return (
    <section id="configurator" className="py-20 px-6 relative border-t border-slate-800/80 bg-slate-950/50">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <span className="px-3 py-1 bg-red-600/10 border border-red-500/30 rounded-full text-xs font-semibold text-red-400 uppercase tracking-widest">
            BỘ CẤU HÌNH XE TRỰC TUYẾN
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Tùy Chỉnh Xe VinFast Của Bạn
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
            Lựa chọn dòng xe, màu sắc ngoại thất, phiên bản và hình thức Pin để tính toán mức chi phí lăn bánh chính xác nhất.
          </p>
        </div>

        {/* Car Selection Tabs */}
        <div className="flex items-center justify-center gap-3 flex-wrap">
          {VINFAST_CARS.map((car) => (
            <button
              key={car.id}
              onClick={() => {
                setSelectedCar(car);
                setSelectedColorIndex(0);
              }}
              className={`px-6 py-3 rounded-xl text-sm font-bold transition-all ${
                selectedCar.id === car.id
                  ? 'bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg shadow-red-600/30 scale-105'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {car.name}
            </button>
          ))}
        </div>

        {/* Interactive Workspace: Image Showcase vs Options Panel */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left 7 Columns: Dynamic Car Image with Color Switcher */}
          <div className="lg:col-span-7 space-y-6">
            <div className="relative glass-card rounded-3xl p-4 overflow-hidden border border-slate-800 shadow-2xl min-h-[380px] flex items-center justify-center">
              <img
                src={activeColor.image}
                alt={`${selectedCar.name} - ${activeColor.name}`}
                className="w-full h-[360px] sm:h-[420px] object-cover rounded-2xl transition-all duration-500 transform hover:scale-105"
              />
              <div className="absolute top-6 left-6 px-4 py-2 glass-panel rounded-full text-xs font-semibold text-slate-200 border border-white/10">
                Phiên bản đang chọn: <strong className="text-cyan-400">{selectedCar.name} {selectedVersion}</strong>
              </div>
            </div>

            {/* Exterior Color Selector */}
            <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-white uppercase tracking-wider">
                  Màu ngoại thất: <span className="text-cyan-400">{activeColor.name}</span>
                </span>
                <span className="text-xs text-slate-400">{selectedCar.colors.length} Tùy chọn màu</span>
              </div>
              <div className="flex items-center gap-4">
                {selectedCar.colors.map((color, idx) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColorIndex(idx)}
                    title={color.name}
                    className={`w-10 h-10 rounded-full border-2 transition-all transform ${
                      selectedColorIndex === idx
                        ? 'border-cyan-400 scale-110 shadow-lg shadow-cyan-500/30'
                        : 'border-slate-700 opacity-70 hover:opacity-100'
                    }`}
                    style={{ backgroundColor: color.hex }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right 5 Columns: Configuration Controls & Pricing */}
          <div className="lg:col-span-5 glass-panel p-8 rounded-3xl border border-slate-800 space-y-8">
            <div>
              <span className="text-xs text-cyan-400 font-bold uppercase">{selectedCar.segment}</span>
              <h3 className="text-3xl font-extrabold text-white mt-1">{selectedCar.name}</h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">{selectedCar.description}</p>
            </div>

            {/* Spec Highlights Grid */}
            <div className="grid grid-cols-2 gap-3 p-4 bg-slate-900/60 rounded-xl border border-slate-800/80 text-xs">
              <div>
                <span className="text-slate-400">Quãng đường:</span>
                <p className="font-bold text-cyan-400 text-sm">{selectedCar.rangeWLTP} km (WLTP)</p>
              </div>
              <div>
                <span className="text-slate-400">Công suất:</span>
                <p className="font-bold text-white text-sm">{selectedCar.powerHp} HP</p>
              </div>
              <div>
                <span className="text-slate-400">Dẫn động:</span>
                <p className="font-bold text-white">{selectedCar.drivetrain}</p>
              </div>
              <div>
                <span className="text-slate-400">Tăng tốc 0-100km:</span>
                <p className="font-bold text-white">{selectedCar.acceleration}</p>
              </div>
            </div>

            {/* Version Selection */}
            <div className="space-y-3">
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">Chọn phiên bản trang bị</label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setSelectedVersion('Eco')}
                  className={`p-3 rounded-xl text-left border text-xs transition-all ${
                    selectedVersion === 'Eco'
                      ? 'border-cyan-500 bg-cyan-500/10 text-white font-bold'
                      : 'border-slate-800 bg-slate-900/40 text-slate-400'
                  }`}
                >
                  <div className="font-bold">Bản Eco</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">Trang bị tiêu chuẩn</div>
                </button>
                <button
                  onClick={() => setSelectedVersion('Plus')}
                  className={`p-3 rounded-xl text-left border text-xs transition-all ${
                    selectedVersion === 'Plus'
                      ? 'border-cyan-500 bg-cyan-500/10 text-white font-bold'
                      : 'border-slate-800 bg-slate-900/40 text-slate-400'
                  }`}
                >
                  <div className="font-bold text-cyan-400">Bản Plus (+80 Tr)</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">Trang bị cao cấp trọn bộ</div>
                </button>
              </div>
            </div>

            {/* Battery Rental or Buying Toggle */}
            <div className="space-y-3">
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">Hình thức Bộ Pin</label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setBuyBattery(false)}
                  className={`p-3 rounded-xl text-left border text-xs transition-all ${
                    !buyBattery
                      ? 'border-red-500 bg-red-500/10 text-white font-bold'
                      : 'border-slate-800 bg-slate-900/40 text-slate-400'
                  }`}
                >
                  <div className="font-bold">Thuê Pin (Tối ưu)</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">Tiết kiệm vốn ban đầu</div>
                </button>
                <button
                  onClick={() => setBuyBattery(true)}
                  className={`p-3 rounded-xl text-left border text-xs transition-all ${
                    buyBattery
                      ? 'border-red-500 bg-red-500/10 text-white font-bold'
                      : 'border-slate-800 bg-slate-900/40 text-slate-400'
                  }`}
                >
                  <div className="font-bold">Mua kèm Pin</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">+{selectedCar.batteryDeposit} Triệu VNĐ</div>
                </button>
              </div>
            </div>

            {/* Final Calculated Cost Box */}
            <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-400 uppercase">Giá xe dự toán</span>
                <div className="text-2xl sm:text-3xl font-black text-red-500">
                  {calculatedPrice.toLocaleString('vi-VN')} <span className="text-sm font-normal text-slate-300">Triệu VNĐ</span>
                </div>
              </div>
              <button
                onClick={() => alert(`Cảm ơn bạn đã quan tâm đến ${selectedCar.name} ${selectedVersion}! Yêu cầu đặt cọc đã được ghi nhận.`)}
                className="px-6 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 shadow-xl shadow-red-600/30 transition-all hover:scale-105 active:scale-95 text-xs"
              >
                Đặt Cọc Ngay (10 Tr)
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
