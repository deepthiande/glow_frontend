import React from 'react';
import { Heart, Sparkles, ShieldCheck, Users } from 'lucide-react';

const WhyChooseUs = () => {
  const pillars = [
    {
      icon: Heart,
      title: 'Cruelty-Free Beauty',
      description: 'We believe genuine beauty should never come at the expense of our furry friends. Certified 100% Leaping Bunny cruelty-free and vegan-friendly.'
    },
    {
      icon: Sparkles,
      title: 'Premium Quality',
      description: 'Micro-milled French pigments, nourishing botanical oils, and dermatologist-tested botanicals engineered for all-day luminous comfort.'
    },
    {
      icon: ShieldCheck,
      title: 'Authentic Products',
      description: 'Zero compromises. Every single compact, bottle, and brush is sourced directly with verifiable batch codes and strict quality assurance.'
    },
    {
      icon: Users,
      title: 'Beauty For Everyone',
      description: 'Formulated with diverse undertones and adaptable textures so every skin tone, age, and identity discovers their signature radiance.'
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-cream-50/70 border-t border-blush-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold tracking-widest uppercase text-rose-brown">
            The GLOW & GLAM Promise
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-espresso-950 mt-2">
            Why Discerning Beauties Choose Us
          </h2>
          <p className="mt-3 text-sm text-espresso-600 font-light">
            Elevating your daily beauty ritual with uncompromising artistry and conscious values.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                className="bg-ivory p-8 rounded-2xl border border-blush-200/80 shadow-soft hover:shadow-card hover:-translate-y-1 transition-all duration-300 text-center flex flex-col items-center"
              >
                <div className="w-14 h-14 rounded-full bg-blush-100 flex items-center justify-center text-rose-brown mb-5">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-lg font-bold text-espresso-950 mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs text-espresso-600 leading-relaxed font-light">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
