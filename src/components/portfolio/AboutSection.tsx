import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Trophy, Rocket, Shield } from 'lucide-react';

const highlights = [
  {
    icon: GraduationCap,
    title: 'B.Tech CSE',
    description: 'Netaji Subhas University of Technology (2022–2026)',
  },
  {
    icon: Trophy,
    title: 'Hackathon Winner',
    description: 'Rank 1 among 120+ teams at IIIT Delhi',
  },
  {
    icon: Rocket,
    title: 'Production Systems',
    description: 'Built full-stack & AI-powered applications',
  },
  {
    icon: Shield,
    title: 'Competitive Coder',
    description: '950+ LeetCode problems, JEE Mains 99+ percentile',
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
  id="about"
  className="py-20 md:py-32 relative overflow-hidden"
  ref={ref}
>
  {/* Background */}
  <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-secondary/30 to-transparent" />

  <div className="container mx-auto px-4 md:px-6 relative z-10">

    {/* TOP CENTER HEADING */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <span className="section-heading text-lg">About Me</span>
     
    </motion.div>

    {/* CONTENT GRID */}
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

      {/* Left - Image / Visual */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="relative"
      >
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl blur-2xl" />

          <div className="relative bg-card border border-border rounded-3xl p-8 md:p-10">
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className="p-4 rounded-xl bg-secondary/50 border border-border hover-lift"
                >
                  <item.icon className="w-8 h-8 text-primary mb-3" />
                  <h4 className="font-semibold text-foreground mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Right - Content */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
      >

      <h2 className="section-title mt-3">
        Designing Solutions, <br />
        <span className="gradient-text">Not Just Code</span>
      </h2>
   
        <div className="space-y-4 text-muted-foreground">
          <p className="text-lg">
            I'm a{" "}
            <span className="text-foreground font-medium">
              B.Tech CSE student
            </span>{" "}
            at Netaji Subhas University of Technology with a strong foundation in
            Data Structures, Algorithms, System Design, DBMS, Operating Systems,
            and Computer Networks.
          </p>

          <p>
            With hands-on experience in building{" "}
            <span className="text-primary">
               full-stack and AI-powered applications
            </span>
            , I focus on creating scalable, secure backend systems that deliver
            real-world impact.
          </p>

          <p>
            As a hackathon winner and competitive programmer, I am good in solving
            complex problems and continuously pushing my boundaries. I believe
            in writing clean, maintainable code that stands the test of time.
          </p>
        </div>
      </motion.div>

    </div>
  </div>
</section>

  );
};

export default AboutSection;
