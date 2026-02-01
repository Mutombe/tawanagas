import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Award, 
  Target, 
  Heart,
  Sparkles,
  ArrowRight,
  MapPin,
  Shield,
  Zap,
  Clock,
  Truck,
  CheckCircle2,
  Quote
} from 'lucide-react';

// SEO Component  
function SEO() {
  return (
    <>
      <title>About Us | Tawana Gas Refill & Exchange | Our Story</title>
      <meta name="description" content="Learn about Tawana Gas Refill & Exchange - Pretoria's trusted LPG gas supplier. Discover our commitment to clean, reliable, and fast gas delivery services." />
    </>
  );
}

// Hero Section with Parallax
function AboutHero() {
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
      id="about"
      className="relative min-h-[80vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      {/* VISION: Background should show an industrial/professional gas facility or team at work.
          Ideal image: professional team photo or industrial gas storage facility with dramatic lighting */}
      <div className="absolute inset-0">
        <img 
          src="/6.jpg"
          alt="Industrial Background"
          loading="eager"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/90 via-[#0a1628]/80 to-[#0a1628]"></div>
      </div>

      {/* Decorative Elements */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0"
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]"></div>
      </motion.div>

      {/* Content */}
      <motion.div 
        style={{ opacity }}
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-32"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span className="inline-block px-4 py-1 rounded-full glass text-orange-400 text-sm font-medium mb-6">
            Our Story
          </span>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Fueling <span className="gradient-text">Dreams</span>,
            <br />
            Powering <span className="gradient-text-blue">Lives</span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            At Tawana Gas, we believe in more than just delivering gas. We're dedicated to powering the everyday moments that matter most to you and your family.
          </p>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-orange-400"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

// Mission & Vision Section
function MissionVision() {
  return (
    <section className="py-24 bg-[#0a1628] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-gradient-to-br from-orange-500/10 to-amber-500/5 border border-orange-500/20"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-[#0a1628]" />
            </div>
            <h2 className="font-display text-3xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-white/70 leading-relaxed text-lg">
              To provide Pretoria and surrounding areas with <span className="text-orange-400 font-medium">clean, reliable, and fast</span> LPG gas services, ensuring that every home and business has access to quality energy solutions when they need it most.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-gradient-to-br from-blue-500/10 to-cyan-500/5 border border-blue-500/20"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-6">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h2 className="font-display text-3xl font-bold text-white mb-4">Our Vision</h2>
            <p className="text-white/70 leading-relaxed text-lg">
              To become South Africa's most <span className="text-blue-400 font-medium">trusted and accessible</span> LPG gas provider, known for our exceptional service, competitive prices, and unwavering commitment to customer satisfaction.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Story Section with Timeline
function StorySection() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#0a1628] to-[#050d1a] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full glass text-amber-400 text-sm font-medium mb-4">
            Who We Are
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
            The Tawana <span className="gradient-text">Story</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          {/* VISION: This should show the Tawana Gas team, storefront, or delivery vehicle.
              Ideal: Professional photo of gas delivery service or team at work */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop"
                alt="Our Team"
                className="w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/80 to-transparent"></div>
            </div>
            
            {/* Floating Card */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, type: "spring" }}
              className="absolute -bottom-6 -right-6 p-6 rounded-2xl glass flame-glow"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-orange-500/20">
                  <MapPin className="w-6 h-6 text-orange-400" />
                </div>
                <div>
                  <p className="text-white font-bold text-lg">Pretoria Based</p>
                  <p className="text-white/60 text-sm">169 Bourke Street</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6 text-white/80 text-lg leading-relaxed">
              <p>
                At <span className="text-orange-400 font-semibold">Tawana Gas Refill & Exchange</span>, we are dedicated to powering your home and business with energy solutions that are clean, reliable, and fast. Based in the heart of Pretoria, we understand that access to energy shouldn't be a hassle, which is why we've built our service around your convenience.
              </p>
              <p>
                Our journey began with a simple belief: everyone deserves access to quality gas services without the wait. Today, we're proud to serve thousands of happy customers across Pretoria and the surrounding areas.
              </p>
              <p>
                We pride ourselves on being a trusted LPG gas distributor that prioritizes safety and speed. From quick refills to seamless exchanges, <span className="text-blue-400 font-semibold">Tawana Gas</span> is your go-to partner for dependable energy.
              </p>
            </div>

            {/* Values */}
            <div className="mt-10 grid grid-cols-2 gap-4">
              {[
                { icon: Heart, label: "Customer First" },
                { icon: Shield, label: "Safety Priority" },
                { icon: Zap, label: "Fast Service" },
                { icon: Award, label: "Quality Assured" },
              ].map((value, index) => (
                <motion.div
                  key={value.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/5"
                >
                  <value.icon className="w-5 h-5 text-orange-400" />
                  <span className="text-white text-sm font-medium">{value.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Why Choose Us Section
function WhyChooseUs() {
  const reasons = [
    {
      icon: Clock,
      title: "Always Available",
      description: "We operate 24 hours a day, 7 days a week, ensuring you never run out of gas when you need it most."
    },
    {
      icon: MapPin,
      title: "Local Experts",
      description: "Located at 169 Bourke Street, Pretoria, we are deeply rooted in the community and committed to serving our neighbors."
    },
    {
      icon: Truck,
      title: "Free Delivery",
      description: "To make your life easier, we offer free delivery services throughout the Pretoria area."
    },
    {
      icon: Users,
      title: "Versatile Options",
      description: "Whether you need a small 3kg cylinder for camping or a massive 48kg tank for industrial use, we stock a full range."
    }
  ];

  return (
    <section className="py-24 bg-[#050d1a] relative overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-orange-500/5 rounded-full blur-[150px]"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-blue-500/5 rounded-full blur-[150px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full glass text-green-400 text-sm font-medium mb-4">
            Our Promise
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Why <span className="gradient-text">Choose Us?</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-6 rounded-3xl glass hover:bg-white/5 transition-all duration-300"
            >
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500/20 to-amber-500/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <reason.icon className="w-7 h-7 text-orange-400" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-white mb-2">{reason.title}</h3>
                  <p className="text-white/60 leading-relaxed">{reason.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Testimonial Section
function TestimonialSection() {
  const testimonials = [
    {
      quote: "Best gas delivery service in Pretoria! Always on time and the team is incredibly professional.",
      author: "Sarah M.",
      role: "Restaurant Owner"
    },
    {
      quote: "24/7 availability is a game changer. Never had to worry about running out of gas again.",
      author: "John D.",
      role: "Home Owner"
    },
    {
      quote: "Excellent customer service and competitive prices. Highly recommend Tawana Gas!",
      author: "Maria K.",
      role: "Business Manager"
    }
  ];

  return (
    <section className="py-24 bg-[#0a1628] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full glass text-pink-400 text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
            What Our <span className="gradient-text">Customers</span> Say
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-3xl glass"
            >
              <Quote className="w-10 h-10 text-orange-400/30 mb-4" />
              <p className="text-white/80 text-lg mb-6 leading-relaxed">"{testimonial.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center">
                  <span className="text-[#0a1628] font-bold">{testimonial.author[0]}</span>
                </div>
                <div>
                  <p className="text-white font-medium">{testimonial.author}</p>
                  <p className="text-white/60 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// CTA Section
function AboutCTA() {
  return (
    <section className="py-24 bg-gradient-to-t from-[#050d1a] to-[#0a1628] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Experience the <span className="gradient-text">Difference?</span>
          </h2>
          <p className="text-xl text-white/70 mb-10">
            Join thousands of satisfied customers who trust Tawana Gas for their energy needs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-[#0a1628] font-bold text-lg hover:shadow-2xl hover:shadow-orange-500/25 transition-shadow"
            >
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/products"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-white/20 text-white font-semibold hover:border-orange-500/50 hover:bg-orange-500/10 transition-all"
            >
              View Products
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Main About Component
export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="page-transition"
    >
      <SEO />
      <AboutHero />
      <MissionVision />
      <StorySection />
      <WhyChooseUs />
      <TestimonialSection />
      <AboutCTA />
    </motion.div>
  );
}
