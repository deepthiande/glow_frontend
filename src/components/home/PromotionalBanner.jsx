import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

const PromotionalBanner = () => {
  return (
    <section className="py-16 sm:py-20 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-espresso-950 text-ivory border border-rose-gold/25 shadow-elevated">
          {/* Ambient Lighting Gradients */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blush-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-rose-brown/30 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 p-8 sm:p-12 lg:p-16 space-y-6 relative z-10">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-espresso-900 border border-rose-gold/30 text-blush-300 text-xs font-semibold tracking-widest uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Limited Edition Campaign</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-ivory leading-tight">
                THE GLOW EDIT
              </h2>

              <p className="text-base sm:text-xl text-cream-200 font-light leading-relaxed max-w-lg">
                Your everyday essentials for effortless glam. From French camellia-infused lipsticks to dewy water-lily cheek stains.
              </p>

              <div className="pt-2">
                <Link
                  to="/shop"
                  className="inline-flex items-center space-x-3 px-8 py-4 bg-ivory text-espresso-950 text-xs font-semibold tracking-widest uppercase rounded-xl hover:bg-blush-200 hover:shadow-glow transition-all duration-300 group"
                >
                  <span>SHOP THE EDIT</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="flex items-center space-x-6 text-xs text-cream-200/80 pt-4 border-t border-espresso-800">
                <span>✓ Complimentary Gift with ₹1,999+</span>
                <span>✓ Limited Quantities Hand-Crafted</span>
              </div>
            </div>

            {/* Right Editorial Visual */}
            <div className="lg:col-span-5 relative h-72 sm:h-96 lg:h-full min-h-[380px]">
              <img
                src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=1000&q=80"
                alt="The Glow Edit Cosmetics Palette"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-espresso-950 via-transparent to-transparent hidden lg:block" />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default PromotionalBanner;
