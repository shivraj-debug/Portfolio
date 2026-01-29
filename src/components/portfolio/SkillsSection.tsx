import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Layout, Server, Database, Cloud } from 'lucide-react';

const skillCategories = [
  {
    title: 'Languages',
    icon: Code,
    skills: ['C++', 'Python', 'JavaScript', 'TypeScript'],
    color: 'from-blue-500/20 to-cyan-500/20',
    borderColor: 'border-blue-500/30',
  },
  {
    title: 'Frontend',
    icon: Layout,
    skills: ['React.js', 'Next.js', 'Tailwind CSS'],
    color: 'from-purple-500/20 to-pink-500/20',
    borderColor: 'border-purple-500/30',
  },
  {
    title: 'Backend',
    icon: Server,
    skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT', 'WebSockets'],
    color: 'from-green-500/20 to-emerald-500/20',
    borderColor: 'border-green-500/30',
  },
  {
    title: 'Databases',
    icon: Database,
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Prisma ORM'],
    color: 'from-orange-500/20 to-amber-500/20',
    borderColor: 'border-orange-500/30',
  },
  {
    title: 'DevOps & Tools',
    icon: Cloud,
    skills: ['Docker', 'AWS', 'Git/GitHub', 'Postman'],
    color: 'from-red-500/20 to-rose-500/20',
    borderColor: 'border-red-500/30',
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-20 md:py-32 relative" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className=" text-lg section-heading">Skills</span>
          <h2 className="section-title">
            Tech Stack & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications from frontend to backend
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative group hover-lift`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className={`relative bg-card border ${category.borderColor} rounded-2xl p-6 h-full`}>
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color}`}>
                    <category.icon className="w-6 h-6 text-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm rounded-lg bg-secondary border border-border text-foreground hover:border-primary/50 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
       
      </div>
    </section>
  );
};

export default SkillsSection;
