import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ExperienceSection = () => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  const experiences = [
    {
      position: 'Senior Full-Stack Developer',
      company: 'Tech Innovations Inc.',
      duration: '2022 - Present',
      description:
        'Leading development of enterprise web applications using React and Node.js. Architecting scalable solutions for 50+ clients.',
      achievements: ['Led team of 5 developers', 'Reduced load time by 60%', 'Mentored junior developers'],
    },
    {
      position: 'Full-Stack Developer',
      company: 'Digital Solutions Ltd.',
      duration: '2020 - 2022',
      description:
        'Developed and maintained full-stack applications using MERN stack. Implemented AI features and optimized database queries.',
      achievements: ['Built 15+ projects', 'Implemented AI chatbots', 'Improved performance'],
    },
    {
      position: 'Junior Web Developer',
      company: 'StartUp Hub',
      duration: '2019 - 2020',
      description:
        'Started career building responsive web applications. Learned best practices in React development and modern JavaScript.',
      achievements: ['Shipped first 5 projects', 'Learned React & Node.js', 'Fixed critical bugs'],
    },
  ];

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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section id="experience" className="relative py-24 px-4 overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="space-y-12"
        >
          {/* Title */}
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Professional <span className="text-primary">Experience</span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              5+ years of building scalable web applications and leading development teams
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-secondary to-primary" />

            {/* Experience Items */}
            <motion.div variants={containerVariants} className="space-y-12">
              {experiences.map((exp, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
                    idx % 2 === 0 ? 'md:grid-cols-[1fr_1fr]' : 'md:grid-cols-[1fr_1fr]'
                  }`}
                >
                  {/* Content */}
                  <div className={idx % 2 === 0 ? 'md:text-right md:order-2' : 'md:order-1'}>
                    <motion.div
                      whileHover={{ x: idx % 2 === 0 ? -10 : 10 }}
                      className="glass p-6 rounded-lg border border-primary/20 hover:border-primary/50 transition-all"
                    >
                      <h3 className="text-2xl font-bold text-primary mb-2">{exp.position}</h3>
                      <p className="text-lg font-semibold text-white mb-2">{exp.company}</p>
                      <p className="text-sm text-muted mb-4">{exp.duration}</p>
                      <p className="text-muted mb-4">{exp.description}</p>

                      {/* Achievements */}
                      <div className="space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <motion.div
                            key={i}
                            className="text-sm text-primary flex items-center gap-2"
                            whileHover={{ x: idx % 2 === 0 ? -5 : 5 }}
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                            {achievement}
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="hidden md:flex justify-center">
                    <motion.div
                      className="w-4 h-4 bg-primary rounded-full border-4 border-background"
                      whileHover={{ scale: 1.5 }}
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>

                  {/* Spacer for desktop */}
                  <div className="hidden md:block" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
