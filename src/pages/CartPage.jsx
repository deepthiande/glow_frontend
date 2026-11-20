import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingBag, 
  ArrowRight, 
  Tag, 
  Sparkles, 
  ShieldCheck, 
  Truck,
  RotateCcw
} from 'lucide-react';
import { useCart } from '../context/CartContext';

const CartPage = () => {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    clearCart,
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

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    if (couponInput) {
      applyCoupon(couponInput);
    }
  };

  const freeShippingThreshold = 999;
  const amountNeeded = Math.max(0, freeShippingThreshold - cartSubtotal);

  if (cartItems.length === 0) {
    return (
      <div className="bg-ivory min-h-[70vh] flex items-center justify-center py-20 px-4">
        <div className="max-w-md w-full text-center bg-cream-50/70 p-10 rounded-3xl border border-blush-200 shadow-soft">
          <div className="w-20 h-20 rounded-full bg-blush-100 flex items-center justify-center text-espresso-400 mx-auto mb-6">
            <ShoppingBag className="w-10 h-10" />
          </div>
          <h1 className="font-serif text-3xl font-bold text-espresso-950 mb-3">
            Your Shopping Bag is Empty
          </h1>
          <p className="text-xs sm:text-sm text-espresso-600 mb-8 leading-relaxed">
            You haven’t added any beauty luxuries to your bag yet. Explore our bestsellers and discover your new favorites.
          </p>
          <Link to="/shop" className="btn-primary w-full py-4 rounded-xl">
            EXPLORE THE COLLECTION
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-ivory min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Title */}
        <div className="mb-8">
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-espresso-950">
            Shopping Bag ({cartItems.reduce((acc, item) => acc + item.quantity, 0)})
          </h1>
          <p className="text-xs sm:text-sm text-espresso-600 mt-1">
            Review your selected beauty treasures before checkout.
          </p>
        </div>

        {/* Free Shipping Notification Strip */}
        <div className="mb-8 p-4 rounded-2xl bg-cream-50 border border-blush-200 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
          <div className="flex items-center space-x-2 text-espresso-800">
            <Truck className="w-4 h-4 text-rose-brown" />
            {amountNeeded > 0 ? (
              <span>
                Add <strong className="text-rose-brown">₹{amountNeeded}</strong> more to qualify for <strong>FREE Express Delivery</strong>!
              </span>
            ) : (
              <span className="text-emerald-700 font-semibold flex items-center">
                <Sparkles className="w-4 h-4 mr-1 text-emerald-600" />
                Congratulations! You’ve unlocked FREE Express Shipping.
              </span>
            )}
          </div>
          <Link to="/shop" className="text-rose-brown hover:underline font-semibold text-xs whitespace-nowrap">
            Continue Shopping →
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Cart Table Items */}
          <div className="lg:col-span-8 space-y-4">
            <div className="bg-ivory rounded-3xl border border-blush-200 overflow-hidden shadow-soft">
              
              {/* Header */}
              <div className="hidden sm:grid grid-cols-12 gap-4 px-6 py-4 bg-cream-50 border-b border-blush-200 text-xs font-semibold uppercase tracking-wider text-espresso-500">
                <span className="col-span-6">Product</span>
                <span className="col-span-2 text-center">Quantity</span>
                <span className="col-span-2 text-right">Price</span>
                <span className="col-span-2 text-right">Total</span>
              </div>

              {/* Items List */}
              <div className="divide-y divide-blush-200">
                {cartItems.map((item) => (
                  <div key={item.cartItemId} className="p-6 flex flex-col sm:grid sm:grid-cols-12 gap-4 items-center">
                    
                    {/* Product & Shade */}
                    <div className="sm:col-span-6 flex items-center space-x-4 w-full">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-20 h-20 object-cover rounded-2xl border border-blush-200 shrink-0"
                      />
                      <div>
                        <span className="text-[10px] font-semibold tracking-wider uppercase text-espresso-500">
                          {item.product.brand}
                        </span>
                        <Link to={`/product/${item.product.id}`}>
                          <h3 className="font-serif text-sm font-semibold text-espresso-950 hover:text-rose-brown transition-colors">
                            {item.product.name}
                          </h3>
                        </Link>
                        {item.shade && (
                          <div className="flex items-center space-x-1.5 mt-1">
                            <span
                              className="w-3 h-3 rounded-full border border-black/10 inline-block"
                              style={{ backgroundColor: item.shade.hex }}
                            />
                            <span className="text-xs text-espresso-600 font-medium">{item.shade.name}</span>
                          </div>
                        )}
                        <button
                          onClick={() => removeFromCart(item.cartItemId)}
                          className="text-xs text-espresso-400 hover:text-red-600 flex items-center space-x-1 mt-2 transition-colors sm:hidden"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                          <span>Remove</span>
                        </button>
                      </div>
                    </div>

                    {/* Quantity Selector */}
                    <div className="sm:col-span-2 flex items-center justify-center w-full sm:w-auto">
                      <div className="flex items-center border border-blush-300 rounded-xl bg-ivory">
                        <button
                          onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                          className="px-2.5 py-1 text-espresso-600 hover:text-espresso-950"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2.5 text-xs font-bold text-espresso-900">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                          className="px-2.5 py-1 text-espresso-600 hover:text-espresso-950"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>

                    {/* Unit Price */}
                    <div className="sm:col-span-2 text-right hidden sm:block text-xs font-semibold text-espresso-700">
                      ₹{item.price}
                    </div>

                    {/* Line Total & Remove */}
                    <div className="sm:col-span-2 flex items-center justify-between sm:justify-end space-x-3 w-full sm:w-auto">
                      <span className="sm:hidden text-xs text-espresso-500">Subtotal:</span>
                      <span className="text-sm font-bold text-espresso-950">
                        ₹{item.price * item.quantity}
                      </span>
                      <button
                        onClick={() => removeFromCart(item.cartItemId)}
                        className="hidden sm:block text-espresso-400 hover:text-red-500 transition-colors p-1"
                        title="Remove"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                  </div>
                ))}
              </div>

              {/* Cart Footer */}
              <div className="px-6 py-4 bg-cream-50 flex items-center justify-between border-t border-blush-200">
                <Link
                  to="/shop"
                  className="text-xs font-semibold uppercase tracking-wider text-espresso-800 hover:text-rose-brown transition-colors"
                >
                  ← Continue Shopping
                </Link>
                <button
                  onClick={clearCart}
                  className="text-xs text-espresso-500 hover:text-red-600 font-semibold flex items-center space-x-1"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Clear Entire Bag</span>
                </button>
              </div>

            </div>
          </div>

          {/* Order Summary Card */}
          <div className="lg:col-span-4">
            <div className="bg-ivory rounded-3xl border border-blush-200 p-6 sm:p-8 shadow-card space-y-6 sticky top-28">
              <h2 className="font-serif text-xl font-bold text-espresso-950 pb-4 border-b border-blush-200">
                Order Summary
              </h2>

              {/* Coupon Form */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-espresso-700 mb-2">
                  Promotional Voucher
                </label>
                <form onSubmit={handleApplyCoupon} className="flex gap-2">
                  <div className="relative flex-1">
                    <Tag className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-espresso-400" />
                    <input
                      type="text"
                      value={couponInput}
                      onChange={(e) => setCouponInput(e.target.value)}
                      placeholder="e.g. GLOW10"
                      className="w-full pl-9 pr-3 py-2.5 bg-cream-50 border border-blush-300 rounded-xl text-xs text-espresso-900 uppercase focus:outline-none focus:border-rose-brown"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-4 py-2.5 bg-espresso-900 text-ivory text-xs font-semibold uppercase tracking-wider rounded-xl hover:bg-rose-brown transition-colors"
                  >
                    Apply
                  </button>
                </form>

                {activeCoupon && (
                  <div className="mt-3 flex items-center justify-between text-xs bg-emerald-50 text-emerald-800 p-2.5 rounded-xl border border-emerald-200">
                    <span className="flex items-center">
                      <Sparkles className="w-3.5 h-3.5 mr-1 text-emerald-600" />
                      <strong>{activeCoupon.code}</strong> applied ({activeCoupon.label})
                    </span>
                    <button onClick={removeCoupon} className="text-emerald-700 hover:text-emerald-950 font-bold ml-2">
                      ×
                    </button>
                  </div>
                )}

                {couponError && (
                  <p className="text-xs text-red-600 mt-2">{couponError}</p>
                )}
              </div>

              {/* Price Breakdown */}
              <div className="space-y-3 text-xs sm:text-sm text-espresso-700 border-t border-blush-200 pt-4">
                <div className="flex justify-between">
                  <span>Bag Subtotal</span>
                  <span className="font-semibold text-espresso-950">₹{cartSubtotal}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-rose-600 font-semibold">
                    <span>Voucher Discount</span>
                    <span>-₹{discountAmount}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Estimated Shipping</span>
                  <span>{shippingAmount === 0 ? <strong className="text-emerald-700">FREE</strong> : `₹${shippingAmount}`}</span>
                </div>
                <div className="flex justify-between text-base sm:text-lg font-bold text-espresso-950 pt-4 border-t border-blush-200">
                  <span>Total Amount</span>
                  <span className="text-rose-brown">₹{cartTotal}</span>
                </div>
              </div>

              {/* Checkout CTA */}
              <button
                onClick={() => navigate('/checkout')}
                className="w-full btn-primary py-4 rounded-xl flex items-center justify-center space-x-2 group shadow-elevated text-xs font-semibold tracking-widest uppercase"
              >
                <span>PROCEED TO CHECKOUT</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="pt-2 text-center text-[11px] text-espresso-400 flex items-center justify-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-rose-brown" />
                <span>Encrypted 256-bit Bank Grade Security</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default CartPage;
