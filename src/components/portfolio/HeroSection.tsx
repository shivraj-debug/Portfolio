import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Code2 } from 'lucide-react';
// import profilePhoto from '@/assets/profile-photo.jpeg';
import my_profile from '@/assets/my_profile.jpeg';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" />

      

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center  gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-6"
            >
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-lg text-muted-foreground">Available for opportunities</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4 leading-tight">
              Hello, I'm
              <br />
              <span className="gradient-text">Shiv Raj</span>
            </h1>

            <h2 className="text-xl md:text-2xl text-muted-foreground mb-6 font-medium">
              Full Stack Software Development Engineer
            </h2>

            <p className="text-muted-foreground text-lg mb-8 max-w-lg mx-auto lg:mx-0">
              Building scalable, production-ready applications with a focus on real-world impact. 
              Passionate about clean architecture, performance optimization, and solving complex problems.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 px-8"
                asChild
              >
                <a href="#projects">
                  View Projects
                  <ArrowDown className="w-4 h-4" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border hover:bg-secondary gap-2 px-8"
                asChild
              >
                <a href="#contact">
                  <Mail className="w-4 h-4" />
                  Contact Me
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <a
                href="https://github.com/shivraj-debug"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-secondary hover:bg-secondary/80 border border-border transition-all hover:-translate-y-1"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/shiv-raj-8b8b2326a/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-secondary hover:bg-secondary/80 border border-border transition-all hover:-translate-y-1"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://leetcode.com/u/shivraj-debugger/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-secondary hover:bg-secondary/80 border border-border transition-all hover:-translate-y-1"
              >
                <Code2 className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Right Content - Profile Image & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative flex justify-center"
          >
            <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-accent/20 rounded-full blur-2xl" />
              
              {/* Profile Image */}
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 border-2 border-border flex items-center justify-center relative overflow-hidden">
                <img 
                  src={my_profile} 
                  alt="Shiv Raj - Full Stack Software Engineer" 
                  className="w-full h-full object-cover object-top"
                />
                
                {/* Experience Badge */}
                {/* <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.8, type: 'spring' }}
                  className="absolute -right-4 top-8 px-4 py-3 bg-card border border-border rounded-xl shadow-xl"
                >
                  <div className="text-2xl font-bold text-primary">3+</div>
                  <div className="text-xs text-muted-foreground">Years<br />Coding</div>
                </motion.div> */}

                {/* LeetCode Badge */}
                {/* <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1, type: 'spring' }}
                  className="absolute -left-4 bottom-8 px-4 py-3 bg-card border border-border rounded-xl shadow-xl"
                >
                  <div className="text-2xl font-bold text-accent">950+</div>
                  <div className="text-xs text-muted-foreground">LeetCode<br />Problems</div>
                </motion.div> */}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
        >
          <span className="text-xs text-muted-foreground">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowDown className="w-5 h-5 text-primary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
