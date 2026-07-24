'use client';

import React, { useState, useEffect } from 'react';
import { PHONE_PRODUCTS, PhoneProduct } from '@/data/phones';
import { Smartphone, ShieldCheck, Zap, Palette, HardDrive, CheckCircle2, ShoppingCart, Tag, Rotate3D } from 'lucide-react';

export function Configurator() {
  const [selectedBrand, setSelectedBrand] = useState<'All' | 'Apple' | 'Samsung' | 'Android'>('All');

  const filteredProducts = PHONE_PRODUCTS.filter(p => {
    if (selectedBrand === 'Apple') return p.brand === 'Apple';
    if (selectedBrand === 'Samsung') return p.brand === 'Samsung';
    if (selectedBrand === 'Android') return p.brand === 'Xiaomi' || p.brand === 'OPPO' || p.brand === 'ASUS';
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

  // Price calculations
  const basePriceVnd = activeStorage.price * 1000000;
  const oldPriceVnd = activeStorage.oldPrice ? activeStorage.oldPrice * 1000000 : basePriceVnd + 2000000;
  const vipWarrantyFee = vipWarranty ? 1500000 : 0;
  const accessoryFee = includeAccessory ? 850000 : 0;
  const grandTotal = basePriceVnd + vipWarrantyFee + accessoryFee;

  return (
    <section id="configurator" className="py-24 px-4 sm:px-6 relative overflow-hidden bg-[#070d1a] font-sans">
      
      {/* Dynamic Background Glow Based on Color */}
      <div
        className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[700px] h-[700px] opacity-20 blur-[200px] pointer-events-none transition-colors duration-1000"
        style={{ backgroundColor: activeColor.hex }}
      />

      <div className="max-w-7xl mx-auto space-y-10 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <span className="px-4 py-1.5 rounded-full text-xs font-black text-cyan-400 bg-cyan-950/80 border border-cyan-500/30 uppercase tracking-widest inline-block">
            TÙY CHỈNH CẤU HÌNH & TRẢI NGHIỆM 360°
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
            BẢNG GIÁ & CẤU HÌNH FLAGSHIP CHI TIẾT
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
            Lựa chọn phiên bản dung lượng bộ nhớ, màu sắc độc quyền Titan, gói bảo hành VIP và nhận ưu đãi trợ giá thu cũ đổi mới.
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
                ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 shadow-lg shadow-cyan-500/30 ring-2 ring-cyan-400/50'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-white/10'
            }`}
          >
            🔥 Tất Cả Siêu Phẩm ({PHONE_PRODUCTS.length})
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
                ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 shadow-lg shadow-cyan-500/30 ring-2 ring-cyan-400/50'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-white/10'
            }`}
          >
             Apple iPhone ({PHONE_PRODUCTS.filter(p => p.brand === 'Apple').length})
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
                ? 'bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 shadow-lg shadow-amber-500/30 ring-2 ring-amber-400/50'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-white/10'
            }`}
          >
            🌌 Samsung Galaxy ({PHONE_PRODUCTS.filter(p => p.brand === 'Samsung').length})
          </button>
        </div>

        {/* Product Track Selector */}
        <div className="relative p-2 rounded-2xl bg-slate-900/80 border border-white/10 max-w-5xl mx-auto flex items-center justify-between overflow-x-auto no-scrollbar shadow-2xl">
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
                className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-black transition-all text-center whitespace-nowrap z-10 cursor-pointer ${
                  isSelected
                    ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 shadow-md scale-105'
                    : 'text-slate-400 hover:text-slate-200'
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
            <div className="relative bg-slate-900/90 rounded-3xl p-6 border border-white/15 shadow-2xl min-h-[460px] flex flex-col items-center justify-center">
              
              {/* Top Controls: 360 Rotation Toggle */}
              <div className="absolute top-5 left-5 z-20">
                <button
                  onClick={() => setIs360Mode(!is360Mode)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-extrabold transition-all cursor-pointer ${
                    is360Mode
                      ? 'bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-400/30'
                      : 'bg-slate-950/80 text-cyan-400 border border-cyan-500/30 hover:bg-cyan-950'
                  }`}
                >
                  <Rotate3D className={`w-4 h-4 ${is360Mode ? 'animate-spin' : ''}`} />
                  {is360Mode ? 'Đang xoay 360°...' : 'Xoay 360° Trực Quan'}
                </button>
              </div>

              {/* Display Frame */}
              <div className="w-full h-[340px] sm:h-[400px] relative z-10 flex items-center justify-center p-4 bg-slate-950 rounded-2xl border border-white/5">
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
            <div className="bg-slate-900/80 p-6 rounded-3xl space-y-4 border border-white/15">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-white uppercase tracking-wider flex items-center gap-2">
                  <Palette className="w-4 h-4 text-cyan-400" />
                  Màu Sắc Độc Quyền: <span className="text-cyan-400">{activeColor.name}</span>
                </span>
                <span className="text-[11px] text-slate-400">{activeProduct.colors.length} Tùy chọn màu sắc</span>
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
          <div className="lg:col-span-6 bg-slate-900/90 p-8 rounded-3xl space-y-7 border border-white/15 shadow-2xl">
            <div>
              <span className="text-xs text-cyan-400 font-black uppercase tracking-widest">
                CHÍNH HÃNG VN/A • {activeProduct.brand}
              </span>
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
                    <div className="text-[11px] text-amber-400 mt-1">{storage.price.toLocaleString('vi-VN')} Trđ</div>
                  </button>
                ))}
              </div>
            </div>

            {/* VIP Care Warranty Option */}
            <div className="space-y-3">
              <label className="text-xs font-black text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" /> Gói Bảo Hành VIP Care Mở Rộng
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
            <div className="p-4 rounded-2xl bg-slate-950 border border-white/10 flex items-center justify-between">
              <div className="space-y-0.5">
                <span className="text-xs font-black text-white block">Combo Phụ Kiện Chính Hãng (Củ sạc 45W + Ốp Magsafe)</span>
                <span className="text-[11px] text-slate-400 block">Ưu đãi giảm 40% khi mua kèm điện thoại mới</span>
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
                  className="px-6 py-4 rounded-2xl bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 font-black text-xs uppercase tracking-wider transition-all shadow-xl flex items-center gap-2 cursor-pointer"
                >
                  <ShoppingCart className="w-4 h-4" />
                  ĐẶT MUA NGAY
                </a>
              </div>

              <div className="text-[11px] text-slate-400 flex items-center justify-between border-t border-white/5 pt-2">
                <span>✓ Giá đã bao gồm VAT 10%</span>
                <span>Trợ giá thu cũ tối đa <strong>{activeProduct.tradeInBonus} Triệu</strong></span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
