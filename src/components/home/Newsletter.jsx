import React, { useState } from 'react';
import { Mail, CheckCircle, Sparkles } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError('Please provide a valid beauty email address');
      return;
    }
    setError('');
    setIsSubscribed(true);
  };

  return (
    <section className="py-16 sm:py-20 bg-blush-100/50 border-t border-blush-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-ivory border border-blush-300 text-rose-brown text-xs font-semibold tracking-widest uppercase mb-4 shadow-sm">
          <Sparkles className="w-3.5 h-3.5" />
          <span>VIP Beauty Club</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-espresso-950 mb-3 tracking-tight">
          Get a little glow in your inbox.
        </h2>

        <p className="text-sm sm:text-base text-espresso-600 font-light max-w-xl mx-auto mb-8">
          Subscribe for secret sales, masterclass beauty tips, early access to new shade drops, and receive <strong className="text-rose-brown">15% off</strong> your first order.
        </p>

        {isSubscribed ? (
          <div className="bg-ivory border border-emerald-200 text-emerald-800 p-6 rounded-2xl max-w-md mx-auto shadow-card animate-fade-in flex flex-col items-center">
            <CheckCircle className="w-8 h-8 text-emerald-600 mb-2" />
            <h4 className="font-serif text-lg font-bold">Welcome to the Glow Circle! ✨</h4>
            <p className="text-xs text-espresso-600 mt-1">
              Your 15% discount code <strong className="text-rose-brown font-mono">FIRSTGLAM</strong> has been sent to your email.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-2.5">
              <div className="relative flex-1">
                <Mail className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-espresso-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  className="w-full pl-11 pr-4 py-3.5 bg-ivory border border-blush-300 rounded-xl text-xs sm:text-sm text-espresso-900 placeholder-espresso-400 focus:outline-none focus:border-rose-brown shadow-soft transition-colors"
                />
              </div>
              <button
                type="submit"
                className="btn-primary py-3.5 px-8 rounded-xl shrink-0"
              >
                SUBSCRIBE
              </button>
            </div>
            {error && <p className="text-xs text-red-600 mt-2 font-medium">{error}</p>}
            <p className="text-[11px] text-espresso-400 mt-3">
              We respect your privacy. Unsubscribe whenever you wish with 1-click.
            </p>
          </form>
        )}

      </div>
    </section>
  );
};

export default Newsletter;
