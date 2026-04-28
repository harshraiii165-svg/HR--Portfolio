import { motion } from "motion/react";

export default function About() {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Name and Title */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="lg:col-span-7"
        >
          <h2 className="text-gold font-display font-black text-6xl md:text-[120px] tracking-tighter leading-[0.85] mb-4">
            Haarsh Rai
          </h2>
          <p className="font-display text-2xl md:text-3xl text-white font-medium mb-6">
            Professional <span className="text-gold/80 italic font-accent">Graphic Designer</span>
          </p>
          
          <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-2xl mb-8">
            <p className="text-zinc-400 leading-relaxed text-lg">
              I’m a passionate Graphic Designer and Digital Marketer who blends creativity with strategy to help brands grow. From designing impactful visuals to managing social media, I’ve worked with diverse industries to build strong identities and connect with audiences.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
             {["Graphic Design", "Social Media", "Digital Marketing", "Brand Identity"].map((tag, i) => (
               <span key={i} className="px-6 py-2 bg-gold/10 border border-gold/20 text-gold text-sm font-medium rounded-full">
                 • {tag}
               </span>
             ))}
          </div>
        </motion.div>

        {/* Profile Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="lg:col-span-5 flex justify-center lg:justify-end"
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-gold rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity" />
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-[10px] border-zinc-900 overflow-hidden shadow-2xl">
              <img 
                src="https://i.ibb.co/B5SzyW4g/Chat-GPT-Image-Apr-20-2026-10-51-06-AM.png" 
                alt="Harsh Rai" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 border border-gold/30 rounded-full pointer-events-none" />
            </div>
            {/* Ornamental Circle */}
            <div className="absolute -top-4 -right-4 w-12 h-12 border-2 border-gold rounded-full flex items-center justify-center">
               <div className="w-2 h-2 bg-gold rounded-full" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
