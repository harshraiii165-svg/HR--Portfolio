import { motion } from "motion/react";
import { GraduationCap, Briefcase } from "lucide-react";

const education = [
  {
    institution: "B.V.M High School",
    degree: "10th Class",
    year: "2021",
  },
  {
    institution: "B.V.M High School",
    degree: "School Of Arts",
    year: "2024",
  },
  {
    institution: "Lovely Professional University [LPU]",
    degree: "B.A (Pursuing)",
    year: "Current",
  }
];

const experience = [
  {
    company: "Fast visa immigration",
    role: "Head Content Creator",
    period: "2024 - 2025",
    desc: "Created engaging posts and managed social media accounts, focusing on brand presence and audience connection."
  },
  {
    company: "Bewakoof [Clothing Brand]",
    role: "Junior Content Creator",
    period: "2024 - 2025",
    desc: "Designed creative posts and managed social accounts, creating trendy content matching the brand's youthful identity."
  },
  {
    company: "Doner & Gyros India",
    role: "Head Content Creator",
    period: "2024 - 2025",
    desc: "Focused on designing visually appealing content reflecting food culture and connecting with the audience."
  }
];

export default function EducationAndExperience() {
  return (
    <section id="education" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Education Section */}
        <div>
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center text-gold">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h2 className="text-4xl font-display font-black text-white">Education</h2>
          </div>
          
          <div className="space-y-8">
            {education.map((edu, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="relative pl-8 border-l border-zinc-800"
              >
                <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] rounded-full bg-gold shadow-[0_0_10px_rgba(245,197,24,0.5)]" />
                <span className="text-zinc-500 font-mono text-xs uppercase tracking-widest">{edu.year}</span>
                <h3 className="text-white text-xl font-bold mt-1 font-display">{edu.institution}</h3>
                <p className="text-gold/80 text-sm">{edu.degree}</p>
              </motion.div>
            ))}
          </div>
          <p className="mt-8 text-zinc-500 text-sm italic font-light leading-relaxed">
            "A dedicated student with a strong academic background, eager to contribute skills and grow with a reputed organization."
          </p>
        </div>

        {/* Experience Section */}
        <div>
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center text-gold">
              <Briefcase className="w-6 h-6" />
            </div>
            <h2 className="text-4xl font-display font-black text-white">Experience</h2>
          </div>

          <div className="space-y-8">
            {experience.map((exp, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-zinc-900/30 border border-zinc-800 p-6 rounded-2xl hover:border-gold/30 transition-colors group"
              >
                <div className="flex justify-between items-start mb-2">
                   <h3 className="text-white text-lg font-bold group-hover:text-gold transition-colors">{exp.company}</h3>
                   <span className="text-zinc-600 font-mono text-[10px] tracking-tighter">{exp.period}</span>
                </div>
                <p className="text-zinc-400 font-display text-sm font-medium mb-3">{exp.role}</p>
                <p className="text-zinc-500 text-xs leading-relaxed">{exp.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
