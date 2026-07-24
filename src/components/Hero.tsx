'use client';

import React, { useState } from 'react';
import { PHONE_PRODUCTS } from '@/data/phones';
import { ChevronLeft, ChevronRight, Zap, ShieldCheck, ArrowRight, Sparkles, RefreshCw, Flame, Award, Gift, Tag } from 'lucide-react';

export function Hero() {
  const [activeBrandFilter, setActiveBrandFilter] = useState<'All' | 'Apple' | 'Samsung' | 'Android'>('All');
  const [carouselIndex, setCarouselIndex] = useState(0);

  const filteredPhones = PHONE_PRODUCTS.filter(p => {
    if (activeBrandFilter === 'Apple') return p.brand === 'Apple';
    if (activeBrandFilter === 'Samsung') return p.brand === 'Samsung';
    if (activeBrandFilter === 'Android') return p.brand === 'Xiaomi' || p.brand === 'OPPO' || p.category === 'Tablet & Phụ Kiện';
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
    <section id="hero" className="relative pt-44 sm:pt-48 pb-20 px-4 sm:px-6 bg-[#030712] overflow-hidden font-sans">
      
      {/* Liquid Ambient Glowing Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[950px] h-[550px] bg-cyan-600/20 blur-[240px] rounded-full pointer-events-none animate-liquid-glow" />
      <div className="absolute top-1/3 right-10 w-[550px] h-[550px] bg-indigo-600/20 blur-[220px] rounded-full pointer-events-none animate-liquid-glow" />

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">

        {/* Hero Main Liquid Glass Showcase */}
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Headline & Action Buttons */}
          <div className="lg:col-span-5 space-y-6 text-left animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full liquid-glass text-xs font-black text-cyan-300 uppercase tracking-widest shadow-xl">
              <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
              ĐỒ ÁN E-COMMERCE 2026
            </div>

            <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight uppercase leading-[1.1]">
              FLAGSHIP CÔNG NGHỆ <br />
              <span className="liquid-text-gradient">
                LIQUID GLASS 2026
              </span>
            </h1>

            <p className="text-slate-300 text-sm sm:text-base font-normal leading-relaxed max-w-xl">
              Khám phá iPhone 16 Pro Max Titan Sa Mạc & Samsung Galaxy S25 Ultra 5G. Thu cũ trợ giá tới 5 triệu, trả góp 0% và giao hàng demo siêu tốc.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#configurator"
                className="liquid-button px-8 py-4 rounded-2xl text-xs sm:text-sm font-black text-slate-950 uppercase tracking-wider transition-all duration-300 cursor-pointer"
              >
                SẮM NGAY - TRẢ GÓP 0%
              </a>

              <a
                href="#trade-in"
                className="liquid-card px-6 py-4 rounded-2xl text-xs sm:text-sm font-black text-amber-300 uppercase tracking-wider flex items-center gap-2 group cursor-pointer hover:border-amber-400/50"
              >
                <RefreshCw className="w-4 h-4 text-amber-400 group-hover:rotate-180 transition-transform duration-500" />
                THU CŨ TRỢ GIÁ 5TR
              </a>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-7 relative">
            <div className="relative rounded-3xl p-3 liquid-glass overflow-hidden group">
              
              {/* Main Image Frame */}
              <div className="relative h-[320px] sm:h-[440px] rounded-2xl overflow-hidden bg-slate-950/80 flex items-center justify-center p-6 border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=1200&q=80"
                  alt="iPhone 16 Pro Max Titan Sa Mạc"
                  className="h-full object-contain filter drop-shadow-[0_25px_35px_rgba(0,0,0,0.9)] group-hover:scale-108 transition-transform duration-700 rounded-2xl animate-float"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-80" />

                {/* Left Bottom Label */}
                <div className="absolute bottom-5 left-6 liquid-glass px-5 py-3 rounded-2xl text-left shadow-2xl">
                  <span className="text-[10px] text-cyan-400 font-black uppercase tracking-widest block flex items-center gap-1">
                    <Flame className="w-3.5 h-3.5 text-red-500 fill-red-500 animate-bounce" /> SIÊU PHẨM BÁN CHẠY
                  </span>
                  <h3 className="text-xl font-black text-white">iPhone 16 Pro Max 256GB</h3>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-sm font-black text-amber-400">34.990.000 đ</span>
                    <span className="text-xs text-slate-400 line-through">36.990.000 đ</span>
                  </div>
                </div>

                {/* Floating Badges */}
                <div className="absolute top-6 right-6 flex flex-col gap-3 z-20">
                  <div className="flex items-center gap-3 liquid-glass p-3 rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-400 to-blue-600 text-slate-950 font-black text-base flex items-center justify-center shadow-inner">
                      VN/A
                    </div>
                    <div className="text-left pr-2">
                      <span className="text-[10px] text-slate-300 font-bold block uppercase tracking-wider">CHÍNH HÃNG</span>
                      <span className="text-xs font-black text-white block">BH 1 đổi 1 12 tháng</span>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* Section: TOP ĐIỆN THOẠI BÁN CHẠY NHẤT */}
        <div className="pt-12 space-y-6">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-wide uppercase">
                TOP ĐIỆN THOẠI BÁN CHẠY NHẤT 2026
              </h2>
              <p className="text-xs text-slate-400 mt-1">Hàng VN/A chính hãng 100% nguyên seal chưa active</p>
            </div>

            {/* Brand Filter Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
              <button
                onClick={() => { setActiveBrandFilter('All'); setCarouselIndex(0); }}
                className={`px-4 py-2 rounded-xl text-xs font-black transition-all cursor-pointer whitespace-nowrap ${
                  activeBrandFilter === 'All'
                    ? 'liquid-button text-slate-950'
                    : 'liquid-card text-slate-400 hover:text-white'
                }`}
              >
                Tất Cả ({PHONE_PRODUCTS.length})
              </button>

              <button
                onClick={() => { setActiveBrandFilter('Apple'); setCarouselIndex(0); }}
                className={`px-4 py-2 rounded-xl text-xs font-black transition-all cursor-pointer whitespace-nowrap ${
                  activeBrandFilter === 'Apple'
                    ? 'liquid-button text-slate-950'
                    : 'liquid-card text-slate-400 hover:text-white'
                }`}
              >
                 Apple iPhone
              </button>

              <button
                onClick={() => { setActiveBrandFilter('Samsung'); setCarouselIndex(0); }}
                className={`px-4 py-2 rounded-xl text-xs font-black transition-all cursor-pointer whitespace-nowrap ${
                  activeBrandFilter === 'Samsung'
                    ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/30'
                    : 'liquid-card text-slate-400 hover:text-white'
                }`}
              >
                Samsung Galaxy
              </button>

              <button
                onClick={() => { setActiveBrandFilter('Android'); setCarouselIndex(0); }}
                className={`px-4 py-2 rounded-xl text-xs font-black transition-all cursor-pointer whitespace-nowrap ${
                  activeBrandFilter === 'Android'
                    ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/30'
                    : 'liquid-card text-slate-400 hover:text-white'
                }`}
              >
                Xiaomi & Android
              </button>

              {/* Carousel Arrows */}
              <div className="flex items-center gap-1.5 pl-2 border-l border-white/10">
                <button
                  onClick={prevSlide}
                  className="w-9 h-9 rounded-xl liquid-card flex items-center justify-center text-slate-300 hover:text-white transition-all cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextSlide}
                  className="w-9 h-9 rounded-xl liquid-card flex items-center justify-center text-slate-300 hover:text-white transition-all cursor-pointer"
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
                className="liquid-card rounded-3xl p-6 space-y-5 flex flex-col justify-between"
              >
                <div className="space-y-1.5 text-left">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black text-cyan-400 uppercase tracking-widest">
                      CHÍNH HÃNG VN/A • {phone.brand}
                    </span>
                    {phone.discountTag && (
                      <span className="px-2 py-0.5 rounded-full bg-red-600 text-white text-[9px] font-black uppercase">
                        {phone.discountTag}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-black text-white hover:text-cyan-400 transition-colors">
                    {phone.name}
                  </h3>
                  <p className="text-[11px] text-slate-400 line-clamp-1">{phone.tagline}</p>
                </div>

                {/* Phone Image */}
                <div className="h-52 w-full rounded-2xl overflow-hidden bg-slate-950/80 p-4 relative flex items-center justify-center border border-white/5">
                  <img
                    src={phone.imageUrl}
                    alt={phone.name}
                    className="h-full object-contain group-hover:scale-110 transition-transform duration-500 rounded-xl"
                  />
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-amber-500 text-slate-950 text-[10px] font-black uppercase shadow-md flex items-center gap-1">
                    <Tag className="w-3 h-3" /> Trợ giá {phone.tradeInBonus / 1000000}Tr
                  </div>
                </div>

                {/* Specs summary */}
                <div className="grid grid-cols-2 gap-2 text-[11px] bg-slate-950/80 p-3 rounded-xl border border-white/5 text-slate-300">
                  <div>Màn: <strong className="text-white">{phone.screen.split(' ')[0]}</strong></div>
                  <div>Chip: <strong className="text-cyan-400">{phone.chipset.split(' ')[0]}</strong></div>
                  <div>RAM: <strong className="text-white">{phone.ram}</strong></div>
                  <div>Pin: <strong className="text-emerald-400">{phone.battery.split(',')[0]}</strong></div>
                </div>

                {/* Price tag */}
                <div className="flex items-baseline justify-between pt-1">
                  <div className="text-2xl font-black text-amber-400">
                    {phone.storages[0].price.toLocaleString('vi-VN')} <span className="text-xs font-normal text-slate-300">đ</span>
                  </div>
                  {phone.storages[0].oldPrice && (
                    <span className="text-xs text-slate-500 line-through">
                      {phone.storages[0].oldPrice.toLocaleString('vi-VN')} đ
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-3 pt-1">
                  <a
                    href="#configurator"
                    className="py-3 px-4 rounded-xl liquid-card text-slate-200 hover:text-white font-extrabold text-xs uppercase tracking-wider text-center transition-all cursor-pointer"
                  >
                    CẤU HÌNH
                  </a>

                  <a
                    href="#store-order"
                    className="py-3 px-4 rounded-xl liquid-button text-slate-950 font-black text-xs uppercase tracking-wider text-center transition-all cursor-pointer"
                  >
                    SẮM NGAY
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
