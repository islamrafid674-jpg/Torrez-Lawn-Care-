import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

export default function TestimonialsPage() {
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
    {
      name: 'David Wilson',
      location: 'Tickfaw, LA',
      text: 'Great communication and excellent service. They show up when they say they will and leave the property looking pristine.',
      rating: 5,
    },
    {
      name: 'Jessica Brown',
      location: 'Loranger, LA',
      text: 'I hired them for pressure washing my driveway and house exterior. It looks brand new! Very satisfied with their work.',
      rating: 5,
    },
    {
      name: 'Robert Taylor',
      location: 'Hammond, LA',
      text: 'The best lawn care service in the area. They are consistent, thorough, and very easy to work with.',
      rating: 5,
    },
  ];

  return (
    <div className="pt-32 pb-24 bg-stone-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-stone-900 mb-6">Client Reviews</h1>
          <p className="text-xl text-stone-600 font-light">
            Don't just take our word for it. Here's what our customers have to say about our services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-[2rem] shadow-sm border border-stone-100 relative"
            >
              <Quote className="absolute top-8 right-8 w-10 h-10 text-emerald-100" />
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-emerald-400 text-emerald-400" />
                ))}
              </div>
              <p className="text-stone-600 font-light leading-relaxed mb-8 relative z-10">
                "{testimonial.text}"
              </p>
              <div>
                <h4 className="font-display font-semibold text-stone-900">{testimonial.name}</h4>
                <p className="text-sm text-stone-500">{testimonial.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
