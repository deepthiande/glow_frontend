import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, ShoppingBag } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <div className="bg-ivory min-h-[75vh] flex items-center justify-center py-20 px-4">
      <div className="max-w-md w-full bg-cream-50 p-10 rounded-3xl border border-blush-200 text-center shadow-soft">
        <span className="font-serif text-6xl font-bold text-blush-400 block mb-2">404</span>
        <h1 className="font-serif text-2xl sm:text-3xl font-bold text-espresso-950 mb-3">
          Page Not Found
        </h1>
        <p className="text-xs sm:text-sm text-espresso-600 mb-8 leading-relaxed">
          The beauty secret you are looking for has moved or does not exist. Let's return you to our radiant collection.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link to="/" className="flex-1 btn-primary py-3 rounded-xl">
            GO HOME
          </Link>
          <Link to="/shop" className="flex-1 btn-secondary py-3 rounded-xl">
            EXPLORE SHOP
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
