import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  CheckCircle, 
  Sparkles,
  Send
} from 'lucide-react';

const InstagramIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const FacebookIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const TwitterIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
  </svg>
);

const YoutubeIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
    <path d="m10 15 5-3-5-3v6Z"/>
  </svg>
);

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 800);
  };

  return (
    <div className="bg-ivory min-h-screen py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-blush-100 text-rose-brown text-xs font-semibold tracking-widest uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Client Concierge</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-espresso-950">
            We'd Love to Hear From You
          </h1>
          <p className="text-xs sm:text-sm text-espresso-600 mt-2 font-light">
            Have questions about shade matching, custom orders, or order status? Our beauty advisors are at your service.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Contact Details Card */}
          <div className="lg:col-span-5 bg-espresso-950 text-ivory p-8 sm:p-10 rounded-3xl border border-rose-gold/25 shadow-elevated space-y-8 flex flex-col justify-between">
            <div className="space-y-6">
              <span className="text-xs font-semibold tracking-widest uppercase text-blush-300">
                Atelier Concierge
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold leading-snug">
                Speak With A Beauty Specialist
              </h2>
              <p className="text-xs text-cream-200/80 leading-relaxed font-light">
                Whether you need advice finding your perfect foundation shade or need assistance with your order, we respond within 12 business hours.
              </p>

              <div className="space-y-4 pt-4 border-t border-espresso-800 text-xs">
                <div className="flex items-start space-x-3.5">
                  <MapPin className="w-5 h-5 text-blush-300 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-ivory">Flagship Boutique & Head Office</strong>
                    <span className="text-cream-200/70">The Atelier, Level 4, Palladium Mall, High Street Phoenix, Mumbai 400013, India</span>
                  </div>
                </div>

                <div className="flex items-center space-x-3.5">
                  <Phone className="w-5 h-5 text-blush-300 shrink-0" />
                  <div>
                    <strong className="block text-ivory">Toll-Free Helpline</strong>
                    <span className="text-cream-200/70">+91 1800 209 8899</span>
                  </div>
                </div>

                <div className="flex items-center space-x-3.5">
                  <Mail className="w-5 h-5 text-blush-300 shrink-0" />
                  <div>
                    <strong className="block text-ivory">Direct Email Support</strong>
                    <span className="text-cream-200/70">concierge@glowandglam.com</span>
                  </div>
                </div>

                <div className="flex items-center space-x-3.5">
                  <Clock className="w-5 h-5 text-blush-300 shrink-0" />
                  <div>
                    <strong className="block text-ivory">Concierge Hours</strong>
                    <span className="text-cream-200/70">Monday – Saturday: 9:00 AM – 8:00 PM IST</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-6 border-t border-espresso-800">
              <span className="block text-[11px] uppercase tracking-wider text-espresso-400 mb-3">
                Join our Social Beauty Community
              </span>
              <div className="flex space-x-3">
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-espresso-900 border border-espresso-800 flex items-center justify-center text-blush-200 hover:text-ivory hover:bg-rose-brown transition-colors">
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-espresso-900 border border-espresso-800 flex items-center justify-center text-blush-200 hover:text-ivory hover:bg-rose-brown transition-colors">
                  <FacebookIcon className="w-4 h-4" />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-espresso-900 border border-espresso-800 flex items-center justify-center text-blush-200 hover:text-ivory hover:bg-rose-brown transition-colors">
                  <YoutubeIcon className="w-4 h-4" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-espresso-900 border border-espresso-800 flex items-center justify-center text-blush-200 hover:text-ivory hover:bg-rose-brown transition-colors">
                  <TwitterIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7 bg-cream-50/70 p-8 sm:p-10 rounded-3xl border border-blush-200 shadow-card">
            <h2 className="font-serif text-2xl font-bold text-espresso-950 mb-2">
              Send an Inquiry
            </h2>
            <p className="text-xs text-espresso-600 mb-6">
              Fill in your details below and a personal beauty advisor will get back to you shortly.
            </p>

            {submitted ? (
              <div className="bg-ivory border border-emerald-200 p-8 rounded-2xl text-center space-y-3 animate-fade-in">
                <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto" />
                <h3 className="font-serif text-xl font-bold text-espresso-950">Message Sent Successfully!</h3>
                <p className="text-xs text-espresso-600 max-w-sm mx-auto leading-relaxed">
                  Thank you for reaching out. We have received your inquiry and will respond to your email within a few hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-outline-blush text-xs mt-4"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-espresso-700 mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Ananya Sharma"
                      className="w-full px-4 py-3 bg-ivory border border-blush-300 rounded-xl text-xs text-espresso-900 focus:outline-none focus:border-rose-brown shadow-soft"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-espresso-700 mb-1">
                      Your Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="ananya@example.com"
                      className="w-full px-4 py-3 bg-ivory border border-blush-300 rounded-xl text-xs text-espresso-900 focus:outline-none focus:border-rose-brown shadow-soft"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-espresso-700 mb-1">
                    Inquiry Subject
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Shade consultation or Order status"
                    className="w-full px-4 py-3 bg-ivory border border-blush-300 rounded-xl text-xs text-espresso-900 focus:outline-none focus:border-rose-brown shadow-soft"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-espresso-700 mb-1">
                    Your Message *
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe how we can assist your beauty journey today..."
                    className="w-full px-4 py-3 bg-ivory border border-blush-300 rounded-xl text-xs text-espresso-900 focus:outline-none focus:border-rose-brown shadow-soft"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full btn-primary py-4 rounded-xl flex items-center justify-center space-x-2 shadow-elevated"
                >
                  <Send className="w-4 h-4" />
                  <span>{submitting ? 'SENDING INQUIRY...' : 'TRANSMIT MESSAGE'}</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};

export default ContactPage;
