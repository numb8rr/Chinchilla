import Header from '@/components/chinchilla/Header';
import Hero from '@/components/chinchilla/Hero';
import TrustMetrics from '@/components/chinchilla/TrustMetrics';
import Services from '@/components/chinchilla/Services';
import ProcessTimeline from '@/components/chinchilla/ProcessTimeline';
import Gallery from '@/components/chinchilla/Gallery';
import BeforeAfter from '@/components/chinchilla/BeforeAfter';
import Reviews from '@/components/chinchilla/Reviews';
import Contacts from '@/components/chinchilla/Contacts';
import FAQ from '@/components/chinchilla/FAQ';
import FinalCTA from '@/components/chinchilla/FinalCTA';
import Footer from '@/components/chinchilla/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <TrustMetrics />
        <Services />
        <ProcessTimeline />
        <Gallery />
        <BeforeAfter />
        <Reviews />
        <Contacts />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
