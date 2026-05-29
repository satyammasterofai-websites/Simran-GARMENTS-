'use client';
import { motion } from 'motion/react';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

export function StoreInfo() {
  return (
    <section id="contact" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-serif font-bold text-zinc-900 mb-4"
          >
            Visit Our Store
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg font-light text-zinc-500 max-w-2xl mx-auto"
          >
            Come see our collections in person or contact us for direct wholesale orders.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 auto-rows-fr">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-stone-100 flex flex-col justify-between"
          >
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-pink-50 rounded-full flex items-center justify-center text-pink-600 flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-zinc-900 text-lg mb-1">Store Address</h3>
                  <p className="text-zinc-600 font-light leading-relaxed">
                    Kapoor Market, Jhanda Chowk,<br/>
                    Hiran Maran Rd, Nawabganj,<br/>
                    Saharanpur, Uttar Pradesh 247001, India
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-pink-50 rounded-full flex items-center justify-center text-pink-600 flex-shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-zinc-900 text-lg mb-1">Business Hours</h3>
                  <ul className="text-zinc-600 font-light space-y-1">
                    <li><span className="font-medium">Wed - Sun:</span> 10:00 AM – 9:30 PM</li>
                    <li><span className="font-medium">Monday:</span> 9:00 AM – 10:00 PM</li>
                    <li><span className="font-medium text-pink-600">Tuesday:</span> Closed</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-pink-50 rounded-full flex items-center justify-center text-pink-600 flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-zinc-900 text-lg mb-1">Contact Details</h3>
                  <a href="tel:+919760117274" className="text-zinc-600 font-light hover:text-pink-600 block transition-colors">+91 97601 17274</a>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-10 border-t border-stone-100 flex flex-col sm:flex-row gap-4">
              <a 
                href="tel:+919760117274"
                className="flex-1 flex items-center justify-center space-x-2 bg-zinc-900 text-white py-4 px-6 rounded-xl hover:bg-zinc-800 transition-colors font-medium"
              >
                <Phone className="w-5 h-5" />
                <span>Click to Call</span>
              </a>
              <a 
                href="https://wa.me/919760117274"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center space-x-2 bg-[#25D366] text-white py-4 px-6 rounded-xl hover:bg-[#20bd5a] transition-colors font-medium"
              >
                 { /* Simple SVG icon for WhatsApp since it isn't in lucide */ }
                 <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                </svg>
                <span>WhatsApp</span>
              </a>
            </div>
          </motion.div>

          <motion.div 
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="relative rounded-3xl overflow-hidden min-h-[400px] border border-stone-200 shadow-sm"
          >
            {/* Embedded Google Map */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.5188825700726!2d77.545642!3d29.9575086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390eeadc40b797cd%3A0x6bba847525feeb40!2sKapoor%20Market%2C%20Jhanda%20Chowk!5e0!3m2!1sen!2sin!4v1716503920251!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0, position: 'absolute', inset: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Simran Garments Location"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
