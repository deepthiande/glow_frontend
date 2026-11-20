import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight, Tag, Sparkles } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const CartDrawer = () => {
  const {
    cartItems,
    isCartOpen,
    closeCart,
    removeFromCart,
    updateQuantity,
    cartSubtotal,
    discountAmount,
    shippingAmount,
    cartTotal,
    activeCoupon,
    applyCoupon,
    removeCoupon,
    couponError
  } = useCart();

  const [couponInput, setCouponInput] = useState('');
  const navigate = useNavigate();

  if (!isCartOpen) return null;

  const handleCheckout = () => {
    closeCart();
    navigate('/checkout');
  };

  const handleViewCart = () => {
    closeCart();
    navigate('/cart');
  };

  const freeShippingThreshold = 999;
  const amountNeeded = Math.max(0, freeShippingThreshold - cartSubtotal);
  const freeShippingProgress = Math.min(100, (cartSubtotal / freeShippingThreshold) * 100);

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    if (couponInput) {
      applyCoupon(couponInput);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-espresso-950/50 backdrop-blur-sm transition-opacity duration-300"
        onClick={closeCart}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-ivory shadow-2xl flex flex-col border-l border-blush-200 animate-slide-up">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-blush-200">
            <div className="flex items-center space-x-2">
              <ShoppingBag className="w-5 h-5 text-rose-brown" />
              <h2 className="font-serif text-lg text-espresso-900 tracking-wide">
                Your Shopping Bag ({cartItems.reduce((acc, i) => acc + i.quantity, 0)})
              </h2>
            </div>
            <button
              onClick={closeCart}
              className="p-1.5 text-espresso-400 hover:text-espresso-800 rounded-full hover:bg-blush-100 transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Meter */}
          <div className="bg-blush-50 px-6 py-3 border-b border-blush-200/60">
            <div className="flex justify-between items-center text-xs mb-1.5 font-medium">
              {amountNeeded > 0 ? (
                <span className="text-espresso-700">
                  Add <strong className="text-rose-brown">₹{amountNeeded}</strong> more for <strong>FREE Express Shipping</strong>!
                </span>
              ) : (
                <span className="text-emerald-700 font-semibold flex items-center">
                  <Sparkles className="w-3.5 h-3.5 mr-1 text-emerald-600" />
                  Unlocked! FREE Express Shipping
                </span>
              )}
              <span className="text-espresso-500 text-[11px] font-semibold">{Math.round(freeShippingProgress)}%</span>
            </div>
            <div className="w-full bg-blush-200/80 rounded-full h-1.5 overflow-hidden">
              <div
                className="bg-rose-brown h-1.5 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${freeShippingProgress}%` }}
              />
            </div>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
            {cartItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 rounded-full bg-blush-100 flex items-center justify-center text-espresso-400 mb-4">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-xl text-espresso-900 mb-2">Your Bag is Empty</h3>
                <p className="text-xs text-espresso-500 max-w-xs mb-6 leading-relaxed">
                  Looks like you haven’t added any beauty treasures yet. Explore our curated makeup collection to find your glow.
                </p>
                <button
                  onClick={() => {
                    closeCart();
                    navigate('/shop');
                  }}
                  className="btn-primary"
                >
                  START SHOPPING
                </button>
              </div>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.cartItemId}
                  className="flex space-x-4 p-3 bg-cream-50/80 rounded-xl border border-blush-200/70 hover:border-blush-300 transition-colors"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-20 h-20 object-cover rounded-lg border border-blush-200 shrink-0"
                  />
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="text-[10px] font-semibold tracking-wider uppercase text-espresso-500">
                            {item.product.brand}
                          </p>
                          <h4 className="text-xs font-semibold text-espresso-900 line-clamp-1">
                            {item.product.name}
                          </h4>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.cartItemId)}
                          className="text-espresso-400 hover:text-red-500 transition-colors p-1"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {item.shade && (
                        <div className="flex items-center space-x-1.5 mt-1">
                          <span
                            className="w-2.5 h-2.5 rounded-full border border-black/10 inline-block"
                            style={{ backgroundColor: item.shade.hex }}
                          />
                          <span className="text-[11px] text-espresso-600 font-medium">
                            {item.shade.name}
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="flex items-center justify-between mt-2 pt-2 border-t border-blush-200/40">
                      {/* Quantity Controls */}
                      <div className="flex items-center border border-blush-300 rounded-md bg-ivory">
                        <button
                          onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                          className="p-1 hover:bg-blush-100 text-espresso-600 transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-xs font-semibold text-espresso-900 min-w-6 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                          className="p-1 hover:bg-blush-100 text-espresso-600 transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      {/* Price */}
                      <div className="text-right">
                        <span className="text-xs font-bold text-espresso-900">
                          ₹{item.price * item.quantity}
                        </span>
                        {item.quantity > 1 && (
                          <div className="text-[10px] text-espresso-400">
                            (₹{item.price} each)
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout Area */}
          {cartItems.length > 0 && (
            <div className="p-6 bg-ivory border-t border-blush-200 shadow-card space-y-4">
              {/* Coupon Bar */}
              <form onSubmit={handleApplyCoupon} className="flex gap-2">
                <div className="relative flex-1">
                  <Tag className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-espresso-400" />
                  <input
                    type="text"
                    value={couponInput}
                    onChange={(e) => setCouponInput(e.target.value)}
                    placeholder="Coupon code (e.g. GLOW10)"
                    className="w-full pl-8 pr-3 py-2 bg-cream-50 border border-blush-300 rounded-lg text-xs text-espresso-900 uppercase focus:outline-none focus:border-rose-brown"
                  />
                </div>
                <button
                  type="submit"
                  className="px-4 py-2 bg-espresso-800 text-ivory text-xs font-semibold uppercase tracking-wider rounded-lg hover:bg-rose-brown transition-colors"
                >
                  Apply
                </button>
              </form>

              {activeCoupon && (
                <div className="flex items-center justify-between text-xs bg-emerald-50 text-emerald-800 px-3 py-1.5 rounded-lg border border-emerald-200">
                  <span className="flex items-center">
                    <Sparkles className="w-3.5 h-3.5 mr-1.5 text-emerald-600" />
                    <strong>{activeCoupon.code}</strong> applied ({activeCoupon.label})
                  </span>
                  <button
                    onClick={removeCoupon}
                    className="text-emerald-700 hover:text-emerald-900 font-bold ml-2"
                  >
                    ×
                  </button>
                </div>
              )}

              {couponError && (
                <p className="text-[11px] text-red-600">{couponError}</p>
              )}

              {/* Price Calculations */}
              <div className="space-y-1.5 text-xs text-espresso-600 border-t border-blush-200 pt-3">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-espresso-900">₹{cartSubtotal}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-rose-600">
                    <span>Discount</span>
                    <span>-₹{discountAmount}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Estimated Shipping</span>
                  <span>{shippingAmount === 0 ? <strong className="text-emerald-700">FREE</strong> : `₹${shippingAmount}`}</span>
                </div>
                <div className="flex justify-between text-sm font-bold text-espresso-950 pt-2 border-t border-blush-200">
                  <span>Total Amount</span>
                  <span className="text-base text-rose-brown">₹{cartTotal}</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="space-y-2 pt-2">
                <button
                  onClick={handleCheckout}
                  className="w-full btn-primary py-3.5 flex items-center justify-center space-x-2 group"
                >
                  <span>PROCEED TO CHECKOUT</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={handleViewCart}
                  className="w-full py-2.5 text-xs font-semibold text-espresso-700 hover:text-rose-brown tracking-wider uppercase transition-colors"
                >
                  View Full Cart Details
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
