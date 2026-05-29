'use client';
import { motion } from 'motion/react';
import Image from 'next/image';

const images = [
  { src: 'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?auto=format&fit=crop&q=80&w=800', alt: 'Latest Fashion Arrival', style: 'col-span-1 row-span-2' },
  { src: 'https://images.unsplash.com/photo-1620799139507-2a76f79a2f4d?auto=format&fit=crop&q=80&w=800', alt: 'Kids Collection', style: 'col-span-1 row-span-1' },
  { src: 'https://images.unsplash.com/photo-1434389651859-0cca122393ba?auto=format&fit=crop&q=80&w=800', alt: 'Seasonal Trend', style: 'col-span-1 row-span-1' },
  { src: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&q=80&w=800', alt: 'Girls Fashion', style: 'col-span-2 row-span-1' },
];

export function Featured() {
  return (
    <section className="py-24 bg-zinc-950 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/3"
          >
             <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
              Featured <br/><span className="text-pink-400 italic font-light">Wholesale</span><br/>Collections
            </h2>
            <p className="text-zinc-400 font-light text-lg mb-8">
              Discover our exclusively curated fashion collections. From stunning girls wear to comfortable kids fashion, perfect for updating your retail store.
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="inline-block px-8 py-4 bg-pink-600 hover:bg-pink-700 text-white rounded-full font-medium transition-colors"
            >
              Order in Bulk
            </motion.a>
          </motion.div>

          {/* Masonry-like grid */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[200px]"
          >
            {images.map((img, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 0.98 }}
                className={`relative rounded-xl overflow-hidden group ${img.style} ${i === 0 ? 'md:col-span-1 md:row-span-2' : ''} ${i === 3 ? 'col-span-2 md:col-span-2' : ''}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                <div className="absolute inset-x-0 bottom-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-white font-medium bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg text-sm">
                    {img.alt}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
