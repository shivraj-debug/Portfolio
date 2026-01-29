import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Users, Calendar, BookOpen, MessageCircle } from 'lucide-react';

const activities = [
  {
    icon: Users,
    title: 'Core Team Member',
    org: 'DevComm, NSUT',
    description: 'Led technical initiatives and community building',
  },
  {
    icon: Calendar,
    title: '5+ Technical Events',
    org: 'Organized & Coordinated',
    description: 'Workshops, hackathons, and coding competitions',
  },
  {
    icon: BookOpen,
    title: '25+ Juniors Mentored',
    org: 'React, Node.js & DSA',
    description: 'One-on-one mentorship and group sessions',
  },
];

const LeadershipSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-20 md:py-32 relative" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="section-heading">Leadership</span>
          <h2 className="section-title">
            Community & <span className="gradient-text">Impact</span>
          </h2>
         
        </motion.div>

        {/* Activities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover-lift">
                <div className="p-3 rounded-xl bg-primary/10 w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                  <activity.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-1">{activity.title}</h3>
                <div className="text-sm text-primary mb-2">{activity.org}</div>
                <p className="text-sm text-muted-foreground">{activity.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
