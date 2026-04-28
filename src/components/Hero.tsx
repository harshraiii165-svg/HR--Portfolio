import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-20 px-6 overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[120px] -z-10" />
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-5xl mx-auto flex flex-col items-center text-center"
      >
        <div className="relative mb-12">
          {/* Laptop Mockup Placeholder */}
          <div className="relative w-72 md:w-[600px] aspect-[16/10] bg-zinc-900 rounded-xl border border-zinc-800 shadow-2xl overflow-hidden gold-glow">
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-950 flex items-center justify-center p-8">
              <div className="text-center">
                <span className="block text-zinc-500 font-mono text-[10px] uppercase tracking-[0.3em] mb-2">Motion Designer</span>
                <h1 className="font-display font-black text-4xl md:text-8xl leading-none">
                  Haarsh Rai
                </h1>
                <div className="mt-4 flex items-center justify-center gap-2">
                  <span className="px-3 py-1 bg-gold text-black text-[10px] font-bold rounded-full transform -rotate-12 italic">Professional</span>
                  <span className="text-zinc-400 font-mono text-xs">Graphic Designer</span>
                </div>
                <div className="mt-8 flex justify-center">
                  <a 
                    href="#portfolio"
                    className="px-8 py-3 bg-white/5 border border-white/10 hover:border-gold hover:text-gold text-white text-sm font-bold rounded-full transition-all backdrop-blur-sm group"
                  >
                    View Portfolio
                    <span className="ml-2 transition-transform group-hover:translate-x-1 inline-block">→</span>
                  </a>
                </div>
              </div>
            </div>
            {/* Glossy overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent pointer-events-none" />
          </div>
          {/* Mockup shadow/stand base */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-4/5 h-8 bg-black/40 blur-xl -z-10" />
        </div>

        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 0.5 }}
           className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <ChevronDown className="w-6 h-6 text-zinc-600 animate-bounce" />
        </motion.div>
      </motion.div>
    </section>
  );
}
