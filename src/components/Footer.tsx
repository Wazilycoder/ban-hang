import React from 'react';

export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-12 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 text-xs text-slate-400">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center font-bold text-white">
              V
            </div>
            <span className="text-lg font-bold text-white">VINFAST AUTO</span>
          </div>
          <p className="leading-relaxed">
            Công ty cổ phần sản xuất và xuất nhập khẩu Ô tô VinFast. Đổi mới để kiến tạo tương lai xanh cho giao thông toàn cầu.
          </p>
        </div>

        <div>
          <h4 className="font-bold text-white text-sm mb-4 uppercase tracking-wider">Dòng Xe Điện</h4>
          <ul className="space-y-2.5">
            <li><a href="#configurator" className="hover:text-cyan-400 transition-colors">VinFast VF 3</a></li>
            <li><a href="#configurator" className="hover:text-cyan-400 transition-colors">VinFast VF 5 Plus</a></li>
            <li><a href="#configurator" className="hover:text-cyan-400 transition-colors">VinFast VF 7</a></li>
            <li><a href="#configurator" className="hover:text-cyan-400 transition-colors">VinFast VF 9</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-white text-sm mb-4 uppercase tracking-wider">Dịch Vụ Khách Hàng</h4>
          <ul className="space-y-2.5">
            <li><a href="#test-drive" className="hover:text-cyan-400 transition-colors">Đăng ký lái thử</a></li>
            <li><a href="#" className="hover:text-cyan-400 transition-colors">Chính sách thuê Pin VinFast</a></li>
            <li><a href="#" className="hover:text-cyan-400 transition-colors">Mạng lưới Trạm sạc Toàn quốc</a></li>
            <li><a href="#" className="hover:text-cyan-400 transition-colors">Bảo hành 10 năm hoặc 200.000km</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-white text-sm mb-4 uppercase tracking-wider">Tổng Đài Hỗ Trợ</h4>
          <p className="text-base font-extrabold text-red-500 mb-2">1900 23 23 89</p>
          <p className="text-slate-400">cskh@vinfast.vn</p>
          <p className="mt-4 text-[11px] text-slate-500">Tòa nhà Symphony, Đường Chu Huy Mân, Vinhomes Riverside, Long Biên, Hà Nội.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-slate-900 flex flex-wrap items-center justify-between text-[11px] text-slate-500">
        <p>© 2026 VinFast. All rights reserved. Bản quyền thuộc về VinFast Auto.</p>
        <p>Phát triển trên nền tảng Next.js & Tailwind CSS (UI/UX Pro Max Showcase).</p>
      </div>
    </footer>
  );
}
