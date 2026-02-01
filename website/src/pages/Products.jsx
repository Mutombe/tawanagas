import React from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  ArrowRight,
  Flame,
  ShieldCheck,
  Truck,
  CheckCircle2,
  Info,
  X,
  ChevronRight,
  Sparkles,
  Home,
  Building2,
  Utensils,
  Factory,
  Star,
  ArrowUpRight,
  Gauge,
  Timer,
  Package,
  Clock,
  Zap
} from 'lucide-react';

// SEO Component
function SEO() {
  return (
    <>
      <title>LPG Gas Cylinders | Tawana Gas Refill & Exchange | 3kg to 48kg</title>
      <meta name="description" content="Quality LPG gas cylinders in all sizes: 3kg, 5kg, 7kg, 9kg, 14kg, 19kg, and 48kg. Free delivery in Pretoria. Gas refills and exchanges available 24/7." />
    </>
  );
}

// Product Data
const products = [
  {
    id: 1,
    size: "3kg",
    name: "Mini Cylinder",
    subtitle: "Portable & Compact",
    description: "Perfect for camping, small households, and occasional cooking. Lightweight and easy to carry.",
    uses: ["Camping", "Picnics", "Small stovetops", "Backup supply"],
    duration: "2-4 weeks",
    category: "residential",
    popular: false,
    features: ["Ultra portable", "Easy to store", "Quick connect"],
    image: "/9.jpg",
    /* VISION: Small blue gas cylinder, compact size, professional product photography */
  },
  {
    id: 2,
    size: "5kg",
    name: "Compact Cylinder",
    subtitle: "Everyday Essential",
    description: "Ideal for singles, couples, or small families. Great for daily cooking needs.",
    uses: ["Daily cooking", "Small families", "Braai", "Catering events"],
    duration: "3-5 weeks",
    category: "residential",
    popular: false,
    features: ["Balanced weight", "Easy handling", "Standard fitting"],
    image: "/9.jpg",
  },
  {
    id: 3,
    size: "7kg",
    name: "Standard Cylinder",
    subtitle: "Family Favorite",
    description: "The go-to choice for average households. Perfect balance of capacity and convenience.",
    uses: ["Family cooking", "Regular braai", "Home heating", "Water heating"],
    duration: "4-6 weeks",
    category: "residential",
    popular: false,
    features: ["Popular choice", "Manageable weight", "Long lasting"],
    image: "/9.jpg",
  },
  {
    id: 4,
    size: "9kg",
    name: "Classic Cylinder",
    subtitle: "Best Seller",
    description: "Our most popular size! Ideal for medium to large families with regular cooking needs.",
    uses: ["Large families", "Frequent cooking", "Home + braai", "Guest houses"],
    duration: "5-8 weeks",
    category: "residential",
    popular: true,
    features: ["Most popular", "Best value", "Versatile use"],
    image: "/9.jpg",
  },
  {
    id: 5,
    size: "14kg",
    name: "Large Cylinder",
    subtitle: "Extended Capacity",
    description: "For households with high gas consumption or small commercial establishments.",
    uses: ["High consumption", "Small restaurants", "B&Bs", "Catering"],
    duration: "6-10 weeks",
    category: "commercial",
    popular: false,
    features: ["Extended use", "Fewer refills", "Commercial grade"],
    image: "/9.jpg",
  },
  {
    id: 6,
    size: "19kg",
    name: "Commercial Cylinder",
    subtitle: "Professional Grade",
    description: "Designed for restaurants, hotels, and businesses with substantial gas requirements.",
    uses: ["Restaurants", "Hotels", "Catering companies", "Food trucks"],
    duration: "8-12 weeks",
    category: "commercial",
    popular: false,
    features: ["High capacity", "Professional use", "Bulk savings"],
    image: "/9.jpg",
  },
  {
    id: 7,
    size: "48kg",
    name: "Industrial Cylinder",
    subtitle: "Maximum Power",
    description: "Our largest cylinder for industrial applications and high-volume commercial use.",
    uses: ["Factories", "Large restaurants", "Industrial heating", "Manufacturing"],
    duration: "12-20 weeks",
    category: "industrial",
    popular: false,
    features: ["Maximum capacity", "Industrial grade", "Volume discount"],
    image: "/9.jpg",
  },
];

const categories = [
  { id: "all", label: "All Products", icon: Package },
  { id: "residential", label: "Residential", icon: Home },
  { id: "commercial", label: "Commercial", icon: Building2 },
  { id: "industrial", label: "Industrial", icon: Factory },
];

/* ============================================
   HERO SECTION - BLENDED BACKGROUND IMAGE
   The image fills the entire hero and blends
   dark on the left for text readability while
   staying visible on the right.
   ============================================ */
function HeroSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section 
      ref={containerRef}
      id="products-hero"
      className="relative min-h-[90vh] flex items-center overflow-hidden"
    >
      {/* === FULL-BLEED BACKGROUND IMAGE === */}
      {/* VISION: Wide shot of neatly arranged blue LPG gas cylinders in a professional
          warehouse / storage facility with dramatic industrial lighting, or a high-quality
          product arrangement of multiple cylinder sizes against a dark background */}
      <div className="absolute inset-0">
        <motion.div style={{ scale: imgScale }} className="absolute inset-0 origin-center">
          <img
            src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=1920&q=80&auto=format&fit=crop"
            alt="Gas cylinder collection"
            className="w-full h-full object-cover"
            loading="eager"
          />
        </motion.div>

        {/* === GRADIENT OVERLAYS — heavy on left, light on right === */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628] via-[#0a1628]/95 via-45% to-[#0a1628]/35" />

        {/* Top fade for navbar blending */}
        <div className="absolute top-0 left-0 right-0 h-44 bg-gradient-to-b from-[#0a1628] to-transparent" />

        {/* Bottom fade for next-section blending */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#0a1628] via-[#0a1628]/80 to-transparent" />

        {/* Cinematic vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(10,22,40,0.45)_100%)]" />

        {/* Brand colour tint */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-orange-900/10 mix-blend-overlay" />
      </div>

      {/* === DECORATIVE ELEMENTS === */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated orbs */}
        <motion.div
          animate={{ x: [0, 60, 0], y: [0, -30, 0], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 -left-20 w-[450px] h-[450px] bg-orange-500/25 rounded-full blur-[140px]"
        />
        <motion.div
          animate={{ x: [0, -50, 0], y: [0, 40, 0], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/3 right-0 w-[350px] h-[350px] bg-blue-500/20 rounded-full blur-[120px]"
        />

        {/* Rotating circles */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 right-1/4 w-[500px] h-[500px]"
        >
          <div className="w-full h-full border border-white/5 rounded-full" />
        </motion.div>
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 left-1/3 w-[350px] h-[350px]"
        >
          <div className="w-full h-full border border-orange-500/10 rounded-full border-dashed" />
        </motion.div>

        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:80px_80px]" />

        {/* Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: 2 + Math.random() * 3,
              height: 2 + Math.random() * 3,
              background: i % 3 === 0 ? 'rgba(249,115,22,0.6)' : 'rgba(59,130,246,0.5)',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -(150 + Math.random() * 250)],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 6,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      {/* === CONTENT === */}
      <motion.div 
        style={{ y }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32"
      >
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Content — sits on the dark side */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-8"
            >
              <Flame className="w-4 h-4 text-orange-400" />
              <span className="text-sm text-white/90 font-medium">Premium LPG Cylinders</span>
            </motion.div>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.95] mb-8">
              <span className="text-white block">Quality Gas</span>
              <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 bg-clip-text text-transparent block py-2">
                For Every
              </span>
              <span className="text-white block">Application</span>
            </h1>

            <p className="text-xl lg:text-2xl text-white/70 mb-10 max-w-xl leading-relaxed">
              From compact <span className="text-orange-400 font-semibold">3kg</span> cylinders for camping to industrial{' '}
              <span className="text-orange-400 font-semibold">48kg</span> tanks — all certified, all delivered free.
            </p>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-5 mb-10"
            >
              {[
                { icon: Package, value: "7", label: "Sizes" },
                { icon: Truck, value: "Free", label: "Delivery" },
                { icon: ShieldCheck, value: "100%", label: "Certified" },
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/[0.07] backdrop-blur-xl border border-white/10"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500/20 to-amber-500/20 flex items-center justify-center">
                    <stat.icon className="w-5 h-5 text-orange-400" />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-white leading-tight">{stat.value}</p>
                    <p className="text-white/50 text-xs">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="tel:+27619273855"
                whileHover={{ scale: 1.03, boxShadow: "0 20px 40px rgba(249,115,22,0.35)" }}
                whileTap={{ scale: 0.97 }}
                className="group relative flex items-center gap-3 px-8 py-4 rounded-full overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500 bg-[length:200%_100%] animate-shimmer" />
                <div className="relative flex items-center gap-3 text-[#0a1628]">
                  <Phone className="w-5 h-5" />
                  <span className="font-bold text-lg">Order Now</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.a>
              <a
                href="#products-grid"
                className="group flex items-center gap-3 px-8 py-4 rounded-full border-2 border-white/25 text-white font-semibold hover:border-orange-500/60 hover:bg-orange-500/10 transition-all duration-300 backdrop-blur-sm"
              >
                <span className="text-lg">Browse Sizes</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right — floating badges (image is in background now) */}
          <motion.div
            className="lg:col-span-5 relative hidden lg:block"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className="relative h-[420px]">
              {/* Size Range Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9, type: "spring", stiffness: 200 }}
                className="absolute top-0 right-0"
              >
                <motion.div
                  animate={{ y: [0, -14, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                  className="p-6 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center">
                      <Package className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-white">3kg – 48kg</p>
                      <p className="text-white/60 text-sm">All Sizes Available</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Best Seller Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.1, type: "spring", stiffness: 200 }}
                className="absolute bottom-16 left-0"
              >
                <motion.div
                  animate={{ y: [0, -11, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="p-5 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex gap-0.5">
                      {[1,2,3,4,5].map((s) => (
                        <Star key={s} className="w-4 h-4 text-amber-400 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-white font-bold">9kg Best Seller</span>
                  </div>
                </motion.div>
              </motion.div>

              {/* Free Delivery Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.3, type: "spring", stiffness: 200 }}
                className="absolute top-1/2 right-8 -translate-y-1/2"
              >
                <motion.div
                  animate={{ y: [0, -9, 0], rotate: [0, 2, -2, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="p-5 rounded-2xl bg-gradient-to-br from-blue-500/15 to-cyan-500/15 backdrop-blur-xl border border-blue-500/25"
                >
                  <div className="flex items-center gap-3">
                    <Truck className="w-7 h-7 text-blue-400" />
                    <div>
                      <p className="font-bold text-white">FREE</p>
                      <p className="text-blue-300 text-xs">Pretoria Delivery</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Certified Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
                className="absolute bottom-0 right-1/4"
              >
                <motion.div
                  animate={{ y: [0, -7, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                  className="px-5 py-3 rounded-full bg-gradient-to-r from-green-500/15 to-emerald-500/15 backdrop-blur-xl border border-green-500/25"
                >
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-green-400" />
                    <span className="font-semibold text-white text-sm">SABS Certified</span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.a
          href="#products-grid"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs uppercase tracking-[0.2em] text-white/40 font-medium">Explore sizes</span>
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-orange-500 rounded-full"
            />
          </div>
        </motion.a>
      </motion.div>
    </section>
  );
}

// Product Card Component
function ProductCard({ product, index, onSelect }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      onClick={() => onSelect(product)}
      className="group relative cursor-pointer"
    >
      {/* Popular Badge */}
      {product.popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 px-4 py-1 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-[#0a1628] text-xs font-bold shadow-lg shadow-orange-500/25">
          🔥 Most Popular
        </div>
      )}

      <div className={`relative overflow-hidden rounded-3xl bg-white/[0.05] backdrop-blur-sm border transition-all duration-500 ${product.popular ? 'border-orange-500/50 shadow-lg shadow-orange-500/10' : 'border-white/10 group-hover:border-orange-500/30'}`}>
        {/* Image Container */}
        <div className="relative h-48 overflow-hidden bg-gradient-to-b from-blue-900/50 to-transparent">
          <motion.img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover opacity-80"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-[#0a1628]/50 to-transparent" />
          
          {/* Size Badge */}
          <div className="absolute top-4 right-4 w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center shadow-xl shadow-orange-500/25">
            <span className="text-xl font-bold text-white">{product.size}</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">
                {product.name}
              </h3>
              <p className="text-orange-400 text-sm">{product.subtitle}</p>
            </div>
          </div>

          <p className="text-white/60 text-sm mb-4 line-clamp-2">
            {product.description}
          </p>

          {/* Quick Info */}
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center gap-1 text-xs text-white/50">
              <Timer className="w-3.5 h-3.5" />
              <span>{product.duration}</span>
            </div>
            <div className="flex items-center gap-1 text-xs text-white/50">
              <Gauge className="w-3.5 h-3.5" />
              <span className="capitalize">{product.category}</span>
            </div>
          </div>

          {/* Features */}
          <div className="flex flex-wrap gap-2 mb-4">
            {product.features.map((feature, i) => (
              <span key={i} className="px-2 py-1 rounded-full bg-white/5 text-white/70 text-xs">
                {feature}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center justify-between pt-4 border-t border-white/10">
            <button className="flex items-center gap-2 text-orange-400 text-sm font-medium hover:text-orange-300 transition-colors">
              <span>View Details</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <motion.a
              href="tel:+27619273855"
              whileTap={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/20 text-orange-400 text-sm font-medium hover:bg-orange-500/30 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Order</span>
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Product Modal
function ProductModal({ product, onClose }) {
  if (!product) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

      {/* Modal */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#0a1628]/95 backdrop-blur-xl border border-white/20"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 backdrop-blur flex items-center justify-center hover:bg-white/20 transition-colors"
        >
          <X className="w-5 h-5 text-white" />
        </button>

        <div className="grid md:grid-cols-2">
          {/* Image Side */}
          <div className="relative h-64 md:h-full min-h-[400px] bg-gradient-to-br from-blue-900/50 to-orange-900/30">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-transparent md:bg-gradient-to-r" />
            
            {/* Size Badge */}
            <div className="absolute top-6 left-6 w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center shadow-xl shadow-orange-500/25">
              <span className="text-2xl font-bold text-white">{product.size}</span>
            </div>

            {product.popular && (
              <div className="absolute top-6 right-6 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-[#0a1628] text-sm font-bold">
                🔥 Best Seller
              </div>
            )}
          </div>

          {/* Content Side */}
          <div className="p-8">
            <div className="mb-6">
              <p className="text-orange-400 text-sm font-medium mb-2">{product.subtitle}</p>
              <h2 className="text-3xl font-bold text-white mb-3">{product.name}</h2>
              <p className="text-white/70">{product.description}</p>
            </div>

            {/* Duration & Category */}
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10">
                <Timer className="w-5 h-5 text-orange-400" />
                <div>
                  <p className="text-white text-sm font-medium">Typical Duration</p>
                  <p className="text-white/60 text-xs">{product.duration}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10">
                <Gauge className="w-5 h-5 text-blue-400" />
                <div>
                  <p className="text-white text-sm font-medium">Category</p>
                  <p className="text-white/60 text-xs capitalize">{product.category}</p>
                </div>
              </div>
            </div>

            {/* Best Used For */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-white mb-3">Best Used For</h3>
              <div className="grid grid-cols-2 gap-3">
                {product.uses.map((use, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0" />
                    <span className="text-white/70 text-sm">{use}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-white mb-3">Features</h3>
              <div className="flex flex-wrap gap-2">
                {product.features.map((feature, i) => (
                  <span key={i} className="px-3 py-1.5 rounded-full bg-orange-500/20 text-orange-400 text-sm">
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4">
              <motion.a
                href="tel:+27619273855"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 flex items-center justify-center gap-3 px-6 py-4 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-[#0a1628] font-bold shadow-xl shadow-orange-500/25"
              >
                <Phone className="w-5 h-5" />
                <span>Order Now</span>
              </motion.a>
              <motion.a
                href="https://wa.me/27619273855"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-3 px-6 py-4 rounded-full border-2 border-white/20 text-white font-medium hover:border-green-500/50 hover:bg-green-500/10 transition-colors"
              >
                <span>WhatsApp</span>
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// Products Grid Section
function ProductsGridSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts = activeCategory === "all" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <section id="products-grid" className="py-24 bg-[#0a1628] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6"
          >
            <Sparkles className="w-4 h-4 text-orange-400" />
            <span className="text-orange-400 text-sm font-medium">Our Products</span>
          </motion.div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Find Your{' '}
            <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
              Perfect Size
            </span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Quality LPG cylinders for every need. All certified, inspected, and delivered free.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-full font-medium transition-all ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-[#0a1628] shadow-lg shadow-orange-500/25'
                  : 'bg-white/5 text-white/70 hover:text-white border border-white/10 hover:border-orange-500/30'
              }`}
            >
              <category.icon className="w-4 h-4" />
              <span>{category.label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <motion.div 
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                index={index}
                onSelect={setSelectedProduct}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Product Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <ProductModal
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

// Comparison Section
function ComparisonSection() {
  return (
    <section id="size-guide" className="py-24 bg-gradient-to-b from-[#0a1628] via-[#0d1d35] to-[#0a1628] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6"
          >
            <Info className="w-4 h-4 text-blue-400" />
            <span className="text-blue-400 text-sm font-medium">Size Guide</span>
          </motion.div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Which Size Is{' '}
            <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
              Right For You?
            </span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Not sure which cylinder to choose? Here's a quick guide to help you decide.
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-x-auto rounded-2xl border border-white/10"
        >
          <table className="w-full min-w-[800px]">
            <thead>
              <tr className="border-b border-white/10 bg-white/[0.03]">
                <th className="text-left py-4 px-6 text-white/60 font-medium">Size</th>
                <th className="text-left py-4 px-4 text-white/60 font-medium">Best For</th>
                <th className="text-left py-4 px-4 text-white/60 font-medium">Duration</th>
                <th className="text-left py-4 px-4 text-white/60 font-medium">Category</th>
                <th className="text-left py-4 px-4 text-white/60 font-medium"></th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <motion.tr
                  key={product.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className={`border-b border-white/5 hover:bg-white/5 transition-colors ${product.popular ? 'bg-orange-500/5' : ''}`}
                >
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${product.popular ? 'bg-gradient-to-br from-orange-500 to-amber-500' : 'bg-blue-500/20'}`}>
                        <span className="text-white font-bold text-sm">{product.size}</span>
                      </div>
                      <div>
                        <p className="text-white font-medium">{product.name}</p>
                        {product.popular && (
                          <span className="text-orange-400 text-xs">⭐ Best Seller</span>
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-white/70 text-sm">{product.uses[0]}</td>
                  <td className="py-4 px-4 text-white/70 text-sm">{product.duration}</td>
                  <td className="py-4 px-4">
                    <span className={`px-3 py-1 rounded-full text-xs capitalize ${
                      product.category === 'residential' ? 'bg-green-500/20 text-green-400' :
                      product.category === 'commercial' ? 'bg-blue-500/20 text-blue-400' :
                      'bg-purple-500/20 text-purple-400'
                    }`}>
                      {product.category}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <motion.a
                      href="tel:+27619273855"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/20 text-orange-400 text-sm font-medium hover:bg-orange-500/30 transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Order</span>
                    </motion.a>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}

// Safety Section
function SafetySection() {
  const safetyFeatures = [
    {
      icon: ShieldCheck,
      title: "Safety Certified",
      description: "All cylinders undergo rigorous safety inspections and meet national standards.",
    },
    {
      icon: CheckCircle2,
      title: "Quality Guaranteed",
      description: "We only supply premium quality LPG that burns clean and efficient.",
    },
    {
      icon: Info,
      title: "Safety Training",
      description: "Our team provides safety tips and proper handling instructions with every delivery.",
    },
  ];

  return (
    <section id="safety" className="py-24 bg-[#0a1628] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* VISION: Professional photo showing gas cylinder safety inspection,
                technician checking valve, or safety certification process */}
            <div className="relative rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=600&h=500&fit=crop"
                alt="Gas Safety Inspection"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-transparent" />
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-6 -right-6 p-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-green-500/30"
            >
              <ShieldCheck className="w-12 h-12 text-green-400 mb-2" />
              <p className="text-white font-bold">100% Safe</p>
              <p className="text-white/60 text-sm">Certified</p>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-6"
            >
              <ShieldCheck className="w-4 h-4 text-green-400" />
              <span className="text-green-400 text-sm font-medium">Your Safety First</span>
            </motion.div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              Safety Is Our{' '}
              <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                Top Priority
              </span>
            </h2>
            <p className="text-white/70 text-lg mb-8">
              We take gas safety seriously. Every cylinder we supply is thoroughly inspected, properly maintained, and meets all safety standards. Your peace of mind is our guarantee.
            </p>

            <div className="space-y-6">
              {safetyFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-green-500/20 border border-green-500/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-7 h-7 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-white/60">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// CTA Section
function CTASection() {
  return (
    <section id="products-cta" className="py-24 bg-gradient-to-b from-[#0a1628] to-[#0d1d35] relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-orange-500/20 to-blue-500/20 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Sparkles className="w-12 h-12 text-orange-400 mx-auto mb-6" />
          
          <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-6">
            Ready to{' '}
            <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
              Order?
            </span>
          </h2>

          <p className="text-xl text-white/60 mb-10 max-w-2xl mx-auto">
            Call us now or visit our store. Free delivery for all orders in Pretoria!
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              href="tel:+27619273855"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-[#0a1628] font-bold text-lg shadow-2xl shadow-orange-500/25"
            >
              <Phone className="w-5 h-5" />
              <span>+27 61 927 3855</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <Link
              to="/contact"
              className="group flex items-center gap-3 px-8 py-4 rounded-full border-2 border-white/20 text-white font-semibold hover:border-orange-500/50 hover:bg-orange-500/10 transition-all"
            >
              <span>Contact Us</span>
              <ArrowUpRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Main Products Page Component
export default function Products() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <SEO />
      <HeroSection />
      <ProductsGridSection />
      <ComparisonSection />
      <SafetySection />
      <CTASection />
    </motion.div>
  );
}