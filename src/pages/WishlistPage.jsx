import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';

const WishlistPage = () => {
  const { wishlistItems, removeFromWishlist, clearWishlist } = useWishlist();
  const { addToCart } = useCart();

  const handleMoveToCart = (product) => {
    addToCart(product, product.shades ? product.shades[0] : null, 1);
    removeFromWishlist(product.id);
  };

  const handleMoveAllToCart = () => {
    wishlistItems.forEach((product) => {
      addToCart(product, product.shades ? product.shades[0] : null, 1);
    });
    clearWishlist();
  };

  if (wishlistItems.length === 0) {
    return (
      <div className="bg-ivory min-h-[70vh] flex items-center justify-center py-20 px-4">
        <div className="max-w-md w-full text-center bg-cream-50/70 p-10 rounded-3xl border border-blush-200 shadow-soft">
          <div className="w-20 h-20 rounded-full bg-blush-100 flex items-center justify-center text-espresso-400 mx-auto mb-6">
            <Heart className="w-10 h-10" />
          </div>
          <h1 className="font-serif text-3xl font-bold text-espresso-950 mb-3">
            Your Wishlist is Empty
          </h1>
          <p className="text-xs sm:text-sm text-espresso-600 mb-8 leading-relaxed">
            Save your favorite formulations, cult lipsticks, and dream palettes to your wishlist so you can revisit them anytime.
          </p>
          <Link to="/shop" className="btn-primary w-full py-4 rounded-xl">
            DISCOVER BEAUTY ICONS
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-ivory min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-6 border-b border-blush-200">
          <div>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-espresso-950">
              My Beauty Wishlist ({wishlistItems.length})
            </h1>
            <p className="text-xs sm:text-sm text-espresso-600 mt-1">
              Curated items you've saved to your vanity collection.
            </p>
          </div>

          <div className="mt-4 sm:mt-0 flex gap-3">
            <button
              onClick={handleMoveAllToCart}
              className="btn-primary text-xs py-3 px-5 rounded-xl flex items-center space-x-2"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Move All to Bag</span>
            </button>
            <button
              onClick={clearWishlist}
              className="px-4 py-3 border border-blush-300 rounded-xl text-xs font-semibold uppercase tracking-wider text-espresso-600 hover:text-red-600 hover:border-red-300 transition-colors"
            >
              Clear
            </button>
          </div>
        </div>

        {/* Wishlist Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {wishlistItems.map((product) => (
            <div
              key={product.id}
              className="group flex flex-col bg-ivory rounded-2xl border border-blush-200 overflow-hidden shadow-soft hover:shadow-card transition-all"
            >
              {/* Product Image */}
              <div className="relative aspect-square bg-cream-100 overflow-hidden">
                <Link to={`/product/${product.id}`} className="block w-full h-full">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </Link>
                <button
                  onClick={() => removeFromWishlist(product.id)}
                  className="absolute top-3 right-3 p-2 rounded-full bg-ivory/90 text-espresso-400 hover:text-red-600 hover:bg-ivory transition-colors shadow-sm"
                  aria-label="Remove from wishlist"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>

              {/* Info & Move to Cart */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-espresso-500">
                    {product.brand}
                  </span>
                  <Link to={`/product/${product.id}`}>
                    <h3 className="font-serif text-sm font-semibold text-espresso-950 hover:text-rose-brown transition-colors line-clamp-1 mb-1">
                      {product.name}
                    </h3>
                  </Link>
                  <div className="flex items-baseline space-x-2 my-2">
                    <span className="text-sm font-bold text-espresso-950">₹{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-xs text-espresso-400 line-through">₹{product.originalPrice}</span>
                    )}
                  </div>
                </div>

                <div className="pt-3 border-t border-blush-200 mt-2">
                  <button
                    onClick={() => handleMoveToCart(product)}
                    className="w-full btn-primary py-2.5 rounded-xl text-[11px] flex items-center justify-center space-x-2"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Move to Bag</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default WishlistPage;
