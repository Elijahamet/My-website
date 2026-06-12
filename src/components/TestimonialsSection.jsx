import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi';

const TestimonialsSection = () => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO at TechCorp',
      image: 'SJ',
      content:
        'Elijah transformed our vision into reality. His attention to detail and technical expertise are unmatched. Highly recommended!',
      rating: 5,
    },
    {
      name: 'Mike Chen',
      role: 'Product Manager',
      content:
        'Working with Elijah was a game-changer. He delivered the project on time and exceeded all expectations. A true professional.',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      role: 'Startup Founder',
      content:
        'Best developer I&apos;ve worked with. Elijah not only built amazing features but also provided valuable insights for the product.',
      rating: 5,
    },
    {
      name: 'David Park',
      role: 'Design Director',
      content:
        'Excellent collaboration and technical skills. Elijah understood the design vision perfectly and brought it to life beautifully.',
      rating: 5,
    },
  ];

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="testimonials" className="relative py-24 px-4 overflow-hidden" ref={ref}>
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
              What My <span className="text-primary">Clients Say</span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Real feedback from people I&apos;ve worked with
            </p>
          </motion.div>

          {/* Testimonials Carousel */}
          <motion.div variants={itemVariants} className="relative">
            <div className="max-w-2xl mx-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="glass p-8 md:p-12 rounded-xl border border-primary/20"
                >
                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <FiStar key={i} size={20} className="fill-primary text-primary" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-xl text-white mb-8 leading-relaxed">
                    &quot;{testimonials[currentIndex].content}&quot;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/30 flex items-center justify-center text-primary font-bold">
                      {testimonials[currentIndex].image}
                    </div>
                    <div>
                      <h4 className="font-bold text-white">{testimonials[currentIndex].name}</h4>
                      <p className="text-sm text-muted">{testimonials[currentIndex].role}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation */}
              <div className="flex justify-between items-center mt-8">
                <motion.button
                  onClick={prev}
                  className="p-3 rounded-lg bg-primary/20 hover:bg-primary/40 text-primary transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiChevronLeft size={24} />
                </motion.button>

                <div className="flex gap-2">
                  {testimonials.map((_, idx) => (
                    <motion.button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        idx === currentIndex ? 'bg-primary w-6' : 'bg-primary/30'
                      }`}
                      whileHover={{ scale: 1.2 }}
                    />
                  ))}
                </div>

                <motion.button
                  onClick={next}
                  className="p-3 rounded-lg bg-primary/20 hover:bg-primary/40 text-primary transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiChevronRight size={24} />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
