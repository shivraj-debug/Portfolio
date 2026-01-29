import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

const experiences = [
  {
    title: 'Full Stack Developer Intern',
    company: 'Labmentix',
    location: 'Remote',
    period: 'Mar 2025 – May 2025',
    description: 'Worked on enterprise-level web applications focusing on security, scalability, and API development.',
    achievements: [
      'Implemented JWT + RBAC authentication, reducing unauthorized access by 45%',
      'Built rate-limiting middleware ensuring 99% uptime under high traffic',
      'Designed and integrated 15+ REST APIs with comprehensive documentation',
      'Collaborated closely with frontend team for seamless API integration',
    ],
    techUsed: ['Node.js', 'Express', 'PostgreSQL', 'JWT', 'React'],
    current: false,
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="py-20 md:py-32 relative" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="section-heading">Experience</span>
          <h2 className="section-title">
            Professional <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Real-world industry experience building production systems
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              {/* Timeline Line */}
              <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent" />

              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-8 top-8 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background" />

              <div className="ml-8 md:ml-20 pb-12">
                <div className="bg-card border border-border rounded-2xl p-6 md:p-8 hover-lift">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Briefcase className="w-5 h-5 text-primary" />
                        <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                      </div>
                      <div className="text-lg text-muted-foreground">{exp.company}</div>
                    </div>
                    
                    <div className="flex flex-col items-end gap-1">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6">{exp.description}</p>

                  {/* Achievements */}
                  <div className="space-y-3 mb-6">
                    {exp.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground text-sm">{achievement}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Used */}
                  <div className="flex flex-wrap gap-2">
                    {exp.techUsed.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs rounded-full bg-secondary border border-border text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
