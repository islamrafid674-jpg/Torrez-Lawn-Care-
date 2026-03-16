import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-400 pt-24 pb-12 border-t border-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Massive CTA */}
        <div className="mb-24 text-center">
          <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-8 tracking-tight">
            Ready to transform your property?
          </h2>
          <Link 
            to="/contact" 
            className="inline-flex items-center justify-center px-10 py-5 text-lg font-semibold rounded-full text-stone-950 bg-emerald-400 hover:bg-emerald-300 transition-colors"
          >
            Get Your Free Estimate
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 border-t border-stone-800 pt-16">
          <div className="col-span-1 md:col-span-2">
            <img 
              src="https://i.imgur.com/x5jBMMf.png" 
              alt="Torrez Lawn Care Logo" 
              className="h-16 w-auto object-contain mb-6 opacity-90" 
            />
            <p className="max-w-sm font-light leading-relaxed">
              Professional lawn care, landscaping, and property maintenance services you can trust in Hammond, LA and surrounding areas.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-display font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3 font-light">
              <li><Link to="/" className="hover:text-emerald-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-emerald-400 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-emerald-400 transition-colors">Services</Link></li>
              <li><Link to="/contact" className="hover:text-emerald-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display font-semibold mb-6">Services</h4>
            <ul className="space-y-3 font-light">
              <li><Link to="/services" className="hover:text-emerald-400 transition-colors">Lawn Maintenance</Link></li>
              <li><Link to="/services" className="hover:text-emerald-400 transition-colors">Landscaping</Link></li>
              <li><Link to="/services" className="hover:text-emerald-400 transition-colors">Pressure Washing</Link></li>
              <li><Link to="/services" className="hover:text-emerald-400 transition-colors">Fencing & Decks</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-light">
          <p>&copy; {new Date().getFullYear()} Torrez Lawn Care Services. All rights reserved.</p>
          <p>Designed for Hammond, Louisiana</p>
        </div>
      </div>
    </footer>
  );
}
