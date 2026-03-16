import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <section className="py-32 bg-stone-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
              <img 
                src="https://instagram.fdac2-2.fna.fbcdn.net/v/t39.30808-6/484508012_1215724673886907_4083255862637308941_n.jpg?stp=c0.0.1440.1079a_cp6_dst-jpg_e35_s1080x1080_tt6&_nc_cat=101&ig_cache_key=MzA4NzY2ODIxMDc0NTE2OTA4Mg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTA4MC5zZHIuQzMifQ%3D%3D&_nc_ohc=E2kGhnfHYeMQ7kNvwEjDjEN&_nc_oc=Adl0RjgmDXvgyVPs6gTdfWX-JK7Tp9xhVNrEfF0ru8Oi75PhUxLm4-yRdyrzPbnbfdg&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac2-2.fna&_nc_gid=-4_eNL-9aEW4QWl_Ff-v5Q&_nc_ss=8&oh=00_AfytcLYIngwVvfX7tPvpc_FlJwnCl3t6b_BBQw0AH4qUCw&oe=69BD15DC" 
                alt="Torrez Lawn Care team at work" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating Premium Badge */}
            <div className="absolute -bottom-6 right-4 md:-bottom-10 md:-right-10 glass p-6 md:p-8 rounded-[2rem] max-w-[260px] md:max-w-xs shadow-2xl">
              <div className="text-4xl md:text-5xl font-display font-bold text-emerald-600 mb-2">100%</div>
              <div className="text-sm md:text-base text-stone-800 font-medium leading-snug">Satisfaction Guaranteed on every single project.</div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:pl-12 mt-12 lg:mt-0"
          >
            <h2 className="text-emerald-600 font-semibold tracking-widest uppercase text-sm mb-4">Who We Are</h2>
            <h3 className="text-4xl md:text-6xl font-display font-bold text-stone-900 mb-8 leading-[1.1]">
              More than just a lawn care provider.
            </h3>
            
            <div className="space-y-6 text-lg text-stone-600 font-light leading-relaxed mb-10">
              <p>
                Torrez Lawn Care Services is a locally owned and operated company proudly serving Hammond, Louisiana and surrounding areas. We’re your neighbors who care deeply about the beauty and value of your property.
              </p>
              <p>
                Our mission is to provide honest work, reasonable pricing, and dependable service. We work closely with every customer to understand their unique needs and deliver results that last.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/services"
                className="bg-stone-900 hover:bg-stone-800 text-white px-8 py-4 rounded-full font-medium transition-colors text-center"
              >
                View Our Services
              </Link>
              <Link
                to="/contact"
                className="bg-emerald-100/50 text-emerald-800 hover:bg-emerald-100 px-8 py-4 rounded-full font-medium transition-colors text-center"
              >
                Request an Estimate
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
