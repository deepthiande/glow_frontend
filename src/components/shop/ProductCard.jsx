import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Heart, Star, ShoppingBag, Eye } from 'lucide-react';
import { useWishlist } from '../../context/WishlistContext';
import { useCart } from '../../context/CartContext';

const ProductCard = ({ product, onQuickView }) => {
  const [selectedShade, setSelectedShade] = useState(
    product.shades && product.shades.length > 0 ? product.shades[0] : null
  );
  const [isHovered, setIsHovered] = useState(false);
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const isWishlisted = isInWishlist(product.id);

  // Switch image on hover if multiple images available
  const displayImage = isHovered && product.images && product.images.length > 1
    ? product.images[1]
    : product.image;

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, selectedShade, 1);
  };

  const handleQuickView = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (onQuickView) {
      onQuickView(product);
    } else {
      navigate(`/product/${product.id}`);
    }
  };

  return (
    <div 
      className="group relative flex flex-col bg-ivory rounded-2xl border border-blush-200/80 overflow-hidden shadow-soft hover:shadow-card transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image Container */}
      <div className="relative aspect-square w-full overflow-hidden bg-cream-100">
        <Link to={`/product/${product.id}`} className="block w-full h-full">
          <img
            src={displayImage}
            alt={product.name}
            className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
          />
        </Link>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10 pointer-events-none">
          {product.isBestSeller && (
            <span className="bg-espresso-900 text-ivory text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full shadow-sm">
              Best Seller
            </span>
          )}
          {product.isNewArrival && (
            <span className="bg-blush-500 text-ivory text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full shadow-sm">
              New
            </span>
          )}
          {product.discount > 0 && (
            <span className="bg-rose-brown text-ivory text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full shadow-sm">
              {product.discount}% OFF
            </span>
          )}
        </div>

        {/* Action Buttons: Wishlist & Quick View */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 z-10">
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              toggleWishlist(product);
            }}
            className={`p-2.5 rounded-full transition-all duration-200 shadow-sm ${
              isWishlisted
                ? 'bg-rose-600 text-ivory scale-105'
                : 'bg-ivory/90 backdrop-blur-sm text-espresso-700 hover:text-rose-600 hover:bg-ivory'
            }`}
            aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
          >
            <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
          </button>

          <button
            onClick={handleQuickView}
            className="p-2.5 rounded-full bg-ivory/90 backdrop-blur-sm text-espresso-700 hover:text-espresso-950 hover:bg-ivory transition-all duration-200 opacity-0 group-hover:opacity-100 shadow-sm"
            aria-label="Quick View"
            title="Quick View"
          >
            <Eye className="w-4 h-4" />
          </button>
        </div>

        {/* Quick Add To Bag overlay on hover for desktop */}
        <div className="absolute bottom-3 inset-x-3 z-10 hidden sm:block opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <button
            onClick={handleAddToCart}
            className="w-full py-2.5 bg-espresso-900/95 hover:bg-rose-brown text-ivory text-[11px] font-semibold tracking-widest uppercase rounded-xl backdrop-blur-sm flex items-center justify-center space-x-2 transition-all shadow-elevated"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Add to Bag</span>
          </button>
        </div>
      </div>

      {/* Product Content Details */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-1">
            <span className="text-[10px] font-semibold tracking-widest uppercase text-espresso-500">
              {product.brand}
            </span>
            <div className="flex items-center text-amber-500 text-xs font-semibold">
              <Star className="w-3 h-3 fill-current mr-1" />
              <span>{product.rating}</span>
              <span className="text-espresso-400 text-[10px] ml-1">({product.reviewsCount})</span>
            </div>
          </div>

          <Link to={`/product/${product.id}`} className="block">
            <h3 className="font-serif text-sm font-medium text-espresso-900 group-hover:text-rose-brown transition-colors line-clamp-1 mb-1.5">
              {product.name}
            </h3>
          </Link>

          {/* Shades preview dots */}
          {product.shades && product.shades.length > 0 && (
            <div className="flex items-center space-x-1.5 my-2">
              {product.shades.slice(0, 4).map((shade) => (
                <button
                  key={shade.name}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setSelectedShade(shade);
                  }}
                  className={`w-3.5 h-3.5 rounded-full border transition-all ${
                    selectedShade?.name === shade.name
                      ? 'ring-2 ring-rose-brown scale-110'
                      : 'border-black/15 hover:scale-105'
                  }`}
                  style={{ backgroundColor: shade.hex }}
                  title={shade.name}
                />
              ))}
              {product.shades.length > 4 && (
                <span className="text-[10px] text-espresso-400 font-medium">
                  +{product.shades.length - 4}
                </span>
              )}
            </div>
          )}
        </div>

        {/* Price & Mobile Add to Bag */}
        <div className="pt-2 border-t border-blush-200/50 mt-2 flex items-center justify-between">
          <div className="flex items-baseline space-x-2">
            <span className="text-sm font-bold text-espresso-950">
              ₹{product.price}
            </span>
            {product.originalPrice && (
              <span className="text-xs text-espresso-400 line-through">
                ₹{product.originalPrice}
              </span>
            )}
          </div>

          {/* Visible on Mobile */}
          <button
            onClick={handleAddToCart}
            className="sm:hidden p-2 rounded-lg bg-espresso-900 text-ivory hover:bg-rose-brown transition-colors"
            aria-label="Add to cart"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
