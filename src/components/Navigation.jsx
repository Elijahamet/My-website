import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX, FiDownload } from 'react-icons/fi';

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', id: 'home', href: '#home' },
    { name: 'About', id: 'about', href: '#about' },
    { name: 'Skills', id: 'skills', href: '#skills' },
    { name: 'Projects', id: 'projects', href: '#projects' },
    { name: 'Experience', id: 'experience', href: '#experience' },
    { name: 'Services', id: 'services', href: '#services' },
    { name: 'Contact', id: 'contact', href: '#contact' },
  ];

  const handleNavClick = (id) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-40 backdrop-blur-md bg-background/80 border-b border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.a
            href="#home"
            className="text-2xl font-bold text-primary text-glow"
            whileHover={{ scale: 1.1 }}
          >
            EA
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.id}
                href={link.href}
                onClick={() => handleNavClick(link.id)}
                className={`relative text-sm font-medium transition-colors ${
                  activeSection === link.id ? 'text-primary' : 'text-white hover:text-primary'
                }`}
                whileHover={{ scale: 1.05 }}
              >
                {link.name}
                {activeSection === link.id && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                    layoutId="navbar-indicator"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
              </motion.a>
            ))}
          </div>

          {/* Resume Button */}
          <div className="hidden md:flex">
            <motion.a
              href="/resume.pdf"
              download="Elijah_Ametefe_Resume.pdf"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-background font-semibold hover:bg-secondary transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiDownload size={18} />
              Resume
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-primary"
              whileTap={{ scale: 0.95 }}
            >
              {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden pb-4 border-t border-primary/10"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <motion.a
                  key={link.id}
                  href={link.href}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-4 py-2 rounded text-sm font-medium transition-colors ${
                    activeSection === link.id
                      ? 'text-primary bg-primary/10'
                      : 'text-white hover:text-primary'
                  }`}
                  whileHover={{ x: 5 }}
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="/resume.pdf"
                download="Elijah_Ametefe_Resume.pdf"
                className="px-4 py-2 mt-2 rounded bg-primary text-background font-semibold flex items-center gap-2 justify-center"
                whileHover={{ scale: 1.05 }}
              >
                <FiDownload size={18} />
                Resume
              </motion.a>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
