import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';

export default function ServiceAreas() {
  const areas = [
    'Hammond',
    'Ponchatoula',
    'Amite City',
    'Independence',
    'Tickfaw',
    'Natalbany',
    'Loranger',
    'Robert',
  ];

  return (
    <section className="py-16 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-emerald-950 rounded-[1.5rem] md:rounded-[3rem] overflow-hidden relative p-6 md:p-16 lg:p-24">
          <div 
            className="absolute inset-0 opacity-20" 
            style={{ 
              backgroundImage: 'radial-gradient(#10B981 1px, transparent 1px)', 
              backgroundSize: '40px 40px' 
            }}
          />
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
            <div>
              <h2 className="text-emerald-400 font-semibold tracking-widest uppercase text-xs md:text-sm mb-3 md:mb-4">Service Areas</h2>
              <h3 className="text-3xl sm:text-4xl md:text-6xl font-display font-bold text-white mb-6 md:mb-8 leading-[1.1]">
                Proudly serving Hammond & beyond.
              </h3>
              <p className="text-base md:text-xl text-emerald-100/80 font-light leading-relaxed mb-6 md:mb-8">
                If you don’t see your location listed, feel free to contact us to check availability.
              </p>
              
              <div className="inline-flex items-center gap-3 glass-dark px-5 md:px-6 py-3 md:py-4 rounded-full text-emerald-100 text-sm md:text-base">
                <MapPin className="w-5 h-5 md:w-6 md:h-6 text-emerald-400" />
                <span className="font-medium">45-mile radius of Hammond, LA</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {areas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="glass-dark rounded-xl md:rounded-2xl p-4 md:p-6 text-center hover:bg-white/10 transition-colors border border-emerald-800/50"
                >
                  <span className="text-white font-display font-medium text-base md:text-lg">{area}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
