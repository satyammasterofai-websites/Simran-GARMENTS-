'use client';
import { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export function WholesaleInquiry() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section className="py-24 bg-zinc-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 blur-3xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-pink-600 rounded-full mix-blend-screen" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-600 rounded-full mix-blend-screen" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
           <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
            Wholesale Inquiry
          </h2>
          <p className="text-lg font-light text-zinc-400">
            Partner with us to get the best wholesale rates for your fashion retail business.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-3xl"
        >
          {isSuccess ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center py-12 text-center"
            >
              <CheckCircle2 className="w-20 h-20 text-emerald-400 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-2">Inquiry Submitted Successfully!</h3>
              <p className="text-zinc-400">Our wholesale team will contact you shortly.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-zinc-300 mb-2">Your Name</label>
                  <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-300 mb-2">Shop/Boutique Name</label>
                  <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all" placeholder="Fashion Hub" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-300 mb-2">Phone Number</label>
                  <input required type="tel" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all" placeholder="+91 00000 00000" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-300 mb-2">City</label>
                  <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all" placeholder="Saharanpur" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-2">Requirement Message</label>
                <textarea required rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all" placeholder="Tell us about the collections you are looking for..." />
              </div>
              <button 
                disabled={isSubmitting}
                type="submit" 
                className="w-full bg-pink-600 hover:bg-pink-700 text-white font-medium text-lg py-4 rounded-xl transition-all disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center"
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  'Submit Wholesale Inquiry'
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
