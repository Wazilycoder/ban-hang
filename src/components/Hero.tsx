'use client';

import React, { useState } from 'react';
import { PHONE_PRODUCTS } from '@/data/phones';
import { ChevronLeft, ChevronRight, Zap, ShieldCheck, ArrowRight, Sparkles, RefreshCw } from 'lucide-react';

export function Hero() {
  const popularPhones = PHONE_PRODUCTS;
  const [carouselIndex, setCarouselIndex] = useState(0);

  const visibleCardsCount = 3;

  const nextSlide = () => {
    setCarouselIndex((prev) => (prev + 1) % (popularPhones.length - visibleCardsCount + 1));
  };

  const prevSlide = () => {
    setCarouselIndex((prev) => (prev === 0 ? popularPhones.length - visibleCardsCount : prev - 1));
  };

  return (
    <section id="hero" className="relative pt-36 pb-20 px-4 sm:px-6 bg-gradient-to-b from-[#081022] via-[#0c1833] to-[#081022] overflow-hidden font-sans">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-cyan-600/15 blur-[200px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-indigo-500/15 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">

        {/* Hero Section Banner */}
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Headline & CTAs */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-xs font-black text-cyan-400 uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              PHONEHUB FLAGSHIP STORE VN/A
            </div>

            <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight uppercase leading-[1.1]">
              SIÊU PHẨM CÔNG NGHỆ <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-amber-400">
                THƯỢNG HẠNG 2026
              </span>
            </h1>

            <p className="text-slate-300 text-sm sm:text-base font-normal leading-relaxed max-w-xl">
              Trải nghiệm iPhone 16 Pro Max Titan Sa Mạc & Samsung Galaxy S25 Ultra 5G chính hãng. Nhận gói bảo hành 1 đổi 1 12 tháng, giao hàng hỏa tốc trong 1h và thu cũ đổi mới trợ giá tới 5.000.000đ.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#configurator"
                className="px-8 py-4 rounded-2xl text-xs sm:text-sm font-black text-slate-950 bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-400 hover:from-cyan-300 hover:to-blue-300 shadow-xl shadow-cyan-500/30 uppercase tracking-wider transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
              >
                MUA NGAY - TRẢ GÓP 0%
              </a>

              <a
                href="#trade-in"
                className="px-6 py-4 rounded-2xl text-xs sm:text-sm font-black text-amber-300 bg-amber-950/60 border border-amber-500/40 hover:bg-amber-900/60 transition-all uppercase tracking-wider flex items-center gap-2 group cursor-pointer"
              >
                <RefreshCw className="w-4 h-4 text-amber-400 group-hover:rotate-180 transition-transform duration-500" />
                THU CŨ ĐỔI MỚI TRỢ GIÁ 5TR
              </a>
            </div>
          </div>

          {/* Right Column: Hero Visual & Badges */}
          <div className="lg:col-span-7 relative">
            <div className="relative rounded-3xl p-3 bg-gradient-to-b from-cyan-900/30 via-slate-900/50 to-slate-950/90 border border-cyan-500/30 shadow-2xl overflow-hidden group">
              
              {/* Main Showcase Image (iPhone 16 Pro Max Titan Sa Mạc) */}
              <div className="relative h-[320px] sm:h-[440px] rounded-2xl overflow-hidden bg-slate-950 flex items-center justify-center p-6">
                <img
                  src="https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=1200&q=80"
                  alt="iPhone 16 Pro Max Titan Sa Mạc"
                  className="h-full object-contain filter drop-shadow-[0_25px_35px_rgba(0,0,0,0.9)] group-hover:scale-105 transition-transform duration-700 rounded-2xl"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#060c19] via-transparent to-transparent opacity-80" />

                {/* Left Bottom Label */}
                <div className="absolute bottom-5 left-6 bg-slate-950/80 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/10 text-left">
                  <span className="text-[10px] text-cyan-400 font-black uppercase tracking-widest block">SIÊU PHẨM APPLE 2026</span>
                  <h3 className="text-xl font-black text-white">iPhone 16 Pro Max 256GB</h3>
                  <p className="text-xs font-bold text-amber-400 mt-0.5">34.990.000 VNĐ</p>
                </div>

                {/* Floating Badges */}
                <div className="absolute top-6 right-6 flex flex-col gap-3 z-20">
                  <div className="flex items-center gap-3 bg-[#0d1b38]/90 backdrop-blur-xl border border-cyan-500/40 p-3 rounded-2xl shadow-xl hover:scale-105 transition-transform">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-600 to-blue-500 text-white font-black text-lg flex items-center justify-center shadow-inner">
                      1:1
                    </div>
                    <div className="text-left pr-2">
                      <span className="text-[10px] text-slate-400 font-bold block uppercase tracking-wider">CHÍNH SÁCH</span>
                      <span className="text-xs font-black text-white block">Bảo hành 1 đổi 1 12 tháng</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 bg-[#0d1b38]/90 backdrop-blur-xl border border-amber-500/40 p-3 rounded-2xl shadow-xl hover:scale-105 transition-transform">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-600 to-yellow-400 text-slate-950 font-black text-lg flex items-center justify-center shadow-inner">
                      ⚡
                    </div>
                    <div className="text-left pr-2">
                      <span className="text-[10px] text-amber-400 font-bold block uppercase tracking-wider">GIAO SIÊU TỐC</span>
                      <span className="text-xs font-black text-white block">Giao hàng 1h toàn quốc</span>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* Section "ĐIỆN THOẠI BÁN CHẠY NHẤT" */}
        <div className="pt-12 space-y-6">
          
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-wide uppercase">
                TOP ĐIỆN THOẠI FLAGSHIP BÁN CHẠY NHẤT
              </h2>
              <p className="text-xs text-slate-400 mt-1">Sản phẩm chính hãng VN/A được ưa chuộng hàng đầu</p>
            </div>

            {/* Carousel Arrow Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={prevSlide}
                className="w-10 h-10 rounded-full bg-slate-900 border border-white/15 flex items-center justify-center text-slate-300 hover:text-white hover:border-cyan-400 hover:bg-blue-950 transition-all cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-full bg-slate-900 border border-white/15 flex items-center justify-center text-slate-300 hover:text-white hover:border-cyan-400 hover:bg-blue-950 transition-all cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {popularPhones.slice(carouselIndex, carouselIndex + visibleCardsCount).map((phone) => (
              <div
                key={phone.id}
                className="bg-slate-900/90 border border-white/15 rounded-3xl p-6 space-y-5 hover:border-cyan-500/50 transition-all duration-300 shadow-xl group flex flex-col justify-between"
              >
                <div className="space-y-1 text-left">
                  <span className="text-[10px] font-black text-cyan-400 uppercase tracking-widest">
                    {phone.brand} • {phone.category}
                  </span>
                  <h3 className="text-2xl font-black text-white group-hover:text-cyan-400 transition-colors">
                    {phone.name}
                  </h3>
                  <p className="text-[11px] text-slate-400 line-clamp-1">{phone.tagline}</p>
                </div>

                <div className="h-48 w-full rounded-2xl overflow-hidden bg-slate-950 p-4 relative flex items-center justify-center border border-white/5">
                  <img
                    src={phone.imageUrl}
                    alt={phone.name}
                    className="h-full object-contain group-hover:scale-105 transition-transform duration-500 rounded-xl"
                  />
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-red-600 text-white text-[10px] font-black uppercase shadow-md">
                    Trợ giá {phone.tradeInBonus} Trđ
                  </div>
                </div>

                {/* Specs quick info */}
                <div className="grid grid-cols-2 gap-2 text-[11px] bg-slate-950/60 p-2.5 rounded-xl border border-white/5 text-slate-300">
                  <div>Chip: <strong className="text-white">{phone.chipset}</strong></div>
                  <div>Pin: <strong className="text-cyan-400">{phone.battery}</strong></div>
                </div>

                {/* Card Action Buttons */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <a
                    href="#configurator"
                    className="py-3 px-4 rounded-xl border border-slate-400/60 hover:border-white text-slate-200 hover:text-white font-extrabold text-xs uppercase tracking-wider text-center transition-all cursor-pointer"
                  >
                    CẤU HÌNH
                  </a>

                  <a
                    href="#store-order"
                    className="py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black text-xs uppercase tracking-wider text-center transition-all cursor-pointer shadow-md"
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
