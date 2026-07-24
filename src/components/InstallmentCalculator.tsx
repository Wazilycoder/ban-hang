'use client';

import React, { useState } from 'react';
import { PHONE_PRODUCTS } from '@/data/phones';
import { CreditCard, Percent, CheckCircle2, ShieldCheck, Landmark } from 'lucide-react';

export function InstallmentCalculator() {
  const [selectedProductId, setSelectedProductId] = useState<string>('iphone-16-pro-max');
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(20); // 20%
  const [installmentMonths, setInstallmentMonths] = useState<number>(12); // 12 tháng
  const [method, setMethod] = useState<'card' | 'finance'>('card');

  const product = PHONE_PRODUCTS.find(p => p.id === selectedProductId) || PHONE_PRODUCTS[0];
  const phonePriceVnd = product.storages[0].price * 1000000;

  // Installment calculations
  const downPaymentVnd = (phonePriceVnd * downPaymentPercent) / 100;
  const loanAmountVnd = phonePriceVnd - downPaymentVnd;
  
  // 0% interest rate fee conversion
  const conversionFeeRate = method === 'card' ? 0.025 : 0.045; // 2.5% cho thẻ tín dụng
  const conversionFeeVnd = loanAmountVnd * conversionFeeRate;

  // Monthly payment
  const monthlyPaymentVnd = (loanAmountVnd + conversionFeeVnd) / installmentMonths;

  return (
    <section id="installment" className="py-24 px-4 sm:px-6 bg-[#060c19] relative overflow-hidden font-sans">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-cyan-600/10 blur-[180px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto space-y-10 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <span className="px-4 py-1.5 rounded-full text-xs font-black text-cyan-400 bg-cyan-950/80 border border-cyan-500/30 uppercase tracking-widest inline-block">
            MUA SẮM THÔNG MINH KHÔNG LO VỀ GIÁ
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
            BẢNG TÍNH MUA ĐIỆN THOẠI TRẢ GÓP 0% LÃI SUẤT
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
            Duyệt hồ sơ online chỉ trong 5 phút. Trả góp 0% lãi suất qua thẻ tín dụng hơn 25 ngân hàng hoặc công ty tài chính.
          </p>
        </div>

        {/* Calculator Layout */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left 6 Cols: Inputs */}
          <div className="lg:col-span-6 bg-slate-900/90 p-8 rounded-3xl space-y-6 border border-white/15 shadow-2xl">
            <h3 className="text-lg font-black text-white flex items-center gap-2 border-b border-white/10 pb-4">
              <Percent className="w-5 h-5 text-cyan-400" />
              1. Tùy Chọn Gói Trả Góp
            </h3>

            {/* Select Phone */}
            <div className="space-y-2">
              <label className="text-xs font-black text-slate-300 uppercase tracking-wider">Chọn Sản Phẩm Mua Trả Góp</label>
              <select
                value={selectedProductId}
                onChange={(e) => setSelectedProductId(e.target.value)}
                className="w-full bg-slate-950 border border-white/15 rounded-xl py-3.5 px-4 text-white text-sm font-bold focus:outline-none focus:border-cyan-400 transition-colors"
              >
                {PHONE_PRODUCTS.map((p) => (
                  <option key={p.id} value={p.id} className="bg-slate-900 text-white">
                    {p.name} ({p.storages[0].price} Triệu VNĐ)
                  </option>
                ))}
              </select>
            </div>

            {/* Payment Method Switcher */}
            <div className="space-y-2">
              <label className="text-xs font-black text-slate-300 uppercase tracking-wider">Hình Thức Trả Góp</label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setMethod('card')}
                  className={`py-3 px-4 rounded-xl text-xs font-black border transition-all cursor-pointer ${
                    method === 'card'
                      ? 'border-cyan-400 bg-cyan-950/40 text-cyan-300 ring-2 ring-cyan-400/30'
                      : 'border-white/10 bg-slate-950 text-slate-400 hover:text-white'
                  }`}
                >
                  💳 Thẻ Tín Dụng (Lãi 0%)
                </button>
                <button
                  onClick={() => setMethod('finance')}
                  className={`py-3 px-4 rounded-xl text-xs font-black border transition-all cursor-pointer ${
                    method === 'finance'
                      ? 'border-cyan-400 bg-cyan-950/40 text-cyan-300 ring-2 ring-cyan-400/30'
                      : 'border-white/10 bg-slate-950 text-slate-400 hover:text-white'
                  }`}
                >
                  🏦 Công Ty Tài Chính (Home/FE)
                </button>
              </div>
            </div>

            {/* Prepayment percent */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-black">
                <span className="text-slate-300 uppercase">Tỷ Lệ Trả Trước Ban Đầu:</span>
                <span className="text-cyan-400 text-sm">{downPaymentPercent}% ({(downPaymentVnd / 1000000).toFixed(2)} Trđ)</span>
              </div>
              <div className="grid grid-cols-5 gap-2">
                {[0, 10, 20, 30, 50].map((p) => (
                  <button
                    key={p}
                    onClick={() => setDownPaymentPercent(p)}
                    className={`py-2 rounded-xl text-xs font-black border transition-all cursor-pointer ${
                      downPaymentPercent === p
                        ? 'border-cyan-400 bg-cyan-950/40 text-white ring-2 ring-cyan-400/30'
                        : 'border-white/10 bg-slate-950 text-slate-400 hover:text-white'
                    }`}
                  >
                    {p}% ({p === 0 ? '0đ' : `${p}%`})
                  </button>
                ))}
              </div>
            </div>

            {/* Term Months */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-black">
                <span className="text-slate-300 uppercase">Kỳ Hạn Trả Góp:</span>
                <span className="text-amber-400 text-sm">{installmentMonths} Tháng</span>
              </div>
              <div className="grid grid-cols-5 gap-2">
                {[3, 6, 9, 12, 24].map((m) => (
                  <button
                    key={m}
                    onClick={() => setInstallmentMonths(m)}
                    className={`py-2 rounded-xl text-xs font-black border transition-all cursor-pointer ${
                      installmentMonths === m
                        ? 'border-amber-400 bg-amber-950/40 text-amber-300 ring-2 ring-amber-400/30'
                        : 'border-white/10 bg-slate-950 text-slate-400 hover:text-white'
                    }`}
                  >
                    {m} Tháng
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right 6 Cols: Result Output */}
          <div className="lg:col-span-6 bg-slate-900/90 p-8 rounded-3xl space-y-6 border border-white/15 shadow-2xl">
            <h3 className="text-lg font-black text-white flex items-center justify-between border-b border-white/10 pb-4">
              <span className="flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-amber-400" />
                2. Nghĩa Vụ Chi Trả Trả Góp 0%
              </span>
              <span className="text-xs text-slate-400 font-bold">{product.name}</span>
            </h3>

            {/* Summary Itemized Table */}
            <div className="space-y-3 text-xs">
              <div className="flex justify-between py-2 border-b border-white/10">
                <span className="text-slate-300">Giá máy niêm yết:</span>
                <span className="font-black text-white">{phonePriceVnd.toLocaleString('vi-VN')} VNĐ</span>
              </div>

              <div className="flex justify-between py-2 border-b border-white/10">
                <span className="text-slate-300">Số tiền trả trước ({downPaymentPercent}%):</span>
                <span className="font-black text-cyan-400">{downPaymentVnd.toLocaleString('vi-VN')} VNĐ</span>
              </div>

              <div className="flex justify-between py-2 border-b border-white/10">
                <span className="text-slate-300">Số tiền vay chuyển đổi trả góp:</span>
                <span className="font-bold text-white">{loanAmountVnd.toLocaleString('vi-VN')} VNĐ</span>
              </div>

              <div className="flex justify-between py-2 border-b border-white/10">
                <span className="text-slate-300">Lãi suất hàng tháng:</span>
                <span className="font-black text-emerald-400">0.0% (Lãi suất 0%)</span>
              </div>
            </div>

            {/* Grand Monthly Output */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-950 via-slate-950 to-blue-950 border border-cyan-500/40 space-y-3 shadow-2xl">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase text-cyan-400 tracking-wider">
                  SỐ TIỀN THẬT SỰ CẦN TRẢ MỖI THÁNG
                </span>
                <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-[10px] font-bold">
                  Kỳ hạn {installmentMonths} tháng
                </span>
              </div>

              <div className="text-3xl sm:text-4xl font-black text-amber-400">
                {monthlyPaymentVnd.toLocaleString('vi-VN')} <span className="text-sm font-normal text-slate-300">VNĐ / tháng</span>
              </div>

              <p className="text-[11px] text-slate-400 pt-2 border-t border-white/10">
                Duyệt hồ sơ online không cần chứng minh thu nhập. Thủ tục chỉ cần CCCD gắn chip.
              </p>
            </div>

            {/* Action CTA */}
            <a
              href="#store-order"
              className="block w-full py-4 rounded-xl font-black text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 uppercase tracking-wider text-center transition-all shadow-lg cursor-pointer"
            >
              NỘP HỒ SƠ VAY TRẢ GÓP ONLINE (DUYỆT 5 PHÚT)
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
