import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SkillsSection = () => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Python', 'MongoDB', 'PostgreSQL', 'REST APIs'],
    },
    {
      title: 'AI & Tools',
      skills: ['OpenAI API', 'LangChain', 'Machine Learning', 'Claude', 'Gemini'],
    },
    {
      title: 'Design',
      skills: ['Figma', 'UI/UX Design', 'Prototyping', 'Web Design', 'Animation'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
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

  return (
    <section id="skills" className="relative py-24 px-4 overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="space-y-16"
        >
          {/* Title */}
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Skills & <span className="text-primary">Expertise</span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              A comprehensive set of tools and technologies I use to build exceptional digital experiences
            </p>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {skillCategories.map((category, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="glass p-6 rounded-xl border border-primary/20 hover:border-primary/50 transition-all group cursor-pointer"
              >
                <h3 className="text-xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors">
                  {category.title}
                </h3>
                <div className="space-y-2">
                  {category.skills.map((skill, i) => (
                    <motion.div
                      key={i}
                      className="flex items-center gap-2 text-muted group-hover:text-white transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary group-hover:bg-secondary transition-colors" />
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
