'use client';

import React, { useState } from 'react';
import { VINFAST_PRODUCTS, VinFastProduct } from '@/data/cars';

export function Configurator() {
  const [selectedCategory, setSelectedCategory] = useState<'Ô tô điện' | 'Xe máy điện'>('Ô tô điện');
  
  // Filter products by active category
  const filteredProducts = VINFAST_PRODUCTS.filter(p => p.category === selectedCategory);
  
  const [selectedProduct, setSelectedProduct] = useState<VinFastProduct>(filteredProducts[filteredProducts.length - 1]);
  const [selectedColorIndex, setSelectedColorIndex] = useState<number>(0);
  const [buyBattery, setBuyBattery] = useState<boolean>(false);
  const [selectedVersion, setSelectedVersion] = useState<'Eco' | 'Plus'>('Plus');

  // Handle Category Switch
  const handleCategoryChange = (cat: 'Ô tô điện' | 'Xe máy điện') => {
    setSelectedCategory(cat);
    const newProducts = VINFAST_PRODUCTS.filter(p => p.category === cat);
    setSelectedProduct(newProducts[0]);
    setSelectedColorIndex(0);
  };

  // Keep selectedProduct valid when switching
  const activeProduct = filteredProducts.find(p => p.id === selectedProduct.id) || filteredProducts[0];
  const activeColor = activeProduct.colors[selectedColorIndex] || activeProduct.colors[0];

  // Price Calculation
  const calculatedPrice = activeProduct.priceBase + (buyBattery ? activeProduct.batteryDeposit : 0) + (selectedVersion === 'Plus' && activeProduct.category === 'Ô tô điện' ? 80 : 0);

  const activeIndex = filteredProducts.findIndex(p => p.id === activeProduct.id);

  return (
    <section id="configurator" className="py-24 px-6 relative overflow-hidden">
      {/* Dynamic Ambient Background Blob */}
      <div
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] opacity-20 blur-[140px] animate-liquid-blob pointer-events-none transition-colors duration-1000"
        style={{ backgroundColor: activeColor.hex }}
      />

      <div className="max-w-7xl mx-auto space-y-10 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4">
          <span className="px-4 py-1.5 rounded-full text-xs font-black text-red-400 liquid-pill uppercase tracking-widest inline-block">
            SHOWROOM TƯƠNG TÁC CHÍNH HÃNG VINFAST
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Tùy Chỉnh & Xem Thông Số Sản Phẩm
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto font-normal">
            Trải nghiệm bộ lọc mượt mà cho toàn bộ danh mục **Ô tô điện** và **Xe máy điện** VinFast Việt Nam.
          </p>
        </div>

        {/* Category Switcher Tabs (Ô tô điện vs Xe máy điện) */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={() => handleCategoryChange('Ô tô điện')}
            className={`px-8 py-3.5 rounded-2xl text-sm font-black transition-all duration-500 transform ${
              selectedCategory === 'Ô tô điện'
                ? 'bg-gradient-to-r from-red-600 via-red-500 to-amber-500 text-white shadow-xl shadow-red-600/40 scale-105 ring-2 ring-white/30'
                : 'liquid-pill text-slate-400 hover:text-white'
            }`}
          >
            🚗 Ô tô điện VinFast ({VINFAST_PRODUCTS.filter(p => p.category === 'Ô tô điện').length})
          </button>
          <button
            onClick={() => handleCategoryChange('Xe máy điện')}
            className={`px-8 py-3.5 rounded-2xl text-sm font-black transition-all duration-500 transform ${
              selectedCategory === 'Xe máy điện'
                ? 'bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 text-white shadow-xl shadow-cyan-600/40 scale-105 ring-2 ring-white/30'
                : 'liquid-pill text-slate-400 hover:text-white'
            }`}
          >
            🛵 Xe máy điện VinFast ({VINFAST_PRODUCTS.filter(p => p.category === 'Xe máy điện').length})
          </button>
        </div>

        {/* ULTRA SMOOTH iOS SLIDING TRACKER FOR PRODUCTS */}
        <div className="relative p-2 rounded-full liquid-glass max-w-4xl mx-auto flex items-center justify-between overflow-x-auto no-scrollbar border border-white/15 shadow-2xl">
          
          {/* Animated Tracked Pill */}
          <div
            className="absolute top-2 bottom-2 rounded-full bg-gradient-to-r from-red-600 via-red-500 to-amber-500 shadow-lg shadow-red-600/50 transition-all duration-500 cubic-bezier(0.175, 0.885, 0.32, 1.275) pointer-events-none"
            style={{
              width: `calc(${100 / filteredProducts.length}% - 6px)`,
              left: `calc(${activeIndex * (100 / filteredProducts.length)}% + 3px)`
            }}
          />

          {filteredProducts.map((product) => {
            const isSelected = activeProduct.id === product.id;
            return (
              <button
                key={product.id}
                onClick={() => {
                  setSelectedProduct(product);
                  setSelectedColorIndex(0);
                }}
                className={`flex-1 py-3 px-3 rounded-full text-xs sm:text-sm font-black transition-all duration-300 transform active:scale-95 text-center whitespace-nowrap z-10 ${
                  isSelected
                    ? 'text-white scale-105 drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]'
                    : 'text-slate-400 hover:text-slate-100'
                }`}
              >
                {product.name}
              </button>
            );
          })}
        </div>

        {/* Main Workspace */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left 7 Cols: Dynamic Vector Render & Offical Links */}
          <div className="lg:col-span-7 space-y-6">
            <div className="relative liquid-glass rounded-3xl p-8 overflow-hidden min-h-[400px] flex flex-col items-center justify-center">
              
              {/* Dynamic Glow */}
              <div
                className="absolute inset-0 opacity-40 blur-3xl transition-all duration-700 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 50% 50%, ${activeColor.hex} 0%, transparent 70%)`
                }}
              />

              {/* Dynamic SVG Silhouette */}
              <div className="w-full h-[280px] sm:h-[340px] relative z-10 flex items-center justify-center">
                <svg className="w-full h-full p-4 drop-shadow-[0_25px_40px_rgba(0,0,0,0.9)] transition-all duration-700 ease-out transform hover:scale-105" viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {activeProduct.category === 'Ô tô điện' ? (
                    <>
                      <path d="M 160 210 Q 400 250 640 210" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" />
                      <path d="M 360 230 L 400 260 L 440 230" stroke="#E51937" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
                      <path d={activeProduct.svgPath} fill={activeColor.hex} opacity="0.95" className="transition-all duration-700 ease-out" />
                      <path d="M 280 180 Q 400 130 520 150" stroke="#38BDF8" strokeWidth="4" strokeLinecap="round" opacity="0.85" />
                      <circle cx="240" cy="275" r="44" fill="#0F172A" stroke="#E51937" strokeWidth="6" />
                      <circle cx="240" cy="275" r="22" fill="#334155" />
                      <circle cx="560" cy="275" r="44" fill="#0F172A" stroke="#E51937" strokeWidth="6" />
                      <circle cx="560" cy="275" r="22" fill="#334155" />
                      <ellipse cx="400" cy="320" rx="350" ry="14" fill={activeColor.hex} opacity="0.6" />
                    </>
                  ) : (
                    <>
                      {/* E-Scooter SVG Render */}
                      <path d="M 320 140 L 360 220 L 440 230 C 480 230, 520 250, 540 280" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" />
                      <path d={activeProduct.svgPath} fill={activeColor.hex} opacity="0.95" className="transition-all duration-700 ease-out" />
                      <circle cx="300" cy="280" r="36" fill="#0F172A" stroke="#00F0FF" strokeWidth="5" />
                      <circle cx="300" cy="280" r="18" fill="#334155" />
                      <circle cx="540" cy="280" r="36" fill="#0F172A" stroke="#00F0FF" strokeWidth="5" />
                      <circle cx="540" cy="280" r="18" fill="#334155" />
                      <ellipse cx="420" cy="320" rx="260" ry="12" fill={activeColor.hex} opacity="0.6" />
                    </>
                  )}
                </svg>
              </div>

              <div className="absolute top-6 left-6 px-4 py-2 liquid-pill rounded-full text-xs font-bold text-slate-200">
                Phân khúc: <strong className="text-cyan-400">{activeProduct.segment}</strong>
              </div>

              <div className="absolute bottom-6 right-6 px-4 py-2 liquid-pill rounded-full text-xs font-black text-white">
                Màu sắc: <strong style={{ color: activeColor.hex }}>{activeColor.name}</strong>
              </div>
            </div>

            {/* Color Picker & Official Link Actions */}
            <div className="liquid-glass p-6 rounded-3xl space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-extrabold text-white uppercase tracking-wider">
                  Màu sắc ngoại thất: <span className="text-cyan-400">{activeColor.name}</span>
                </span>
                <span className="text-xs text-slate-400 font-medium">{activeProduct.colors.length} Tùy chọn chính hãng</span>
              </div>
              <div className="flex items-center gap-5">
                {activeProduct.colors.map((color, idx) => (
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

            {/* Official VinFast Links Box */}
            <div className="glass-panel p-5 rounded-2xl flex flex-wrap items-center justify-between gap-4 border border-white/10">
              <span className="text-xs text-slate-300 font-bold">Trang chính hãng VinFast Auto:</span>
              <div className="flex items-center gap-3">
                <a
                  href={activeProduct.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl text-xs font-bold text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 hover:bg-cyan-500/20 transition-all"
                >
                  🌐 Link Sản Phẩm
                </a>
                <a
                  href={activeProduct.specsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl text-xs font-bold text-amber-400 bg-amber-500/10 border border-amber-500/30 hover:bg-amber-500/20 transition-all"
                >
                  📄 Thông Số Kỹ Thuật
                </a>
              </div>
            </div>
          </div>

          {/* Right 5 Cols: Spec Sheet & Price */}
          <div className="lg:col-span-5 liquid-glass p-8 rounded-3xl space-y-8">
            <div>
              <span className="text-xs text-cyan-400 font-black uppercase tracking-widest">{activeProduct.category} • {activeProduct.segment}</span>
              <h3 className="text-3xl font-black text-white mt-1">{activeProduct.name}</h3>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed font-normal">{activeProduct.description}</p>
            </div>

            {/* Specs Grid */}
            <div className="grid grid-cols-2 gap-3 p-4 rounded-2xl bg-slate-900/60 border border-white/10 text-xs">
              <div>
                <span className="text-slate-400">Tầm di chuyển:</span>
                <p className="font-extrabold text-cyan-400 text-sm mt-0.5">{activeProduct.rangeWLTP} km / sạc</p>
              </div>
              <div>
                <span className="text-slate-400">Công suất:</span>
                <p className="font-extrabold text-white text-sm mt-0.5">{activeProduct.powerHp} HP / kW</p>
              </div>
              <div>
                <span className="text-slate-400">Động cơ / Dẫn động:</span>
                <p className="font-extrabold text-white mt-0.5">{activeProduct.drivetrain}</p>
              </div>
              <div>
                <span className="text-slate-400">Vận tốc / Tăng tốc:</span>
                <p className="font-extrabold text-white mt-0.5">{activeProduct.acceleration}</p>
              </div>
            </div>

            {/* Battery Option */}
            <div className="space-y-3">
              <label className="text-xs font-black text-slate-300 uppercase tracking-wider">Gói Pin & Sở hữu</label>
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
                  <div className="text-[10px] text-slate-400 mt-1">Tiết kiệm vốn ban đầu</div>
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
                  <div className="text-[10px] text-slate-400 mt-1">+{activeProduct.batteryDeposit} Triệu VNĐ</div>
                </button>
              </div>
            </div>

            {/* Price Box */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-400 uppercase font-bold">Giá niêm yết dự toán</span>
                <div className="text-2xl sm:text-3xl font-black text-red-500">
                  {calculatedPrice.toLocaleString('vi-VN')} <span className="text-sm font-normal text-slate-300">Triệu VNĐ</span>
                </div>
              </div>
              <button
                onClick={() => alert(`Cảm ơn bạn! Thông tin đăng ký xe ${activeProduct.name} đã được gửi tới Showroom VinFast.`)}
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
