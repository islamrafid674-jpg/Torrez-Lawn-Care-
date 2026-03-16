import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TestimonialsPreview() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      location: 'Hammond, LA',
      text: 'Torrez Lawn Care completely transformed our backyard. Their attention to detail and professionalism is unmatched. Highly recommend!',
      rating: 5,
    },
    {
      name: 'Michael Davis',
      location: 'Ponchatoula, LA',
      text: 'Reliable, affordable, and they always do a fantastic job. My lawn has never looked better since I hired them.',
      rating: 5,
    },
    {
      name: 'Emily Smith',
      location: 'Amite City, LA',
      text: 'They installed a new fence and did some landscaping around our patio. The crew was polite, worked hard, and the result is beautiful.',
      rating: 5,
    },
  ];

  return (
    <section className="py-16 md:py-32 bg-stone-100 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-stone-300 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-emerald-600 font-semibold tracking-widest uppercase text-xs md:text-sm mb-3 md:mb-4">Testimonials</h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-stone-900 mb-4 md:mb-6">
            Loved by homeowners across Louisiana.
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] shadow-sm border border-stone-100 relative group hover:shadow-xl transition-shadow duration-500"
            >
              <Quote className="absolute top-6 right-6 md:top-8 md:right-8 w-8 h-8 md:w-10 md:h-10 text-emerald-50 group-hover:text-emerald-100 transition-colors duration-500" />
              <div className="flex gap-1 mb-4 md:mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-emerald-400 text-emerald-400" />
                ))}
              </div>
              <p className="text-stone-600 font-light leading-relaxed mb-6 md:mb-8 relative z-10 text-sm md:text-base">
                "{testimonial.text}"
              </p>
              <div>
                <h4 className="font-display font-semibold text-stone-900 text-base md:text-lg">{testimonial.name}</h4>
                <p className="text-xs md:text-sm text-stone-500">{testimonial.location}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/testimonials"
            className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold rounded-full text-emerald-900 bg-emerald-100 hover:bg-emerald-200 transition-colors"
          >
            Read All Reviews
          </Link>
        </div>
      </div>
    </section>
  );
}
