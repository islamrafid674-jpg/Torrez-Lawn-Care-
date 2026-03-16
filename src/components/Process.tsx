import { motion } from 'motion/react';

export default function Process() {
  const steps = [
    {
      title: 'Consultation',
      description: 'We schedule an in-person visit to understand your vision and evaluate your property.',
    },
    {
      title: 'Proposal',
      description: 'You receive a clear, detailed written estimate before any work begins.',
    },
    {
      title: 'Execution',
      description: 'Our expert team completes the work with meticulous attention to detail.',
    },
    {
      title: 'Perfection',
      description: 'We perform a rigorous final inspection to ensure our high standards are met.',
    },
  ];

  return (
    <section className="py-16 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-emerald-600 font-semibold tracking-widest uppercase text-xs md:text-sm mb-3 md:mb-4">Our Methodology</h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-stone-900 leading-tight">
              A seamless experience from start to finish.
            </h3>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 border-t border-stone-200 pt-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="text-5xl md:text-7xl font-display font-light text-stone-200 mb-4 md:mb-6 group-hover:text-emerald-600 transition-colors duration-500">
                0{index + 1}
              </div>
              <h4 className="text-xl md:text-2xl font-display font-semibold text-stone-900 mb-3 md:mb-4">{step.title}</h4>
              <p className="text-stone-600 leading-relaxed font-light text-sm md:text-base">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
