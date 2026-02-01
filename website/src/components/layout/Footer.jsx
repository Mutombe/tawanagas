import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  ArrowUpRight,
  Flame,
  Heart
} from 'lucide-react';
import { ModalContext } from '../../App';

const footerLinks = {
  company: [
    { name: 'About Us', path: '/about' },
    { name: 'Our Services', path: '/services' },
    { name: 'Products', path: '/products' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ],
  services: [
    { name: 'Gas Refill', path: '/services#refill' },
    { name: 'Cylinder Exchange', path: '/services#exchange' },
    { name: 'Free Delivery', path: '/services#delivery' },
    { name: 'Commercial Supply', path: '/services#commercial' },
    { name: 'Installation', path: '/services#installation' },
  ],
  products: [
    { name: '3kg Cylinder', path: '/products#3kg' },
    { name: '5kg Cylinder', path: '/products#5kg' },
    { name: '9kg Cylinder', path: '/products#9kg' },
    { name: '14kg Cylinder', path: '/products#14kg' },
    { name: '48kg Industrial', path: '/products#48kg' },
  ],
  support: [
    { name: 'FAQ', path: '/faq' },
    { name: 'Safety Tips', path: '/faq#safety' },
    { name: 'Contact Us', path: '/contact' },
  ],
};

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: 'https://facebook.com' },
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
];

export default function Footer() {
  const { setShowPrivacy, setShowTerms } = useContext(ModalContext);

  return (
    <footer className="relative bg-[#050d1a] pt-20 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8 pb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center gap-3 mb-6 group">
              <div className="w-12 h-12 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-orange-500 via-amber-400 to-yellow-300 rounded-full blur-lg opacity-60 group-hover:opacity-100 transition-opacity"></div>
                <svg viewBox="0 0 100 120" className="w-full h-full relative z-10">
                  <defs>
                    <linearGradient id="footerFlameGradient" x1="0%" y1="100%" x2="0%" y2="0%">
                      <stop offset="0%" stopColor="#f97316" />
                      <stop offset="50%" stopColor="#fbbf24" />
                      <stop offset="100%" stopColor="#fef3c7" />
                    </linearGradient>
                  </defs>
                  <path 
                    d="M50 5 C30 40 15 50 15 75 C15 95 30 110 50 110 C70 110 85 95 85 75 C85 50 70 40 50 5 M50 30 C60 50 70 60 70 75 C70 85 60 95 50 95 C40 95 30 85 30 75 C30 60 40 50 50 30"
                    fill="url(#footerFlameGradient)"
                  />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-display text-xl font-bold tracking-tight">
                  <span className="text-white">TAWANA</span>
                  <span className="gradient-text"> GAS</span>
                </span>
                <span className="text-[10px] tracking-[0.2em] text-white/60 uppercase">Clean • Reliable • Fast</span>
              </div>
            </Link>
            
            <p className="text-white/60 mb-6 max-w-sm leading-relaxed">
              Your trusted LPG gas partner in Pretoria. We deliver clean, reliable energy solutions 24/7 with free delivery throughout the city.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a 
                href="tel:+27619273855" 
                className="flex items-center gap-3 text-white/80 hover:text-orange-400 transition-colors group"
              >
                <div className="p-2 rounded-lg bg-orange-500/10 group-hover:bg-orange-500/20 transition-colors">
                  <Phone className="w-4 h-4 text-orange-400" />
                </div>
                <span>+27 61 927 3855</span>
              </a>
              <a 
                href="mailto:info@tawanagas.co.za" 
                className="flex items-center gap-3 text-white/80 hover:text-orange-400 transition-colors group"
              >
                <div className="p-2 rounded-lg bg-orange-500/10 group-hover:bg-orange-500/20 transition-colors">
                  <Mail className="w-4 h-4 text-orange-400" />
                </div>
                <span>info@tawanagas.co.za</span>
              </a>
              <div className="flex items-center gap-3 text-white/80">
                <div className="p-2 rounded-lg bg-blue-500/10">
                  <MapPin className="w-4 h-4 text-blue-400" />
                </div>
                <span>169 Bourke Street, Pretoria</span>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <div className="p-2 rounded-lg bg-green-500/10">
                  <Clock className="w-4 h-4 text-green-400" />
                </div>
                <span>Open 24 Hours, 7 Days</span>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h3 className="font-display font-semibold text-white mb-5 text-lg">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path}
                    className="text-white/60 hover:text-orange-400 transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-white mb-5 text-lg">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path}
                    className="text-white/60 hover:text-orange-400 transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-white mb-5 text-lg">Products</h3>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path}
                    className="text-white/60 hover:text-orange-400 transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-white mb-5 text-lg">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path}
                    className="text-white/60 hover:text-orange-400 transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <div className="mt-8">
              <h4 className="font-medium text-white mb-4">Follow Us</h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2.5 rounded-xl glass hover:bg-orange-500/20 transition-colors group"
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5 text-white/60 group-hover:text-orange-400 transition-colors" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-white/10 py-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-xl font-semibold text-white mb-2">Stay Updated</h3>
              <p className="text-white/60">Subscribe to receive news about promotions and special offers.</p>
            </div>
            <form className="flex w-full max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-5 py-3 rounded-l-xl bg-white/5 border border-white/10 border-r-0 text-white placeholder-white/40 outline-none focus:border-orange-500/50 transition-colors"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 rounded-r-xl bg-gradient-to-r from-orange-500 to-amber-500 text-[#0a1628] font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-shadow"
              >
                Subscribe
              </motion.button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm flex items-center gap-1">
              © {new Date().getFullYear()} Tawana Gas Refill & Exchange. Made with 
              <Heart className="w-4 h-4 text-red-500 inline mx-1" fill="currentColor" />
              in Pretoria
            </p>
            <div className="flex items-center gap-6">
              <button 
                onClick={() => setShowPrivacy(true)}
                className="text-white/40 hover:text-white text-sm transition-colors"
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => setShowTerms(true)}
                className="text-white/40 hover:text-white text-sm transition-colors"
              >
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Large Background Text */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none select-none">
        <p className="text-[15vw] font-display font-black text-white/[0.02] whitespace-nowrap leading-none translate-y-1/3">
          TAWANA GAS
        </p>
      </div>
    </footer>
  );
}
