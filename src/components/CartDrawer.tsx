'use client';

import React, { useState } from 'react';
import { PHONE_PRODUCTS, PhoneProduct } from '@/data/phones';
import { X, Trash2, ShoppingBag, ArrowRight, ShieldCheck, Tag, CheckCircle2, Ticket } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const [couponCode, setCouponCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState(0);
  const [couponSuccess, setCouponSuccess] = useState(false);
  const [orderSubmitted, setOrderSubmitted] = useState(false);

  if (!isOpen) return null;

  // Demo Cart Items
  const cartItem = PHONE_PRODUCTS[0]; // iPhone 16 Pro Max
  const basePrice = cartItem.storages[0].price;
  const discountAmount = appliedDiscount;
  const finalPrice = Math.max(0, basePrice - discountAmount);

  const applyCoupon = () => {
    if (couponCode.toUpperCase() === 'STUDENT2026' || couponCode.toUpperCase() === 'DEMO2026') {
      setAppliedDiscount(2000000); // Giảm 2 triệu
      setCouponSuccess(true);
    } else {
      alert('Mã giảm giá demo hợp lệ: STUDENT2026 hoặc DEMO2026');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-slate-950/80 backdrop-blur-2xl animate-fade-in font-sans">
      <div className="w-full max-w-md h-full liquid-glass p-6 space-y-6 flex flex-col justify-between shadow-2xl border-l border-cyan-500/40 overflow-y-auto">
        
        {/* Header */}
        <div>
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl liquid-button flex items-center justify-center">
                <ShoppingBag className="w-5 h-5 text-slate-950" />
              </div>
              <div>
                <h3 className="text-lg font-black text-white uppercase">GIỎ HÀNG THỦY TÍNH DEMO</h3>
                <p className="text-[11px] text-cyan-400 font-bold">Dự án Nộp Báo Cáo • PHONEHUB Store</p>
              </div>
            </div>
            <button onClick={onClose} className="p-2 rounded-xl bg-slate-900 border border-white/10 text-slate-400 hover:text-white cursor-pointer">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          {!orderSubmitted ? (
            <div className="mt-6 space-y-4">
              <div className="liquid-card p-4 rounded-2xl flex items-center gap-4 relative">
                <img src={cartItem.imageUrl} alt={cartItem.name} className="w-16 h-16 object-contain bg-slate-950 p-1 rounded-xl" />
                <div className="flex-1 text-left">
                  <h4 className="text-xs font-black text-white">{cartItem.name}</h4>
                  <p className="text-[10px] text-slate-400 mt-0.5">Titan Sa Mạc • 256GB VN/A</p>
                  <p className="text-xs font-black text-amber-400 mt-1">{basePrice.toLocaleString('vi-VN')} đ</p>
                </div>
                <button className="text-slate-500 hover:text-red-400 p-1 cursor-pointer">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>

              {/* Promo Coupon Box */}
              <div className="p-4 rounded-2xl bg-slate-900/90 border border-white/10 space-y-2">
                <label className="text-[11px] font-black text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Ticket className="w-3.5 h-3.5 text-amber-400" /> Nhập Mã Giảm Giá Demo
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="Nhập: STUDENT2026"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    className="flex-1 bg-slate-950 border border-white/15 rounded-xl py-2 px-3 text-white text-xs font-bold uppercase focus:outline-none focus:border-cyan-400"
                  />
                  <button
                    onClick={applyCoupon}
                    className="px-4 py-2 rounded-xl bg-cyan-400 text-slate-950 text-xs font-black uppercase cursor-pointer hover:bg-cyan-300"
                  >
                    Áp Dụng
                  </button>
                </div>
                {couponSuccess && (
                  <p className="text-[11px] text-emerald-400 font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Đã áp dụng mã giảm giá 2.000.000đ!
                  </p>
                )}
              </div>
            </div>
          ) : (
            <div className="mt-12 text-center space-y-4 p-6 liquid-card rounded-3xl border border-emerald-500/40">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400 flex items-center justify-center mx-auto text-emerald-400">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-black text-white uppercase">ĐẶT HÀNG DEMO THÀNH CÔNG!</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Đơn hàng demo đã được tạo thành công cho mục đích báo cáo học tập. Cảm ơn bạn đã trải nghiệm web!
              </p>
              <div className="p-3 bg-slate-950 rounded-xl text-xs font-mono text-cyan-400">
                MÃ ĐƠN DEMO: PH-2026-STUDENT
              </div>
            </div>
          )}
        </div>

        {/* Footer Summary */}
        {!orderSubmitted && (
          <div className="pt-4 border-t border-white/10 space-y-4">
            <div className="space-y-1.5 text-xs text-slate-300">
              <div className="flex justify-between">
                <span>Tạm tính:</span>
                <span className="font-bold text-white">{basePrice.toLocaleString('vi-VN')} đ</span>
              </div>
              {appliedDiscount > 0 && (
                <div className="flex justify-between text-emerald-400 font-bold">
                  <span>Giảm giá mã STUDENT2026:</span>
                  <span>-{appliedDiscount.toLocaleString('vi-VN')} đ</span>
                </div>
              )}
              <div className="flex justify-between text-sm font-black text-amber-400 pt-2 border-t border-white/10">
                <span>Tổng tiền thanh toán:</span>
                <span>{finalPrice.toLocaleString('vi-VN')} đ</span>
              </div>
            </div>

            <button
              onClick={() => setOrderSubmitted(true)}
              className="w-full py-4 rounded-2xl liquid-button text-slate-950 font-black text-xs uppercase tracking-wider shadow-xl flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>XÁC NHẬN ĐẶT HÀNG DEMO</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
