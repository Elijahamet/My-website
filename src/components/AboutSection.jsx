import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutSection = () => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const stats = [
    { label: 'Projects Completed', value: '50+' },
    { label: 'Technologies', value: '15+' },
    { label: 'Satisfied Clients', value: '30+' },
    { label: 'Awards & Recognition', value: '8+' },
  ];

  return (
    <section id="about" className="relative py-24 px-4 overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          {/* Left - Image */}
          <motion.div variants={itemVariants} className="relative">
            <div className="w-full aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 p-8 overflow-hidden group">
              <div className="w-full h-full bg-surface rounded-xl flex items-center justify-center text-white text-xl font-bold">
                Profile Image
              </div>
            </div>

            {/* Glow effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 blur-3xl opacity-30 group-hover:opacity-50 transition-opacity -z-10" />
          </motion.div>

          {/* Right - Content */}
          <motion.div variants={containerVariants} className="space-y-8">
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                About <span className="text-primary">Me</span>
              </h2>
              <p className="text-muted text-lg leading-relaxed">
                I&apos;m a passionate full-stack developer and AI enthusiast with 5+ years of experience
                building beautiful, scalable digital solutions. My journey in tech started with a simple
                curiosity about how things work, and it has evolved into a career dedicated to creating
                impactful digital experiences.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-muted text-lg leading-relaxed">
                I specialize in React, modern JavaScript frameworks, and AI integration. I love turning
                complex problems into simple, beautiful solutions. Whether it&apos;s building a sleek web app
                or implementing cutting-edge AI features, I bring creativity and technical expertise to
                every project.
              </p>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="glass p-6 rounded-lg"
                >
                  <p className="text-2xl font-bold text-primary mb-2">{stat.value}</p>
                  <p className="text-sm text-muted">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
