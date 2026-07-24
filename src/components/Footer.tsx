'use client';

import React from 'react';
import { Smartphone, ShieldCheck, Heart, Code, Layers, Sparkles, GraduationCap } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#02050e] border-t border-white/10 pt-16 pb-12 px-4 sm:px-6 relative overflow-hidden font-sans text-slate-400">
      
      {/* Background Liquid Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-cyan-600/10 blur-[200px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Col 1: Project Info */}
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl liquid-button flex items-center justify-center">
                <Smartphone className="w-5 h-5 text-slate-950" />
              </div>
              <span className="text-2xl font-black text-white uppercase tracking-wider">
                PHONE<span className="liquid-text-gradient">HUB</span>
              </span>
            </div>

            <p className="text-xs leading-relaxed text-slate-300 max-w-md">
              Hệ thống E-Commerce Bán Điện Thoại & Thiết Bị Công Nghệ Flagship cao cấp. Sản phẩm phục vụ Đồ Án Tốt Nghiệp / Báo Cáo Học Tập Môn Học Công Nghệ Web 2026.
            </p>

            <div className="flex items-center gap-2 text-xs font-bold text-cyan-400">
              <GraduationCap className="w-4 h-4 text-cyan-400" />
              <span>Dự Án Báo Cáo Đồ Án Công Nghệ Thông Tin 2026</span>
            </div>
          </div>

          {/* Col 2: Tech Stack */}
          <div className="space-y-3">
            <h4 className="text-xs font-black text-white uppercase tracking-widest flex items-center gap-2">
              <Code className="w-4 h-4 text-cyan-400" /> Công Nghệ Sử Dụng
            </h4>
            <ul className="text-xs space-y-2 text-slate-300">
              <li className="flex items-center gap-2">✓ Next.js 16 (App Router & Turbopack)</li>
              <li className="flex items-center gap-2">✓ React 19 & TypeScript</li>
              <li className="flex items-center gap-2">✓ Tailwind CSS v4 Liquid Glass</li>
              <li className="flex items-center gap-2">✓ Lucide React Vector Icons</li>
            </ul>
          </div>

          {/* Col 3: System Features */}
          <div className="space-y-3">
            <h4 className="text-xs font-black text-white uppercase tracking-widest flex items-center gap-2">
              <Layers className="w-4 h-4 text-amber-400" /> Tính Năng Nổi Bật
            </h4>
            <ul className="text-xs space-y-2 text-slate-300">
              <li>• Xoay 360° Trực Quan Điện Thoại</li>
              <li>• So Sánh Cấu Hình Side-by-Side</li>
              <li>• Tính Thu Cũ Trợ Giá & Trả Góp 0%</li>
              <li>• Giỏ Hàng & Mã Giảm Giá Demo</li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 PHONEHUB Store. Tất cả quyền được bảo lưu. Dự án nộp báo cáo học tập.</p>
          <div className="flex items-center gap-1 text-slate-300">
            <span>Thiết kế mượt mà với phong cách Liquid Glassmorphism</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
