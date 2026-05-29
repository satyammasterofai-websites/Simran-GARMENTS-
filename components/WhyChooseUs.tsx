'use client';
import { motion } from 'motion/react';
import { ShieldCheck, TrendingUp, Tags, Gem, Layers, HeadphonesIcon } from 'lucide-react';

const features = [
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: 'Trusted Supplier',
    description: 'Years of reliable wholesale service in Saharanpur.'
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: 'Latest Trends',
    description: 'Always updated with the newest fashion arrivals.'
  },
  {
    icon: <Tags className="w-8 h-8" />,
    title: 'Affordable Pricing',
    description: 'Highly competitive rates for bulk wholesale orders.'
  },
  {
    icon: <Gem className="w-8 h-8" />,
    title: 'High Quality',
    description: 'Premium fabrics and excellent stitching guaranteed.'
  },
  {
    icon: <Layers className="w-8 h-8" />,
    title: 'Huge Variety',
    description: 'Massive catalog of garments for varying needs.'
  },
  {
    icon: <HeadphonesIcon className="w-8 h-8" />,
    title: 'Fast Support',
    description: 'Dedicated assistance for our retail partners.'
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-serif font-bold text-zinc-900 mb-4"
          >
            Why Choose Us?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg font-light text-zinc-600 max-w-2xl mx-auto"
          >
            Empowering your retail business with top-notch garments and unparalleled wholesale services.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-pink-100/50 group"
            >
              <div className="w-16 h-16 bg-pink-50 rounded-2xl flex items-center justify-center text-pink-600 mb-6 group-hover:bg-pink-600 group-hover:text-white transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-3">{feature.title}</h3>
              <p className="text-zinc-500 font-light leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
