import React, { useState, useEffect } from 'react';
import ParticleBackground from './components/ParticleBackground';
import FeatureCard from './components/FeatureCard';
import { SparklesIcon, BrainCircuitIcon, ShieldCheckIcon, StoreIcon, MailIcon, ArrowRightIcon } from './components/Icons';

const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate initial load for smooth entry
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  return (
    <div className="min-h-screen relative text-white selection:bg-niri-accent selection:text-niri-dark overflow-hidden">
      <ParticleBackground />
      
      {/* Main Content Container */}
      <div className={`relative z-10 transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        
        {/* Navbar / Logo Area */}
        <header className="container mx-auto px-6 py-8 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-niri-accent to-niri-primary flex items-center justify-center shadow-lg shadow-niri-primary/20">
              <span className="font-serif font-bold text-niri-dark text-xl">N</span>
            </div>
            <span className="text-xl font-bold tracking-wider uppercase text-white/90">Niri</span>
          </div>
          <div className="hidden sm:block text-xs font-bold tracking-widest text-niri-accent uppercase border border-niri-accent/30 px-4 py-1.5 rounded-full bg-niri-accent/5 backdrop-blur-sm">
            Coming Soon
          </div>
        </header>

        {/* Hero Section */}
        <section className="container mx-auto px-6 pt-16 pb-24 md:pt-28 md:pb-32 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 mb-10 animate-float hover:bg-white/10 transition-colors cursor-default backdrop-blur-md">
            <SparklesIcon className="w-4 h-4 text-niri-accent" />
            <span className="text-sm font-medium text-slate-200 tracking-wide">We are building something magical</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white via-slate-100 to-slate-400 leading-[1.1] max-w-5xl mx-auto drop-shadow-2xl">
            The Experience <br/>
            <span className="text-white relative inline-block">
              <span className="absolute -inset-2 bg-gradient-to-r from-niri-primary to-niri-accent opacity-20 blur-2xl rounded-full"></span>
              <span className="relative">Assistant</span>
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
            Creating the future of the <span className="text-slate-200 font-medium">trust-based rental economy</span>. 
            From intimate picnics to conferences of 10,000, Niri blends AI intelligence and a unified marketplace to bring structure to your events.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
             <a 
              href="mailto:info@niriapp.com"
              className="group relative px-10 py-4 bg-white text-niri-dark font-bold rounded-full hover:bg-slate-100 transition-all duration-300 flex items-center gap-3 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] hover:-translate-y-1"
            >
              Get Notified
              <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform text-niri-primary" />
            </a>
          </div>
        </section>

        {/* Features Grid */}
        <section className="container mx-auto px-6 pb-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              title="AI-Powered Curation"
              description="Our intelligent engine uses informed data to provide personalized event item recommendations tailored to your specific needs."
              icon={<BrainCircuitIcon className="w-7 h-7" />}
              delay={100}
            />
            <FeatureCard 
              title="Trust & Reliability"
              description="We insure products during handling and transit. Our infrastructure is built on verified lenders and secure payments."
              icon={<ShieldCheckIcon className="w-7 h-7" />}
              delay={200}
            />
            <FeatureCard 
              title="Unified Marketplace"
              description="One platform to browse thousands of items, manage inventory, and handle logistics. No more fragmented searches."
              icon={<StoreIcon className="w-7 h-7" />}
              delay={300}
            />
          </div>
        </section>

        {/* Contact / Footer */}
        <section className="border-t border-white/5 bg-gradient-to-b from-transparent to-black/40 backdrop-blur-sm">
          <div className="container mx-auto px-6 py-20 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-white">Join the Waitlist</h2>
            <p className="text-slate-400 mb-12 max-w-lg mx-auto leading-relaxed">
              The site and product are currently in the works. Reach out to us to learn more about partnership opportunities or early access.
            </p>
            
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-16">
              <a href="mailto:info@niriapp.com" className="flex items-center gap-4 text-slate-300 hover:text-white transition-all group p-5 bg-white/5 rounded-2xl border border-white/10 hover:border-niri-accent/50 hover:bg-white/10 w-full md:w-auto justify-center min-w-[280px]">
                <div className="p-2.5 bg-white/5 rounded-xl group-hover:bg-niri-accent transition-colors text-niri-accent group-hover:text-niri-dark">
                  <MailIcon className="w-5 h-5" />
                </div>
                <span className="text-lg font-medium">info@niriapp.com</span>
              </a>
              
              <a href="mailto:sales@niriapp.com" className="flex items-center gap-4 text-slate-300 hover:text-white transition-all group p-5 bg-white/5 rounded-2xl border border-white/10 hover:border-niri-accent/50 hover:bg-white/10 w-full md:w-auto justify-center min-w-[280px]">
                <div className="p-2.5 bg-white/5 rounded-xl group-hover:bg-niri-accent transition-colors text-niri-accent group-hover:text-niri-dark">
                  <MailIcon className="w-5 h-5" />
                </div>
                <span className="text-lg font-medium">sales@niriapp.com</span>
              </a>
            </div>

            <div className="text-slate-600 text-sm flex flex-col md:flex-row justify-center gap-4">
              <span>&copy; {new Date().getFullYear()} Niri App. All rights reserved.</span>
              <span className="hidden md:inline text-slate-700">•</span>
              <span>Lagos, Nigeria</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;