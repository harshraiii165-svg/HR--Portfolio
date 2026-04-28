import { motion } from "motion/react";

const softwares = [
  { name: "Adobe Photoshop", icon: "Ps", color: "text-blue-500" },
  { name: "Adobe Illustrator", icon: "Ai", color: "text-orange-500" },
  { name: "CorelDRAW", icon: "Cd", color: "text-green-600" },
  { name: "CapCut Pro", icon: "Cp", color: "text-emerald-500" },
  { name: "Canva", icon: "Cv", color: "text-blue-400" },
  { name: "AI Generated Videos", icon: "AI", color: "text-cyan-500" },
];

const skills = {
  hard: [
    "Graphic Design & Branding",
    "Social Media Management",
    "Digital Marketing Strategy",
    "Visual Storytelling",
    "Print & Digital Assets",
    "Campaign Presentation",
  ],
  soft: [
    "Creative Concept Building",
    "Storytelling",
    "Market Insight",
    "Consistent Quality",
    "Innovative Thinking",
  ]
};

export default function SkillsAndSoftware() {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        {/* Left Column: Interests & Software */}
        <div>
          <div className="mb-16">
            <h3 className="text-3xl font-display font-bold text-gold mb-6 relative inline-block">
              Interests
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gold" />
            </h3>
            <p className="text-zinc-400 text-lg leading-relaxed max-w-md">
              Motion Graphics, Visual Storytelling, Brand Identity Design, Logo Animation, Creative Tools Exploration, Creative Content Creation.
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-display font-bold text-gold mb-8 relative inline-block">
              Softwares
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gold" />
            </h3>
            <div className="grid grid-cols-2 gap-6">
              {softwares.map((sw, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 group cursor-default"
                >
                  <div className={`w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center font-bold text-sm ${sw.color} group-hover:scale-110 transition-transform`}>
                    {sw.icon}
                  </div>
                  <span className="text-zinc-300 text-sm font-medium group-hover:text-white transition-colors">{sw.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Skills */}
        <div className="space-y-12">
          <div>
            <h3 className="text-3xl font-display font-bold text-gold mb-8 relative inline-block">
              Skills
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gold" />
            </h3>
            
            <div className="mb-12">
              <h4 className="text-white font-display text-xl font-bold mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-gold rounded-full" /> Hard
              </h4>
              <ul className="space-y-3">
                {skills.hard.map((skill, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="text-zinc-400 border-l-2 border-zinc-800 pl-4 hover:border-gold hover:text-white transition-all cursor-default"
                  >
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-display text-xl font-bold mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-gold/50 rounded-full" /> Soft
              </h4>
              <ul className="space-y-3">
                {skills.soft.map((skill, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="text-zinc-400 border-l-2 border-zinc-800 pl-4 hover:border-gold/50 hover:text-white transition-all cursor-default"
                  >
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
