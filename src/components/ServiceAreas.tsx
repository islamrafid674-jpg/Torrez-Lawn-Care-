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
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-emerald-950 rounded-[3rem] overflow-hidden relative p-8 md:p-16 lg:p-24">
          <div 
            className="absolute inset-0 opacity-20" 
            style={{ 
              backgroundImage: 'radial-gradient(#10B981 1px, transparent 1px)', 
              backgroundSize: '40px 40px' 
            }}
          />
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-emerald-400 font-semibold tracking-widest uppercase text-sm mb-4">Service Areas</h2>
              <h3 className="text-4xl md:text-6xl font-display font-bold text-white mb-8 leading-[1.1]">
                Proudly serving Hammond & beyond.
              </h3>
              <p className="text-xl text-emerald-100/80 font-light leading-relaxed mb-8">
                If you don’t see your location listed, feel free to contact us to check availability.
              </p>
              
              <div className="inline-flex items-center gap-3 glass-dark px-6 py-4 rounded-full text-emerald-100">
                <MapPin className="w-6 h-6 text-emerald-400" />
                <span className="font-medium">45-mile radius of Hammond, LA</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {areas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="glass-dark rounded-2xl p-6 text-center hover:bg-white/10 transition-colors border border-emerald-800/50"
                >
                  <span className="text-white font-display font-medium text-lg">{area}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
