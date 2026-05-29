'use client';
import { motion } from 'motion/react';

const reviews = [
  {
    name: "Rajeev Kumar",
    shop: "Kumar Boutique",
    text: "Best wholesale garments collection in Saharanpur with excellent pricing. The kids wear quality is unmatched. My customers love it!"
  },
  {
    name: "Anita Sharma",
    shop: "Fashion Hub",
    text: "Simran Garments always has the latest trending girls wear. Purchasing in bulk is very smooth, and the owner is highly professional."
  },
  {
    name: "Mohd. Tariq",
    shop: "Tariq Garments",
    text: "Very reliable supplier for my local shop. Awesome variety in frocks and suits. Five stars for the collection and rates."
  }
];

export function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-serif font-bold text-zinc-900 mb-4"
          >
            Client Testimonials
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg font-light text-zinc-500 max-w-2xl mx-auto"
          >
            Hear from our satisfied retailers and boutique owners.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-stone-50 p-8 rounded-3xl relative"
            >
              <div className="flex space-x-1 text-amber-400 mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-xl">★</span>
                ))}
              </div>
              <p className="text-zinc-600 font-light text-lg italic mb-8 relative z-10 leading-relaxed">
                &quot;{review.text}&quot;
              </p>
              <div>
                <h4 className="font-bold text-zinc-900">{review.name}</h4>
                <p className="text-sm text-pink-600 font-medium">{review.shop}</p>
              </div>
              {/* Quote marks aesthetic */}
              <div className="absolute top-6 right-8 text-6xl text-stone-200 font-serif font-bold opacity-50 z-0">
                &rdquo;
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
