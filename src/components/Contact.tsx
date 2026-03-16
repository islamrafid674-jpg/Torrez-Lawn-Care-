import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-32 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-16">
          
          <div className="lg:col-span-5">
            <h2 className="text-emerald-600 font-semibold tracking-widest uppercase text-sm mb-4">Get In Touch</h2>
            <h3 className="text-4xl md:text-6xl font-display font-bold text-stone-900 mb-8 leading-[1.1]">
              Let's discuss your project.
            </h3>
            <p className="text-xl text-stone-600 font-light leading-relaxed mb-12">
              Contact Torrez Lawn Care Services today for reliable property maintenance. We respond to all inquiries within 24 hours.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="bg-white p-4 rounded-2xl shadow-sm text-emerald-600">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-stone-900 text-lg mb-1">Phone</h4>
                  <p className="text-stone-600 font-light">(985) 555-0198</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="bg-white p-4 rounded-2xl shadow-sm text-emerald-600">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-stone-900 text-lg mb-1">Email</h4>
                  <p className="text-stone-600 font-light">contact@torrezlawncare.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="bg-white p-4 rounded-2xl shadow-sm text-emerald-600">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-stone-900 text-lg mb-1">Location</h4>
                  <p className="text-stone-600 font-light">Hammond, LA<br/>Serving a 45-mile radius</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="bg-white p-4 rounded-2xl shadow-sm text-emerald-600">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-stone-900 text-lg mb-1">Hours</h4>
                  <p className="text-stone-600 font-light">Mon-Fri: 7am - 6pm<br/>Sat: 8am - 2pm</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl shadow-stone-200/50 border border-stone-100">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-stone-700 mb-2">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full bg-stone-50 border-transparent focus:border-emerald-500 focus:bg-white focus:ring-2 focus:ring-emerald-200 rounded-xl px-4 py-3 transition-all outline-none"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-stone-700 mb-2">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full bg-stone-50 border-transparent focus:border-emerald-500 focus:bg-white focus:ring-2 focus:ring-emerald-200 rounded-xl px-4 py-3 transition-all outline-none"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-stone-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full bg-stone-50 border-transparent focus:border-emerald-500 focus:bg-white focus:ring-2 focus:ring-emerald-200 rounded-xl px-4 py-3 transition-all outline-none"
                      placeholder="(985) 555-0198"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full bg-stone-50 border-transparent focus:border-emerald-500 focus:bg-white focus:ring-2 focus:ring-emerald-200 rounded-xl px-4 py-3 transition-all outline-none"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-stone-700 mb-2">Service Needed</label>
                  <select
                    id="service"
                    className="w-full bg-stone-50 border-transparent focus:border-emerald-500 focus:bg-white focus:ring-2 focus:ring-emerald-200 rounded-xl px-4 py-3 transition-all outline-none"
                  >
                    <option>Lawn Maintenance</option>
                    <option>Landscaping</option>
                    <option>Pressure Washing</option>
                    <option>Fencing / Decks</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-2">Project Details</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full bg-stone-50 border-transparent focus:border-emerald-500 focus:bg-white focus:ring-2 focus:ring-emerald-200 rounded-xl px-4 py-3 transition-all resize-none outline-none"
                    placeholder="Tell us about your property and what you need..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-stone-900 hover:bg-emerald-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors flex items-center justify-center gap-2 group mt-4"
                >
                  Send Request
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
