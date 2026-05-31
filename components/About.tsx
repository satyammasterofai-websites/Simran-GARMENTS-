'use client';
import { motion } from 'motion/react';
import Image from 'next/image';

export function About() {
  return (
    <section id="about" className="py-24 bg-stone-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] relative rounded-2xl overflow-hidden shadow-2xl">
              <Image 
                "https://unsplash.com/photos/a-person-walks-beside-a-white-mosque-reflecting-in-water-8glQqowi0EU?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText
                alt="Simran Garments Store Overview"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative block */}
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-pink-100 rounded-full -z-10 blur-3xl opacity-60" />
            
            <div className="absolute top-8 -right-8 bg-white p-6 rounded-xl shadow-xl hidden md:block">
              <p className="font-serif text-4xl font-bold text-pink-600 mb-1">4.9<span className="text-xl">★</span></p>
              <p className="text-zinc-500 font-medium text-sm uppercase tracking-wider">Top Rated Wholesale</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-sm font-medium text-pink-600 tracking-widest uppercase mb-3">About Simran Garments</h2>
              <h3 className="text-3xl md:text-5xl font-serif font-bold text-zinc-900 leading-tight">
                Your Trusted Fashion Partner
              </h3>
            </div>
            
            <div className="space-y-6 text-lg text-zinc-600 font-light leading-relaxed">
              <p>
                Located in the heart of Kapoor Market, Saharanpur, <strong>SIMRAN GARMENTS</strong> is a premier wholesale clothing supplier dedicated to bringing the latest fashion trends to retailers.
              </p>
              <p>
                We specialize in trendy girls wear, vibrant kids collections, stylish frocks, designer kurties, and high-quality ladies suits. Our mission is to empower local shopkeepers and boutique owners with premium garments at highly competitive wholesale prices.
              </p>
              <p>
                With a commitment to quality fabrics and customer satisfaction, we have built strong, lasting relationships with retailers across the region. Discover endless variety and uncompromised style with us.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 font-bold text-xl">
                  10+
                </div>
                <div className="text-sm font-medium text-zinc-700">Years of<br/>Experience</div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 font-bold text-xl">
                  1k+
                </div>
                <div className="text-sm font-medium text-zinc-700">Happy<br/>Retailers</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
