'use client';

import React, { useState } from 'react';
import { PHONE_PRODUCTS, TRADE_IN_DEVICES } from '@/data/phones';
import { RefreshCw, ArrowRight, CheckCircle2, ShieldAlert, Sparkles, Smartphone } from 'lucide-react';

export function TradeInCalculator() {
  const [oldDeviceId, setOldDeviceId] = useState<string>(TRADE_IN_DEVICES[0].id);
  const [deviceCondition, setDeviceCondition] = useState<'type1' | 'type2' | 'type3'>('type1');
  const [newProductId, setNewProductId] = useState<string>('iphone-16-pro-max');

  const oldDevice = TRADE_IN_DEVICES.find(d => d.id === oldDeviceId) || TRADE_IN_DEVICES[0];
  const newProduct = PHONE_PRODUCTS.find(p => p.id === newProductId) || PHONE_PRODUCTS[0];

  // Old phone valuation
  let oldValuation = oldDevice.estimatedValueType1;
  if (deviceCondition === 'type2') oldValuation = oldDevice.estimatedValueType2;
  if (deviceCondition === 'type3') oldValuation = oldDevice.estimatedValueType3;

  // Bonus from store
  const storeSubsidyVnd = newProduct.tradeInBonus * 1000000;

  // Total trade-in deduction value
  const totalDeductionVnd = oldValuation + storeSubsidyVnd;

  // New phone base price
  const newPhonePriceVnd = newProduct.storages[0].price * 1000000;

  // Amount remaining to pay
  const remainingPaymentVnd = Math.max(0, newPhonePriceVnd - totalDeductionVnd);

  return (
    <section id="trade-in" className="py-24 px-4 sm:px-6 bg-[#081124] relative overflow-hidden font-sans">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-amber-600/10 blur-[180px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto space-y-10 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <span className="px-4 py-1.5 rounded-full text-xs font-black text-amber-400 bg-amber-950/60 border border-amber-500/30 uppercase tracking-widest inline-block">
            CHƯƠNG TRÌNH THU CŨ ĐỔI MỚI GIÁ CAO NHẤT THỊ TRƯỜNG
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
            TÍNH GIÁ THU MÁY CỦ & TRỢ GIÁ LÊN ĐỜI
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
            Hệ thống tự động định giá điện thoại cũ của bạn + Trợ giá thêm tới 5.000.000đ khi nâng cấp lên Siêu Phẩm Flagship mới.
          </p>
        </div>

        {/* Trade-In Main Layout */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left 6 Cols: Select Device & Condition */}
          <div className="lg:col-span-6 bg-slate-900/90 p-8 rounded-3xl space-y-6 border border-white/15 shadow-2xl">
            <h3 className="text-lg font-black text-white flex items-center gap-2 border-b border-white/10 pb-4">
              <RefreshCw className="w-5 h-5 text-amber-400" />
              1. Thông Tin Máy Cũ Đang Sử Dụng
            </h3>

            {/* Select Old Device */}
            <div className="space-y-2">
              <label className="text-xs font-black text-slate-300 uppercase tracking-wider">Chọn Dòng Máy Cũ Của Bạn (*)</label>
              <select
                value={oldDeviceId}
                onChange={(e) => setOldDeviceId(e.target.value)}
                className="w-full bg-slate-950 border border-white/15 rounded-xl py-3.5 px-4 text-white text-sm font-bold focus:outline-none focus:border-amber-400 transition-colors"
              >
                {TRADE_IN_DEVICES.map((d) => (
                  <option key={d.id} value={d.id} className="bg-slate-900 text-white">
                    {d.name} (Định giá đến {(d.estimatedValueType1 / 1000000).toLocaleString('vi-VN')} Trđ)
                  </option>
                ))}
              </select>
            </div>

            {/* Select Condition */}
            <div className="space-y-2">
              <label className="text-xs font-black text-slate-300 uppercase tracking-wider">Tình Trạng Máy Hiện Tại</label>
              <div className="space-y-2">
                <button
                  onClick={() => setDeviceCondition('type1')}
                  className={`w-full p-3.5 rounded-2xl text-left border text-xs font-bold transition-all cursor-pointer flex items-center justify-between ${
                    deviceCondition === 'type1'
                      ? 'border-amber-400 bg-amber-950/40 text-white ring-2 ring-amber-400/30'
                      : 'border-white/10 bg-slate-950 text-slate-400 hover:text-white'
                  }`}
                >
                  <div>
                    <div className="font-extrabold text-sm text-amber-300">Loại 1: Máy đẹp 99% như mới</div>
                    <div className="text-[11px] text-slate-400">Màn hình trầy nhẹ / không xước, linh kiện zin chưa qua sửa chữa</div>
                  </div>
                  <span className="font-black text-amber-400 text-xs">{(oldDevice.estimatedValueType1 / 1000000).toLocaleString('vi-VN')} Trđ</span>
                </button>

                <button
                  onClick={() => setDeviceCondition('type2')}
                  className={`w-full p-3.5 rounded-2xl text-left border text-xs font-bold transition-all cursor-pointer flex items-center justify-between ${
                    deviceCondition === 'type2'
                      ? 'border-amber-400 bg-amber-950/40 text-white ring-2 ring-amber-400/30'
                      : 'border-white/10 bg-slate-950 text-slate-400 hover:text-white'
                  }`}
                >
                  <div>
                    <div className="font-extrabold text-sm">Loại 2: Máy trầy xước nhẹ 95%</div>
                    <div className="text-[11px] text-slate-400">Thân vỏ xước dăm nhẹ, hoạt động đầy đủ tính năng</div>
                  </div>
                  <span className="font-black text-white text-xs">{(oldDevice.estimatedValueType2 / 1000000).toLocaleString('vi-VN')} Trđ</span>
                </button>
              </div>
            </div>

            {/* Select Target New Phone */}
            <div className="space-y-2 pt-2 border-t border-white/10">
              <label className="text-xs font-black text-slate-300 uppercase tracking-wider flex items-center gap-1">
                <Smartphone className="w-4 h-4 text-cyan-400" /> Muốn Nâng Cấp Lên Mẫu Điện Thoại Nào?
              </label>
              <select
                value={newProductId}
                onChange={(e) => setNewProductId(e.target.value)}
                className="w-full bg-slate-950 border border-white/15 rounded-xl py-3.5 px-4 text-white text-sm font-bold focus:outline-none focus:border-cyan-400 transition-colors"
              >
                {PHONE_PRODUCTS.map((p) => (
                  <option key={p.id} value={p.id} className="bg-slate-900 text-white">
                    {p.name} ({p.storages[0].price} Triệu VNĐ)
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Right 6 Cols: Valuation Output & Pay Remaining */}
          <div className="lg:col-span-6 bg-slate-900/90 p-8 rounded-3xl space-y-6 border border-white/15 shadow-2xl">
            <h3 className="text-lg font-black text-white flex items-center justify-between border-b border-white/10 pb-4">
              <span className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                2. Kết Quả Định Giá & Trợ Giá Lên Đời
              </span>
            </h3>

            {/* Valuation Itemized Table */}
            <div className="space-y-3 text-xs">
              <div className="flex justify-between py-2 border-b border-white/10">
                <span className="text-slate-300">Giá thu mua máy cũ ({oldDevice.name}):</span>
                <span className="font-black text-white">{oldValuation.toLocaleString('vi-VN')} VNĐ</span>
              </div>

              <div className="flex justify-between py-2 border-b border-white/10 bg-amber-950/30 px-3 py-2.5 rounded-xl">
                <span className="text-amber-300 font-extrabold flex items-center gap-1">
                  🔥 Trợ giá độc quyền PHONEHUB:
                </span>
                <span className="font-black text-amber-400">+{storeSubsidyVnd.toLocaleString('vi-VN')} VNĐ</span>
              </div>

              <div className="flex justify-between py-2 border-b border-white/10">
                <span className="text-slate-300">Tổng giá trị được khấu trừ:</span>
                <span className="font-black text-cyan-400">{totalDeductionVnd.toLocaleString('vi-VN')} VNĐ</span>
              </div>

              <div className="flex justify-between py-2 border-b border-white/10">
                <span className="text-slate-300">Giá máy mới ({newProduct.name}):</span>
                <span className="font-extrabold text-white">{newPhonePriceVnd.toLocaleString('vi-VN')} VNĐ</span>
              </div>
            </div>

            {/* Grand Total Remaining Output */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-950/80 via-slate-950 to-amber-950/80 border border-amber-500/40 space-y-3 shadow-2xl">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase text-amber-400 tracking-wider">
                  SỐ TIỀN THẬT SỰ CẦN THÊM ĐỂ LÊN ĐỜI
                </span>
                <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-[10px] font-bold">
                  Tiết kiệm {((totalDeductionVnd) / 1000000).toFixed(1)} Trđ
                </span>
              </div>

              <div className="text-3xl sm:text-4xl font-black text-white">
                {remainingPaymentVnd.toLocaleString('vi-VN')} <span className="text-sm font-normal text-slate-300">VNĐ</span>
              </div>

              <div className="text-[11px] text-slate-400 pt-2 border-t border-white/10 flex items-center justify-between">
                <span>Có thể kết hợp trả góp 0% cho phần chênh lệch này</span>
                <a href="#store-order" className="text-amber-400 hover:underline font-bold">Đặt lịch thu máy tận nhà →</a>
              </div>
            </div>

            {/* Action CTAs */}
            <a
              href="#store-order"
              className="block w-full py-4 rounded-xl font-black text-slate-950 bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 uppercase tracking-wider text-center transition-all shadow-lg cursor-pointer"
            >
              ĐĂNG KÝ THU CŨ ĐỔI MỚI NGAY (ĐỊNH GIÁ TẬN NHÀ MIỄN PHÍ)
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
