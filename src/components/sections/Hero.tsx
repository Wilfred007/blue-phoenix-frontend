import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-height-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-primary/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-secondary/10 rounded-full blur-[100px] -z-10" />

      <div className="section-padding grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-secondary text-sm font-semibold mb-6"
          >
            Sustainable Growth & High Performance
          </motion.span>
          
          <h1 className="text-5xl lg:text-7xl mb-6 leading-[1.1]">
            Building <span className="text-gradient">Stronger</span> Workplaces.
          </h1>
          
          <p className="text-xl text-brand-gray mb-10 max-w-lg leading-relaxed">
            Bluephoenix Consulting helps organizations align the right people, systems, and culture to achieve sustainable growth.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="btn-primary flex items-center gap-2 group">
              Explore Our Services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-6 py-3 rounded-full border border-white/10 hover:bg-white/5 transition-all text-white font-semibold">
              Meet the Team
            </button>
          </div>

          <div className="mt-12 flex items-center gap-8 opacity-50">
            <div className="text-sm">
              <div className="font-bold text-white text-xl">25+</div>
              <div className="text-brand-gray">Years Experience</div>
            </div>
            <div className="h-8 w-px bg-white/10" />
            <div className="text-sm">
              <div className="font-bold text-white text-xl">400+</div>
              <div className="text-brand-gray">Clients Served</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 glass-card p-4 aspect-square flex items-center justify-center">
            {/* Conceptual Graphic: Phoenix in a grid */}
            <div className="w-full h-full rounded-xl bg-gradient-to-br from-brand-primary/20 to-transparent flex items-center justify-center overflow-hidden">
               <motion.div
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="w-2/3 h-2/3 opacity-40"
               >
                 <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 80L80 20M80 80L50 50L65 35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-brand-secondary" />
                    <circle cx="78" cy="35" r="1" fill="currentColor" className="text-brand-secondary" />
                 </svg>
               </motion.div>
               {/* Abstract geometric lines */}
               <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 opacity-10">
                  {[...Array(36)].map((_, i) => (
                    <div key={i} className="border border-white/20" />
                  ))}
               </div>
            </div>
          </div>
          {/* Floating elements */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -top-6 -right-6 glass-card px-4 py-3 text-xs font-bold"
          >
            Precision Alignment
          </motion.div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute -bottom-6 -left-6 glass-card px-4 py-3 text-xs font-bold"
          >
            Strategic Direction
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
