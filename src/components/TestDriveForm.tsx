'use client';

import React, { useState } from 'react';
import { VINFAST_PRODUCTS } from '@/data/cars';

export function TestDriveForm() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedCar, setSelectedCar] = useState(VINFAST_PRODUCTS[0].name);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="test-drive" className="py-24 px-6 relative overflow-hidden bg-slate-950">
      <div className="max-w-4xl mx-auto glass-panel p-8 sm:p-12 rounded-3xl relative z-10 border border-white/15 shadow-2xl">
        <div className="text-center space-y-3 mb-10">
          <span className="px-4 py-1.5 rounded-full text-xs font-black text-red-400 glass-card uppercase tracking-widest inline-block border border-red-500/20">
            TRẢI NGHIỆM THỰC TẾ
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white">Đăng Ký Lái Thử Tận Nơi</h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Đội ngũ tư vấn Showroom VinFast sẽ liên hệ và giao xe tận nhà cho bạn lái thử hoàn toàn miễn phí.
          </p>
        </div>

        {submitted ? (
          <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3 animate-fade-in">
            <div className="w-14 h-14 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto text-2xl font-black">
              ✓
            </div>
            <h3 className="text-xl font-black text-white">Đăng Ký Thành Công!</h3>
            <p className="text-slate-300 text-xs sm:text-sm">
              Cảm ơn bạn! Chuyên viên Showroom VinFast sẽ liên hệ lại trong vòng 15 phút.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2 text-left">
                <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">Họ và Tên (*)</label>
                <input
                  type="text"
                  required
                  placeholder="Nguyễn Văn A"
                  className="w-full px-4 py-3.5 rounded-xl bg-slate-900/80 border border-white/10 text-white text-sm focus:outline-none focus:border-red-500 transition-colors"
                />
              </div>
              <div className="space-y-2 text-left">
                <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">Số Điện Thoại (*)</label>
                <input
                  type="tel"
                  required
                  placeholder="0988 xxx xxx"
                  className="w-full px-4 py-3.5 rounded-xl bg-slate-900/80 border border-white/10 text-white text-sm focus:outline-none focus:border-red-500 transition-colors"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2 text-left">
                <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">Dòng Xe Muốn Lái Thử</label>
                <select
                  value={selectedCar}
                  onChange={(e) => setSelectedCar(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-xl bg-slate-900/80 border border-white/10 text-white text-sm focus:outline-none focus:border-red-500 transition-colors"
                >
                  {VINFAST_PRODUCTS.map((product) => (
                    <option key={product.id} value={product.name} className="bg-slate-900 text-white">
                      {product.name} ({product.category})
                    </option>
                  ))}
                </select>
              </div>
              <div className="space-y-2 text-left">
                <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">Tỉnh / Thành Phố</label>
                <input
                  type="text"
                  required
                  placeholder="Hà Nội, TP.HCM, Đà Nẵng..."
                  className="w-full px-4 py-3.5 rounded-xl bg-slate-900/80 border border-white/10 text-white text-sm focus:outline-none focus:border-red-500 transition-colors"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl font-black text-white btn-primary-red uppercase text-sm tracking-wider cursor-pointer"
            >
              Gửi Yêu Cầu Lái Thử Miễn Phí
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
