import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Truck, 
  RefreshCw, 
  Clock, 
  ShieldCheck, 
  MapPin,
  Phone,
  ArrowRight,
  Flame,
  Zap,
  Building2,
  Home,
  Utensils,
  Factory,
  CheckCircle2,
  Sparkles,
  Timer,
  BadgeCheck,
  HeartHandshake,
  PackageCheck,
  ArrowUpRight
} from 'lucide-react';

// SEO Component
function SEO() {
  return (
    <>
      <title>Our Services | Tawana Gas Refill & Exchange | Pretoria LPG Delivery</title>
      <meta name="description" content="Professional LPG gas services in Pretoria. Gas refills, cylinder exchanges, free delivery, emergency services. 24/7 available for residential and commercial customers." />
    </>
  );
}

// Hero Section - Diagonal Split Design
function HeroSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section 
      ref={containerRef}
      id="services-hero"
      className="relative min-h-[80vh] flex items-center overflow-hidden bg-[#0a1628]"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Diagonal Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-transparent to-orange-900/30"></div>
        
        {/* Animated Mesh */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/2 -right-1/2 w-full h-full"
        >
          <div className="w-full h-full bg-[conic-gradient(from_0deg,transparent,rgba(249,115,22,0.1),transparent,rgba(59,130,246,0.1),transparent)] blur-3xl"></div>
        </motion.div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        
        {/* Floating Icons */}
        {[Truck, RefreshCw, Clock, ShieldCheck, Flame].map((Icon, i) => (
          <motion.div
            key={i}
            className="absolute text-white/5"
            style={{
              left: `${15 + i * 20}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{ 
              y: [0, -30, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{ 
              duration: 5 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          >
            <Icon className="w-24 h-24" strokeWidth={0.5} />
          </motion.div>
        ))}
      </div>

      {/* Hero Content */}
      <motion.div 
        style={{ y, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32"
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
            >
              <Sparkles className="w-4 h-4 text-orange-400" />
              <span className="text-sm text-white/80">Premium LPG Services</span>
            </motion.div>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6">
              <span className="text-white">Services</span>
              <br />
              <span className="text-white">Built For</span>
              <br />
              <span className="gradient-text">Excellence</span>
            </h1>

            <p className="text-xl text-white/70 mb-8 max-w-lg">
              From quick refills to emergency deliveries, we provide comprehensive LPG solutions tailored to your needs. Experience the Tawana Gas difference.
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.a
                href="tel:+27619273855"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-[#0a1628] font-bold text-lg shadow-2xl shadow-orange-500/25"
              >
                <Phone className="w-5 h-5" />
                <span>Call Us Now</span>
              </motion.a>
              <Link
                to="/contact"
                className="group flex items-center gap-3 px-8 py-4 rounded-full border-2 border-white/20 text-white font-semibold hover:border-orange-500/50 hover:bg-orange-500/10 transition-all"
              >
                <span>Get Quote</span>
                <ArrowUpRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>

          {/* Right - Service Quick Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { icon: Timer, value: "2-4 hrs", label: "Delivery Time", color: "from-orange-500 to-amber-500" },
              { icon: Clock, value: "24/7", label: "Availability", color: "from-blue-500 to-cyan-500" },
              { icon: MapPin, value: "Free", label: "Local Delivery", color: "from-green-500 to-emerald-500" },
              { icon: BadgeCheck, value: "100%", label: "Safe & Certified", color: "from-purple-500 to-pink-500" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl blur-xl" 
                     style={{ background: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }}></div>
                <div className="relative p-6 rounded-3xl glass border border-white/10 group-hover:border-orange-500/30 transition-colors">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
                  <p className="text-white/60 text-sm">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a1628] to-transparent"></div>
    </section>
  );
}

// Main Services Section - Bento Grid Layout
function MainServicesSection() {
  const services = [
    {
      id: 1,
      title: "Gas Refills",
      description: "Quick and efficient LPG refilling service for all cylinder sizes. Our trained technicians ensure safe and proper refilling every time.",
      icon: RefreshCw,
      features: ["All cylinder sizes", "Safety certified", "Quick turnaround", "Quality guaranteed"],
      color: "from-orange-500 to-amber-500",
      size: "large",
    },
    {
      id: 2,
      title: "Cylinder Exchange",
      description: "Seamless exchange program. Trade your empty cylinder for a full one instantly.",
      icon: PackageCheck,
      features: ["Instant swap", "Quality cylinders", "Fair pricing"],
      color: "from-blue-500 to-cyan-500",
      size: "medium",
    },
    {
      id: 3,
      title: "Free Delivery",
      description: "Complimentary delivery service throughout Pretoria. We bring the gas to your doorstep.",
      icon: Truck,
      features: ["Pretoria-wide", "2-4 hour delivery", "Track your order"],
      color: "from-green-500 to-emerald-500",
      size: "medium",
    },
    {
      id: 4,
      title: "24/7 Emergency Service",
      description: "Out of gas at midnight? No problem! Our emergency service ensures you're never left in the cold.",
      icon: Zap,
      features: ["Round the clock", "Fast response", "Priority handling"],
      color: "from-red-500 to-orange-500",
      size: "large",
    },
    {
      id: 5,
      title: "Safety Inspection",
      description: "Professional inspection of your gas equipment and connections to ensure optimal safety.",
      icon: ShieldCheck,
      features: ["Expert inspection", "Safety certificate", "Maintenance tips"],
      color: "from-purple-500 to-pink-500",
      size: "small",
    },
    {
      id: 6,
      title: "Business Solutions",
      description: "Tailored gas supply solutions for restaurants, hotels, and industrial clients.",
      icon: Building2,
      features: ["Bulk orders", "Regular supply", "Dedicated support"],
      color: "from-indigo-500 to-blue-500",
      size: "small",
    },
  ];

  return (
    <section id="main-services" className="py-24 bg-[#0a1628] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[150px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass text-orange-400 text-sm font-medium mb-4">
            What We Offer
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
            Comprehensive <span className="gradient-text">Gas Services</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            From residential to commercial, we have all your LPG needs covered with professional service and competitive pricing.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[190px]">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`
                relative group rounded-3xl overflow-hidden
                ${service.size === 'large' ? 'md:col-span-2 md:row-span-2' : ''}
                ${service.size === 'medium' ? 'md:col-span-2 lg:col-span-1 lg:row-span-2' : ''}
                ${service.size === 'small' ? 'md:col-span-1 lg:row-span-2' : ''}
              `}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
              
              {/* Glass Background */}
              <div className="absolute inset-0 glass border border-white/10 group-hover:border-orange-500/30 transition-colors"></div>
              
              {/* Content */}
              <div className="relative h-full p-6 flex flex-col">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-white/60 text-sm leading-relaxed mb-4 flex-grow">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0" />
                      <span className="text-white/70">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Arrow */}
                <motion.div
                  className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  whileHover={{ scale: 1.1 }}
                >
                  <ArrowRight className="w-5 h-5 text-white" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Customer Types Section - Horizontal Scroll
function CustomerTypesSection() {
  const customers = [
    {
      type: "Residential",
      icon: Home,
      description: "Perfect for home cooking, heating, and everyday use. We serve families across Pretoria with reliable gas supply.",
      benefits: ["Family-friendly sizes", "Safe home delivery", "Flexible payment", "Regular supply options"],
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
      /* VISION: Modern kitchen with gas stove being used for cooking, warm lighting, family atmosphere */
    },
    {
      type: "Restaurants & Hospitality",
      icon: Utensils,
      description: "Keep your kitchen running 24/7 with our reliable commercial gas supply solutions.",
      benefits: ["Bulk supply", "Priority delivery", "Scheduled refills", "Emergency backup"],
      image: "https://images.unsplash.com/photo-1567521464027-f127ff144326?w=600&h=400&fit=crop",
      /* VISION: Professional restaurant kitchen with chef cooking over gas flame */
    },
    {
      type: "Industrial",
      icon: Factory,
      description: "Large-scale gas solutions for manufacturing, processing, and industrial operations.",
      benefits: ["48kg cylinders", "Volume discounts", "Dedicated account", "Safety compliance"],
      image: "/13.jpg",
      /* VISION: Industrial facility or factory setting with professional equipment */
    },
  ];

  return (
    <section id="customer-types" className="py-24 bg-gradient-to-b from-[#0a1628] via-[#0d1d35] to-[#0a1628] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass text-blue-400 text-sm font-medium mb-4">
            Who We Serve
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
            Solutions For <span className="gradient-text">Every Need</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Whether you're cooking at home or running a commercial kitchen, we have the right gas solution for you.
          </p>
        </motion.div>

        {/* Customer Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {customers.map((customer, index) => (
            <motion.div
              key={customer.type}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-3xl glass border border-white/10 group-hover:border-orange-500/30 transition-all duration-500">
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <motion.img
                    src={customer.image}
                    alt={customer.type}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-[#0a1628]/50 to-transparent"></div>
                  
                  {/* Icon Badge */}
                  <div className="absolute top-4 right-4 w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center shadow-xl shadow-orange-500/25">
                    <customer.icon className="w-7 h-7 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                    {customer.type}
                  </h3>
                  <p className="text-white/60 text-sm mb-6 leading-relaxed">
                    {customer.description}
                  </p>

                  {/* Benefits */}
                  <div className="grid grid-cols-2 gap-3">
                    {customer.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-orange-400"></div>
                        <span className="text-white/70 text-xs">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Process Section - Timeline Style
function ProcessSection() {
  const steps = [
    {
      step: "01",
      title: "Contact Us",
      description: "Call, WhatsApp, or visit us. Tell us what you need.",
      icon: Phone,
    },
    {
      step: "02",
      title: "Place Order",
      description: "Select your cylinder size and delivery preference.",
      icon: PackageCheck,
    },
    {
      step: "03",
      title: "Quick Delivery",
      description: "We deliver to your doorstep within 2-4 hours.",
      icon: Truck,
    },
    {
      step: "04",
      title: "Enjoy",
      description: "Use your gas worry-free. We'll be here when you need more.",
      icon: HeartHandshake,
    },
  ];

  return (
    <section id="process" className="py-24 bg-[#0a1628] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-orange-500/10 to-blue-500/10 rounded-full blur-[200px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 rounded-full glass text-green-400 text-sm font-medium mb-4">
            How It Works
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
            Simple & <span className="gradient-text">Seamless</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Getting your gas has never been easier. Follow these simple steps.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-500 via-blue-500 to-green-500 -translate-y-1/2"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative"
              >
                {/* Card */}
                <div className="relative p-8 rounded-3xl glass border border-white/10 hover:border-orange-500/30 transition-colors text-center group">
                  {/* Step Number */}
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center text-white font-bold text-lg shadow-xl shadow-orange-500/25 z-10">
                    {step.step}
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl glass mx-auto mt-4 mb-6 flex items-center justify-center group-hover:bg-orange-500/20 transition-colors">
                    <step.icon className="w-8 h-8 text-orange-400" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-white/60 text-sm">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// CTA Section
function CTASection() {
  return (
    <section id="services-cta" className="py-24 bg-gradient-to-b from-[#0a1628] to-[#0d1d35] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]"
        >
          <div className="w-full h-full border border-orange-500/20 rounded-full"></div>
          <div className="absolute inset-8 border border-blue-500/20 rounded-full"></div>
          <div className="absolute inset-16 border border-green-500/20 rounded-full"></div>
        </motion.div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8">
            <Flame className="w-4 h-4 text-orange-400" />
            <span className="text-white/80 text-sm">Ready to Get Started?</span>
          </div>

          <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-6">
            Let's <span className="gradient-text">Power</span> Your World
          </h2>

          <p className="text-xl text-white/60 mb-10 max-w-2xl mx-auto">
            Contact us today and experience the Tawana Gas difference. Fast, reliable, and always at your service.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              href="tel:+27619273855"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-[#0a1628] font-bold text-lg shadow-2xl shadow-orange-500/25"
            >
              <Phone className="w-5 h-5" />
              <span>+27 61 927 3855</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <Link
              to="/products"
              className="group flex items-center gap-3 px-8 py-4 rounded-full border-2 border-white/20 text-white font-semibold hover:border-orange-500/50 hover:bg-orange-500/10 transition-all"
            >
              <span>View Products</span>
              <ArrowUpRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Contact Info */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-white/60">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-orange-400" />
              <span>169 Bourke Street, Pretoria</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-orange-400" />
              <span>Open 24/7</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Main Services Page Component
export default function Services() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <SEO />
      <HeroSection />
      <MainServicesSection />
      <CustomerTypesSection />
      <ProcessSection />
      <CTASection />
    </motion.div>
  );
}