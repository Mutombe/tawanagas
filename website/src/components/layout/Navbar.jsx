import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  Search, 
  Phone, 
  MapPin, 
  Clock,
  ChevronDown,
  Flame
} from 'lucide-react';
import { SearchContext } from '../../App';

// Search data for the website
const searchableContent = [
  { title: 'Home', path: '/', section: 'hero', keywords: ['home', 'main', 'start', 'landing'] },
  { title: 'About Us', path: '/about', section: 'about', keywords: ['about', 'company', 'story', 'who we are', 'history'] },
  { title: 'Our Services', path: '/services', section: 'services', keywords: ['services', 'refill', 'exchange', 'delivery', 'installation'] },
  { title: 'Gas Refill Service', path: '/services', section: 'refill', keywords: ['refill', 'fill', 'top up', 'gas refill'] },
  { title: 'Gas Exchange', path: '/services', section: 'exchange', keywords: ['exchange', 'swap', 'replace', 'cylinder exchange'] },
  { title: 'Free Delivery', path: '/services', section: 'delivery', keywords: ['delivery', 'deliver', 'free delivery', 'transport'] },
  { title: 'Products', path: '/products', section: 'products', keywords: ['products', 'cylinders', 'tanks', 'gas tanks'] },
  { title: '3kg Cylinder', path: '/products', section: '3kg', keywords: ['3kg', 'small', 'camping', 'portable'] },
  { title: '5kg Cylinder', path: '/products', section: '5kg', keywords: ['5kg', 'small', 'home'] },
  { title: '7kg Cylinder', path: '/products', section: '7kg', keywords: ['7kg', 'medium'] },
  { title: '9kg Cylinder', path: '/products', section: '9kg', keywords: ['9kg', 'medium', 'standard'] },
  { title: '14kg Cylinder', path: '/products', section: '14kg', keywords: ['14kg', 'large', 'family'] },
  { title: '19kg Cylinder', path: '/products', section: '19kg', keywords: ['19kg', 'large', 'commercial'] },
  { title: '48kg Cylinder', path: '/products', section: '48kg', keywords: ['48kg', 'industrial', 'business', 'large'] },
  { title: 'Gallery', path: '/gallery', section: 'gallery', keywords: ['gallery', 'photos', 'images', 'pictures'] },
  { title: 'Contact Us', path: '/contact', section: 'contact', keywords: ['contact', 'call', 'email', 'phone', 'address', 'location'] },
  { title: 'FAQ', path: '/faq', section: 'faq', keywords: ['faq', 'questions', 'help', 'support', 'answers'] },
  { title: 'Operating Hours', path: '/contact', section: 'hours', keywords: ['hours', 'open', '24 hours', 'time', 'schedule'] },
  { title: 'Pretoria Location', path: '/contact', section: 'location', keywords: ['pretoria', 'location', 'address', 'bourke street', 'gauteng'] },
];

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Products', path: '/products' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'FAQ', path: '/faq' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const { searchOpen, setSearchOpen, searchQuery, setSearchQuery } = useContext(SearchContext);
  const location = useLocation();
  const navigate = useNavigate();

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setSearchOpen(false);
    setSearchQuery('');
  }, [location]);

  // Handle search
  useEffect(() => {
    if (searchQuery.length > 1) {
      const query = searchQuery.toLowerCase();
      const results = searchableContent.filter(item => 
        item.title.toLowerCase().includes(query) ||
        item.keywords.some(keyword => keyword.includes(query))
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  // Navigate to search result
  const handleSearchSelect = (result) => {
    navigate(result.path);
    setSearchOpen(false);
    setSearchQuery('');
    
    // Scroll to section after navigation
    setTimeout(() => {
      const element = document.getElementById(result.section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  // Handle keyboard shortcut for search
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen(true);
      }
      if (e.key === 'Escape') {
        setSearchOpen(false);
        setSearchQuery('');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      {/* Top Bar - Contact Info */}
      <motion.div 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`hidden lg:block fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'opacity-0 -translate-y-full' : 'opacity-100'
        }`}
      >
        <div className="bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 text-[#0a1628]">
          <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between text-sm font-medium">
            <div className="flex items-center gap-6">
              <a href="tel:+27619273855" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <Phone className="w-4 h-4" />
                <span>+27 61 927 3855</span>
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>169 Bourke Street, Pretoria</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span className="font-semibold">Open 24/7 • Free Delivery</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        className={`fixed left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled 
            ? 'top-0 bg-[#0a1628]/95 backdrop-blur-xl shadow-2xl shadow-black/20' 
            : 'top-10 lg:top-10 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <motion.div 
                whileHover={{ scale: 1.05, rotate: 5 }}
                className="relative"
              >
                {/* Flame Icon */}
                <div className="w-12 h-12 relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-500 via-amber-400 to-yellow-300 rounded-full blur-lg opacity-60 group-hover:opacity-100 transition-opacity animate-pulse"></div>
                  <svg viewBox="0 0 100 120" className="w-full h-full relative z-10">
                    <defs>
                      <linearGradient id="flameGradient" x1="0%" y1="100%" x2="0%" y2="0%">
                        <stop offset="0%" stopColor="#f97316" />
                        <stop offset="50%" stopColor="#fbbf24" />
                        <stop offset="100%" stopColor="#fef3c7" />
                      </linearGradient>
                    </defs>
                    <path 
                      d="M50 5 C30 40 15 50 15 75 C15 95 30 110 50 110 C70 110 85 95 85 75 C85 50 70 40 50 5 M50 30 C60 50 70 60 70 75 C70 85 60 95 50 95 C40 95 30 85 30 75 C30 60 40 50 50 30"
                      fill="url(#flameGradient)"
                      className="animate-flame origin-bottom"
                    />
                  </svg>
                </div>
              </motion.div>
              <div className="flex flex-col">
                <span className="font-display text-xl font-bold tracking-tight">
                  <span className="text-white">TAWANA</span>
                  <span className="gradient-text"> GAS</span>
                </span>
                <span className="text-[10px] tracking-[0.2em] text-white/60 uppercase">Clean • Reliable • Fast</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 group ${
                    location.pathname === link.path 
                      ? 'text-orange-400' 
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-orange-500 to-amber-400 transition-all duration-300 ${
                    location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </Link>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-3">
              {/* Search Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSearchOpen(true)}
                className="p-2 rounded-full glass hover:bg-white/10 transition-colors group"
                aria-label="Search"
              >
                <Search className="w-5 h-5 text-white/80 group-hover:text-orange-400 transition-colors" />
              </motion.button>

              {/* CTA Button - Desktop */}
              <motion.a
                href="tel:+27619273855"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="hidden sm:flex items-center gap-2 btn-primary text-sm"
              >
                <Phone className="w-4 h-4" />
                <span className="relative z-10">Order Now</span>
              </motion.a>

              {/* Mobile Menu Button */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-full glass"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-30 lg:hidden"
          >
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Menu Content */}
            <motion.div 
              className="absolute right-0 top-0 bottom-0 w-[80%] max-w-sm bg-[#0a1628] border-l border-white/10 overflow-y-auto"
            >
              <div className="p-6 pt-24">
                {/* Mobile Nav Links */}
                <div className="space-y-2">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        to={link.path}
                        className={`block px-4 py-3 rounded-xl text-lg font-medium transition-all ${
                          location.pathname === link.path
                            ? 'bg-gradient-to-r from-orange-500/20 to-amber-500/10 text-orange-400 border-l-4 border-orange-500'
                            : 'text-white/80 hover:bg-white/5 hover:text-white'
                        }`}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Mobile Contact Info */}
                <div className="mt-8 pt-8 border-t border-white/10">
                  <h3 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-4">Contact Us</h3>
                  <div className="space-y-4">
                    <a href="tel:+27619273855" className="flex items-center gap-3 text-white/80 hover:text-orange-400 transition-colors">
                      <div className="p-2 rounded-lg bg-orange-500/20">
                        <Phone className="w-5 h-5 text-orange-400" />
                      </div>
                      <span>+27 61 927 3855</span>
                    </a>
                    <div className="flex items-center gap-3 text-white/80">
                      <div className="p-2 rounded-lg bg-blue-500/20">
                        <MapPin className="w-5 h-5 text-blue-400" />
                      </div>
                      <span>169 Bourke St, Pretoria</span>
                    </div>
                    <div className="flex items-center gap-3 text-white/80">
                      <div className="p-2 rounded-lg bg-green-500/20">
                        <Clock className="w-5 h-5 text-green-400" />
                      </div>
                      <span>Open 24/7</span>
                    </div>
                  </div>
                </div>

                {/* Mobile CTA */}
                <motion.a
                  href="tel:+27619273855"
                  whileTap={{ scale: 0.95 }}
                  className="mt-8 flex items-center justify-center gap-2 w-full btn-primary text-center"
                >
                  <Phone className="w-5 h-5" />
                  <span className="relative z-10">Call Now</span>
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Search Modal */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh] px-4"
          >
            {/* Backdrop */}
            <motion.div 
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
              onClick={() => {
                setSearchOpen(false);
                setSearchQuery('');
              }}
            />
            
            {/* Search Content */}
            <motion.div
              initial={{ opacity: 0, y: -50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -50, scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="relative w-full max-w-2xl"
            >
              {/* Search Input */}
              <div className="relative glass rounded-2xl overflow-hidden">
                <div className="flex items-center gap-4 p-4">
                  <Search className="w-6 h-6 text-orange-400 flex-shrink-0" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search for products, services, pages..."
                    className="flex-1 bg-transparent text-lg text-white placeholder-white/40 outline-none"
                    autoFocus
                  />
                  <kbd className="hidden sm:flex items-center gap-1 px-2 py-1 rounded bg-white/10 text-xs text-white/60">
                    ESC
                  </kbd>
                </div>

                {/* Search Results */}
                {searchResults.length > 0 && (
                  <div className="border-t border-white/10 max-h-[50vh] overflow-y-auto">
                    {searchResults.map((result, index) => (
                      <motion.button
                        key={`${result.path}-${result.section}`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        onClick={() => handleSearchSelect(result)}
                        className="w-full flex items-center gap-4 px-4 py-3 hover:bg-white/10 transition-colors text-left"
                      >
                        <div className="p-2 rounded-lg bg-orange-500/20">
                          <Flame className="w-4 h-4 text-orange-400" />
                        </div>
                        <div>
                          <p className="font-medium text-white">{result.title}</p>
                          <p className="text-sm text-white/60">{result.path}</p>
                        </div>
                      </motion.button>
                    ))}
                  </div>
                )}

                {/* No Results */}
                {searchQuery.length > 1 && searchResults.length === 0 && (
                  <div className="border-t border-white/10 p-8 text-center">
                    <p className="text-white/60">No results found for "{searchQuery}"</p>
                  </div>
                )}

                {/* Search Hints */}
                {searchQuery.length <= 1 && (
                  <div className="border-t border-white/10 p-4">
                    <p className="text-sm text-white/40 mb-3">Popular searches</p>
                    <div className="flex flex-wrap gap-2">
                      {['Gas Refill', '48kg Cylinder', 'Delivery', 'Contact'].map((hint) => (
                        <button
                          key={hint}
                          onClick={() => setSearchQuery(hint)}
                          className="px-3 py-1 rounded-full bg-white/5 text-sm text-white/60 hover:bg-white/10 hover:text-white transition-colors"
                        >
                          {hint}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
