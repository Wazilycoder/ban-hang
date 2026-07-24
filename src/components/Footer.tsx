'use client';

import React from 'react';
import { PhoneCall, Mail, MapPin, ShieldCheck, Lock, Smartphone, ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#040812] border-t border-blue-900/40 text-slate-400 text-xs font-sans relative pt-16 pb-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Top Footer Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Col 1: Corporate Brand */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 border border-cyan-400/40 flex items-center justify-center font-black text-slate-950 text-xl shadow-lg">
                <Smartphone className="w-5 h-5 text-slate-950" />
              </div>
              <div>
                <span className="text-base font-black tracking-widest text-white block uppercase">
                  PHONE<span className="text-cyan-400">HUB</span> VIỆT NAM
                </span>
                <span className="text-[10px] text-cyan-400 font-bold uppercase tracking-wider block">
                  HỆ THỐNG BAN LẺ ĐIỆN THOẠI FLAGSHIP CHÍNH HÃNG VN/A
                </span>
              </div>
            </a>

            <p className="text-slate-400 leading-relaxed max-w-sm font-normal text-xs">
              Hệ thống bán lẻ điện thoại di động, máy tính bảng và phụ kiện công nghệ cao cấp hàng đầu Việt Nam. Đối tác bán lẻ ủy quyền chính thức của Apple, Samsung, Xiaomi & OPPO.
            </p>

            <div className="space-y-1.5 text-xs text-slate-300">
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>Trụ sở chính: 128 Thái Hà, Phường Trung Liệt, Quận Đống Đa, Hà Nội.</span>
              </p>
              <p className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Tổng đài Mua Hàng & Bảo Hành: <strong className="text-white font-bold">1800 6868 (Miễn phí 24/7)</strong></span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Email phản ánh chất lượng: <strong>cskh@phonehub.vn</strong></span>
              </p>
            </div>
          </div>

          {/* Col 2: iPhone Series */}
          <div className="space-y-3">
            <h4 className="text-xs font-black text-white uppercase tracking-wider text-cyan-400">iPhone VN/A Chính Hãng</h4>
            <ul className="space-y-2 text-slate-300">
              <li><a href="#configurator" className="hover:text-white transition-colors">iPhone 16 Pro Max Titan</a></li>
              <li><a href="#configurator" className="hover:text-white transition-colors">iPhone 16 Pro</a></li>
              <li><a href="#configurator" className="hover:text-white transition-colors">iPhone 16 Standard</a></li>
              <li><a href="#configurator" className="hover:text-white transition-colors">iPhone 15 Pro Max 256GB</a></li>
              <li><a href="#configurator" className="hover:text-white transition-colors">iPad Pro M4 (2024)</a></li>
            </ul>
          </div>

          {/* Col 3: Samsung & Android */}
          <div className="space-y-3">
            <h4 className="text-xs font-black text-white uppercase tracking-wider text-amber-400">Samsung & Android</h4>
            <ul className="space-y-2 text-slate-300">
              <li><a href="#configurator" className="hover:text-white transition-colors">Galaxy S25 Ultra 5G</a></li>
              <li><a href="#configurator" className="hover:text-white transition-colors">Galaxy Z Fold6 5G</a></li>
              <li><a href="#configurator" className="hover:text-white transition-colors">Galaxy Z Flip6</a></li>
              <li><a href="#configurator" className="hover:text-white transition-colors">Xiaomi 15 Ultra Leica</a></li>
              <li><a href="#configurator" className="hover:text-white transition-colors">OPPO Find X8 Pro</a></li>
            </ul>
          </div>

          {/* Col 4: Dịch Vụ Mua Sắm */}
          <div className="space-y-3">
            <h4 className="text-xs font-black text-white uppercase tracking-wider text-emerald-400">Dịch Vụ Khách Hàng</h4>
            <ul className="space-y-2 text-slate-300">
              <li><a href="#trade-in" className="hover:text-white transition-colors">Thu cũ đổi mới trợ giá 5 Trđ</a></li>
              <li><a href="#installment" className="hover:text-white transition-colors">Bảng tính mua trả góp 0%</a></li>
              <li><a href="#store-order" className="hover:text-white transition-colors">Đặt mua & Giữ máy tại Shop</a></li>
              <li><a href="#policies" className="hover:text-white transition-colors">Chính sách bảo hành VIP Care</a></li>
              <li><a href="#policies" className="hover:text-white transition-colors">Hệ thống 45 cửa hàng</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div className="space-y-1 text-center md:text-left">
            <p>© 2026 PHONEHUB Việt Nam. Tất cả quyền được bảo lưu.</p>
            <p className="text-slate-500">
              (*) Giá bán lẻ niêm yết các sản phẩm điện thoại đã bao gồm Thuế Giá trị gia tăng (VAT 10%) theo quy định pháp luật.
            </p>
          </div>

          {/* SSL & Scroll Top */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900 border border-emerald-500/30 text-emerald-400 text-[10px] font-bold">
              <Lock className="w-3.5 h-3.5" /> Security SSL 256-bit
            </div>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-slate-900 hover:bg-slate-800 border border-white/15 text-white transition-all cursor-pointer"
              title="Về đầu trang"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
