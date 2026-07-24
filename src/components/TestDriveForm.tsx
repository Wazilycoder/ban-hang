'use client';

import React, { useState } from 'react';
import { PHONE_PRODUCTS, STORE_BRANCHES } from '@/data/phones';
import { MapPin, Calendar, Smartphone, ShieldCheck, ShoppingCart, Truck, CheckCircle2 } from 'lucide-react';

export function TestDriveForm() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedPhoneId, setSelectedPhoneId] = useState(PHONE_PRODUCTS[0].id);
  const [selectedBranchId, setSelectedBranchId] = useState(STORE_BRANCHES[0].id);
  const [fulfillmentType, setFulfillmentType] = useState<'pickup' | 'delivery'>('pickup');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [orderCode, setOrderCode] = useState('');

  const activePhone = PHONE_PRODUCTS.find(p => p.id === selectedPhoneId) || PHONE_PRODUCTS[0];
  const activeBranch = STORE_BRANCHES.find(b => b.id === selectedBranchId) || STORE_BRANCHES[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const code = 'PH-ORD-' + Math.floor(100000 + Math.random() * 900000);
    setOrderCode(code);
    setSubmitted(true);
  };

  return (
    <section id="store-order" className="py-24 px-4 sm:px-6 bg-[#070e1c] relative overflow-hidden font-sans">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-cyan-600/10 blur-[200px] pointer-events-none rounded-full" />

      <div className="max-w-4xl mx-auto bg-slate-900/95 p-8 sm:p-12 rounded-3xl relative z-10 border border-white/15 shadow-2xl space-y-8">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <span className="px-4 py-1.5 rounded-full text-xs font-black text-cyan-400 bg-cyan-950/60 border border-cyan-500/30 uppercase tracking-widest inline-block">
            ĐẶT MUA ONLINE & GIỮ HÀNG TẠI SHOP
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
            ĐẶT HÀNG TRỰC TUYẾN / TRẢI NGHIỆM TẠI SHOP
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Đặt giữ siêu phẩm tại cửa hàng PHONEHUB gần nhất hoặc nhận giao hàng hỏa tốc trong 1 giờ hoàn toàn miễn phí.
          </p>
        </div>

        {submitted ? (
          <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-emerald-950/80 via-slate-950 to-emerald-950 border border-emerald-500/40 text-center space-y-5 animate-fade-in shadow-2xl">
            <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto text-3xl font-black shadow-inner">
              ✓
            </div>
            <div className="space-y-2">
              <span className="text-xs font-black text-emerald-400 uppercase tracking-widest block">ĐẶT HÀNG THÀNH CÔNG</span>
              <h3 className="text-2xl sm:text-3xl font-black text-white">MÃ ĐƠN HÀNG: <span className="text-amber-400 font-mono">{orderCode}</span></h3>
              <p className="text-slate-300 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
                Cảm ơn Quý khách <strong className="text-white">{fullName}</strong>! Siêu phẩm <strong className="text-cyan-400">{activePhone.name}</strong> đã được giữ chỗ ưu tiên trên hệ thống PHONEHUB.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900 border border-white/10 max-w-md mx-auto text-left text-xs space-y-1">
              <div className="flex items-center gap-2 text-cyan-400 font-bold">
                <Smartphone className="w-4 h-4" /> Đã gửi SMS & Email xác nhận đơn hàng
              </div>
              <p className="text-slate-400 text-[11px]">
                • Hình thức: <strong>{fulfillmentType === 'pickup' ? `Nhận tại ${activeBranch.name}` : 'Giao hỏa tốc 1h'}</strong>
              </p>
            </div>

            <button
              onClick={() => setSubmitted(false)}
              className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition-all cursor-pointer"
            >
              ← Đặt mua sản phẩm khác
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Fulfillment Type Selection */}
            <div className="space-y-2">
              <label className="text-xs font-black text-slate-300 uppercase tracking-wider">Hình Thức Nhận Hàng</label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setFulfillmentType('pickup')}
                  className={`p-3.5 rounded-2xl text-left border text-xs font-bold transition-all cursor-pointer ${
                    fulfillmentType === 'pickup'
                      ? 'border-cyan-400 bg-cyan-950/40 text-white ring-2 ring-cyan-400/40'
                      : 'border-white/10 bg-slate-950 text-slate-400 hover:text-white'
                  }`}
                >
                  <div className="font-extrabold text-sm">📍 Giữ hàng tại Cửa hàng gần nhất</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">Trải nghiệm máy tại shop & nhận quà kèm</div>
                </button>

                <button
                  type="button"
                  onClick={() => setFulfillmentType('delivery')}
                  className={`p-3.5 rounded-2xl text-left border text-xs font-bold transition-all cursor-pointer ${
                    fulfillmentType === 'delivery'
                      ? 'border-cyan-400 bg-cyan-950/40 text-white ring-2 ring-cyan-400/40'
                      : 'border-white/10 bg-slate-950 text-slate-400 hover:text-white'
                  }`}
                >
                  <div className="font-extrabold text-sm">🚚 Giao hàng hỏa tốc trong 1 giờ</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">Giao hàng tận nhà miễn phí toàn quốc</div>
                </button>
              </div>
            </div>

            {/* Phone & Branch Selection */}
            <div className="grid sm:grid-cols-2 gap-6">
              
              {/* Phone Picker */}
              <div className="space-y-2 text-left">
                <label className="text-xs font-black text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Smartphone className="w-3.5 h-3.5 text-cyan-400" /> Chọn Điện Thoại Mua (*)
                </label>
                <select
                  value={selectedPhoneId}
                  onChange={(e) => setSelectedPhoneId(e.target.value)}
                  className="w-full bg-slate-950 border border-white/15 rounded-xl py-3.5 px-4 text-white text-sm font-bold focus:outline-none focus:border-cyan-400 transition-colors"
                >
                  {PHONE_PRODUCTS.map((p) => (
                    <option key={p.id} value={p.id} className="bg-slate-900 text-white">
                      {p.name} (Từ {p.storages[0].price} Triệu VNĐ)
                    </option>
                  ))}
                </select>
              </div>

              {/* Branch Picker */}
              <div className="space-y-2 text-left">
                <label className="text-xs font-black text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" /> Cửa Hàng PHONEHUB Gần Bạn (*)
                </label>
                <select
                  value={selectedBranchId}
                  onChange={(e) => setSelectedBranchId(e.target.value)}
                  className="w-full bg-slate-950 border border-white/15 rounded-xl py-3.5 px-4 text-white text-sm font-bold focus:outline-none focus:border-cyan-400 transition-colors"
                >
                  {STORE_BRANCHES.map((sb) => (
                    <option key={sb.id} value={sb.id} className="bg-slate-900 text-white">
                      {sb.city} - {sb.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Customer Information */}
            <div className="grid sm:grid-cols-3 gap-4 pt-2">
              <div className="space-y-2 text-left">
                <label className="text-xs font-bold text-slate-300 uppercase">Họ và Tên (*)</label>
                <input
                  type="text"
                  required
                  placeholder="Nguyễn Văn A"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-white/15 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>

              <div className="space-y-2 text-left">
                <label className="text-xs font-bold text-slate-300 uppercase">Số Điện Thoại (*)</label>
                <input
                  type="tel"
                  required
                  placeholder="0988 xxx xxx"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-white/15 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>

              <div className="space-y-2 text-left">
                <label className="text-xs font-bold text-slate-300 uppercase">Email (Nhận Mã)</label>
                <input
                  type="email"
                  placeholder="khachhang@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-white/15 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>
            </div>

            {fulfillmentType === 'delivery' && (
              <div className="space-y-2 text-left">
                <label className="text-xs font-bold text-slate-300 uppercase">Địa Chỉ Giao Hàng Tận Nhà (*)</label>
                <input
                  type="text"
                  required
                  placeholder="Số nhà, Tên đường, Phường/Xã, Quận/Huyện..."
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-white/15 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>
            )}

            {/* Privacy Compliance */}
            <div className="flex items-center justify-between text-[11px] text-slate-400 border-t border-white/10 pt-4">
              <span className="flex items-center gap-1.5 text-slate-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400" /> Cam kết hàng VN/A chính hãng 100% nguyên seal
              </span>
              <span>Kiểm tra hàng trước khi thanh toán</span>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-4 rounded-xl font-black text-slate-950 bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-400 hover:from-cyan-300 hover:to-blue-300 uppercase text-xs sm:text-sm tracking-wider cursor-pointer shadow-xl transition-all"
            >
              XÁC NHẬN ĐẶT MUA {activePhone.name.toUpperCase()}
            </button>

          </form>
        )}

      </div>
    </section>
  );
}
