import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Award, ShieldCheck, Heart } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-cream-100 via-blush-50 to-ivory py-12 lg:py-20 border-b border-blush-200/60">
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blush-300/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[30rem] h-[30rem] bg-rose-gold/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & CTAs */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blush-200/80 border border-blush-300 text-espresso-800 text-xs font-semibold tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5 text-rose-brown" />
              <span>Autumn Glow Edit & New Arrivals</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold text-espresso-950 leading-[1.08] tracking-tight">
              YOUR BEAUTY. <br />
              <span className="editorial-italic font-normal text-rose-brown">
                YOUR RULES.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-espresso-600 font-light max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Discover products that make you feel confident, beautiful, and unapologetically you. Pure pigments, clean botanical oils, and effortless luxury.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                to="/shop"
                className="w-full sm:w-auto btn-primary px-9 py-4 group flex items-center justify-center space-x-2 shadow-elevated"
              >
                <span>SHOP NOW</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/shop?filter=featured"
                className="w-full sm:w-auto btn-secondary px-8 py-4 flex items-center justify-center"
              >
                <span>EXPLORE COLLECTION</span>
              </Link>
            </div>

            {/* Micro Highlights */}
            <div className="pt-8 border-t border-blush-200/80 grid grid-cols-3 gap-4 text-center lg:text-left">
              <div>
                <span className="block font-serif text-2xl font-bold text-espresso-900">100%</span>
                <span className="text-[11px] text-espresso-500 uppercase tracking-wider">Vegan & Clean</span>
              </div>
              <div>
                <span className="block font-serif text-2xl font-bold text-espresso-900">16HR</span>
                <span className="text-[11px] text-espresso-500 uppercase tracking-wider">Weightless Wear</span>
              </div>
              <div>
                <span className="block font-serif text-2xl font-bold text-espresso-900">50K+</span>
                <span className="text-[11px] text-espresso-500 uppercase tracking-wider">Happy Glowers</span>
              </div>
            </div>
          </div>

          {/* Right Column: Split Luxury Editorial Visual */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Primary Large Editorial Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-elevated border-4 border-ivory aspect-[4/5] bg-blush-100">
                <img
                  src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1200&q=85"
                  alt="GLOW & GLAM Luxury Makeup Campaign"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/60 via-transparent to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6 text-ivory">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-blush-300">
                    Featured Collection
                  </span>
                  <p className="font-serif text-xl sm:text-2xl font-semibold mt-1">
                    Velvet Petal & Dew Bloom
                  </p>
                </div>
              </div>

              {/* Floating Product Accent Card */}
              <div className="absolute -bottom-6 -left-6 sm:-left-8 bg-ivory/95 backdrop-blur-md p-4 rounded-2xl shadow-elevated border border-blush-200 max-w-[220px] hidden sm:block animate-slide-up">
                <div className="flex items-center space-x-3">
                  <img
                    src="https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=200&q=80"
                    alt="Lipstick"
                    className="w-12 h-12 rounded-xl object-cover border border-blush-200"
                  />
                  <div>
                    <span className="text-[9px] uppercase font-bold tracking-wider text-rose-brown">Iconic Matte</span>
                    <h4 className="text-xs font-semibold text-espresso-900 leading-tight">Velvet Petal Lip</h4>
                    <p className="text-xs font-bold text-espresso-900 mt-0.5">₹1,399</p>
                  </div>
                </div>
              </div>

              {/* Floating Beauty Award Seal */}
              <div className="absolute -top-4 -right-4 sm:-right-6 bg-ivory/95 backdrop-blur-md px-4 py-3 rounded-2xl shadow-card border border-blush-200 flex items-center space-x-2.5">
                <div className="w-8 h-8 rounded-full bg-rose-50 flex items-center justify-center text-rose-brown">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-bold tracking-wider uppercase text-espresso-500">Vogue Beauty</div>
                  <div className="text-xs font-serif font-bold text-espresso-950">Best Lip Formula 2026</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
