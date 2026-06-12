import { motion } from 'framer-motion';
import { FiGithub, FiTwitter, FiLinkedin, FiMail } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FiGithub, href: '#', label: 'GitHub' },
    { icon: FiTwitter, href: '#', label: 'Twitter' },
    { icon: FiLinkedin, href: '#', label: 'LinkedIn' },
    { icon: FiMail, href: 'mailto:hello@elijahametefe.com', label: 'Email' },
  ];

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <footer className="relative border-t border-primary/10 bg-background overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-7xl mx-auto px-4 py-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Brand Section */}
            <motion.div variants={itemVariants} className="md:col-span-1">
              <h3 className="text-2xl font-bold text-primary mb-4">EA</h3>
              <p className="text-muted text-sm leading-relaxed">
                Full-stack developer and AI enthusiast building the future of web.
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants}>
              <h4 className="text-white font-bold mb-4">Navigation</h4>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-muted hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div variants={itemVariants}>
              <h4 className="text-white font-bold mb-4">Services</h4>
              <ul className="space-y-2">
                {['Web Development', 'AI Integration', 'UI/UX Design', 'Consulting'].map(
                  (service) => (
                    <li key={service}>
                      <a href="#" className="text-muted hover:text-primary transition-colors text-sm">
                        {service}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </motion.div>

            {/* Contact */}
            <motion.div variants={itemVariants}>
              <h4 className="text-white font-bold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="mailto:hello@elijahametefe.com"
                    className="text-muted hover:text-primary transition-colors text-sm"
                  >
                    hello@elijahametefe.com
                  </a>
                </li>
                <li className="text-muted text-sm">San Francisco, CA</li>
                <li className="text-muted text-sm">Available for freelance work</li>
              </ul>
            </motion.div>
          </div>

          {/* Divider */}
          <motion.div
            className="h-px bg-gradient-to-r from-transparent via-primary to-transparent"
            variants={itemVariants}
          />

          {/* Bottom Section */}
          <motion.div
            variants={containerVariants}
            className="flex flex-col md:flex-row items-center justify-between pt-12 gap-8"
          >
            {/* Copyright */}
            <motion.p variants={itemVariants} className="text-muted text-sm">
              &copy; {currentYear} Elijah Ametefe. All rights reserved.
            </motion.p>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4"
            >
              {socialLinks.map((social, idx) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-background transition-all"
                    whileHover={{ scale: 1.15, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    title={social.label}
                  >
                    <IconComponent size={18} />
                  </motion.a>
                );
              })}
            </motion.div>

            {/* Back to Top */}
            <motion.a
              href="#home"
              className="text-primary text-sm font-semibold hover:text-secondary transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              Back to top ↑
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
