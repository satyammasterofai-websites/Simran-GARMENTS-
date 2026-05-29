'use client';
import { motion } from 'motion/react';
import Image from 'next/image';
import { Instagram } from 'lucide-react';

const feedImages = [
  'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=400',
  'https://images.unsplash.com/photo-1550639525-c97d455acf70?auto=format&fit=crop&q=80&w=400',
  'https://images.unsplash.com/photo-1604176354204-924082540c15?auto=format&fit=crop&q=80&w=400',
  'https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&q=80&w=400'
];

export function InstagramFeed() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-serif font-bold text-zinc-900 mb-2">Follow Us on Instagram</h2>
            <p className="text-zinc-500 font-light">@simrangarments_wholesale</p>
          </div>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 md:mt-0 flex items-center space-x-2 px-6 py-3 bg-pink-50 text-pink-600 rounded-full font-medium hover:bg-pink-100 transition-colors"
          >
            <Instagram className="w-5 h-5" />
            <span>Follow as Retailer</span>
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
          {feedImages.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative aspect-square rounded-2xl overflow-hidden group border border-stone-100"
            >
              <Image 
                src={src}
                alt="Instagram feed showcase"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Instagram className="w-8 h-8 text-white" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
