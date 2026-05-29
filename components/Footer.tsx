import { ShoppingBag, MapPin, Phone, Clock } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-zinc-950 pt-20 pb-10 border-t border-zinc-900 overflow-hidden relative">
       {/* Decorative element */}
       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-pink-900/20 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <a href="#home" className="flex items-center space-x-2">
              <ShoppingBag className="w-8 h-8 text-pink-500" />
              <span className="font-serif text-2xl font-bold tracking-tight text-white">
                SIMRAN GARMENTS
              </span>
            </a>
            <p className="text-zinc-400 font-light leading-relaxed">
              Premium wholesale fashion supplier in Saharanpur. Delivering quality and latest trends to retailers nationwide.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Quick Navigation</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-zinc-400 hover:text-pink-400 transition-colors font-light">Home</a></li>
              <li><a href="#about" className="text-zinc-400 hover:text-pink-400 transition-colors font-light">About Us</a></li>
              <li><a href="#collections" className="text-zinc-400 hover:text-pink-400 transition-colors font-light">Collections</a></li>
              <li><a href="#reviews" className="text-zinc-400 hover:text-pink-400 transition-colors font-light">Testimonials</a></li>
              <li><a href="#contact" className="text-zinc-400 hover:text-pink-400 transition-colors font-light">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact Information</h4>
            <ul className="space-y-4">
              <li className="flex items-start tracking-wide text-zinc-400 font-light">
                <MapPin className="w-5 h-5 mr-3 text-pink-500 shrink-0" />
                <span>Kapoor Market, Jhanda Chowk, Saharanpur, UP 247001</span>
              </li>
              <li className="flex items-center tracking-wide text-zinc-400 font-light">
                <Phone className="w-5 h-5 mr-3 text-pink-500 shrink-0" />
                <a href="tel:+919760117274" className="hover:text-pink-400 transition-colors">+91 97601 17274</a>
              </li>
              <li className="flex items-center tracking-wide text-zinc-400 font-light">
                <Clock className="w-5 h-5 mr-3 text-pink-500 shrink-0" />
                <span>Wed-Sun: 10AM-9:30PM (Mon: 9AM)</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Wholesale Newsletter</h4>
            <p className="text-zinc-400 font-light mb-4">Get updates on new stock and seasonal collections.</p>
            <div className="flex border border-zinc-800 rounded-lg overflow-hidden focus-within:border-pink-500 transition-colors">
              <input type="email" placeholder="Email Address" className="w-full bg-transparent px-4 py-3 text-white outline-none placeholder-zinc-600 font-light text-sm" />
              <button className="bg-pink-600 hover:bg-pink-700 text-white px-4 text-sm transition-colors font-medium">Subscribe</button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-zinc-500 font-light text-sm">
            &copy; {new Date().getFullYear()} Simran Garments. All rights reserved. Designed with modern fashion aesthetics.
          </p>
        </div>
      </div>
    </footer>
  );
}
