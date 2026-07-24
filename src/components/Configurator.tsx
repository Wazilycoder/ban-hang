'use client';

import React, { useState, useEffect } from 'react';
import { PHONE_PRODUCTS, PhoneProduct } from '@/data/phones';
import { Smartphone, ShieldCheck, Zap, Palette, HardDrive, CheckCircle2, ShoppingCart, Tag, Rotate3D, Gift } from 'lucide-react';

export function Configurator() {
  const [selectedBrand, setSelectedBrand] = useState<'All' | 'Apple' | 'Samsung' | 'Android'>('All');

  const filteredProducts = PHONE_PRODUCTS.filter(p => {
    if (selectedBrand === 'Apple') return p.brand === 'Apple';
    if (selectedBrand === 'Samsung') return p.brand === 'Samsung';
    if (selectedBrand === 'Android') return p.brand === 'Xiaomi' || p.brand === 'OPPO' || p.brand === 'ASUS' || p.brand === 'Vivo' || p.brand === 'Google';
    return true;
  });

  const [selectedProduct, setSelectedProduct] = useState<PhoneProduct>(filteredProducts[0]);
  const [selectedStorageIndex, setSelectedStorageIndex] = useState<number>(0);
  const [selectedColorIndex, setSelectedColorIndex] = useState<number>(0);
  const [vipWarranty, setVipWarranty] = useState<boolean>(false);
  const [includeAccessory, setIncludeAccessory] = useState<boolean>(true);
  const [is360Mode, setIs360Mode] = useState<boolean>(false);
  const [rotationAngle, setRotationAngle] = useState<number>(0);

  const activeProduct = filteredProducts.find(p => p.id === selectedProduct.id) || filteredProducts[0];
  const activeStorage = activeProduct.storages[selectedStorageIndex] || activeProduct.storages[0];
  const activeColor = activeProduct.colors[selectedColorIndex] || activeProduct.colors[0];

  // Auto rotation timer for 360 mode
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (is360Mode) {
      interval = setInterval(() => {
        setRotationAngle((prev) => (prev + 90) % 360);
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [is360Mode]);

  // Price calculations in VNĐ
  const basePriceVnd = activeStorage.price;
  const oldPriceVnd = activeStorage.oldPrice || basePriceVnd + 2000000;
  const vipWarrantyFee = vipWarranty ? 1500000 : 0;
  const accessoryFee = includeAccessory ? 850000 : 0;
  const grandTotal = basePriceVnd + vipWarrantyFee + accessoryFee;

  return (
    <section id="configurator" className="py-24 px-4 sm:px-6 relative overflow-hidden bg-[#030712] font-sans">
      
      {/* Liquid Glass Background Aura */}
      <div
        className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[750px] h-[750px] opacity-20 blur-[240px] pointer-events-none transition-colors duration-1000 animate-liquid-glow"
        style={{ backgroundColor: activeColor.hex }}
      />

      <div className="max-w-7xl mx-auto space-y-10 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <span className="px-4 py-1.5 rounded-full text-xs font-black text-cyan-400 liquid-glass uppercase tracking-widest inline-block">
            TRẢI NGHIỆM 360° & TÙY CHỈNH CẤU HÌNH
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
            BẢNG GIÁ & CẤU HÌNH CHI TIẾT
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
            Xem hình ảnh xoay 360° thực tế, chọn dung lượng bộ nhớ, màu sơn Titan độc quyền và kiểm tra các ưu đãi trợ giá mới nhất.
          </p>
        </div>

        {/* Brand Switcher Tabs */}
        <div className="flex items-center justify-center gap-3 flex-wrap">
          <button
            onClick={() => {
              setSelectedBrand('All');
              setSelectedProduct(PHONE_PRODUCTS[0]);
              setSelectedStorageIndex(0);
              setSelectedColorIndex(0);
            }}
            className={`px-6 py-3 rounded-2xl text-xs sm:text-sm font-black transition-all cursor-pointer ${
              selectedBrand === 'All'
                ? 'liquid-button text-slate-950 ring-2 ring-cyan-400/50'
                : 'liquid-card text-slate-400 hover:text-white'
            }`}
          >
            🔥 Tất Cả Điện Thoại ({PHONE_PRODUCTS.length})
          </button>

          <button
            onClick={() => {
              setSelectedBrand('Apple');
              const apples = PHONE_PRODUCTS.filter(p => p.brand === 'Apple');
              setSelectedProduct(apples[0]);
              setSelectedStorageIndex(0);
              setSelectedColorIndex(0);
            }}
            className={`px-6 py-3 rounded-2xl text-xs sm:text-sm font-black transition-all cursor-pointer ${
              selectedBrand === 'Apple'
                ? 'liquid-button text-slate-950 ring-2 ring-cyan-400/50'
                : 'liquid-card text-slate-400 hover:text-white'
            }`}
          >
             Apple iPhone VN/A
          </button>

          <button
            onClick={() => {
              setSelectedBrand('Samsung');
              const samsungs = PHONE_PRODUCTS.filter(p => p.brand === 'Samsung');
              setSelectedProduct(samsungs[0]);
              setSelectedStorageIndex(0);
              setSelectedColorIndex(0);
            }}
            className={`px-6 py-3 rounded-2xl text-xs sm:text-sm font-black transition-all cursor-pointer ${
              selectedBrand === 'Samsung'
                ? 'bg-amber-500 text-slate-950 shadow-lg ring-2 ring-amber-400/50'
                : 'liquid-card text-slate-400 hover:text-white'
            }`}
          >
            🌌 Samsung Galaxy
          </button>
        </div>

        {/* Product Track Selector (Scrollable Pills with Comfortable Spacing) */}
        <div className="relative p-2.5 rounded-2xl liquid-glass max-w-5xl mx-auto flex items-center gap-3 overflow-x-auto no-scrollbar shadow-2xl">
          {filteredProducts.map((phone) => {
            const isSelected = activeProduct.id === phone.id;
            return (
              <button
                key={phone.id}
                onClick={() => {
                  setSelectedProduct(phone);
                  setSelectedStorageIndex(0);
                  setSelectedColorIndex(0);
                }}
                className={`shrink-0 py-2.5 px-5 rounded-xl text-xs font-black transition-all whitespace-nowrap cursor-pointer ${
                  isSelected
                    ? 'liquid-button text-slate-950 shadow-md scale-105'
                    : 'bg-slate-950/60 text-slate-300 hover:text-white hover:bg-slate-900 border border-white/10'
                }`}
              >
                {phone.name}
              </button>
            );
          })}
        </div>

        {/* Main Configurator Workspace */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left 6 Cols: Phone Visual Display Screen */}
          <div className="lg:col-span-6 space-y-6">
            <div className="relative liquid-glass rounded-3xl p-6 shadow-2xl min-h-[460px] flex flex-col items-center justify-center">
              
              {/* Top Controls: 360 Rotation Toggle */}
              <div className="absolute top-5 left-5 z-20">
                <button
                  onClick={() => setIs360Mode(!is360Mode)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-extrabold transition-all cursor-pointer ${
                    is360Mode
                      ? 'liquid-button text-slate-950'
                      : 'liquid-card text-cyan-400 hover:bg-cyan-950'
                  }`}
                >
                  <Rotate3D className={`w-4 h-4 ${is360Mode ? 'animate-spin' : ''}`} />
                  {is360Mode ? 'Đang xoay 360°...' : 'Xoay 360° Trực Quan'}
                </button>
              </div>

              {/* Display Frame */}
              <div className="w-full h-[340px] sm:h-[400px] relative z-10 flex items-center justify-center p-4 bg-slate-950/80 rounded-2xl border border-white/5">
                <img
                  src={activeColor.imageUrl || activeProduct.imageUrl}
                  alt={activeProduct.name}
                  className={`h-full object-contain filter drop-shadow-[0_20px_30px_rgba(0,0,0,0.9)] transition-all duration-500 rounded-xl ${
                    rotationAngle === 90 ? 'rotate-90' : rotationAngle === 180 ? 'scale-x-[-1]' : rotationAngle === 270 ? '-rotate-90' : ''
                  }`}
                />
              </div>

              {/* 360 Angle Slider */}
              <div className="w-full pt-3 flex items-center gap-4 px-2 z-20">
                <span className="text-[11px] text-slate-400 font-bold whitespace-nowrap">Góc xoay: {rotationAngle}°</span>
                <input
                  type="range"
                  min="0"
                  max="360"
                  step="90"
                  value={rotationAngle}
                  onChange={(e) => setRotationAngle(Number(e.target.value))}
                  className="w-full accent-cyan-400 cursor-pointer"
                />
                <span className="text-[11px] text-cyan-400 font-bold">360°</span>
              </div>

              {/* Bottom Display Labels */}
              <div className="w-full flex items-center justify-between pt-4 text-xs font-extrabold text-slate-300 border-t border-white/10 mt-3">
                <span>
                  Màu sắc: <strong style={{ color: activeColor.hex }}>{activeColor.name}</strong>
                </span>
                <span className="text-cyan-400">
                  Dung lượng: <strong>{activeStorage.capacity}</strong>
                </span>
              </div>
            </div>

            {/* Color Swatch Switcher */}
            <div className="liquid-card p-6 rounded-3xl space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-white uppercase tracking-wider flex items-center gap-2">
                  <Palette className="w-4 h-4 text-cyan-400" />
                  Màu Sắc Độc Quyền: <span className="text-cyan-400">{activeColor.name}</span>
                </span>
                <span className="text-[11px] text-slate-400">{activeProduct.colors.length} Tùy chọn màu</span>
              </div>
              <div className="flex items-center gap-4 flex-wrap">
                {activeProduct.colors.map((color, idx) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColorIndex(idx)}
                    title={color.name}
                    className={`group relative w-12 h-12 rounded-full border-2 transition-all duration-300 transform cursor-pointer flex items-center justify-center ${
                      selectedColorIndex === idx
                        ? 'border-white scale-110 ring-4 ring-cyan-400/40 shadow-xl'
                        : 'border-slate-700 opacity-70 hover:opacity-100 hover:scale-105'
                    }`}
                    style={{ backgroundColor: color.hex }}
                  >
                    {selectedColorIndex === idx && <CheckCircle2 className="w-5 h-5 text-white filter drop-shadow-md" />}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right 6 Cols: Storage, Warranty & Price Output */}
          <div className="lg:col-span-6 liquid-glass p-8 rounded-3xl space-y-7 shadow-2xl">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-cyan-400 font-black uppercase tracking-widest">
                  CHÍNH HÃNG VN/A • {activeProduct.brand}
                </span>
                {activeProduct.discountTag && (
                  <span className="px-2 py-0.5 rounded-full bg-red-600 text-white font-black text-[9px] uppercase">
                    {activeProduct.discountTag}
                  </span>
                )}
              </div>
              <h3 className="text-3xl font-black text-white mt-1">{activeProduct.name}</h3>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">{activeProduct.description}</p>
            </div>

            {/* Storage Options */}
            <div className="space-y-3">
              <label className="text-xs font-black text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                <HardDrive className="w-4 h-4 text-amber-400" /> Chọn Dung Lượng Bộ Nhớ ROM
              </label>
              <div className="grid grid-cols-3 gap-3">
                {activeProduct.storages.map((storage, idx) => (
                  <button
                    key={storage.capacity}
                    onClick={() => setSelectedStorageIndex(idx)}
                    className={`p-3.5 rounded-2xl text-center border text-xs font-black transition-all cursor-pointer ${
                      selectedStorageIndex === idx
                        ? 'border-cyan-400 bg-cyan-950/40 text-white ring-2 ring-cyan-400/40'
                        : 'border-white/10 bg-slate-950 text-slate-400 hover:text-white'
                    }`}
                  >
                    <div className="text-sm font-extrabold">{storage.capacity}</div>
                    <div className="text-[11px] text-amber-400 mt-1">{storage.price.toLocaleString('vi-VN')} đ</div>
                  </button>
                ))}
              </div>
            </div>

            {/* VIP Care Warranty Option */}
            <div className="space-y-3">
              <label className="text-xs font-black text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" /> Gói Bảo Hành Mở Rộng VIP Care
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setVipWarranty(false)}
                  className={`p-3.5 rounded-2xl text-left border text-xs font-bold transition-all cursor-pointer ${
                    !vipWarranty
                      ? 'border-emerald-400 bg-emerald-950/40 text-white ring-2 ring-emerald-400/30'
                      : 'border-white/10 bg-slate-950 text-slate-400 hover:text-white'
                  }`}
                >
                  <div className="font-black">BH Tiêu Chuẩn 12 Tháng</div>
                  <div className="text-[10px] text-emerald-400 mt-1">1 đổi 1 chính hãng (Miễn phí)</div>
                </button>

                <button
                  onClick={() => setVipWarranty(true)}
                  className={`p-3.5 rounded-2xl text-left border text-xs font-bold transition-all cursor-pointer ${
                    vipWarranty
                      ? 'border-emerald-400 bg-emerald-950/40 text-white ring-2 ring-emerald-400/30'
                      : 'border-white/10 bg-slate-950 text-slate-400 hover:text-white'
                  }`}
                >
                  <div className="font-black">BH VIP Care 24 Tháng</div>
                  <div className="text-[10px] text-amber-400 mt-1">+1.500.000đ (Đổi mới cả rơi vỡ)</div>
                </button>
              </div>
            </div>

            {/* Accessory Bundle Checkbox */}
            <div className="p-4 rounded-2xl bg-slate-950/90 border border-white/10 flex items-center justify-between">
              <div className="space-y-0.5">
                <span className="text-xs font-black text-white block">Combo Củ Sạc Nhanh 25W/45W + Ốp Chống Sốc</span>
                <span className="text-[11px] text-slate-400 block">Ưu đãi mua kèm điện thoại giảm ngay 40%</span>
              </div>
              <input
                type="checkbox"
                checked={includeAccessory}
                onChange={(e) => setIncludeAccessory(e.target.checked)}
                className="w-5 h-5 accent-cyan-400 cursor-pointer"
              />
            </div>

            {/* Price Total Output */}
            <div className="pt-4 border-t border-white/10 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-400 font-bold uppercase">Tổng tiền thanh toán dự kiến</span>
                  <div className="flex items-baseline gap-2 mt-0.5">
                    <div className="text-3xl font-black text-amber-400">
                      {grandTotal.toLocaleString('vi-VN')} <span className="text-sm font-normal text-slate-300">đ</span>
                    </div>
                    <span className="text-xs text-slate-500 line-through">
                      {(oldPriceVnd + (includeAccessory ? 1200000 : 0)).toLocaleString('vi-VN')} đ
                    </span>
                  </div>
                </div>

                <a
                  href="#store-order"
                  className="liquid-button px-6 py-4 rounded-2xl text-slate-950 font-black text-xs uppercase tracking-wider transition-all shadow-xl flex items-center gap-2 cursor-pointer"
                >
                  <ShoppingCart className="w-4 h-4" />
                  ĐẶT MUA NGAY
                </a>
              </div>

              <div className="text-[11px] text-slate-400 flex items-center justify-between border-t border-white/5 pt-2">
                <span>✓ Đã bao gồm VAT 10%</span>
                <span>Trợ giá thu cũ tối đa <strong>{(activeProduct.tradeInBonus / 1000000).toLocaleString('vi-VN')} Triệu</strong></span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
