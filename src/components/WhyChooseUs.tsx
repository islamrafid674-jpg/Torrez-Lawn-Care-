import { motion } from 'motion/react';
import { MapPin, DollarSign, FileSignature, Users, Home } from 'lucide-react';

export default function WhyChooseUs() {
  const benefits = [
    { icon: MapPin, text: 'Locally Owned & Operated' },
    { icon: DollarSign, text: 'Honest & Transparent Pricing' },
    { icon: FileSignature, text: 'Written Estimates Before Work' },
    { icon: Users, text: 'Reliable & Professional Team' },
    { icon: Home, text: 'Full Property Care Services' },
  ];

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-stone-50 rounded-[2rem] md:rounded-[3rem] p-6 md:p-16 lg:p-24 border border-stone-100">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
            
            <div>
              <h2 className="text-emerald-600 font-semibold tracking-widest uppercase text-sm mb-4">The Torrez Difference</h2>
              <h3 className="text-4xl md:text-6xl font-display font-bold text-stone-900 mb-8 leading-[1.1]">
                Doing things the right way, every time.
              </h3>
              <p className="text-xl text-stone-600 font-light leading-relaxed mb-8">
                From your first appointment to the final inspection, we make sure you stay informed and satisfied throughout the process.
              </p>
            </div>

            <div className="grid gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 flex items-center gap-6 group hover:shadow-md transition-shadow"
                >
                  <div className="bg-stone-50 p-4 rounded-xl text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <benefit.icon className="w-6 h-6" />
                  </div>
                  <span className="text-xl font-display font-semibold text-stone-900">{benefit.text}</span>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
