import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';

const ContactSection = () => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Send to email service - integrate with your backend
      // For demo, just show success message
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 3000);
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setLoading(false);
    }
  };

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

  const contactInfo = [
    {
      icon: FiMail,
      label: 'Email',
      value: 'hello@elijahametefe.com',
      href: 'mailto:hello@elijahametefe.com',
    },
    {
      icon: FiPhone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
    },
    {
      icon: FiMapPin,
      label: 'Location',
      value: 'San Francisco, CA',
      href: '#',
    },
  ];

  return (
    <section id="contact" className="relative py-24 px-4 overflow-hidden" ref={ref}>
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
              Let&apos;s Work <span className="text-primary">Together</span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Have a project in mind? I&apos;d love to hear about it. Reach out and let&apos;s create something amazing.
            </p>
          </motion.div>

          {/* Content */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {/* Contact Info */}
            <motion.div variants={itemVariants} className="lg:col-span-1 space-y-6">
              <h3 className="text-2xl font-bold text-white mb-8">Get In Touch</h3>

              {contactInfo.map((info, idx) => {
                const IconComponent = info.icon;
                return (
                  <motion.a
                    key={idx}
                    href={info.href}
                    variants={itemVariants}
                    whileHover={{ x: 10 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/40 transition-colors flex-shrink-0">
                      <IconComponent size={24} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted">{info.label}</p>
                      <p className="text-white font-semibold group-hover:text-primary transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                );
              })}

              {/* Social Links */}
              <motion.div variants={itemVariants} className="pt-8 border-t border-primary/20">
                <h4 className="text-lg font-bold text-white mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  {['Twitter', 'GitHub', 'LinkedIn', 'Instagram'].map((social, idx) => (
                    <motion.a
                      key={idx}
                      href="#"
                      className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center hover:bg-primary/40 transition-colors text-primary"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {social[0]}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.form
              variants={itemVariants}
              onSubmit={handleSubmit}
              className="lg:col-span-2 space-y-4"
            >
              <div className="glass p-8 rounded-xl border border-primary/20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  {/* Name Input */}
                  <motion.div whileFocus={{ scale: 1.02 }}>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-surface border border-primary/30 rounded-lg text-white placeholder-muted focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all"
                    />
                  </motion.div>

                  {/* Email Input */}
                  <motion.div whileFocus={{ scale: 1.02 }}>
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-surface border border-primary/30 rounded-lg text-white placeholder-muted focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all"
                    />
                  </motion.div>
                </div>

                {/* Subject Input */}
                <motion.div whileFocus={{ scale: 1.02 }} className="mb-4">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-surface border border-primary/30 rounded-lg text-white placeholder-muted focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all"
                  />
                </motion.div>

                {/* Message Textarea */}
                <motion.div whileFocus={{ scale: 1.02 }} className="mb-6">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="5"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-surface border border-primary/30 rounded-lg text-white placeholder-muted focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all resize-none"
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={loading}
                  className="w-full px-6 py-3 bg-primary text-background font-bold rounded-lg hover:shadow-glow transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FiSend size={20} />
                  {loading ? 'Sending...' : 'Send Message'}
                </motion.button>

                {/* Success Message */}
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mt-4 p-4 bg-primary/20 border border-primary/50 rounded-lg text-primary text-center"
                  >
                    Thank you! I&apos;ll get back to you soon.
                  </motion.div>
                )}
              </div>
            </motion.form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
