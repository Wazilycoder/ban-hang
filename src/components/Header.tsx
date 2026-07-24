'use client';

import React, { useState, useEffect } from 'react';
import { PHONE_PRODUCTS } from '@/data/phones';
import { 
  Smartphone, 
  Search, 
  User, 
  ShoppingBag, 
  ChevronDown, 
  PhoneCall, 
  ShieldCheck, 
  Zap, 
  MapPin, 
  Sparkles,
  Menu,
  X,
  RefreshCw,
  Percent,
  Flame,
  Gamepad2,
  Tag
} from 'lucide-react';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<'iphone' | 'samsung' | 'tablet' | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const iphoneProducts = PHONE_PRODUCTS.filter(p => p.brand === 'Apple');
  const samsungProducts = PHONE_PRODUCTS.filter(p => p.brand === 'Samsung');
  const tabletProducts = PHONE_PRODUCTS.filter(p => p.category === 'Tablet & Phụ Kiện' || p.category === 'Android Flagship');

  const filteredSearchResults = searchQuery.trim()
    ? PHONE_PRODUCTS.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.tagline.toLowerCase().includes(searchQuery.toLowerCase()) || p.brand.toLowerCase().includes(searchQuery.toLowerCase()))
    : [];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 font-sans">
      {/* Top Banner TGDD Promos & Hotlines */}
      <div className="bg-gradient-to-r from-[#030712] via-[#09152e] to-[#030712] border-b border-cyan-500/20 text-slate-300 text-xs py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-amber-300 font-bold animate-pulse">
              <Flame className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              TGDD ƯU ĐÃI: Thu cũ đổi mới trợ giá tới 6.000.000đ
            </span>
            <span className="flex items-center gap-1.5 text-cyan-300 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
              Bảo hành chính hãng VN/A 1 đổi 1 12 tháng
            </span>
            <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
              <Zap className="w-3.5 h-3.5 text-emerald-400" />
              Giao siêu tốc trong 1 giờ
            </span>
          </div>

          <div className="flex items-center gap-5 text-slate-400 text-[11px]">
            <a href="tel:18001060" className="flex items-center gap-1 hover:text-white transition-colors">
              <PhoneCall className="w-3 h-3 text-cyan-400" />
              Tổng đài TGDD: <strong className="text-white font-bold">1800 1060 (Miễn phí)</strong>
            </a>
            <a href="#store-order" className="hover:text-cyan-400 transition-colors flex items-center gap-1">
              <MapPin className="w-3 h-3 text-amber-400" />
              Hệ thống Siêu thị Toàn Quốc
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar (Liquid Glass Style) */}
      <div 
        className={`transition-all duration-500 ${
          scrolled 
            ? 'liquid-glass py-3 border-b border-cyan-500/30' 
            : 'bg-[#081024]/80 backdrop-blur-xl border-b border-white/10 py-4'
        }`}
        onMouseLeave={() => setActiveDropdown(null)}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          
          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-slate-200 hover:text-white p-2 cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Brand Logo Emblem */}
          <a href="#" className="flex items-center gap-3 group cursor-pointer">
            <div className="relative w-11 h-11 rounded-2xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 border border-cyan-300/40 flex items-center justify-center shadow-lg shadow-cyan-500/30 group-hover:scale-110 group-hover:shadow-cyan-400/50 transition-all duration-300">
              <Smartphone className="w-6 h-6 text-slate-950 transform group-hover:rotate-12 transition-transform duration-300" />
              <div className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div>
              <span className="text-xl font-black tracking-widest text-white block uppercase group-hover:text-cyan-400 transition-colors">
                PHONE<span className="liquid-text-gradient">HUB</span>
              </span>
              <span className="text-[10px] text-cyan-400 font-extrabold uppercase tracking-widest block -mt-1">
                ĐỐI TÁC THẾ GIỚI DI ĐỘNG
              </span>
            </div>
          </a>

          {/* Left Menu Items (Desktop) */}
          <nav className="hidden md:flex items-center gap-7 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-200">
            {/* iPhone Dropdown */}
            <div 
              className="relative py-2 group cursor-pointer"
              onMouseEnter={() => setActiveDropdown('iphone')}
            >
              <button className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors">
                 iPhone VN/A
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeDropdown === 'iphone' ? 'rotate-180 text-cyan-400' : ''}`} />
              </button>
            </div>

            {/* Samsung Dropdown */}
            <div 
              className="relative py-2 group cursor-pointer"
              onMouseEnter={() => setActiveDropdown('samsung')}
            >
              <button className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors">
                Samsung Galaxy
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeDropdown === 'samsung' ? 'rotate-180 text-cyan-400' : ''}`} />
              </button>
            </div>

            {/* Tablet & Android */}
            <div 
              className="relative py-2 group cursor-pointer"
              onMouseEnter={() => setActiveDropdown('tablet')}
            >
              <button className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors">
                Tablet & Android
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeDropdown === 'tablet' ? 'rotate-180 text-cyan-400' : ''}`} />
              </button>
            </div>

            <a href="#trade-in" className="hover:text-cyan-400 transition-colors py-2 flex items-center gap-1 text-amber-300">
              <RefreshCw className="w-3.5 h-3.5 text-amber-400" /> Thu Cũ Trợ Giá 6Tr
            </a>

            <a href="#installment" className="hover:text-cyan-400 transition-colors py-2 flex items-center gap-1">
              <Percent className="w-3.5 h-3.5 text-cyan-400" /> Trả Góp 0%
            </a>
          </nav>

          {/* Right Menu Actions */}
          <div className="hidden md:flex items-center gap-4 text-slate-300">
            <button 
              onClick={() => setSearchOpen(!searchOpen)} 
              className="hover:text-cyan-400 transition-all p-2 rounded-2xl liquid-card cursor-pointer flex items-center gap-2 text-xs font-bold text-slate-300 shadow-md hover:scale-105"
            >
              <Search className="w-4 h-4 text-cyan-400" />
              <span>Tìm điện thoại...</span>
            </button>

            <a href="#store-order" className="liquid-button px-5 py-2.5 rounded-2xl text-slate-950 text-xs font-black transition-all shadow-lg shadow-cyan-500/20 transform hover:-translate-y-0.5 cursor-pointer uppercase tracking-wider flex items-center gap-2">
              <ShoppingBag className="w-4 h-4" />
              <span>Giỏ Hàng (0)</span>
            </a>
          </div>

          {/* Quick CTA on Mobile */}
          <div className="flex md:hidden items-center gap-2">
            <a 
              href="#configurator" 
              className="liquid-button px-3.5 py-1.5 rounded-xl text-slate-950 font-black text-xs uppercase shadow-md"
            >
              Mua Ngay
            </a>
          </div>

        </div>

        {/* Mega Dropdown iPhone */}
        {activeDropdown === 'iphone' && (
          <div className="absolute top-full left-0 right-0 liquid-glass p-8 animate-fade-in z-50 border-b border-cyan-500/40">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-3">
                <span className="text-xs font-black uppercase tracking-widest text-cyan-400 flex items-center gap-2">
                  <Smartphone className="w-4 h-4" /> iPhone VN/A Chính Hãng Thế Giới Di Động ({iphoneProducts.length} Mẫu)
                </span>
                <a href="#configurator" className="text-xs text-slate-400 hover:text-white underline">
                  Bảng giá iPhone mới nhất →
                </a>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {iphoneProducts.map((phone) => (
                  <a
                    key={phone.id}
                    href="#configurator"
                    onClick={() => setActiveDropdown(null)}
                    className="liquid-card p-4 rounded-2xl text-center flex flex-col justify-between"
                  >
                    <div className="h-32 w-full rounded-xl overflow-hidden mb-2 relative flex items-center justify-center p-2 bg-slate-950/80">
                      <img src={phone.imageUrl} alt={phone.name} className="h-full object-contain group-hover:scale-110 transition-transform duration-500" />
                      {phone.discountTag && (
                        <span className="absolute top-2 right-2 px-2 py-0.5 bg-red-600 text-white font-black text-[9px] rounded-full uppercase shadow-md">
                          {phone.discountTag}
                        </span>
                      )}
                    </div>
                    <div>
                      <h4 className="font-extrabold text-white text-sm hover:text-cyan-400 transition-colors">{phone.name}</h4>
                      <p className="text-[10px] text-slate-400 mt-0.5 line-clamp-1">{phone.chipset}</p>
                      <p className="text-xs font-black text-amber-400 mt-2">
                        {phone.storages[0].price.toLocaleString('vi-VN')} đ
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Mega Dropdown Samsung */}
        {activeDropdown === 'samsung' && (
          <div className="absolute top-full left-0 right-0 liquid-glass p-8 animate-fade-in z-50 border-b border-amber-500/40">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-3">
                <span className="text-xs font-black uppercase tracking-widest text-amber-400 flex items-center gap-2">
                  <Smartphone className="w-4 h-4" /> Samsung Galaxy AI Series ({samsungProducts.length} Mẫu)
                </span>
                <a href="#configurator" className="text-xs text-slate-400 hover:text-white underline">
                  Xem chi tiết ưu đãi TGDD →
                </a>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {samsungProducts.map((phone) => (
                  <a
                    key={phone.id}
                    href="#configurator"
                    onClick={() => setActiveDropdown(null)}
                    className="liquid-card p-4 rounded-2xl text-center flex flex-col justify-between"
                  >
                    <div className="h-32 w-full rounded-xl overflow-hidden mb-2 relative flex items-center justify-center p-2 bg-slate-950/80">
                      <img src={phone.imageUrl} alt={phone.name} className="h-full object-contain group-hover:scale-110 transition-transform duration-500" />
                      {phone.isHot && (
                        <span className="absolute top-2 right-2 px-2 py-0.5 bg-amber-500 text-slate-950 font-black text-[9px] rounded-full uppercase shadow-md">
                          BEST GALAXY
                        </span>
                      )}
                    </div>
                    <div>
                      <h4 className="font-extrabold text-white text-sm hover:text-amber-400 transition-colors">{phone.name}</h4>
                      <p className="text-[10px] text-slate-400 mt-0.5 line-clamp-1">{phone.screen}</p>
                      <p className="text-xs font-black text-amber-400 mt-2">
                        {phone.storages[0].price.toLocaleString('vi-VN')} đ
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Mega Dropdown Tablet */}
        {activeDropdown === 'tablet' && (
          <div className="absolute top-full left-0 right-0 liquid-glass p-8 animate-fade-in z-50 border-b border-purple-500/40">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-3">
                <span className="text-xs font-black uppercase tracking-widest text-purple-400 flex items-center gap-2">
                  <Smartphone className="w-4 h-4" /> Tablet & Android Flagship
                </span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {tabletProducts.map((phone) => (
                  <a
                    key={phone.id}
                    href="#configurator"
                    onClick={() => setActiveDropdown(null)}
                    className="liquid-card p-4 rounded-2xl text-center flex flex-col justify-between"
                  >
                    <div className="h-32 w-full rounded-xl overflow-hidden mb-2 relative flex items-center justify-center p-2 bg-slate-950/80">
                      <img src={phone.imageUrl} alt={phone.name} className="h-full object-contain group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-white text-sm hover:text-purple-400 transition-colors">{phone.name}</h4>
                      <p className="text-[10px] text-slate-400 mt-0.5 line-clamp-1">{phone.chipset}</p>
                      <p className="text-xs font-black text-amber-400 mt-2">
                        {phone.storages[0].price.toLocaleString('vi-VN')} đ
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Search Modal Overlay */}
        {searchOpen && (
          <div className="absolute top-full left-0 right-0 liquid-glass p-6 shadow-2xl z-50 animate-fade-in border-b border-cyan-500/40">
            <div className="max-w-3xl mx-auto space-y-4">
              <div className="relative">
                <Search className="w-5 h-5 text-cyan-400 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  autoFocus
                  placeholder="Nhập tên điện thoại (VD: iPhone 16 Pro Max, S25 Ultra, Z Fold6, iPad M4...)"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-slate-950 border border-cyan-500/50 rounded-2xl py-3.5 pl-12 pr-10 text-white text-sm font-bold focus:outline-none focus:ring-2 focus:ring-cyan-400 shadow-xl"
                />
                <button 
                  onClick={() => setSearchOpen(false)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs font-black"
                >
                  ESC
                </button>
              </div>

              {filteredSearchResults.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-80 overflow-y-auto pr-2">
                  {filteredSearchResults.map(product => (
                    <a
                      key={product.id}
                      href="#configurator"
                      onClick={() => setSearchOpen(false)}
                      className="flex items-center gap-4 p-3 liquid-card rounded-2xl border border-white/10 hover:border-cyan-400/50 transition-all duration-300"
                    >
                      <img src={product.imageUrl} alt={product.name} className="w-12 h-12 object-contain bg-slate-950 p-1 rounded-xl" />
                      <div>
                        <h5 className="font-extrabold text-white text-xs hover:text-cyan-400">{product.name}</h5>
                        <p className="text-[10px] text-slate-400">{product.chipset}</p>
                        <p className="text-xs font-black text-amber-400 mt-0.5">{product.storages[0].price.toLocaleString('vi-VN')} đ</p>
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

      </div>
    </header>
  );
}
