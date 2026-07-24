import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Configurator } from '@/components/Configurator';
import { TradeInCalculator } from '@/components/TradeInCalculator';
import { InstallmentCalculator } from '@/components/InstallmentCalculator';
import { TestDriveForm } from '@/components/TestDriveForm';
import { PoliciesAndCMS } from '@/components/PoliciesAndCMS';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050b18] text-slate-100 selection:bg-cyan-400 selection:text-slate-950 font-sans">
      <Header />
      <Hero />
      <Configurator />
      <TradeInCalculator />
      <InstallmentCalculator />
      <TestDriveForm />
      <PoliciesAndCMS />
      <Footer />
    </main>
  );
}
