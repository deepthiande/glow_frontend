import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Heart, ShieldCheck, Award, ArrowRight } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="bg-ivory min-h-screen">
      
      {/* Hero Section */}
      <section className="relative py-20 sm:py-28 bg-gradient-to-b from-cream-100 via-blush-50 to-ivory border-b border-blush-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blush-100 border border-blush-300 text-rose-brown text-xs font-semibold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Story Behind The Glow</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-espresso-950 tracking-tight leading-tight">
            Beauty That Belongs to <br />
            <span className="editorial-italic font-normal text-rose-brown">Everyone.</span>
          </h1>

          <p className="text-base sm:text-xl text-espresso-700 font-light leading-relaxed max-w-2xl mx-auto">
            "GLOW & GLAM was created to celebrate individuality, confidence, and the joy of makeup. We believe beauty isn't about hiding who you are. It's about expressing who you are. From everyday essentials to bold statement products, we bring beauty that belongs to everyone."
          </p>
        </div>
      </section>

      {/* Editorial Split Story Section */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-elevated border-4 border-ivory bg-cream-100">
            <img
              src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=80"
              alt="GLOW & GLAM Philosophy"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-6">
            <span className="text-xs font-semibold tracking-widest uppercase text-rose-brown">
              Our Modern Manifesto
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-espresso-950 leading-snug">
              Redefining Luxury Through Clean Formulation & Soul
            </h2>
            <p className="text-sm text-espresso-600 leading-relaxed font-light">
              Founded in 2024, GLOW & GLAM emerged from a clear desire: cosmetics shouldn't feel heavy, cakey, or intimidating. Modern beauty is fluid, personal, and radiant. We partner with artisan cosmetic laboratories across Grasse, Milan, and Seoul to infuse clinical-grade botanicals into high-pigment makeup.
            </p>
            <p className="text-sm text-espresso-600 leading-relaxed font-light">
              From our bestselling Velvet Petal matte lipsticks to our serum-infused Dew Bloom liquid cheek flushes, each product is formulated without parabens, microplastics, or animal cruelty.
            </p>

            <div className="pt-4 grid grid-cols-2 gap-6 border-t border-blush-200">
              <div>
                <h4 className="font-serif text-2xl font-bold text-espresso-950">100%</h4>
                <p className="text-xs text-espresso-500 uppercase tracking-wider mt-0.5">Cruelty-Free Certified</p>
              </div>
              <div>
                <h4 className="font-serif text-2xl font-bold text-espresso-950">20+</h4>
                <p className="text-xs text-espresso-500 uppercase tracking-wider mt-0.5">Diverse Undertones</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Brand Values 4 Cards */}
      <section className="py-16 sm:py-24 bg-cream-50/70 border-t border-blush-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold tracking-widest uppercase text-rose-brown">
              Core Principles
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-espresso-950 mt-1">
              What We Stand For
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-ivory p-8 rounded-3xl border border-blush-200 shadow-soft text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-blush-100 flex items-center justify-center text-rose-brown mx-auto">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-espresso-950">Uncompromising Inclusivity</h3>
              <p className="text-xs text-espresso-600 leading-relaxed font-light">
                Every skin tone, undertone, age, and identity deserves makeup that looks like skin and feels like second nature.
              </p>
            </div>

            <div className="bg-ivory p-8 rounded-3xl border border-blush-200 shadow-soft text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-blush-100 flex items-center justify-center text-rose-brown mx-auto">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-espresso-950">Conscious Formulations</h3>
              <p className="text-xs text-espresso-600 leading-relaxed font-light">
                We obsess over purity. Enriched with botanical camellia oils, plant squalane, hyaluronic acid, and white water lily extracts.
              </p>
            </div>

            <div className="bg-ivory p-8 rounded-3xl border border-blush-200 shadow-soft text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-blush-100 flex items-center justify-center text-rose-brown mx-auto">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-espresso-950">Artisan Craftsmanship</h3>
              <p className="text-xs text-espresso-600 leading-relaxed font-light">
                Baked Italian powders, Japanese precision calligraphy eyeliners, and FSC-certified birchwood brushes.
              </p>
            </div>
          </div>

          <div className="text-center mt-14">
            <Link to="/shop" className="btn-primary py-4 px-10 rounded-xl inline-flex items-center space-x-2">
              <span>EXPLORE THE ATELIER</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;
