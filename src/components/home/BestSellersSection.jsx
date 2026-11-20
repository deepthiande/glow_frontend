import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { products } from '../../data/products';
import ProductCard from '../shop/ProductCard';

const BestSellersSection = ({ onQuickView }) => {
  const bestSellers = products.filter((p) => p.isBestSeller).slice(0, 4);

  return (
    <section className="py-16 sm:py-24 bg-cream-50/60 border-t border-b border-blush-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14">
          <div>
            <div className="inline-flex items-center space-x-1.5 text-xs font-semibold tracking-widest uppercase text-rose-brown mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Beloved Cult Icons</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-espresso-950 tracking-tight">
              Best Sellers
            </h2>
            <p className="mt-2 text-sm sm:text-base text-espresso-600 font-light">
              Our most-coveted, 5-star formulas that beauty connoisseurs can't stop raving about.
            </p>
          </div>

          <div className="mt-4 md:mt-0">
            <Link
              to="/shop?filter=bestsellers"
              className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-widest text-espresso-800 hover:text-rose-brown group transition-colors"
            >
              <span>View All Best Sellers</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestSellers.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={onQuickView}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default BestSellersSection;
