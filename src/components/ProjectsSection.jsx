import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiX, FiExternalLink, FiGithub } from 'react-icons/fi';

const ProjectsSection = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'AI Chat Platform',
      category: 'React',
      description: 'A modern chat application powered by OpenAI with real-time messaging',
      image: 'https://via.placeholder.com/300x200?text=AI+Chat',
      technologies: ['React', 'OpenAI', 'Node.js', 'MongoDB'],
      features: ['Real-time chat', 'AI responses', 'User authentication'],
      link: '#',
      github: '#',
    },
    {
      id: 2,
      title: 'E-Commerce Platform',
      category: 'MERN',
      description: 'Full-stack e-commerce solution with payments and inventory management',
      image: 'https://via.placeholder.com/300x200?text=E-Commerce',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      features: ['Product catalog', 'Shopping cart', 'Payment processing'],
      link: '#',
      github: '#',
    },
    {
      id: 3,
      title: 'Design Portfolio',
      category: 'Design',
      description: 'Minimalist portfolio showcasing digital design work',
      image: 'https://via.placeholder.com/300x200?text=Portfolio',
      technologies: ['Figma', 'Next.js', 'Tailwind CSS'],
      features: ['Responsive design', 'Smooth animations', 'Case studies'],
      link: '#',
      github: '#',
    },
    {
      id: 4,
      title: 'Task Management App',
      category: 'React',
      description: 'Collaborative task management with team features',
      image: 'https://via.placeholder.com/300x200?text=Task+Manager',
      technologies: ['React', 'Firebase', 'Tailwind CSS'],
      features: ['Task creation', 'Team collaboration', 'Real-time sync'],
      link: '#',
      github: '#',
    },
    {
      id: 5,
      title: 'Analytics Dashboard',
      category: 'MERN',
      description: 'Data visualization and analytics platform for business intelligence',
      image: 'https://via.placeholder.com/300x200?text=Analytics',
      technologies: ['React', 'D3.js', 'Node.js', 'PostgreSQL'],
      features: ['Data visualization', 'Real-time updates', 'Export reports'],
      link: '#',
      github: '#',
    },
    {
      id: 6,
      title: 'AI Content Generator',
      category: 'React',
      description: 'Intelligent content generation tool using advanced AI models',
      image: 'https://via.placeholder.com/300x200?text=AI+Generator',
      technologies: ['React', 'Claude API', 'TypeScript'],
      features: ['Content generation', 'Multiple templates', 'Batch processing'],
      link: '#',
      github: '#',
    },
  ];

  const categories = ['all', 'React', 'MERN', 'Design'];

  const filteredProjects =
    filter === 'all' ? projects : projects.filter((p) => p.category === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="projects" className="relative py-24 px-4 overflow-hidden" ref={ref}>
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
              Featured <span className="text-primary">Projects</span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Showcasing my best work in web development, AI integration, and design
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                  filter === cat
                    ? 'bg-primary text-background'
                    : 'glass border border-primary/30 text-white hover:border-primary/50'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="wait">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  whileHover={{ y: -10 }}
                  onClick={() => setSelectedProject(project)}
                  className="glass p-6 rounded-xl border border-primary/20 hover:border-primary/50 transition-all cursor-pointer group"
                >
                  {/* Project Image */}
                  <div className="w-full h-48 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 mb-6 overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center text-white font-bold">
                      {project.title}
                    </div>
                  </div>

                  {/* Project Info */}
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted text-sm mb-4">{project.description}</p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <span key={i} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="text-primary text-sm font-semibold group-hover:translate-x-2 transition-transform">
                    View Project →
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="glass border border-primary/30 rounded-2xl max-w-2xl w-full max-h-96 overflow-y-auto p-8"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 hover:bg-primary/10 rounded-lg transition-colors"
              >
                <FiX size={24} className="text-primary" />
              </button>

              <h2 className="text-3xl font-bold mb-4 text-white">{selectedProject.title}</h2>
              <p className="text-muted mb-6">{selectedProject.description}</p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <h3 className="text-primary font-semibold mb-2">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, i) => (
                      <span key={i} className="text-sm bg-primary/20 text-primary px-3 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-primary font-semibold mb-2">Features</h3>
                  <ul className="text-sm text-muted space-y-1">
                    {selectedProject.features.map((feature, i) => (
                      <li key={i}>• {feature}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <motion.a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-2 bg-primary text-background font-semibold rounded-lg hover:shadow-glow transition-all"
                  whileHover={{ scale: 1.05 }}
                >
                  <FiExternalLink size={18} />
                  Visit Project
                </motion.a>
                <motion.a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-2 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-all"
                  whileHover={{ scale: 1.05 }}
                >
                  <FiGithub size={18} />
                  GitHub
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
