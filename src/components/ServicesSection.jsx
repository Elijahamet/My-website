import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCode, FiPenTool, FiZap, FiBrain } from 'react-icons/fi';

const ServicesSection = () => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  const services = [
    {
      icon: FiCode,
      title: 'Web Development',
      description:
        'Building fast, scalable web applications using modern frameworks like React, Next.js, and Node.js.',
    },
    {
      icon: FiPenTool,
      title: 'UI/UX Design',
      description:
        'Creating beautiful, user-centric designs that convert. From wireframes to high-fidelity prototypes.',
    },
    {
      icon: FiBrain,
      title: 'AI Integration',
      description:
        'Integrating cutting-edge AI models and APIs to add intelligent features to your applications.',
    },
    {
      icon: FiZap,
      title: 'Performance',
      description:
        'Optimizing applications for speed and efficiency. Reducing load times and improving user experience.',
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
    <section id="services" className="relative py-24 px-4 overflow-hidden" ref={ref}>
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
              Services I <span className="text-primary">Offer</span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Comprehensive solutions for your digital needs, from conception to deployment
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {services.map((service, idx) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ y: -15, boxShadow: '0 0 30px rgba(0, 212, 255, 0.4)' }}
                  className="glass p-8 rounded-xl border border-primary/20 hover:border-primary/50 transition-all group h-full flex flex-col"
                >
                  {/* Icon */}
                  <motion.div
                    className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/40 transition-colors"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                  >
                    <IconComponent size={32} className="text-primary" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-muted text-sm leading-relaxed flex-grow">
                    {service.description}
                  </p>

                  {/* CTA */}
                  <motion.div
                    className="mt-6 pt-6 border-t border-primary/20"
                    whileHover={{ x: 5 }}
                  >
                    <a href="#contact" className="text-primary text-sm font-semibold">
                      Learn more →
                    </a>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
