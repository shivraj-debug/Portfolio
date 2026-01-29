import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Trophy, BarChart3, Brain, CreditCard,MessageCircle,Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Slot } from '@radix-ui/react-slot';

const projects = [
  {
  title: 'Nutriwise – AI Powered Nutrition Application',
  description:
    'Full-stack AI nutrition tracker delivering personalized meal plans based on dietary preferences, health goals, and AI-powered food image analysis.',
  achievement: '🏆 Rank 1 among 120+ teams – Food-o-Scope FORK IT Hackathon 2024 (IIIT Delhi)',
  liveUrl: 'https://nutriwise.vercel.app',
  githubUrl: 'https://github.com/shivraj-debug/Nutriwise-AI',
  highlights: [
    'Served 20+ active users with personalized meal planning',
    '88% accuracy in AI-powered food image analysis',
    'Proprietary calorimetric database with 1,000+ food items',
    'Real-time recipe generation using Gemini AI',
    'Community sharing with 5+ user-generated recipes',
  ],
  techStack: [
    'React',
    'Next.js',
    'TypeScript',
    'Tailwind CSS',
    'PostgreSQL',
    'Prisma',
    'Gemini AI',
    'Vercel',
  ],
  icon: Brain, // lucide-react icon
  gradient: 'from-green-500/20 to-emerald-500/20',
  borderGlow: 'group-hover:shadow-[0_0_40px_rgba(16,185,129,0.2)]',
  featured: true,
},
 {
  title: 'AI Finance Platform',
  description:
    'Full-stack FinTech SaaS application with secure authentication, subscription billing, and AI-powered financial insights.',
  liveUrl: 'https://ai-finance-nu.vercel.app',
  githubUrl: 'https://github.com/shivraj-debug/AI_FINANCE',
  highlights: [
    'Clerk-based authentication with subscription billing',
    'Advanced transaction dashboard with bulk CSV import (50+ transactions)',
    'Recurring transaction automation and multi-filter search',
    'Real-time balance calculation across 5+ account types',
    'AI-powered receipt OCR with 85% accuracy using Gemini API',
    'Monthly spending insights and budget alerts with automated emails',
  ],
  techStack: [
    'React',
    'Next.js',
    'Node.js',
    'PostgreSQL',
    'Prisma',
    'Tailwind CSS',
    'Clerk Auth',
    'Gemini API',
    'Resend API',
    'Vercel',
  ],
  icon: CreditCard, // lucide-react
  gradient: 'from-purple-500/20 to-pink-500/20',
  borderGlow: 'group-hover:shadow-[0_0_40px_rgba(168,85,247,0.2)]',
},

  {
  title: 'Real-Time Chat Application',
  description:
    'Real-time chat platform supporting private and group messaging with low-latency bi-directional communication.',
  liveUrl: 'https://your-chat-app-url.com',
  githubUrl: 'https://github.com/shivraj-debug/chat-application',
  highlights: [
    'Private and group messaging using Socket.IO',
    'JWT-based authentication with protected APIs and socket authorization',
    'Scalable group chat with admin roles, member permissions, and typing indicators',
    'Join/leave events and automatic socket reconnection handling',
  ],
  techStack: [
    'React',
    'Express.js',
    'MongoDB',
    'Socket.IO',
    'Cloudinary',
    'Tailwind CSS',
  ],
  icon: MessageCircle,
  gradient: 'from-blue-500/20 to-cyan-500/20',
  borderGlow: 'group-hover:shadow-[0_0_40px_rgba(59,130,246,0.2)]',
},{
  title: 'GroMo AI WhatsApp Copilot',
  description:
    'AI-powered sales assistant for financial product distributors, delivered through a WhatsApp-based conversational interface.',
  liveUrl: 'https://your-gromo-url.com',
  githubUrl: 'https://github.com/shivraj-debug/GroMo_Ai',
  highlights: [
    'Smart reply suggestions powered by fine-tuned LLMs',
    'Sales performance analysis and insights',
    'Personalized learning paths for distributors',
    'Product query resolution using RAG-based systems',
    'JWT-based authentication for secure access',
    'Scalable serverless backend deployed on AWS Bedrock with AWS Lambda',
  ],
  techStack: [
    'React',
    'Node.js',
    'Express.js',
    'JWT',
    'LLMs',
    'RAG',
    'AWS Bedrock',
    'AWS Lambda',
  ],
  icon: Bot, // lucide-react icon
  gradient: 'from-indigo-500/20 to-blue-500/20',
  borderGlow: 'group-hover:shadow-[0_0_40px_rgba(99,102,241,0.2)]',
}

];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-20 md:py-32 relative" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/20 to-transparent" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="section-heading">Projects</span>
          <h2 className="section-title">
            Featured <span className="gradient-text">Work</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Production-ready applications showcasing full-stack development and AI integration
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`group relative ${project.borderGlow} transition-shadow duration-500`}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative bg-card border border-border rounded-3xl p-6 md:p-8 lg:p-10">
                <div className="grid lg:grid-cols-[1fr,auto] gap-6">
                  {/* Content */}
                  <div>
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${project.gradient}`}>
                        <project.icon className="w-6 h-6 text-foreground" />
                      </div>
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-foreground">
                          {project.title}
                        </h3>
                        {project.achievement && (
                          <div className="inline-flex items-center gap-2 mt-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                            <Trophy className="w-4 h-4 text-primary" />
                            <span className="text-sm text-primary font-medium">{project.achievement}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4">{project.description}</p>

                    {/* Highlights */}
                    <ul className="space-y-2 mb-6">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-center gap-2 text-md text-muted-foreground">
                          <BarChart3 className="w-4 h-4 text-primary flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs rounded-full bg-secondary border border-border text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex lg:flex-col gap-3">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="gap-2 border-border hover:bg-secondary"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="gap-2 border-border hover:bg-secondary"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                        Source
                      </a>
                    </Button>
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

export default ProjectsSection;
