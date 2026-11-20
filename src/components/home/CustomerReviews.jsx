import React from 'react';
import { Star, Quote, Sparkles } from 'lucide-react';
import { reviews } from '../../data/products';

const CustomerReviews = () => {
  return (
    <section className="py-16 sm:py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-1.5 text-xs font-semibold tracking-widest uppercase text-rose-brown mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Community Love</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-espresso-950">
            Real Words From Real Glowers
          </h2>
          <p className="mt-3 text-sm text-espresso-600 font-light">
            Read authentic reviews from makeup lovers who made GLOW & GLAM their daily sanctuary.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-cream-50/70 p-6 sm:p-7 rounded-2xl border border-blush-200/80 shadow-soft flex flex-col justify-between hover:border-blush-300 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  {/* Star Rating */}
                  <div className="flex text-amber-500">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-blush-300" />
                </div>

                <p className="text-xs sm:text-sm text-espresso-700 leading-relaxed italic mb-6">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-blush-200/60">
                <h4 className="font-serif text-sm font-bold text-espresso-950">
                  {rev.name}
                </h4>
                <div className="flex items-center justify-between mt-0.5">
                  <span className="text-[11px] text-espresso-500 font-medium">
                    {rev.role}
                  </span>
                  <span className="text-[10px] text-rose-brown font-semibold bg-blush-100 px-2 py-0.5 rounded-full">
                    {rev.productName}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CustomerReviews;
