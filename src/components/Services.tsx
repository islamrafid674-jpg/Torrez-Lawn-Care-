import { motion } from 'motion/react';
import { Scissors, Flower2, Droplets, Hammer, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const serviceCategories = [
    {
      title: 'Lawn Care',
      icon: Scissors,
      image: 'https://sunlightwaterandus.com/wp-content/uploads/2023/04/What-Is-the-Best-Time-To-Seed-Lawn-in-NJ-500x383.png',
      items: ['Grass Cutting', 'Weed Eating', 'Tree Trimming', 'Bush Trimming'],
    },
    {
      title: 'Landscaping',
      icon: Flower2,
      image: 'https://mikesbackyardnursery.com/wp-content/uploads/2014/03/rsz_dsc_0034.jpg',
      items: ['Garden Maintenance', 'Flower Bed Design', 'Mulch Installation', 'Pine Straw'],
    },
    {
      title: 'Pressure Washing',
      icon: Droplets,
      image: 'https://www.hotsyab.com/wp-content/uploads/2019/05/Hotsy_Pressure_Washer_PSI_vs_GPM.jpg',
      items: ['Driveways', 'Houses', 'Patios'],
    },
    {
      title: 'Property Builds',
      icon: Hammer,
      image: 'https://assets.savills.com/properties/GBCBRSCKS260004/CKS260004_01_l_lis.jpg',
      items: ['Fence Installation', 'Decks', 'Patio Construction'],
    },
    {
      title: 'Maintenance',
      icon: Wrench,
      image: 'https://img.freepik.com/free-photo/man-installs-heating-system-house-checks-pipes-with-wrench_169016-55822.jpg?semt=ais_hybrid&w=740&q=80',
      items: ['Gutters', 'Siding Repairs'],
    },
  ];

  return (
    <section className="py-16 md:py-32 bg-stone-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
          <h2 className="text-emerald-400 font-semibold tracking-widest uppercase text-xs md:text-sm mb-3 md:mb-4">Expertise</h2>
          <h3 className="text-3xl sm:text-4xl md:text-6xl font-display font-bold mb-4 md:mb-6">Comprehensive Care</h3>
          <p className="text-base md:text-lg text-stone-400 font-light">
            From routine maintenance to complete transformations, we have the skills to handle it all.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {serviceCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative h-[380px] md:h-[450px] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden cursor-pointer"
            >
              <img
                src={category.image}
                alt={category.title}
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-30 group-hover:scale-110 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/80 to-transparent" />
              
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                <category.icon className="w-8 h-8 md:w-10 md:h-10 text-emerald-400 mb-4 md:mb-6 transform group-hover:scale-110 transition-transform duration-500" />
                <h4 className="text-2xl md:text-3xl font-display font-bold mb-3 md:mb-4">
                  {category.title}
                </h4>
                <ul className="space-y-2">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-stone-300 font-light text-sm md:text-base">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
          
          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="group relative h-[380px] md:h-[450px] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden bg-emerald-900 flex flex-col items-center justify-center text-center p-6 md:p-8 border border-emerald-800"
          >
            <h4 className="text-2xl md:text-3xl font-display font-bold mb-3 md:mb-4 text-white">Need something else?</h4>
            <p className="text-sm md:text-base text-emerald-200 font-light mb-6 md:mb-8">We offer custom solutions for unique properties.</p>
            <Link
              to="/contact"
              className="bg-white text-emerald-900 px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold hover:bg-stone-100 transition-colors text-sm md:text-base"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
