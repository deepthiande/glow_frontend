import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Star, Heart, ShoppingBag, ArrowRight, ShieldCheck, Truck } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';

const QuickViewModal = ({ product, isOpen, onClose }) => {
  if (!isOpen || !product) return null;

  const [activeImage, setActiveImage] = useState(product.image);
  const [selectedShade, setSelectedShade] = useState(
    product.shades && product.shades.length > 0 ? product.shades[0] : null
  );
  const [quantity, setQuantity] = useState(1);

  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();

  useEffect(() => {
    setActiveImage(product.image);
    setSelectedShade(product.shades && product.shades.length > 0 ? product.shades[0] : null);
    setQuantity(1);
  }, [product]);

  const isWishlisted = isInWishlist(product.id);

  const handleAddToCart = () => {
    addToCart(product, selectedShade, quantity);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-espresso-950/60 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div 
        className="relative w-full max-w-4xl bg-ivory rounded-3xl shadow-elevated border border-blush-200 overflow-hidden my-8 animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-ivory/90 hover:bg-blush-100 text-espresso-700 transition-colors shadow-sm"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Images Gallery */}
          <div className="p-6 sm:p-8 bg-cream-50 flex flex-col justify-between">
            <div className="aspect-square rounded-2xl overflow-hidden bg-ivory border border-blush-200 shadow-soft mb-4">
              <img
                src={activeImage}
                alt={product.name}
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Thumbnail Strip */}
            {product.images && product.images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-1">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(img)}
                    className={`w-16 h-16 rounded-xl overflow-hidden border-2 transition-all shrink-0 ${
                      activeImage === img ? 'border-rose-brown scale-105' : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold tracking-widest uppercase text-espresso-500">
                  {product.brand}
                </span>
                <button
                  onClick={() => toggleWishlist(product)}
                  className={`p-2 rounded-full transition-colors ${
                    isWishlisted ? 'text-rose-600 bg-rose-50' : 'text-espresso-400 hover:text-rose-600 hover:bg-blush-100'
                  }`}
                  aria-label="Wishlist"
                >
                  <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} />
                </button>
              </div>

              <h2 className="font-serif text-2xl font-bold text-espresso-950 mb-2 leading-snug">
                {product.name}
              </h2>

              {/* Rating */}
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : ''}`}
                    />
                  ))}
                </div>
                <span className="text-xs font-semibold text-espresso-800">{product.rating}</span>
                <span className="text-xs text-espresso-400">({product.reviewsCount} customer reviews)</span>
              </div>

              {/* Pricing */}
              <div className="flex items-baseline space-x-3 mb-4">
                <span className="text-2xl font-bold text-espresso-950">₹{product.price}</span>
                {product.originalPrice && (
                  <span className="text-sm text-espresso-400 line-through">₹{product.originalPrice}</span>
                )}
                {product.discount > 0 && (
                  <span className="text-xs bg-rose-100 text-rose-800 font-bold px-2.5 py-0.5 rounded-full">
                    SAVE {product.discount}%
                  </span>
                )}
              </div>

              <p className="text-xs text-espresso-600 leading-relaxed mb-6">
                {product.shortDescription || product.description}
              </p>

              {/* Shade Selection */}
              {product.shades && product.shades.length > 0 && (
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-espresso-700">
                      Shade: <span className="text-rose-brown">{selectedShade?.name}</span>
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {product.shades.map((shade) => (
                      <button
                        key={shade.name}
                        onClick={() => setSelectedShade(shade)}
                        className={`group relative p-1 rounded-full border-2 transition-all ${
                          selectedShade?.name === shade.name ? 'border-rose-brown scale-110' : 'border-transparent hover:border-blush-300'
                        }`}
                      >
                        <span
                          className="block w-6 h-6 rounded-full border border-black/10 shadow-sm"
                          style={{ backgroundColor: shade.hex }}
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity */}
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-espresso-700">
                  Quantity
                </span>
                <div className="flex items-center border border-blush-300 rounded-xl bg-ivory">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-1.5 text-espresso-600 hover:text-espresso-950 font-bold"
                  >
                    -
                  </button>
                  <span className="px-3 text-xs font-bold text-espresso-900">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-1.5 text-espresso-600 hover:text-espresso-950 font-bold"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="space-y-3 pt-4 border-t border-blush-200">
              <button
                onClick={handleAddToCart}
                className="w-full btn-primary py-3.5 flex items-center justify-center space-x-2"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>ADD TO BAG • ₹{product.price * quantity}</span>
              </button>

              <Link
                to={`/product/${product.id}`}
                onClick={onClose}
                className="w-full py-2.5 text-xs text-center font-semibold text-rose-brown hover:text-espresso-900 uppercase tracking-wider flex items-center justify-center transition-colors"
              >
                <span>View Full Product Details & Ingredients</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickViewModal;
