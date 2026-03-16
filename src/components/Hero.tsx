import { motion } from 'motion/react';
import { ArrowRight, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-stone-950">
      {/* Background Image with Premium Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/024/624/600/small/lawn-maintenance-professional-at-work-photo.jpg"
          alt="Lawn Maintenance Professional"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover opacity-60 scale-105 animate-[pulse_20s_ease-in-out_infinite_alternate]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/40 via-stone-900/60 to-stone-950" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 100, x: Math.random() * 100 - 50, rotate: 0 }}
            animate={{ 
              opacity: [0, 0.5, 0], 
              y: -1000, 
              x: Math.random() * 200 - 100,
              rotate: 360 
            }}
            transition={{ 
              duration: 15 + Math.random() * 10, 
              repeat: Infinity, 
              delay: Math.random() * 5,
              ease: "linear"
            }}
            className="absolute bottom-0 text-emerald-500/20"
            style={{ left: `${Math.random() * 100}%` }}
          >
            <Leaf className="w-12 h-12 md:w-24 md:h-24" />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass-dark text-emerald-300 font-medium text-sm mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Premium Property Care in Hammond, LA
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] font-bold text-white leading-[1.1] tracking-tight mb-6 md:mb-8 text-balance"
          >
            Elevate Your Outdoors to <span className="text-emerald-400 font-light italic">Perfection</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg md:text-2xl text-stone-300 mb-8 md:mb-10 max-w-2xl mx-auto font-light leading-relaxed text-balance"
          >
            Reliable, high-end lawn care and landscaping services designed to make your property the envy of the neighborhood.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              to="/contact"
              className="bg-emerald-500 hover:bg-emerald-400 text-stone-950 px-8 py-4 rounded-full font-semibold text-lg transition-all flex items-center justify-center gap-2 group w-full sm:w-auto"
            >
              Request an Estimate
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/services"
              className="glass-dark hover:bg-white/10 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all flex items-center justify-center w-full sm:w-auto"
            >
              Explore Services
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
