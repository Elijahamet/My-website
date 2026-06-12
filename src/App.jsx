import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with React, Node.js, and Stripe integration. Features real-time inventory, user authentication, and payment processing.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    image: 'Project 1'
  },
  {
    id: 2,
    title: 'AI Chat Application',
    description: 'Intelligent chatbot built with React and OpenAI API. Includes message history, user preferences, and responsive design.',
    tags: ['React', 'OpenAI API', 'Tailwind CSS'],
    image: 'Project 2'
  },
  {
    id: 3,
    title: 'Task Management Dashboard',
    description: 'Collaborative task management tool with real-time updates, team management, and advanced analytics dashboard.',
    tags: ['React', 'Firebase', 'Material-UI'],
    image: 'Project 3'
  }
];

const skills = [
  'React', 'Next.js', 'Node.js', 'TypeScript', 'MongoDB', 'PostgreSQL',
  'Tailwind CSS', 'Framer Motion', 'GraphQL', 'AWS', 'Docker', 'AI/ML'
];

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hoveredProject, setHoveredProject] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Track mouse position for parallax effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (isLoading) {
    return (
      <div style={{
        backgroundColor: '#0a0a0a',
        color: '#fff',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Inter, sans-serif'
      }}>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: '2.5rem', margin: 0 }}>Elijah Ametefe</h1>
          <p style={{ color: '#00d4ff', fontSize: '1.2rem' }}>Full-Stack Developer & AI Builder</p>
        </div>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: '#0a0a0a', color: '#fff', fontFamily: 'Inter, sans-serif' }}>
      {/* Navigation */}
      <nav style={{
        padding: '1.5rem 2rem',
        borderBottom: '1px solid rgba(0, 212, 255, 0.1)',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backgroundColor: 'rgba(10, 10, 10, 0.95)',
        backdropFilter: 'blur(10px)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ margin: 0, fontSize: '1.5rem', color: '#00d4ff' }}>EA</h2>
          <div style={{ display: 'flex', gap: '2rem' }}>
            <a href="#about" style={{ color: '#fff', textDecoration: 'none' }}>About</a>
            <a href="#projects" style={{ color: '#fff', textDecoration: 'none' }}>Projects</a>
            <a href="#contact" style={{ color: '#fff', textDecoration: 'none' }}>Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ maxWidth: '1000px', textAlign: 'center', zIndex: 10 }}>
          <motion.h1 
            style={{
              fontSize: 'clamp(2.5rem, 8vw, 5rem)',
              margin: '0 0 1rem 0',
              lineHeight: 1.2,
              fontWeight: 800,
              background: 'linear-gradient(135deg, #ffffff 0%, #00d4ff 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}>
            Building Digital Experiences
          </motion.h1>
          <motion.p 
            style={{
              fontSize: '1.2rem',
              color: '#00d4ff',
              margin: '1rem 0 2rem 0',
              fontWeight: 600
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}>
            Web Developer | AI Builder | UI/UX Designer
          </motion.p>
          <motion.p 
            style={{
              fontSize: '1rem',
              color: '#aaa',
              maxWidth: '600px',
              margin: '0 auto 2rem',
              lineHeight: 1.6
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}>
            I create beautiful, performant web applications and explore the intersection of AI and user experience design.
          </motion.p>
          <motion.button 
            style={{
              padding: '1rem 2.5rem',
              fontSize: '1rem',
              fontWeight: 600,
              color: '#0a0a0a',
              backgroundColor: '#00d4ff',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 212, 255, 0.6)' }}
            whileTap={{ scale: 0.95 }}>
            View My Work
          </motion.button>
        </motion.div>

        {/* Background orbs with parallax */}
        <motion.div 
          style={{
            position: 'absolute',
            width: '400px',
            height: '400px',
            backgroundColor: 'rgba(0, 212, 255, 0.1)',
            borderRadius: '50%',
            top: '-100px',
            left: '-100px',
            filter: 'blur(50px)',
            x: mousePos.x * 0.02,
            y: mousePos.y * 0.02
          }}
          animate={{ 
            y: [0, -30, 0],
            transition: { duration: 6, repeat: Infinity }
          }} />
        <motion.div 
          style={{
            position: 'absolute',
            width: '300px',
            height: '300px',
            backgroundColor: 'rgba(167, 139, 250, 0.1)',
            borderRadius: '50%',
            bottom: '-50px',
            right: '-50px',
            filter: 'blur(50px)',
            x: mousePos.x * -0.02,
            y: mousePos.y * -0.02
          }}
          animate={{ 
            y: [0, 30, 0],
            transition: { duration: 8, repeat: Infinity }
          }} />
      </section>

      {/* About Section */}
      <section id="about" style={{
        padding: '4rem 2rem',
        maxWidth: '1200px',
        margin: '0 auto',
        borderTop: '1px solid rgba(0, 212, 255, 0.1)'
      }}>
        <h2 style={{
          fontSize: '2.5rem',
          marginBottom: '2rem',
          color: '#00d4ff'
        }}>About Me</h2>
        <p style={{
          fontSize: '1.1rem',
          color: '#aaa',
          lineHeight: 1.8,
          maxWidth: '800px'
        }}>
          I'm a full-stack developer passionate about creating exceptional digital experiences. With expertise in React, Node.js, and modern web technologies, I build scalable applications that combine beautiful design with robust functionality. My focus is on solving real problems and creating tools that make a difference.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" style={{
        padding: '4rem 2rem',
        maxWidth: '1200px',
        margin: '0 auto',
        borderTop: '1px solid rgba(0, 212, 255, 0.1)'
      }}>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            fontSize: '2.5rem',
            marginBottom: '3rem',
            color: '#00d4ff'
          }}>
          Featured Projects
        </motion.h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {projects.map((project, idx) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -10, boxShadow: '0 0 30px rgba(0, 212, 255, 0.3)' }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{
                backgroundColor: hoveredProject === project.id ? 'rgba(26, 26, 46, 0.6)' : 'rgba(26, 26, 46, 0.4)',
                border: hoveredProject === project.id ? '1px solid rgba(0, 212, 255, 0.5)' : '1px solid rgba(0, 212, 255, 0.2)',
                borderRadius: '12px',
                padding: '2rem',
                backdropFilter: 'blur(10px)',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}>
              <motion.h3 
                style={{ color: '#00d4ff', marginBottom: '1rem', fontSize: '1.3rem' }}
                initial={{ x: 0 }}
                animate={{ x: hoveredProject === project.id ? 5 : 0 }}
                transition={{ duration: 0.3 }}>
                {project.title}
              </motion.h3>
              <p style={{ color: '#aaa', marginBottom: '1.5rem', lineHeight: 1.6 }}>{project.description}</p>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
                {project.tags.map((tag, tagIdx) => (
                  <motion.span 
                    key={tag}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: tagIdx * 0.05 }}
                    whileHover={{ scale: 1.1 }}
                    style={{
                      padding: '0.4rem 0.8rem',
                      backgroundColor: 'rgba(0, 212, 255, 0.1)',
                      border: '1px solid rgba(0, 212, 255, 0.3)',
                      borderRadius: '20px',
                      fontSize: '0.8rem',
                      color: '#00d4ff',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}>
                    {tag}
                  </motion.span>
                ))}
              </div>
              <motion.a 
                href="#" 
                style={{ color: '#00d4ff', textDecoration: 'none', fontWeight: 600 }}
                whileHover={{ x: 5, color: '#00ffff' }}
                transition={{ duration: 0.2 }}>
                Learn More →
              </motion.a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" style={{
        padding: '4rem 2rem',
        maxWidth: '1200px',
        margin: '0 auto',
        borderTop: '1px solid rgba(0, 212, 255, 0.1)'
      }}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            fontSize: '2.5rem',
            marginBottom: '3rem',
            color: '#00d4ff'
          }}>
          Skills & Technologies
        </motion.h2>
        <motion.div 
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem'
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.05,
                delayChildren: 0.2
              }
            }
          }}>
          {skills.map((skill, idx) => (
            <motion.div
              key={skill}
              variants={{
                hidden: { opacity: 0, y: 20, scale: 0.8 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  scale: 1,
                  transition: { duration: 0.4 }
                }
              }}
              whileHover={{ 
                scale: 1.1,
                backgroundColor: 'rgba(0, 212, 255, 0.2)',
                boxShadow: '0 0 15px rgba(0, 212, 255, 0.4)'
              }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: '1rem 1.5rem',
                backgroundColor: 'rgba(0, 212, 255, 0.1)',
                border: '1px solid rgba(0, 212, 255, 0.3)',
                borderRadius: '8px',
                color: '#00d4ff',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}>
              {skill}
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{
        padding: '4rem 2rem',
        maxWidth: '1200px',
        margin: '0 auto',
        borderTop: '1px solid rgba(0, 212, 255, 0.1)',
        textAlign: 'center'
      }}>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            fontSize: '2.5rem',
            marginBottom: '2rem',
            color: '#00d4ff'
          }}>
          Get In Touch
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            fontSize: '1.1rem',
            color: '#aaa',
            marginBottom: '2rem'
          }}>
          I'm always interested in hearing about new projects and opportunities.
        </motion.p>
        <motion.a 
          href="mailto:contact@example.com" 
          style={{
            display: 'inline-block',
            padding: '1rem 2.5rem',
            fontSize: '1rem',
            fontWeight: 600,
            color: '#0a0a0a',
            backgroundColor: '#00d4ff',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            textDecoration: 'none',
            transition: 'all 0.3s ease'
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 212, 255, 0.6)' }}
          whileTap={{ scale: 0.95 }}>
          Send Me an Email
        </motion.a>
      </section>

      {/* Footer */}
      <footer style={{
        padding: '2rem',
        borderTop: '1px solid rgba(0, 212, 255, 0.1)',
        textAlign: 'center',
        color: '#666',
        marginTop: '2rem'
      }}>
        <p>© 2026 Elijah Ametefe. All rights reserved.</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginTop: '1rem' }}>
          <a href="#" style={{ color: '#00d4ff', textDecoration: 'none' }}>GitHub</a>
          <a href="#" style={{ color: '#00d4ff', textDecoration: 'none' }}>LinkedIn</a>
          <a href="#" style={{ color: '#00d4ff', textDecoration: 'none' }}>Twitter</a>
        </div>
      </footer>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-30px); }
        }
      `}</style>
    </div>
  );
}

export default App;
