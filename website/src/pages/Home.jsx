import React from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import StatsSection from '../components/shared/Stats';
import { 
  Phone, 
  ArrowRight, 
  Truck, 
  Clock, 
  Shield, 
  Award,
  ChevronDown,
  Flame,
  Zap,
  MapPin,
  Star,
  Users,
  CheckCircle2,
  Play,
  ArrowUpRight
} from 'lucide-react';

// SEO Component
function SEO() {
  return (
    <>
      <title>Tawana Gas Refill & Exchange | Clean. Reliable. Fast. | Pretoria's #1 LPG Supplier</title>
      <meta name="description" content="Pretoria's premier 24/7 LPG gas refill and exchange service. Free delivery, all cylinder sizes from 3kg to 48kg. Clean, Reliable, Fast gas supply for homes and businesses." />
    </>
  );
}

// Hero Section
function HeroSection() {
  const containerRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  // Hero background images - Industrial/Energy themed
  /* VISION: These images should feature:
     1. Industrial gas facility or LPG storage with dramatic lighting
     2. Professional delivery truck or warehouse operations
     3. Modern kitchen/home setting showing gas being used
     All images should have a professional, industrial feel that conveys reliability */
  const heroImages = [
    {
      url: "/8.jpg",
      alt: "Industrial energy solutions"
    },
    {
      url: "2.jpg",
      alt: "Professional logistics operations"
    },
    {
      url: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&q=80&auto=format&fit=crop",
      alt: "Modern kitchen with gas stove"
    }
  ];

  // Real customer face images for trust indicators
  const customerFaces = [
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
  ];

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 6000); // Change every 6 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* === BACKGROUND CAROUSEL WITH BLEND === */}
      <div className="absolute inset-0">
        {/* Background Images */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <img
              src={heroImages[currentSlide].url}
              alt={heroImages[currentSlide].alt}
              className="w-full h-full object-cover"
              loading="eager"
            />
          </motion.div>
        </AnimatePresence>

        {/* === GRADIENT OVERLAYS FOR BLENDING === */}
        {/* Main dark gradient - heavy on left, lighter on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628] via-[#0a1628]/95 via-40% to-[#0a1628]/40" />
        
        {/* Top gradient for navbar blend */}
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#0a1628] to-transparent" />
        
        {/* Bottom gradient for section transition */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#0a1628] via-[#0a1628]/80 to-transparent" />
        
        {/* Additional cinematic vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(10,22,40,0.4)_100%)]" />
        
        {/* Color tint overlay for brand consistency */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-orange-900/10 mix-blend-overlay" />
      </div>

      {/* === ANIMATED DECORATIVE ELEMENTS === */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated Gradient Orbs */}
        <motion.div 
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-orange-500/30 rounded-full blur-[150px]"
        />
        <motion.div 
          animate={{ 
            x: [0, -80, 0],
            y: [0, 60, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-blue-500/25 rounded-full blur-[120px]"
        />
        <motion.div 
          animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/20 rounded-full blur-[200px]"
        />
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:80px_80px]" />
        
        {/* Floating Particles */}
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 4 + 2,
              height: Math.random() * 4 + 2,
              background: i % 3 === 0 ? 'rgba(249, 115, 22, 0.6)' : 'rgba(59, 130, 246, 0.5)',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{ 
              y: [0, Math.random() * -300 - 100],
              x: [0, (Math.random() - 0.5) * 100],
              opacity: [0, 0.8, 0],
              scale: [0.5, 1, 0.3]
            }}
            transition={{ 
              duration: Math.random() * 8 + 6,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeOut"
            }}
          />
        ))}
      </div>

      {/* === CAROUSEL INDICATORS === */}
      <div className="absolute bottom-32 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`relative h-2 rounded-full transition-all duration-500 ${
              currentSlide === index ? 'w-10 bg-orange-500' : 'w-2 bg-white/30 hover:bg-white/50'
            }`}
          >
            {currentSlide === index && (
              <motion.div
                layoutId="activeIndicator"
                className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* === HERO CONTENT === */}
      <motion.div 
        style={{ y, opacity, scale }}
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20"
      >
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* === LEFT CONTENT - TEXT === */}
          <motion.div
            className="lg:col-span-7 xl:col-span-6"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {/* Status Badge 
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-8"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-sm font-medium text-white/90 tracking-wide">Open 24/7</span>
              <span className="w-1 h-1 bg-white/40 rounded-full"></span>
              <span className="text-sm font-medium text-white/90 tracking-wide">Free Delivery</span>
            </motion.div>*/}

            {/* Main Heading */}
            <motion.h1 
              className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.95] mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <span className="text-white block">Powering</span>
              <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 bg-clip-text text-transparent block py-2">
                Energy
              </span>
              <span className="text-white block"> Needs</span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-xl lg:text-2xl text-white/70 mb-10 max-w-xl leading-relaxed"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400 font-bold">
                Clean. Reliable. Fast.
              </span>{' '}
              Your trusted LPG gas partner delivering quality energy solutions to homes and businesses.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <motion.a
                href="tel:+27619273855"
                whileHover={{ scale: 1.03, boxShadow: "0 20px 40px rgba(249, 115, 22, 0.4)" }}
                whileTap={{ scale: 0.97 }}
                className="group relative flex items-center gap-3 px-8 py-4 rounded-full overflow-hidden"
              >
                {/* Button Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500 bg-[length:200%_100%] animate-shimmer" />
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Button Content */}
                <div className="relative flex items-center gap-3 text-[#0a1628]">
                  <div className="w-10 h-10 rounded-full bg-[#0a1628]/20 flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="font-bold text-lg">Order Now</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.a>

              <Link
                to="/products"
                className="group flex items-center gap-3 px-8 py-4 rounded-full border-2 border-white/25 text-white font-semibold hover:border-orange-500/60 hover:bg-orange-500/10 transition-all duration-300 backdrop-blur-sm"
              >
                <span className="text-lg">View Products</span>
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </motion.div>

            {/* Trust Indicators with Real Faces */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-wrap items-center gap-8 lg:gap-10"
            >
              {/* Happy Customers with Real Faces */}
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {customerFaces.map((face, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0, x: -20 }}
                      animate={{ opacity: 1, scale: 1, x: 0 }}
                      transition={{ delay: 1 + i * 0.1, type: "spring" }}
                      className="relative"
                    >
                      <div className="w-11 h-11 rounded-full border-2 border-[#0a1628] overflow-hidden ring-2 ring-orange-500/30">
                        <img 
                          src={face}
                          alt={`Happy customer ${i + 1}`}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      {i === customerFaces.length - 1 && (
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center text-[#0a1628] text-xs font-bold">
                          +5k
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
                <div>
                  <p className="text-white font-bold text-lg">5,000+</p>
                  <p className="text-white/50 text-sm">Happy Customers</p>
                </div>
              </div>

              {/* Divider */}
              <div className="hidden sm:block w-px h-12 bg-gradient-to-b from-transparent via-white/20 to-transparent" />

              {/* Rating */}
              <div className="flex items-center gap-3">
                <div className="flex gap-0.5">
                  {[1,2,3,4,5].map((i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0, rotate: -180 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      transition={{ delay: 1.2 + i * 0.05, type: "spring" }}
                    >
                      <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                    </motion.div>
                  ))}
                </div>
                <div>
                  <p className="text-white font-bold text-lg">4.9/5</p>
                  <p className="text-white/50 text-sm">Customer Rating</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* === RIGHT CONTENT - FLOATING BADGES === */}
          <motion.div
            className="lg:col-span-5 xl:col-span-6 relative hidden lg:block"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            {/* Decorative rotating circles */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px]">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border border-white/10 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                className="absolute inset-8 border border-dashed border-orange-500/20 rounded-full"
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-16 border border-blue-500/15 rounded-full"
              />
            </div>

            {/* Floating Feature Cards */}
            <div className="relative h-[400px]">
              {/* 24/7 Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, type: "spring", stiffness: 200 }}
                className="absolute top-0 right-0"
              >
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="p-6 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center">
                      <Clock className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-white">24/7</p>
                      <p className="text-white/60 text-sm">Always Open</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Free Delivery Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
                className="absolute bottom-10 left-0"
              >
                <motion.div
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="p-6 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                      <Truck className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-white">FREE</p>
                      <p className="text-white/60 text-sm">Pretoria Delivery</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Safety Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4, type: "spring", stiffness: 200 }}
                className="absolute top-1/2 right-10 -translate-y-1/2"
              >
                <motion.div
                  animate={{ y: [0, -10, 0], rotate: [0, 2, -2, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="p-5 rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-xl border border-green-500/30"
                >
                  <div className="flex items-center gap-3">
                    <Shield className="w-8 h-8 text-green-400" />
                    <div>
                      <p className="font-bold text-white">SABS</p>
                      <p className="text-green-400 text-xs">Certified</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Fast Service Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.6, type: "spring", stiffness: 200 }}
                className="absolute bottom-0 right-1/4"
              >
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                  className="px-5 py-3 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 backdrop-blur-xl border border-amber-500/30"
                >
                  <div className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-amber-400" />
                    <span className="font-semibold text-white">2-4hr Delivery</span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2">
              <motion.div
                animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1.5 h-1.5 bg-orange-500 rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

// Features Section
function FeaturesSection() {
  const features = [
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "We never close. Get your gas refill or exchange any time of day or night.",
      color: "orange"
    },
    {
      icon: Truck,
      title: "Free Delivery",
      description: "Complimentary delivery service throughout Pretoria and surrounding areas.",
      color: "blue"
    },
    {
      icon: Shield,
      title: "Safety Certified",
      description: "All our cylinders meet strict safety standards and are regularly inspected.",
      color: "green"
    },
    {
      icon: Zap,
      title: "Fast Service",
      description: "Quick turnaround times. Most deliveries completed within 2-4 hours.",
      color: "amber"
    }
  ];

  const colorClasses = {
    orange: "from-orange-500/20 to-amber-500/10 border-orange-500/30 text-orange-400",
    blue: "from-blue-500/20 to-cyan-500/10 border-blue-500/30 text-blue-400",
    green: "from-green-500/20 to-emerald-500/10 border-green-500/30 text-green-400",
    amber: "from-amber-500/20 to-yellow-500/10 border-amber-500/30 text-amber-400"
  };

  return (
    <section className="py-24 bg-[#0a1628] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050d1a] via-[#0a1628] to-[#0a1628]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full glass text-orange-400 text-sm font-medium mb-4">
            Why Choose Us
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            The Tawana <span className="gradient-text">Advantage</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Experience the difference with Pretoria's most trusted gas supplier
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`group p-6 rounded-3xl bg-gradient-to-br ${colorClasses[feature.color]} border backdrop-blur-sm`}
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${colorClasses[feature.color]} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <feature.icon className={`w-7 h-7 ${colorClasses[feature.color].split(' ').pop()}`} />
              </div>
              <h3 className="font-display text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Products Preview Section
function ProductsPreviewSection() {
  const products = [
    { size: "3kg", use: "Camping & Portable", popular: false },
    { size: "5kg", use: "Small Households", popular: false },
    { size: "9kg", use: "Standard Home Use", popular: true },
    { size: "14kg", use: "Large Families", popular: false },
    { size: "19kg", use: "Commercial Use", popular: false },
    { size: "48kg", use: "Industrial", popular: false },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[#0a1628] to-[#050d1a] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-1/2 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-16"
        >
          <div>
            <span className="inline-block px-4 py-1 rounded-full glass text-blue-400 text-sm font-medium mb-4">
              Our Products
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
              Cylinder <span className="gradient-text-blue">Sizes</span>
            </h2>
            <p className="text-white/60 max-w-lg">
              From portable camping cylinders to industrial tanks, we have the right size for every need.
            </p>
          </div>
          <Link
            to="/products"
            className="mt-6 md:mt-0 inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 font-medium group"
          >
            View All Products
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {products.map((product, index) => (
            <motion.div
              key={product.size}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              {product.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-[#0a1628] text-xs font-bold z-10">
                  Popular
                </div>
              )}
              <div className="p-6 rounded-3xl glass hover:bg-white/10 transition-all border border-transparent hover:border-orange-500/30 text-center">
                {/* Cylinder Icon */}
                <div className="w-16 h-24 mx-auto mb-4 relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-blue-400 to-blue-600 rounded-lg shadow-lg group-hover:shadow-blue-500/30 transition-shadow"></div>
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-4 bg-gray-400 rounded-full"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{product.size}</span>
                  </div>
                </div>
                <p className="text-white/60 text-sm">{product.use}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Stats Section

// CTA Section
function CTASection() {
  return (
    <section className="py-24 bg-[#0a1628] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-500/10 rounded-full blur-[150px]"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Ready to <span className="gradient-text">Order?</span>
          </h2>
          <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
            Experience the convenience of Pretoria's most reliable gas delivery service. Call us now or visit our location.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="tel:+27619273855"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-[#0a1628] font-bold text-lg shadow-2xl shadow-orange-500/25 hover:shadow-orange-500/40 transition-shadow"
            >
              <Phone className="w-6 h-6" />
              <span>+27 61 927 3855</span>
            </motion.a>
            <motion.a
              href="https://maps.google.com/?q=169+Bourke+Street+Pretoria"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-full border-2 border-white/20 text-white font-semibold hover:border-orange-500/50 hover:bg-orange-500/10 transition-all"
            >
              <MapPin className="w-6 h-6" />
              <span>Get Directions</span>
            </motion.a>
          </div>

          {/* Location Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-12 p-6 rounded-2xl glass inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-8"
          >
            <div className="flex items-center gap-2 text-white/80">
              <MapPin className="w-5 h-5 text-orange-400" />
              <span>169 Bourke Street, Pretoria</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-white/20"></div>
            <div className="flex items-center gap-2 text-white/80">
              <Clock className="w-5 h-5 text-green-400" />
              <span>Open 24 Hours, 7 Days</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// Main Home Component
export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="page-transition"
    >
      <SEO />
      <HeroSection />
      <FeaturesSection />
      <ProductsPreviewSection />
      <StatsSection />
      <CTASection />
    </motion.div>
  );
}
