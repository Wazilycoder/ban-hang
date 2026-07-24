'use client';

import React, { useState } from 'react';
import { VINFAST_CARS } from '@/data/cars';

export function TestDriveForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    city: 'Hà Nội',
    carModel: 'VinFast VF 7',
    preferredDate: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="test-drive" className="py-20 px-6 relative border-t border-slate-800">
      <div className="max-w-4xl mx-auto glass-panel p-8 sm:p-12 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="text-center space-y-4 mb-8">
          <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-xs font-semibold text-cyan-400 uppercase tracking-widest">
            TRẢI NGHIỆM THỰC TẾ
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Đăng Ký Lái Thử Xe VinFast
          </h2>
          <p className="text-slate-400 text-sm max-w-lg mx-auto">
            Trải nghiệm cảm giác lái thể thao, tăng tốc tức thì cùng các công nghệ trợ lái thông minh ADAS ngay tại Showroom gần nhất.
          </p>
        </div>

        {submitted ? (
          <div className="p-8 bg-cyan-950/40 border border-cyan-500/30 rounded-2xl text-center space-y-4 animate-fade-in">
            <div className="w-16 h-16 bg-cyan-500/20 text-cyan-400 rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
              ✓
            </div>
            <h3 className="text-xl font-bold text-white">Đăng Ký Lái Thử Thành Công!</h3>
            <p className="text-slate-300 text-sm">
              Cảm ơn <strong className="text-cyan-400">{formData.fullName}</strong>. Chuyên viên chăm sóc khách hàng VinFast tại khu vực <strong className="text-white">{formData.city}</strong> sẽ liên hệ với bạn trong thời gian sớm nhất.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300 border border-slate-700 transition-all"
            >
              Đăng ký thêm thông tin khác
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              {/* Họ tên */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-300 uppercase">Họ và tên *</label>
                <input
                  type="text"
                  required
                  placeholder="Ví dụ: Nguyễn Văn A"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-sm transition-all"
                />
              </div>

              {/* Số điện thoại */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-300 uppercase">Số điện thoại *</label>
                <input
                  type="tel"
                  required
                  placeholder="0912 xxx xxx"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-sm transition-all"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              {/* Dòng xe */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-300 uppercase">Dòng xe muốn lái thử</label>
                <select
                  value={formData.carModel}
                  onChange={(e) => setFormData({ ...formData, carModel: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-800 text-white focus:outline-none focus:border-cyan-500 text-sm transition-all"
                >
                  {VINFAST_CARS.map((car) => (
                    <option key={car.id} value={car.name} className="bg-slate-900 text-white">
                      {car.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Tỉnh / Thành phố */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-300 uppercase">Khu vực Showroom</label>
                <select
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-800 text-white focus:outline-none focus:border-cyan-500 text-sm transition-all"
                >
                  <option value="Hà Nội" className="bg-slate-900">Hà Nội</option>
                  <option value="TP. Hồ Chí Minh" className="bg-slate-900">TP. Hồ Chí Minh</option>
                  <option value="Đà Nẵng" className="bg-slate-900">Đà Nẵng</option>
                  <option value="Hải Phòng" className="bg-slate-900">Hải Phòng</option>
                  <option value="Cần Thơ" className="bg-slate-900">Cần Thơ</option>
                </select>
              </div>

              {/* Ngày dự định */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-300 uppercase">Ngày lái thử</label>
                <input
                  type="date"
                  required
                  value={formData.preferredDate}
                  onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-800 text-white focus:outline-none focus:border-cyan-500 text-sm transition-all"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl font-bold text-white bg-gradient-to-r from-cyan-600 via-blue-600 to-red-600 hover:from-cyan-500 hover:to-red-500 shadow-xl shadow-cyan-600/20 transition-all hover:scale-[1.01] active:scale-95 text-sm uppercase tracking-wider"
            >
              Xác Nhận Đăng Ký Lái Thử
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
