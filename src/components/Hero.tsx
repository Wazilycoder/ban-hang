'use client';

import React, { useState } from 'react';
import { PHONE_PRODUCTS, PhoneProduct } from '@/data/phones';
import { ChevronLeft, ChevronRight, Zap, ShieldCheck, ArrowRight, Sparkles, RefreshCw, Flame, Award, Gamepad2 } from 'lucide-react';

export function Hero() {
  const [activeBrandFilter, setActiveBrandFilter] = useState<'All' | 'Apple' | 'Samsung' | 'Gaming'>('All');
  const [carouselIndex, setCarouselIndex] = useState(0);

  const filteredPhones = PHONE_PRODUCTS.filter(p => {
    if (activeBrandFilter === 'Apple') return p.brand === 'Apple';
    if (activeBrandFilter === 'Samsung') return p.brand === 'Samsung';
    if (activeBrandFilter === 'Gaming') return p.category === 'Gaming Phone' || p.brand === 'ASUS' || p.brand === 'Xiaomi';
    return true;
  });

  const visibleCardsCount = 3;

  const nextSlide = () => {
    setCarouselIndex((prev) => (prev + 1) % Math.max(1, filteredPhones.length - visibleCardsCount + 1));
  };

  const prevSlide = () => {
    setCarouselIndex((prev) => (prev === 0 ? Math.max(0, filteredPhones.length - visibleCardsCount) : prev - 1));
  };

  return (
    <section id="hero" className="relative pt-36 pb-20 px-4 sm:px-6 bg-gradient-to-b from-[#060c19] via-[#0b1733] to-[#060c19] overflow-hidden font-sans">
      
      {/* Background Ambient Glowing Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-cyan-600/15 blur-[220px] rounded-full pointer-events-none animate-ambient-glow" />
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-indigo-600/15 blur-[200px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">

        {/* Hero Main Banner Section */}
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Headline & CTAs */}
          <div className="lg:col-span-5 space-y-6 text-left animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-cyan-950 to-blue-950 border border-cyan-500/40 text-xs font-black text-cyan-300 uppercase tracking-widest shadow-lg shadow-cyan-500/10">
              <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
              PHONEHUB FLAGSHIP STORE VN/A
            </div>

            <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight uppercase leading-[1.1]">
              SIÊU PHẨM CÔNG NGHỆ <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-amber-400">
                THƯỢNG HẠNG 2026
              </span>
            </h1>

            <p className="text-slate-300 text-sm sm:text-base font-normal leading-relaxed max-w-xl">
              Trải nghiệm iPhone 16 Pro Max Titan Sa Mạc & Samsung Galaxy S25 Ultra 5G chính hãng. Nhận gói bảo hành 1 đổi 1 12 tháng, giao hàng hỏa tốc trong 1h và thu cũ đổi mới trợ giá tới 6.000.000đ.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#configurator"
                className="px-8 py-4 rounded-2xl text-xs sm:text-sm font-black text-slate-950 bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-400 hover:from-cyan-300 hover:to-blue-300 shadow-xl shadow-cyan-500/30 uppercase tracking-wider transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 cursor-pointer"
              >
                MUA NGAY - TRẢ GÓP 0%
              </a>

              <a
                href="#trade-in"
                className="px-6 py-4 rounded-2xl text-xs sm:text-sm font-black text-amber-300 bg-amber-950/60 border border-amber-500/40 hover:bg-amber-900/60 transition-all uppercase tracking-wider flex items-center gap-2 group cursor-pointer shadow-lg hover:-translate-y-1"
              >
                <RefreshCw className="w-4 h-4 text-amber-400 group-hover:rotate-180 transition-transform duration-500" />
                THU CŨ TRỢ GIÁ 6TR
              </a>
            </div>
          </div>

          {/* Right Column: Hero Visual & Floating Badges */}
          <div className="lg:col-span-7 relative">
            <div className="relative rounded-3xl p-3 bg-gradient-to-b from-cyan-900/30 via-slate-900/60 to-slate-950/90 border border-cyan-500/30 shadow-2xl overflow-hidden group">
              
              {/* Main Showcase Image */}
              <div className="relative h-[320px] sm:h-[440px] rounded-2xl overflow-hidden bg-slate-950 flex items-center justify-center p-6 border border-white/5">
                <img
                  src="https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=1200&q=80"
                  alt="iPhone 16 Pro Max Titan Sa Mạc"
                  className="h-full object-contain filter drop-shadow-[0_25px_35px_rgba(0,0,0,0.9)] group-hover:scale-108 transition-transform duration-700 rounded-2xl"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#060c19] via-transparent to-transparent opacity-80" />

                {/* Left Bottom Label */}
                <div className="absolute bottom-5 left-6 bg-slate-950/85 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/15 text-left shadow-xl">
                  <span className="text-[10px] text-cyan-400 font-black uppercase tracking-widest block flex items-center gap-1">
                    <Flame className="w-3.5 h-3.5 text-red-500 fill-red-500" /> SIÊU PHẨM APPLE 2026
                  </span>
                  <h3 className="text-xl font-black text-white">iPhone 16 Pro Max 256GB</h3>
                  <p className="text-xs font-bold text-amber-400 mt-0.5">34.990.000 VNĐ</p>
                </div>

                {/* Floating Badges */}
                <div className="absolute top-6 right-6 flex flex-col gap-3 z-20">
                  <div className="flex items-center gap-3 bg-[#08152e]/90 backdrop-blur-2xl border border-cyan-500/40 p-3 rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 text-slate-950 font-black text-base flex items-center justify-center shadow-inner">
                      1:1
                    </div>
                    <div className="text-left pr-2">
                      <span className="text-[10px] text-slate-400 font-bold block uppercase tracking-wider">BẢO HÀNH</span>
                      <span className="text-xs font-black text-white block">1 đổi 1 12 tháng</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 bg-[#08152e]/90 backdrop-blur-2xl border border-amber-500/40 p-3 rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-yellow-400 text-slate-950 font-black text-base flex items-center justify-center shadow-inner">
                      ⚡
                    </div>
                    <div className="text-left pr-2">
                      <span className="text-[10px] text-amber-400 font-bold block uppercase tracking-wider">HỎA TỐC</span>
                      <span className="text-xs font-black text-white block">Giao hàng 1h miễn phí</span>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* Section "TOP ĐIỆN THOẠI FLAGSHIP BÁN CHẠY NHẤT" */}
        <div className="pt-12 space-y-6">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-wide uppercase">
                TOP ĐIỆN THOẠI FLAGSHIP BÁN CHẠY NHẤT
              </h2>
              <p className="text-xs text-slate-400 mt-1">Sản phẩm chính hãng VN/A nguyên seal bảo hành 12 tháng</p>
            </div>

            {/* Brand Filter Tabs on Showcase */}
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
              <button
                onClick={() => { setActiveBrandFilter('All'); setCarouselIndex(0); }}
                className={`px-4 py-2 rounded-xl text-xs font-black transition-all cursor-pointer whitespace-nowrap ${
                  activeBrandFilter === 'All'
                    ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/30'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-white/10'
                }`}
              >
                Tất Cả ({PHONE_PRODUCTS.length})
              </button>

              <button
                onClick={() => { setActiveBrandFilter('Apple'); setCarouselIndex(0); }}
                className={`px-4 py-2 rounded-xl text-xs font-black transition-all cursor-pointer whitespace-nowrap ${
                  activeBrandFilter === 'Apple'
                    ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/30'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-white/10'
                }`}
              >
                 Apple
              </button>

              <button
                onClick={() => { setActiveBrandFilter('Samsung'); setCarouselIndex(0); }}
                className={`px-4 py-2 rounded-xl text-xs font-black transition-all cursor-pointer whitespace-nowrap ${
                  activeBrandFilter === 'Samsung'
                    ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/30'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-white/10'
                }`}
              >
                Samsung
              </button>

              <button
                onClick={() => { setActiveBrandFilter('Gaming'); setCarouselIndex(0); }}
                className={`px-4 py-2 rounded-xl text-xs font-black transition-all cursor-pointer whitespace-nowrap ${
                  activeBrandFilter === 'Gaming'
                    ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/30'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-white/10'
                }`}
              >
                🎮 Gaming
              </button>

              {/* Carousel Arrows */}
              <div className="flex items-center gap-1.5 pl-2 border-l border-white/10">
                <button
                  onClick={prevSlide}
                  className="w-9 h-9 rounded-xl bg-slate-900 border border-white/15 flex items-center justify-center text-slate-300 hover:text-white hover:border-cyan-400 hover:bg-blue-950 transition-all cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextSlide}
                  className="w-9 h-9 rounded-xl bg-slate-900 border border-white/15 flex items-center justify-center text-slate-300 hover:text-white hover:border-cyan-400 hover:bg-blue-950 transition-all cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredPhones.slice(carouselIndex, carouselIndex + visibleCardsCount).map((phone) => (
              <div
                key={phone.id}
                className="bg-slate-900/90 border border-white/15 rounded-3xl p-6 space-y-5 hover:border-cyan-500/60 transition-all duration-500 shadow-xl hover:-translate-y-1.5 group flex flex-col justify-between"
              >
                <div className="space-y-1 text-left">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black text-cyan-400 uppercase tracking-widest">
                      {phone.brand} • {phone.category}
                    </span>
                    {phone.isNew && (
                      <span className="px-2 py-0.5 rounded-full bg-emerald-500 text-slate-950 text-[9px] font-black uppercase">
                        MỚI 2026
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl font-black text-white group-hover:text-cyan-400 transition-colors">
                    {phone.name}
                  </h3>
                  <p className="text-[11px] text-slate-400 line-clamp-1">{phone.tagline}</p>
                </div>

                {/* Phone Image Display */}
                <div className="h-52 w-full rounded-2xl overflow-hidden bg-slate-950 p-4 relative flex items-center justify-center border border-white/5">
                  <img
                    src={phone.imageUrl}
                    alt={phone.name}
                    className="h-full object-contain group-hover:scale-110 transition-transform duration-500 rounded-xl"
                  />
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-red-600 text-white text-[10px] font-black uppercase shadow-md">
                    Trợ giá {phone.tradeInBonus} Trđ
                  </div>
                </div>

                {/* Quick specs pill */}
                <div className="grid grid-cols-2 gap-2 text-[11px] bg-slate-950/70 p-2.5 rounded-xl border border-white/5 text-slate-300">
                  <div>Chip: <strong className="text-white">{phone.chipset}</strong></div>
                  <div>Pin: <strong className="text-cyan-400">{phone.battery}</strong></div>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <a
                    href="#configurator"
                    className="py-3 px-4 rounded-xl border border-slate-400/60 hover:border-white text-slate-200 hover:text-white font-extrabold text-xs uppercase tracking-wider text-center transition-all cursor-pointer"
                  >
                    CẤU HÌNH
                  </a>

                  <a
                    href="#store-order"
                    className="py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 font-black text-xs uppercase tracking-wider text-center transition-all cursor-pointer shadow-lg hover:shadow-cyan-500/30"
                  >
                    MUA NGAY
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
