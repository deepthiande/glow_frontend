import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { categories } from '../../data/products';

const CategorySection = () => {
  return (
    <section className="py-16 sm:py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-1.5 text-xs font-semibold tracking-widest uppercase text-rose-brown mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curated Categories</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-espresso-950 tracking-tight">
            Shop by Category
          </h2>
          <p className="mt-3 text-sm sm:text-base text-espresso-600 font-light">
            Indulge in award-winning formulas tailored for high-impact radiance and everyday elegance.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.slug}`}
              className="group flex flex-col items-center text-center focus:outline-none"
            >
              {/* Image Circle/Arch Card */}
              <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-cream-100 border border-blush-200/80 shadow-soft group-hover:shadow-card transition-all duration-300">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/70 via-espresso-950/20 to-transparent group-hover:from-espresso-950/80 transition-colors" />
                
                {/* Overlay Text */}
                <div className="absolute bottom-3 inset-x-3 text-ivory">
                  <h3 className="font-serif text-sm sm:text-base font-semibold group-hover:text-blush-200 transition-colors">
                    {cat.name}
                  </h3>
                  <span className="text-[10px] tracking-wider uppercase text-blush-300 font-medium block mt-0.5">
                    {cat.itemCount}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Categories Link */}
        <div className="text-center mt-10">
          <Link
            to="/shop"
            className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-widest text-espresso-800 hover:text-rose-brown transition-colors group"
          >
            <span>Explore All 100+ Beauty Products</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default CategorySection;
