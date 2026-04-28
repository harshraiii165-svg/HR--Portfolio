import { motion } from "motion/react";
import { Play, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "LPU Distance Learning Post",
    category: "Educational Post",
    image: "https://i.ibb.co/VYR9FtxN/Whats-App-Image-2026-03-09-at-4-12-44-PM.jpg",
    color: "from-orange-500/20"
  },
  {
    title: "LPU MA Admission Flyer",
    category: "Marketing Post",
    image: "https://i.ibb.co/39Gj3rQK/Whats-App-Image-2026-04-18-at-4-34-35-PM.jpg",
    color: "from-emerald-500/20"
  },
  {
    title: "LPU BCA Placement Banner",
    category: "Campaign Design",
    image: "https://i.ibb.co/j9LTH80z/lpu-bca-today.jpg",
    color: "from-blue-400/20"
  },
  {
    title: "LPU 2025 Admission Creative",
    category: "Social Media Ad",
    image: "https://i.ibb.co/4w6ym1mb/rectangle-lpu-design.jpg",
    color: "from-cyan-500/20"
  },
  {
    title: "LPU Diploma Certification Ad",
    category: "Promotional Post",
    image: "https://i.ibb.co/JwCnxX0y/diploma.jpg",
    color: "from-blue-600/20"
  },
  {
    title: "Techie Sage Christmas Greeting",
    category: "Holiday Creative",
    image: "https://i.ibb.co/9kgDgbMv/cristmas.jpg",
    color: "from-blue-200/20"
  },
  {
    title: "Techie Sage Navratri Special",
    category: "Festive Post",
    image: "https://i.ibb.co/5WVkhtvX/Whats-App-Image-2026-03-21-at-10-43-01-AM.jpg",
    color: "from-yellow-500/20"
  },
  {
    title: "Techie Sage Valentine Campaign",
    category: "Brand Creative",
    image: "https://i.ibb.co/0j3Sq3gV/techie-sage-valentine.jpg",
    color: "from-pink-500/20"
  },
  {
    title: "Techie Sage Brand Identity Post",
    category: "Corporate Design",
    image: "https://i.ibb.co/YFFz992Q/techie-today-design.jpg",
    color: "from-zinc-800/20"
  },
  {
    title: "Argos Dog Training Visual",
    category: "Service Ad",
    image: "https://i.ibb.co/FqzSsqDd/dog-animate-3.jpg",
    color: "from-purple-500/20"
  },
  {
    title: "Argos Dog Academy Showcase",
    category: "Brand Ad",
    image: "https://i.ibb.co/KCHYGTJ/dog-animate-2.jpg",
    color: "from-zinc-500/20"
  },
  {
    title: "Smart Dog Training Creative",
    category: "Marketing Post",
    image: "https://i.ibb.co/6JY19V7P/19.jpg",
    color: "from-orange-400/20"
  },
  {
    title: "Argos Academy Service Flyer",
    category: "Product Post",
    image: "https://i.ibb.co/zWdQpjb8/17.jpg",
    color: "from-yellow-400/20"
  },
  {
    title: "Minimalist Construction Logo",
    category: "Logo Design",
    image: "https://i.ibb.co/bMXg4gFT/logo.png",
    color: "from-amber-600/20"
  },
  {
    title: "Nutty Squirrel Gelato Identity",
    category: "Logo & Branding",
    image: "https://i.ibb.co/zT33g7gX/logos.png",
    color: "from-orange-400/20"
  },
  {
    title: "Modern Coffee Shop Poster",
    category: "Poster Design",
    image: "https://i.ibb.co/9HD8L8mX/poster.png",
    color: "from-purple-300/20"
  },
  {
    title: "V7 Energy Drink Ad Post",
    category: "Product Post",
    image: "https://i.ibb.co/5xXX68hk/post.png",
    color: "from-violet-600/20"
  },
  {
    title: "Cinematic YouTube Thumbnail",
    category: "Thumbnail Design",
    image: "https://i.ibb.co/s9gkc0tZ/thumbnail-3.png",
    color: "from-red-600/20"
  },
  {
    title: "Matrix Digital Art Thumbnail",
    category: "YouTube Creative",
    image: "https://i.ibb.co/Q7yJYhsP/thumbnail-2.png",
    color: "from-green-500/20"
  },
  {
    title: "Creative Social Strategy Layout",
    category: "Thumbnail Design",
    image: "https://i.ibb.co/MDD8SqWk/thumbnail.png",
    color: "from-blue-500/20"
  },
  {
    title: "Advanced Graphic Design Concept",
    category: "Creative Illustration",
    image: "https://i.ibb.co/PzrgGpfp/Chat-GPT-Image-Apr-27-2026-04-12-52-PM.png",
    color: "from-indigo-500/20"
  }
];

export default function PortfolioGrid() {
  return (
    <section className="py-24 px-6 bg-zinc-950">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-5xl font-display font-black text-white mb-4">
              My Portfolio <span className="text-zinc-600 block text-2xl font-mono mt-2 tracking-widest">| 2024-2025</span>
            </h2>
            <div className="flex flex-wrap gap-2">
              {["Graphic Design", "Ad Creatives", "Social Media", "Branding"].map((tag, i) => (
                <span key={i} className="px-3 py-1 bg-zinc-900 border border-zinc-800 text-zinc-500 text-[10px] uppercase tracking-wider rounded-md">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="max-w-xs">
            <p className="text-zinc-500 text-sm leading-relaxed text-right md:text-right text-left">
              A comprehensive gallery of my most impactful creative work, spanning from high-energy commercial banners to intricate brand visuals.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative aspect-square bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${project.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />
              
              {/* Overlay Content */}
              <div className="absolute inset-x-0 bottom-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex items-center justify-between">
                   <div>
                     <span className="text-gold text-[10px] font-bold uppercase tracking-[0.2em] mb-1 block">
                       {project.category}
                     </span>
                     <h3 className="text-white text-lg font-display font-bold">
                       {project.title}
                     </h3>
                   </div>
                   <div className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                     <ArrowUpRight className="w-4 h-4 text-white" />
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
           <a 
             href="#portfolio"
             className="inline-block px-12 py-4 bg-transparent border border-zinc-700 hover:border-gold hover:text-gold transition-all text-zinc-500 font-display font-bold rounded-full group"
           >
             View Portfolio 
             <span className="ml-2 transition-transform group-hover:translate-x-1 inline-block">→</span>
           </a>
        </div>
      </div>
    </section>
  );
}
