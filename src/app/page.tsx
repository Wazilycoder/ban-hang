import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Configurator } from '@/components/Configurator';
import { TestDriveForm } from '@/components/TestDriveForm';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#06090e] text-slate-100 selection:bg-red-600 selection:text-white">
      <Header />
      <Hero />
      <Configurator />
      <TestDriveForm />
      <Footer />
    </main>
  );
}
