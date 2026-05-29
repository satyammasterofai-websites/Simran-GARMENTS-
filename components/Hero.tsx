'use client';
import { motion } from 'motion/react';
import Image from 'next/image';

export function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80&w=2070"
          alt="Fashion wholesale store background"
          fill
          className="object-cover"
          priority
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-zinc-900/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium tracking-wider uppercase mb-6">
            Trusted Wholesaler Since 2010
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white font-bold leading-tight mb-6">
            Premium Wholesale <br className="hidden md:block"/> 
            <span className="text-pink-300 italic font-light">Fancy Garments</span> in Saharanpur
          </h1>
          <p className="text-lg md:text-xl text-zinc-300 mb-10 max-w-2xl mx-auto font-light">
            Providing trendy girls wear, kids fashion, frocks, kurties, jeans & stylish collections exclusively for retailers at unbeatable wholesale prices.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#collections"
              className="w-full sm:w-auto px-8 py-4 bg-pink-600 hover:bg-pink-700 text-white rounded-full font-medium shadow-lg transition-colors text-lg"
            >
              View Collection
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-zinc-100 text-zinc-900 rounded-full font-medium transition-colors text-lg"
            >
              Contact Wholesale
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
