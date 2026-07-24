'use client';

import React, { useState } from 'react';
import { ShieldCheck, Zap, Award, Settings, Check, Plus, RefreshCw, Smartphone } from 'lucide-react';

export function PoliciesAndCMS() {
  const [showCmsModal, setShowCmsModal] = useState(false);
  const [promotions, setPromotions] = useState([
    {
      id: 'p1',
      title: 'Bảo Hành 1 Đổi 1 Trong 12 Tháng',
      desc: 'Cam kết 1 đổi 1 máy mới 100% nếu phát sinh lỗi nhà sản xuất trong vòng 12 tháng đầu tiên.',
      tag: 'BẢO HÀNH VIP',
      active: true
    },
    {
      id: 'p2',
      title: 'Thu Cũ Đổi Mới Trợ Giá 5.000.000đ',
      desc: 'Định giá điện thoại cũ cao hơn 20% so với thị trường + Trợ giá trực tiếp trừ thẳng vào hóa đơn máy mới.',
      tag: 'TRỢ GIÁ ĐỘC QUYỀN',
      active: true
    },
    {
      id: 'p3',
      title: 'Trả Góp 0% Lãi Suất Thẻ Tín Dụng',
      desc: 'Hỗ trợ trả góp 0% qua 25 ngân hàng liên kết, không phí ẩn, duyệt online 5 phút.',
      tag: 'ƯU ĐÃI TÀI CHÍNH',
      active: true
    }
  ]);

  const [newTitle, setNewTitle] = useState('');
  const [newDesc, setNewDesc] = useState('');

  const handleAddPromotion = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;
    setPromotions([
      ...promotions,
      {
        id: 'p-' + Date.now(),
        title: newTitle,
        desc: newDesc || 'Khuyến mãi đặc quyền từ chuỗi hệ thống PHONEHUB.',
        tag: 'FLASH SALE MỚI',
        active: true
      }
    ]);
    setNewTitle('');
    setNewDesc('');
  };

  const togglePromotion = (id: string) => {
    setPromotions(promotions.map(p => p.id === id ? { ...p, active: !p.active } : p));
  };

  return (
    <section id="policies" className="py-24 px-4 sm:px-6 bg-[#060b17] relative overflow-hidden font-sans">
      
      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-2 text-center md:text-left">
            <span className="px-4 py-1.5 rounded-full text-xs font-black text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 uppercase tracking-widest inline-block">
              CAM KẾT CHÍNH HÃNG VN/A & BẢO HÀNH VIP
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
              QUYỀN LỢI KHÁCH HÀNG & CHÍNH SÁCH ĐỔI TRẢ
            </h2>
          </div>

          {/* CMS Admin Demo Trigger Button */}
          <button
            onClick={() => setShowCmsModal(!showCmsModal)}
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 border border-cyan-500/40 text-cyan-300 hover:text-white hover:bg-blue-950 text-xs font-black transition-all cursor-pointer shadow-lg"
          >
            <Settings className="w-4 h-4 text-cyan-400" />
            {showCmsModal ? 'Đóng CMS Quản Trị' : '⚙️ CMS FLASH SALE (Quản Lý KM)'}
          </button>
        </div>

        {/* CMS Demo Panel Drawer (If Open) */}
        {showCmsModal && (
          <div className="bg-slate-900/95 border border-cyan-500/50 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl animate-fade-in">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <h3 className="text-base font-black text-cyan-400 uppercase flex items-center gap-2">
                <Settings className="w-5 h-5" /> Bảng Quản Trị CMS Flash Sale (Cập Nhật Ưu Đãi)
              </h3>
              <span className="text-xs text-slate-400">PHONEHUB Store Engine v3.1</span>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Form Add Promo */}
              <form onSubmit={handleAddPromotion} className="space-y-4 bg-slate-950 p-5 rounded-2xl border border-white/10">
                <h4 className="text-xs font-black text-white uppercase tracking-wider">Thêm Chương Trình Flash Sale Mới</h4>
                <div className="space-y-2">
                  <input
                    type="text"
                    required
                    placeholder="Tiêu đề ưu đãi (VD: Tặng Củ sạc 45W khi mua S25 Ultra)..."
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-white/15 text-white text-xs font-bold focus:outline-none focus:border-cyan-400"
                  />
                  <textarea
                    rows={2}
                    placeholder="Mô tả nội dung quà tặng / khuyến mãi..."
                    value={newDesc}
                    onChange={(e) => setNewDesc(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-white/15 text-white text-xs focus:outline-none focus:border-cyan-400"
                  />
                </div>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black text-xs uppercase flex items-center gap-1.5 cursor-pointer"
                >
                  <Plus className="w-4 h-4" /> Thêm Ưu Đãi
                </button>
              </form>

              {/* Active Toggles */}
              <div className="space-y-3">
                <h4 className="text-xs font-black text-white uppercase tracking-wider">Khuyến Mãi Đang Chạy</h4>
                <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                  {promotions.map((p) => (
                    <div key={p.id} className="flex items-center justify-between p-3 bg-slate-950 rounded-xl border border-white/10 text-xs">
                      <span className={`font-extrabold ${p.active ? 'text-white' : 'text-slate-500 line-through'}`}>{p.title}</span>
                      <button
                        onClick={() => togglePromotion(p.id)}
                        className={`px-3 py-1 rounded-lg text-[10px] font-black cursor-pointer ${
                          p.active ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' : 'bg-slate-800 text-slate-400'
                        }`}
                      >
                        {p.active ? 'BẬT' : 'TẮT'}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Promotions Display Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {promotions.filter(p => p.active).map((promo) => (
            <div
              key={promo.id}
              className="bg-slate-900/80 border border-white/15 rounded-3xl p-6 space-y-4 hover:border-emerald-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between"
            >
              <div className="space-y-3">
                <span className="px-3 py-1 rounded-full text-[10px] font-black text-emerald-400 bg-emerald-950/80 border border-emerald-500/30 uppercase tracking-widest inline-block">
                  {promo.tag}
                </span>
                <h3 className="text-xl font-black text-white leading-snug">{promo.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">{promo.desc}</p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-extrabold text-slate-400">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <Check className="w-4 h-4" /> Áp dụng tại 45 chi nhánh
                </span>
                <a href="#store-order" className="hover:text-white underline">Đặt hàng →</a>
              </div>
            </div>
          ))}
        </div>

        {/* VIP Warranty Feature Box */}
        <div className="grid lg:grid-cols-12 gap-8 items-center bg-gradient-to-br from-slate-900 via-blue-950/60 to-slate-900 p-8 sm:p-12 rounded-3xl border border-white/15 shadow-2xl">
          
          <div className="lg:col-span-7 space-y-4 text-left">
            <span className="px-3.5 py-1 rounded-full text-[11px] font-black text-cyan-400 bg-blue-950 border border-cyan-500/30 uppercase tracking-wider inline-block">
              TRẠM BẢO HÀNH CHÍNH HÃNG VN/A
            </span>
            <h3 className="text-2xl sm:text-4xl font-black text-white">An Tâm Mua Sắm - Bảo Hành 1 Đổi 1 Siêu Tốc</h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-normal">
              100% sản phẩm phân phối tại PHONEHUB đều là bản chính hãng VN/A nguyên seal, có hóa đơn VAT điện tử đầy đủ. Trung tâm bảo hành hỗ trợ đổi máy mới không đợi chờ.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-3 bg-slate-950/80 rounded-2xl border border-white/10">
                <span className="text-2xl font-black text-cyan-400">100%</span>
                <p className="text-[11px] text-slate-400 font-bold uppercase mt-0.5">Chính Hãng VN/A</p>
              </div>

              <div className="p-3 bg-slate-950/80 rounded-2xl border border-white/10">
                <span className="text-2xl font-black text-amber-400">30 Ngày</span>
                <p className="text-[11px] text-slate-400 font-bold uppercase mt-0.5">Dùng Thử Đổi Trả</p>
              </div>

              <div className="p-3 bg-slate-950/80 rounded-2xl border border-white/10">
                <span className="text-2xl font-black text-emerald-400">1 Giờ</span>
                <p className="text-[11px] text-slate-400 font-bold uppercase mt-0.5">Giao Hàng Hỏa Tốc</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-slate-950/90 p-6 rounded-2xl border border-cyan-500/30 space-y-4">
            <h4 className="text-sm font-black text-white uppercase tracking-wider flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" /> Cam Kết Vàng Từ PHONEHUB
            </h4>

            <ul className="space-y-3 text-xs text-slate-300">
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">✓</span>
                <span><strong>Máy mới 100% chưa Active:</strong> Đền tiền gấp 10 lần nếu phát hiện máy dựng hoặc qua sử dụng.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">✓</span>
                <span><strong>Bảo hành VIP Care cả rơi vỡ:</strong> Hỗ trợ sửa chữa/đổi mới kể cả với tai nạn rủi ro người dùng.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">✓</span>
                <span><strong>Minh bạch hóa đơn VAT:</strong> Đã bao gồm Thuế VAT 10% bảo vệ tối đa quyền lợi khách hàng.</span>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}
