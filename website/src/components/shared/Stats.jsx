/* ============================================
   STATS SECTION - ENHANCED VERSION
   Features:
   - Blended background image
   - Count-up animation on numbers
   - Premium glassmorphism cards
   ============================================ */

import { motion, useInView } from 'framer-motion';
import React, { useRef, useState, useEffect } from 'react';
import { Users, Clock, Truck, CheckCircle2 } from 'lucide-react';

// Custom hook for count-up animation
function useCountUp(end, duration = 2000, startOnView = true) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (startOnView && !isInView) return;
    if (hasStarted) return;
    
    setHasStarted(true);
    
    // Parse the end value (handle strings like "5000+", "100%", etc.)
    const numericEnd = parseInt(end.toString().replace(/[^0-9]/g, '')) || 0;
    
    if (numericEnd === 0) {
      setCount(0);
      return;
    }

    const startTime = Date.now();
    const startValue = 0;

    const animate = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      
      // Easing function (easeOutExpo)
      const easeOutExpo = 1 - Math.pow(2, -10 * progress);
      
      const currentValue = Math.floor(startValue + (numericEnd - startValue) * easeOutExpo);
      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(numericEnd);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, end, duration, hasStarted, startOnView]);

  return { count, ref };
}

// Individual Stat Card with Count-Up
function StatCard({ stat, index }) {
  const { count, ref } = useCountUp(stat.numericValue, 2500);
  
  // Format the displayed value
  const formatValue = () => {
    if (stat.isTime) return stat.value; // "24/7" or "2-4hrs" - don't animate
    if (stat.suffix) return `${count.toLocaleString()}${stat.suffix}`;
    return count.toLocaleString();
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
      className="relative group"
    >
      {/* Card */}
      <div className="relative p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-orange-500/30 transition-all duration-500 overflow-hidden">
        {/* Hover Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-amber-500/0 group-hover:from-orange-500/10 group-hover:to-amber-500/5 transition-all duration-500" />
        
        {/* Icon */}
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-orange-500/20 to-amber-500/20 border border-orange-500/30 flex items-center justify-center relative"
        >
          <stat.icon className="w-8 h-8 text-orange-400" />
          {/* Icon glow */}
          <div className="absolute inset-0 rounded-2xl bg-orange-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </motion.div>
        
        {/* Value with Count-Up */}
        <div className="relative">
          <motion.p 
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 bg-clip-text text-transparent mb-2 tabular-nums"
          >
            {stat.isTime ? stat.value : formatValue()}
          </motion.p>
          
          {/* Animated underline */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 + 0.5, duration: 0.8 }}
            className="h-0.5 w-16 mx-auto bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"
          />
        </div>
        
        {/* Label */}
        <p className="text-white/60 text-sm md:text-base font-medium mt-3">{stat.label}</p>
      </div>
    </motion.div>
  );
}

function StatsSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  const stats = [
    { 
      value: "5000+", 
      numericValue: 5000, 
      suffix: "+",
      label: "Happy Customers", 
      icon: Users,
      isTime: false
    },
    { 
      value: "24/7", 
      numericValue: 0,
      label: "Availability", 
      icon: Clock,
      isTime: true // Don't animate time values
    },
    { 
      value: "2-4hrs", 
      numericValue: 0,
      label: "Delivery Time", 
      icon: Truck,
      isTime: true
    },
    { 
      value: "100%", 
      numericValue: 100,
      suffix: "%",
      label: "Satisfaction", 
      icon: CheckCircle2,
      isTime: false
    },
  ];

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 relative overflow-hidden">
      {/* === BLENDED BACKGROUND IMAGE === */}
      {/* VISION: Industrial gas facility, blue flame, or energy-related imagery 
          that conveys power and reliability */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1920&q=80&auto=format&fit=crop"
          alt="Industrial energy background"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-[#050d1a]/90" />
        
        {/* Gradient overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-transparent to-[#0a1628]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050d1a]/50 via-transparent to-[#050d1a]/50" />
        
        {/* Color accent overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-transparent to-blue-900/20 mix-blend-overlay" />
      </div>

      {/* === ANIMATED DECORATIVE ELEMENTS === */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Animated Flame Glow */}
        <motion.div
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-t from-orange-500/30 via-amber-500/20 to-transparent rounded-full blur-[150px]"
        />
        
        {/* Side glows */}
        <motion.div
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-32 top-1/2 -translate-y-1/2 w-64 h-96 bg-blue-500/20 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -right-32 top-1/2 -translate-y-1/2 w-64 h-96 bg-orange-500/20 rounded-full blur-[100px]"
        />
        
        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-orange-400/60 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0.5, 1, 0.5]
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      {/* === CONTENT === */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            transition={{ type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 backdrop-blur-sm mb-6"
          >
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 bg-orange-500 rounded-full"
            />
            <span className="text-orange-400 text-sm font-medium">Our Impact</span>
          </motion.div>
          
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Trusted by{' '}
            <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
              Thousands
            </span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Numbers that speak louder than words. Join the Tawana Gas family today.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>
        
        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-white/50 text-sm">
            Join thousands of satisfied customers across Pretoria
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default StatsSection;