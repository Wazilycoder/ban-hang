'use client';

import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Configurator } from '@/components/Configurator';
import { TradeInCalculator } from '@/components/TradeInCalculator';
import { InstallmentCalculator } from '@/components/InstallmentCalculator';
import { TestDriveForm } from '@/components/TestDriveForm';
import { PoliciesAndCMS } from '@/components/PoliciesAndCMS';
import { Footer } from '@/components/Footer';
import { CompareModal } from '@/components/CompareModal';
import { CartDrawer } from '@/components/CartDrawer';
import { ArrowRightLeft, ShoppingBag, Sparkles, GraduationCap } from 'lucide-react';

export default function Home() {
  const [compareOpen, setCompareOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#030712] text-slate-100 font-sans relative overflow-x-hidden selection:bg-cyan-500 selection:text-slate-950">
      
      {/* Floating Action Trigger Widgets (Fixed Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        <button
          onClick={() => setCompareOpen(true)}
          className="liquid-glass p-3.5 rounded-2xl border border-cyan-400/50 shadow-2xl flex items-center gap-2 text-xs font-black text-cyan-300 hover:scale-110 transition-transform cursor-pointer"
          title="So sánh cấu hình 2 siêu phẩm"
        >
          <ArrowRightLeft className="w-5 h-5 text-cyan-400" />
          <span className="hidden sm:inline uppercase">So Sánh Cấu Hình</span>
        </button>

        <button
          onClick={() => setCartOpen(true)}
          className="liquid-button p-3.5 rounded-2xl shadow-2xl flex items-center gap-2 text-xs font-black text-slate-950 hover:scale-110 transition-transform cursor-pointer"
          title="Giỏ hàng demo"
        >
          <ShoppingBag className="w-5 h-5" />
          <span className="hidden sm:inline uppercase">Giỏ Hàng (1)</span>
        </button>
      </div>

      {/* Main Page Layout */}
      <Header />
      <Hero />
      <Configurator />
      <TradeInCalculator />
      <InstallmentCalculator />
      <TestDriveForm />
      <PoliciesAndCMS />
      <Footer />

      {/* Interactive Modals */}
      <CompareModal isOpen={compareOpen} onClose={() => setCompareOpen(false)} />
      <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </main>
  );
}
