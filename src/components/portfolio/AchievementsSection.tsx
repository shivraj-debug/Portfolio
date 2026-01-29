import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Trophy, Code2, Target, Brain } from 'lucide-react';

const achievements = [
  {
    icon: Trophy,
    title: 'Hackathon Winner',
    description: 'IIIT Delhi – Rank 1 among 120+ teams',
    gradient: 'from-yellow-500/20 to-orange-500/20',
    iconColor: 'text-yellow-500',
  },
  {
    icon: Code2,
    title: '950+ LeetCode',
    description: 'Problems solved with consistent practice',
    gradient: 'from-green-500/20 to-emerald-500/20',
    iconColor: 'text-green-500',
  },
  {
    icon: Target,
    title: 'JEE Mains 99+',
    description: 'Percentile in one of India\'s toughest exams',
    gradient: 'from-blue-500/20 to-cyan-500/20',
    iconColor: 'text-blue-500',
  },
  {
    icon: Brain,
    title: 'NVIDIA Certified',
    description: 'Neural Networks & Deep Learning',
    gradient: 'from-purple-500/20 to-pink-500/20',
    iconColor: 'text-purple-500',
  },
];

const AchievementsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-20 md:py-32 relative" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="section-heading">Achievements</span>
          <h2 className="section-title">
            Milestones & <span className="gradient-text">Recognition</span>
          </h2>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group hover-lift"
            >
              <div className={`relative h-full bg-card border border-border rounded-2xl p-6 text-center overflow-hidden`}>
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${achievement.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${achievement.gradient} mb-4`}>
                    <achievement.icon className={`w-8 h-8 ${achievement.iconColor}`} />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{achievement.title}</h3>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
