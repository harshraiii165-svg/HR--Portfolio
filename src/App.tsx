import { motion, useScroll, useSpring } from "motion/react";
import Hero from "./components/Hero";
import About from "./components/About";
import EducationAndExperience from "./components/EducationAndExperience";
import SkillsAndSoftware from "./components/SkillsAndSoftware";
import PortfolioGrid from "./components/PortfolioGrid";
import { Mail, Instagram, Linkedin, Twitter, Globe, ArrowRight } from "lucide-react";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="relative selection:bg-gold selection:text-black min-h-screen bg-zinc-950 font-sans">
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gold origin-left z-50"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 p-6 flex justify-between items-center z-40 bg-zinc-950/20 backdrop-blur-md border-b border-white/5">
        <div className="font-display font-black text-2xl tracking-tighter text-white">
          HR<span className="text-gold">.</span>
        </div>
        <div className="flex gap-8">
           <a href="#about" className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 hover:text-gold transition-colors">About</a>
           <a href="#education" className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 hover:text-gold transition-colors">Education</a>
           <a href="#portfolio" className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 hover:text-gold transition-colors">Portfolio</a>
           <a href="#contact" className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 hover:text-gold transition-colors">Contact</a>
        </div>
      </nav>

      <Hero />
      
      <div id="about" className="relative scroll-mt-24">
        <About />
        {/* Subtle separator */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
      </div>

      <EducationAndExperience />

      <SkillsAndSoftware />

      <div id="portfolio" className="relative scroll-mt-24">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
        <PortfolioGrid />
      </div>

      {/* Final CTA / Contact Section */}
      <footer id="contact" className="py-32 px-6 border-t border-zinc-900 bg-black overflow-hidden relative">
        {/* Abstract background glow */}
        <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gold/10 blur-[100px] rounded-full" />
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
             initial={{ opacity: 0, y: 40 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="mb-20"
          >
            <h2 className="text-5xl md:text-8xl font-display font-black text-white mb-8 tracking-tighter">
              Let's build <span className="text-stroke italic font-accent">something</span> <span className="text-gold">legendary.</span>
            </h2>
            <p className="text-zinc-500 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light">
              Let's work together. I'm ready to help your brand grow visually and digitally.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a 
                href="mailto:harshraiii165@gmail.com" 
                className="group inline-flex items-center gap-3 px-12 py-6 bg-gold text-black font-display font-black text-xl rounded-full hover:scale-105 active:scale-95 transition-all shadow-xl shadow-gold/20"
              >
                <Mail className="w-6 h-6" />
                GET IN TOUCH
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <div className="flex gap-4">
                 <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                 <span className="text-zinc-400 text-sm font-medium">Available for new projects</span>
              </div>
            </div>
          </motion.div>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-20">
            {[
              { icon: Instagram, label: "Instagram" },
              { icon: Linkedin, label: "LinkedIn" },
              { icon: Twitter, label: "Twitter" },
              { icon: Globe, label: "Dribbble" },
            ].map((social, i) => (
              <motion.a 
                key={i} 
                href="#" 
                whileHover={{ y: -5 }}
                className="flex flex-col items-center gap-3 group"
              >
                <div className="p-5 rounded-full border border-zinc-800 text-zinc-500 group-hover:border-gold group-hover:text-gold transition-all bg-zinc-900/50">
                  <social.icon className="w-6 h-6" />
                </div>
                <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-zinc-600 group-hover:text-zinc-300 transition-colors">
                  {social.label}
                </span>
              </motion.a>
            ))}
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-t border-zinc-900 pt-16">
            <div className="flex flex-col items-center md:items-start gap-2">
              <div className="font-display font-black text-2xl tracking-tighter text-white">
                HR<span className="text-gold">.</span>
              </div>
              <p className="text-zinc-600 text-[10px] font-mono tracking-widest uppercase">
                © 2025 Haarsh Rai Portfolio
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-10">
              <div className="flex flex-col items-center md:items-end gap-1">
                <span className="text-zinc-400 text-[10px] font-bold uppercase tracking-widest">Phone</span>
                <span className="text-zinc-600 text-sm font-medium">+91 8837526815</span>
              </div>
              <div className="flex flex-col items-center md:items-end gap-1">
                <span className="text-zinc-400 text-[10px] font-bold uppercase tracking-widest">Address</span>
                <span className="text-zinc-600 text-sm font-medium">Rishi Nagar, Choti Haibowal</span>
              </div>
            </div>

            <p className="text-zinc-700 text-[10px] font-mono uppercase tracking-tighter">
              Crafted with Precision & Vision
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
