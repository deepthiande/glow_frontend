import React, { useState } from 'react';
import { Sparkles, X } from 'lucide-react';

const AnnouncementBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-espresso-950 text-ivory text-xs tracking-widest uppercase font-medium py-2.5 px-4 transition-all duration-300 relative border-b border-rose-gold/20">
      <div className="max-w-7xl mx-auto flex items-center justify-center text-center space-x-2 sm:space-x-3 text-[11px] sm:text-xs">
        <Sparkles className="w-3.5 h-3.5 text-blush-300 animate-pulse hidden sm:inline" />
        <span>
          FREE SHIPPING ON ORDERS ABOVE ₹999 <span className="text-blush-400 mx-2">|</span> YOUR BEAUTY, YOUR RULES
        </span>
        <Sparkles className="w-3.5 h-3.5 text-blush-300 animate-pulse hidden sm:inline" />
      </div>
      <button
        onClick={() => setIsVisible(false)}
        aria-label="Dismiss announcement"
        className="absolute right-4 top-1/2 -translate-y-1/2 text-nude-300 hover:text-ivory transition-colors p-1"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};

export default AnnouncementBar;
