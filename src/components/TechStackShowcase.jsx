import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const TechStackShowcase = () => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  const techStack = [
    'React',
    'Next.js',
    'TypeScript',
    'Node.js',
    'MongoDB',
    'PostgreSQL',
    'Tailwind CSS',
    'Framer Motion',
    'GraphQL',
    'AWS',
    'Docker',
    'Git',
    'OpenAI',
    'Stripe',
    'Firebase',
    'Figma',
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative py-24 px-4 overflow-hidden" ref={ref}>
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
              Tech Stack & <span className="text-primary">Tools</span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Technologies I use to build exceptional digital products
            </p>
          </motion.div>

          {/* Tech Stack Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
          >
            {techStack.map((tech, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{
                  scale: 1.1,
                  boxShadow: '0 0 30px rgba(0, 212, 255, 0.6)',
                  borderColor: 'rgba(0, 212, 255, 1)',
                }}
                className="glass p-4 rounded-lg border border-primary/30 flex items-center justify-center text-center hover:text-primary transition-colors cursor-pointer"
              >
                <span className="font-semibold text-sm md:text-base">{tech}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Infinite Scroll Section */}
          <motion.div
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="mt-16"
          >
            <h3 className="text-2xl font-bold text-center mb-8 text-white">Featured Technologies</h3>
            <div className="relative overflow-hidden">
              <motion.div
                className="flex gap-4"
                animate={{ x: [0, -1000, 0] }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              >
                {[...Array(3)].map((_, set) =>
                  techStack.slice(0, 6).map((tech, idx) => (
                    <motion.div
                      key={`${set}-${idx}`}
                      whileHover={{ scale: 1.1 }}
                      className="glass px-6 py-3 rounded-lg border border-primary/20 flex-shrink-0 whitespace-nowrap hover:border-primary/50 transition-colors"
                    >
                      <span className="font-semibold text-primary">{tech}</span>
                    </motion.div>
                  ))
                )}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStackShowcase;
