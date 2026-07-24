'use client';

import React from 'react';

export function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/10 pt-16 pb-12 px-6 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-red-600 to-amber-500 flex items-center justify-center font-black text-white text-base">
              V
            </div>
            <span className="text-lg font-black text-white tracking-wider">VINFAST</span>
          </div>
          <p className="leading-relaxed">
            Showroom phân phối chính hãng xe ô ô điện và xe máy điện VinFast Việt Nam. Kỷ nguyên di chuyển xanh toàn cầu.
          </p>
        </div>

        <div>
          <h4 className="font-extrabold text-white uppercase tracking-wider mb-4">Sản Phẩm Ô Tô</h4>
          <ul className="space-y-2 font-medium">
            <li><a href="#configurator" className="hover:text-red-400 transition-colors">VinFast VF 3</a></li>
            <li><a href="#configurator" className="hover:text-red-400 transition-colors">VinFast VF 5 Plus</a></li>
            <li><a href="#configurator" className="hover:text-red-400 transition-colors">VinFast VF 6 & VF 7</a></li>
            <li><a href="#configurator" className="hover:text-red-400 transition-colors">VinFast VF 8 & VF 9</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-extrabold text-white uppercase tracking-wider mb-4">Xe Máy Điện</h4>
          <ul className="space-y-2 font-medium">
            <li><a href="#configurator" className="hover:text-red-400 transition-colors">VinFast Evo200 / Lite</a></li>
            <li><a href="#configurator" className="hover:text-red-400 transition-colors">VinFast Feliz S</a></li>
            <li><a href="#configurator" className="hover:text-red-400 transition-colors">VinFast Klara S (Gen 2)</a></li>
            <li><a href="#configurator" className="hover:text-red-400 transition-colors">VinFast Vento S & Theon S</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-extrabold text-white uppercase tracking-wider mb-4">Tổng Đài Hỗ Trợ</h4>
          <ul className="space-y-2 font-medium">
            <li className="text-white font-bold text-sm">Hotline: 1900 23 23 89</li>
            <li>Email: cskh@vinfastauto.com</li>
            <li>Website: shop.vinfastauto.com</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-white/5 pt-8 text-center text-slate-500">
        <p>© 2026 VinFast Showroom Việt Nam. All rights reserved.</p>
      </div>
    </footer>
  );
}
