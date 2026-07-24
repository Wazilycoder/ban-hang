'use client';

import React, { useState, useEffect } from 'react';
import { PHONE_PRODUCTS } from '@/data/phones';
import { 
  Smartphone, 
  Search, 
  ShoppingBag, 
  ChevronDown, 
  ShieldCheck, 
  Zap, 
  Flame,
  Menu,
  X,
  RefreshCw,
  Percent
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
      {/* Top Clean Announcement Ticker (No Phone Numbers or Addresses) */}
      <div className="bg-[#030712] border-b border-cyan-500/20 text-slate-300 text-[11px] py-1.5 px-4 hidden lg:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-amber-300 font-bold">
              <Flame className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              ƯU ĐÃI FLAGSHIP: Thu cũ đổi mới trợ giá tới 5.000.000đ
            </span>
            <span className="flex items-center gap-1.5 text-cyan-300 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
              Bảo hành chính hãng VN/A 1 đổi 1 12 tháng
            </span>
            <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
              <Zap className="w-3.5 h-3.5 text-emerald-400" />
              Giao hỏa tốc miễn phí trong 1 giờ
            </span>
          </div>

          <div className="flex items-center gap-4 text-slate-400 text-[11px]">
            <span className="text-cyan-400 font-extrabold uppercase tracking-wider">
              DỰ ÁN BÁO CÁO E-COMMERCE 2026
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div 
        className={`transition-all duration-300 ${
          scrolled 
            ? 'liquid-glass py-2.5 shadow-2xl border-b border-cyan-500/30' 
            : 'bg-[#060c19]/90 backdrop-blur-xl border-b border-white/10 py-3'
        }`}
        onMouseLeave={() => setActiveDropdown(null)}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          
          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-slate-200 hover:text-white p-2 cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-2.5 group cursor-pointer shrink-0">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-400 to-blue-600 flex items-center justify-center shadow-md shadow-cyan-500/30 group-hover:scale-105 transition-all">
              <Smartphone className="w-5 h-5 text-slate-950" />
            </div>
            <div>
              <span className="text-lg font-black tracking-widest text-white uppercase group-hover:text-cyan-400 transition-colors">
                PHONE<span className="liquid-text-gradient">HUB</span>
              </span>
              <span className="text-[9px] text-cyan-400 font-extrabold uppercase tracking-widest block -mt-1">
                FLAGSHIP STORE VN/A
              </span>
            </div>
          </a>

          {/* Left Menu Items (Single Line Flex) */}
          <nav className="hidden lg:flex items-center gap-5 text-xs font-black uppercase tracking-wider text-slate-200 whitespace-nowrap">
            
            {/* iPhone Dropdown */}
            <div className="relative py-2" onMouseEnter={() => setActiveDropdown('iphone')}>
              <button className="flex items-center gap-1 hover:text-cyan-400 transition-colors cursor-pointer">
                 iPhone VN/A
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === 'iphone' ? 'rotate-180 text-cyan-400' : ''}`} />
              </button>
            </div>

            {/* Samsung Dropdown */}
            <div className="relative py-2" onMouseEnter={() => setActiveDropdown('samsung')}>
              <button className="flex items-center gap-1 hover:text-cyan-400 transition-colors cursor-pointer">
                Samsung Galaxy
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === 'samsung' ? 'rotate-180 text-cyan-400' : ''}`} />
              </button>
            </div>

            {/* Tablet Dropdown */}
            <div className="relative py-2" onMouseEnter={() => setActiveDropdown('tablet')}>
              <button className="flex items-center gap-1 hover:text-cyan-400 transition-colors cursor-pointer">
                Tablet & Android
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === 'tablet' ? 'rotate-180 text-cyan-400' : ''}`} />
              </button>
            </div>

            <a href="#trade-in" className="hover:text-cyan-400 transition-colors py-2 flex items-center gap-1 text-amber-300">
              <RefreshCw className="w-3.5 h-3.5 text-amber-400" /> Thu Cũ Trợ Giá
            </a>

            <a href="#installment" className="hover:text-cyan-400 transition-colors py-2 flex items-center gap-1">
              <Percent className="w-3.5 h-3.5 text-cyan-400" /> Trả Góp 0%
            </a>
          </nav>

          {/* Right Menu Actions */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <button 
              onClick={() => setSearchOpen(!searchOpen)} 
              className="px-3 py-2 rounded-xl liquid-card cursor-pointer flex items-center gap-2 text-xs font-bold text-slate-300 hover:scale-105 transition-all"
            >
              <Search className="w-3.5 h-3.5 text-cyan-400" />
              <span>Tìm điện thoại...</span>
            </button>

            <a href="#store-order" className="liquid-button px-4 py-2 rounded-xl text-slate-950 text-xs font-black transition-all shadow-md uppercase tracking-wider flex items-center gap-1.5">
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Giỏ Hàng</span>
            </a>
          </div>

          {/* Quick CTA on Mobile */}
          <div className="flex lg:hidden items-center gap-2">
            <a 
              href="#configurator" 
              className="liquid-button px-3 py-1.5 rounded-xl text-slate-950 font-black text-xs uppercase shadow-md"
            >
              Mua Ngay
            </a>
          </div>

        </div>

        {/* Mega Dropdown iPhone */}
        {activeDropdown === 'iphone' && (
          <div className="absolute top-full left-0 right-0 liquid-glass p-6 animate-fade-in z-50 border-b border-cyan-500/40 shadow-2xl">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center justify-between mb-3 border-b border-white/10 pb-2">
                <span className="text-xs font-black uppercase text-cyan-400 flex items-center gap-2">
                  <Smartphone className="w-4 h-4" /> iPhone VN/A Chính Hãng ({iphoneProducts.length} Mẫu)
                </span>
                <a href="#configurator" className="text-xs text-slate-400 hover:text-white underline">
                  Xem bảng giá chi tiết →
                </a>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {iphoneProducts.map((phone) => (
                  <a
                    key={phone.id}
                    href="#configurator"
                    onClick={() => setActiveDropdown(null)}
                    className="liquid-card p-3 rounded-xl text-center flex flex-col justify-between"
                  >
                    <div className="h-28 w-full rounded-lg overflow-hidden mb-1 relative flex items-center justify-center p-1 bg-slate-950/80">
                      <img src={phone.imageUrl} alt={phone.name} className="h-full object-contain" />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-white text-xs hover:text-cyan-400 truncate">{phone.name}</h4>
                      <p className="text-xs font-black text-amber-400 mt-1">
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
          <div className="absolute top-full left-0 right-0 liquid-glass p-6 animate-fade-in z-50 border-b border-amber-500/40 shadow-2xl">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center justify-between mb-3 border-b border-white/10 pb-2">
                <span className="text-xs font-black uppercase text-amber-400 flex items-center gap-2">
                  <Smartphone className="w-4 h-4" /> Samsung Galaxy AI Series ({samsungProducts.length} Mẫu)
                </span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {samsungProducts.map((phone) => (
                  <a
                    key={phone.id}
                    href="#configurator"
                    onClick={() => setActiveDropdown(null)}
                    className="liquid-card p-3 rounded-xl text-center flex flex-col justify-between"
                  >
                    <div className="h-28 w-full rounded-lg overflow-hidden mb-1 relative flex items-center justify-center p-1 bg-slate-950/80">
                      <img src={phone.imageUrl} alt={phone.name} className="h-full object-contain" />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-white text-xs hover:text-amber-400 truncate">{phone.name}</h4>
                      <p className="text-xs font-black text-amber-400 mt-1">
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
          <div className="absolute top-full left-0 right-0 liquid-glass p-6 animate-fade-in z-50 border-b border-purple-500/40 shadow-2xl">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center justify-between mb-3 border-b border-white/10 pb-2">
                <span className="text-xs font-black uppercase text-purple-400 flex items-center gap-2">
                  <Smartphone className="w-4 h-4" /> Tablet & Android Flagship
                </span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {tabletProducts.map((phone) => (
                  <a
                    key={phone.id}
                    href="#configurator"
                    onClick={() => setActiveDropdown(null)}
                    className="liquid-card p-3 rounded-xl text-center flex flex-col justify-between"
                  >
                    <div className="h-28 w-full rounded-lg overflow-hidden mb-1 relative flex items-center justify-center p-1 bg-slate-950/80">
                      <img src={phone.imageUrl} alt={phone.name} className="h-full object-contain" />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-white text-xs hover:text-purple-400 truncate">{phone.name}</h4>
                      <p className="text-xs font-black text-amber-400 mt-1">
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
          <div className="absolute top-full left-0 right-0 liquid-glass p-5 shadow-2xl z-50 animate-fade-in border-b border-cyan-500/40">
            <div className="max-w-2xl mx-auto space-y-3">
              <div className="relative">
                <Search className="w-4 h-4 text-cyan-400 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  autoFocus
                  placeholder="Nhập tên điện thoại (VD: iPhone 16 Pro Max, S25 Ultra...)"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-slate-950 border border-cyan-500/50 rounded-xl py-3 pl-11 pr-10 text-white text-xs font-bold focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
                <button 
                  onClick={() => setSearchOpen(false)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs font-black"
                >
                  ESC
                </button>
              </div>

              {filteredSearchResults.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-64 overflow-y-auto pr-1">
                  {filteredSearchResults.map(product => (
                    <a
                      key={product.id}
                      href="#configurator"
                      onClick={() => setSearchOpen(false)}
                      className="flex items-center gap-3 p-2.5 liquid-card rounded-xl border border-white/10 hover:border-cyan-400/50 transition-all"
                    >
                      <img src={product.imageUrl} alt={product.name} className="w-10 h-10 object-contain bg-slate-950 p-1 rounded-lg" />
                      <div>
                        <h5 className="font-extrabold text-white text-xs truncate">{product.name}</h5>
                        <p className="text-xs font-black text-amber-400">{product.storages[0].price.toLocaleString('vi-VN')} đ</p>
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#060c19] border-b border-cyan-500/30 p-5 space-y-3 text-xs font-bold text-slate-200 animate-fade-in">
          <a href="#configurator" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-white border-b border-white/5">
             Apple iPhone VN/A
          </a>
          <a href="#configurator" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-white border-b border-white/5">
            🌌 Samsung Galaxy AI
          </a>
          <a href="#trade-in" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-amber-300">
            🔄 Thu Cũ Trợ Giá
          </a>
          <a href="#installment" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-cyan-400">
            💳 Trả Góp 0%
          </a>
        </div>
      )}
    </header>
  );
}
