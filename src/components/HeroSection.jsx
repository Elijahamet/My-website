import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import gsap from 'gsap';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('Web Developer');
  const titles = ['Web Developer', 'AI Builder', 'UI/UX Designer', 'Tech Creator'];
  const [titleIndex, setTitleIndex] = useState(0);

  // Typing animation for titles
  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
      setDisplayText(titles[(titleIndex + 1) % titles.length]);
    }, 3000);

    return () => clearInterval(interval);
  }, [titleIndex, titles]);

  // GSAP animations for background elements
  useEffect(() => {
    // Animate background grid
    gsap.to('.grid-line', {
      opacity: 0.1,
      duration: 2,
      stagger: 0.1,
      repeat: -1,
      yoyo: true,
    });

    // Animate floating orbs
    gsap.to('.float-orb', {
      y: -30,
      duration: 4,
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true,
    });
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-4"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        {/* Grid Background */}
        <div className="absolute inset-0 opacity-5">
          {[...Array(10)].map((_, i) => (
            <div
              key={`grid-h-${i}`}
              className="grid-line absolute w-full h-px bg-primary"
              style={{ top: `${i * 10}%` }}
            />
          ))}
          {[...Array(10)].map((_, i) => (
            <div
              key={`grid-v-${i}`}
              className="grid-line absolute h-full w-px bg-primary"
              style={{ left: `${i * 10}%` }}
            />
          ))}
        </div>

        {/* Floating Orbs */}
        <div className="float-orb absolute top-20 right-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl opacity-20" />
        <div className="float-orb absolute bottom-40 left-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl opacity-20" />
        <div className="float-orb absolute top-1/2 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-10" />
      </div>

      {/* Content */}
      <motion.div
        className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left Content */}
        <motion.div className="z-10" variants={containerVariants}>
          <motion.div variants={itemVariants}>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white">
              ELIJAH
              <br />
              AMETEFE
            </h1>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-6">
            <p className="text-xl md:text-2xl text-primary font-semibold min-h-12">
              {displayText}
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-8">
            <p className="text-muted text-lg max-w-md leading-relaxed">
              I build stunning digital experiences with modern technologies. Specializing in
              React, AI integration, and beautiful user interfaces that convert.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4"
          >
            <motion.button
              className="px-8 py-4 bg-primary text-background font-bold rounded-lg flex items-center gap-2 hover:shadow-glow transition-all"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 212, 255, 0.6)' }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
              <FiArrowRight size={20} />
            </motion.button>

            <motion.button
              className="px-8 py-4 border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary/10 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Hire Me
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="flex gap-8 mt-12"
          >
            <div>
              <p className="text-3xl font-bold text-primary">50+</p>
              <p className="text-muted text-sm">Projects</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">5+</p>
              <p className="text-muted text-sm">Years</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">30+</p>
              <p className="text-muted text-sm">Clients</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Content - 3D/Visual */}
        <motion.div
          className="relative h-96 md:h-full flex items-center justify-center"
          variants={itemVariants}
        >
          <motion.div
            className="w-64 h-64 md:w-80 md:h-80 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 p-8 flex items-center justify-center relative"
            animate={{
              rotateZ: [0, 5, -5, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            {/* Placeholder for future 3D avatar */}
            <div className="text-center">
              <div className="w-full h-full bg-gradient-to-br from-primary to-secondary rounded-xl opacity-50 flex items-center justify-center">
                <span className="text-white font-bold text-xl">EA</span>
              </div>
            </div>

            {/* Floating tech icons */}
            {['React', 'AI', 'Design', 'Code'].map((tech, i) => (
              <motion.div
                key={tech}
                className="absolute w-12 h-12 bg-surface border border-primary/50 rounded-lg flex items-center justify-center text-xs font-bold text-primary glow-primary"
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                style={{
                  top: `${50 + 40 * Math.cos((i * 2 * Math.PI) / 4)}%`,
                  left: `${50 + 40 * Math.sin((i * 2 * Math.PI) / 4)}%`,
                  transform: 'translate(-50%, -50%)',
                }}
              >
                {tech}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <p className="text-muted text-sm mb-2">Scroll to explore</p>
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <motion.div
            className="w-1 h-2 bg-primary rounded-full mt-2"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
