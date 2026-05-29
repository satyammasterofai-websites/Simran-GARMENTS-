'use client';
import { motion } from 'motion/react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const categories = [
  {
    id: 'girls-fancy-wear',
    title: 'Girls Fancy Wear',
    description: 'Boutique-style premium garments',
    image: 'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'kids-wear',
    title: 'Kids Wear',
    description: 'Comfortable and trendy styles',
    image: 'https://images.unsplash.com/photo-1519241047957-be31d7379a5d?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'stylish-frocks',
    title: 'Stylish Frocks',
    description: 'Elegant party wear collections',
    image: 'https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'designer-kurties',
    title: 'Designer Kurties',
    description: 'Traditional meets modern',
    image: 'https://images.unsplash.com/photo-1583391733958-d25e07fac04f?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'trendy-jeans',
    title: 'Trendy Jeans',
    description: 'High-quality denim collections',
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'ladies-suits',
    title: 'Ladies Suits',
    description: 'Premium unstitched & stitched',
    image: 'https://images.unsplash.com/photo-1610419330965-0ae0fd7ac93c?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'festival-collection',
    title: 'Festival Collection',
    description: 'Exclusive seasonal arrivals',
    image: 'https://images.unsplash.com/photo-1605763240000-7e93b172d754?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'daily-wear',
    title: 'Daily Wear',
    description: 'Everyday comfortable fashion',
    image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&q=80&w=1000'
  }
];

export function Categories() {
  return (
    <section id="collections" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-serif font-bold text-zinc-900 mb-4"
          >
            Product Categories
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg font-light text-zinc-500 max-w-2xl mx-auto"
          >
            Explore our wide range of wholesale fashion offerings carefully curated for your retail success.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <motion.a
              href="#contact"
              key={category.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl cursor-pointer block"
            >
              <div className="aspect-[4/5] relative">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-zinc-900/20 to-transparent transition-opacity duration-300" />
              </div>
              
              <div className="absolute bottom-0 left-0 w-full p-6 text-left transform transition-transform duration-300">
                <h3 className="text-xl font-serif font-bold text-white mb-1 group-hover:text-pink-300 transition-colors">
                  {category.title}
                </h3>
                <p className="text-white/80 text-sm font-light mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                  {category.description}
                </p>
                <div className="flex items-center text-sm font-medium text-white group-hover:text-pink-300 transition-colors opacity-0 group-hover:opacity-100">
                  <span>Explore More</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
