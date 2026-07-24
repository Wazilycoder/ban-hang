'use client';

import React, { useState } from 'react';
import { PHONE_PRODUCTS, PhoneProduct } from '@/data/phones';
import { X, Check, ArrowRightLeft, Sparkles, Smartphone, ShieldCheck, Zap } from 'lucide-react';

interface CompareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CompareModal({ isOpen, onClose }: CompareModalProps) {
  const [phone1Id, setPhone1Id] = useState<string>('iphone-16-pro-max');
  const [phone2Id, setPhone2Id] = useState<string>('galaxy-s25-ultra');

  if (!isOpen) return null;

  const phone1 = PHONE_PRODUCTS.find(p => p.id === phone1Id) || PHONE_PRODUCTS[0];
  const phone2 = PHONE_PRODUCTS.find(p => p.id === phone2Id) || PHONE_PRODUCTS[4];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-2xl animate-fade-in font-sans">
      <div className="relative w-full max-w-4xl liquid-glass rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl border border-cyan-500/40 max-h-[90vh] overflow-y-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl liquid-button flex items-center justify-center">
              <ArrowRightLeft className="w-5 h-5 text-slate-950" />
            </div>
            <div>
              <h3 className="text-xl font-black text-white uppercase tracking-wide">
                BẢNG SO SÁNH CẤU HÌNH FLAGSHIP TRỰC QUAN
              </h3>
              <p className="text-xs text-cyan-400 font-bold">Đồ án báo cáo E-Commerce • So sánh siêu phẩm 2026</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-900 border border-white/10 text-slate-400 hover:text-white cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Selectors */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-xs text-slate-400 font-bold uppercase block mb-1">Mẫu thứ nhất:</label>
            <select
              value={phone1Id}
              onChange={(e) => setPhone1Id(e.target.value)}
              className="w-full bg-slate-900 border border-cyan-500/40 rounded-xl py-2.5 px-3 text-white text-xs font-bold focus:outline-none focus:ring-2 focus:ring-cyan-400"
            >
              {PHONE_PRODUCTS.map(p => (
                <option key={p.id} value={p.id}>{p.name} ({p.brand})</option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-xs text-slate-400 font-bold uppercase block mb-1">Mẫu thứ hai:</label>
            <select
              value={phone2Id}
              onChange={(e) => setPhone2Id(e.target.value)}
              className="w-full bg-slate-900 border border-amber-500/40 rounded-xl py-2.5 px-3 text-white text-xs font-bold focus:outline-none focus:ring-2 focus:ring-amber-400"
            >
              {PHONE_PRODUCTS.map(p => (
                <option key={p.id} value={p.id}>{p.name} ({p.brand})</option>
              ))}
            </select>
          </div>
        </div>

        {/* Comparison Matrix Table */}
        <div className="space-y-4">
          
          {/* Top Showcase Images */}
          <div className="grid grid-cols-2 gap-4">
            <div className="liquid-card p-4 rounded-2xl text-center space-y-3">
              <div className="h-40 w-full rounded-xl bg-slate-950 p-2 flex items-center justify-center">
                <img src={phone1.imageUrl} alt={phone1.name} className="h-full object-contain" />
              </div>
              <h4 className="font-extrabold text-white text-sm">{phone1.name}</h4>
              <p className="text-sm font-black text-amber-400">{phone1.storages[0].price.toLocaleString('vi-VN')} đ</p>
            </div>

            <div className="liquid-card p-4 rounded-2xl text-center space-y-3">
              <div className="h-40 w-full rounded-xl bg-slate-950 p-2 flex items-center justify-center">
                <img src={phone2.imageUrl} alt={phone2.name} className="h-full object-contain" />
              </div>
              <h4 className="font-extrabold text-white text-sm">{phone2.name}</h4>
              <p className="text-sm font-black text-amber-400">{phone2.storages[0].price.toLocaleString('vi-VN')} đ</p>
            </div>
          </div>

          {/* Specs Rows */}
          <div className="space-y-2 text-xs">
            <div className="grid grid-cols-2 gap-4 p-3 bg-slate-900/80 rounded-xl border border-white/5">
              <div><strong className="text-cyan-400 block mb-0.5">Màn hình:</strong> <span className="text-slate-200">{phone1.screen}</span></div>
              <div><strong className="text-amber-400 block mb-0.5">Màn hình:</strong> <span className="text-slate-200">{phone2.screen}</span></div>
            </div>

            <div className="grid grid-cols-2 gap-4 p-3 bg-slate-900/80 rounded-xl border border-white/5">
              <div><strong className="text-cyan-400 block mb-0.5">Vi xử lý (Chip):</strong> <span className="text-slate-200">{phone1.chipset}</span></div>
              <div><strong className="text-amber-400 block mb-0.5">Vi xử lý (Chip):</strong> <span className="text-slate-200">{phone2.chipset}</span></div>
            </div>

            <div className="grid grid-cols-2 gap-4 p-3 bg-slate-900/80 rounded-xl border border-white/5">
              <div><strong className="text-cyan-400 block mb-0.5">Camera:</strong> <span className="text-slate-200">{phone1.camera}</span></div>
              <div><strong className="text-amber-400 block mb-0.5">Camera:</strong> <span className="text-slate-200">{phone2.camera}</span></div>
            </div>

            <div className="grid grid-cols-2 gap-4 p-3 bg-slate-900/80 rounded-xl border border-white/5">
              <div><strong className="text-cyan-400 block mb-0.5">Dung lượng Pin & Sạc:</strong> <span className="text-slate-200">{phone1.battery}</span></div>
              <div><strong className="text-amber-400 block mb-0.5">Dung lượng Pin & Sạc:</strong> <span className="text-slate-200">{phone2.battery}</span></div>
            </div>

            <div className="grid grid-cols-2 gap-4 p-3 bg-slate-900/80 rounded-xl border border-white/5">
              <div><strong className="text-cyan-400 block mb-0.5">Trợ giá thu cũ:</strong> <span className="text-emerald-400 font-bold">{(phone1.tradeInBonus / 1000000).toLocaleString('vi-VN')} Triệu</span></div>
              <div><strong className="text-amber-400 block mb-0.5">Trợ giá thu cũ:</strong> <span className="text-emerald-400 font-bold">{(phone2.tradeInBonus / 1000000).toLocaleString('vi-VN')} Triệu</span></div>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="pt-2 text-center">
          <button
            onClick={onClose}
            className="liquid-button px-8 py-3 rounded-xl text-slate-950 font-black text-xs uppercase tracking-wider cursor-pointer"
          >
            ĐÓNG BẢNG SO SÁNH
          </button>
        </div>

      </div>
    </div>
  );
}
