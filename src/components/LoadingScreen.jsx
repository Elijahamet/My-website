import { motion } from 'framer-motion';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center z-50">
      <motion.div
        className="text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          className="text-6xl font-bold text-primary mb-8 text-glow"
          animate={{
            scale: [1, 1.1, 1],
            textShadow: [
              '0 0 20px rgba(0, 212, 255, 0.5)',
              '0 0 40px rgba(0, 212, 255, 0.8)',
              '0 0 20px rgba(0, 212, 255, 0.5)',
            ],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          EA
        </motion.h1>

        <motion.div
          className="w-64 h-1 bg-surface rounded-full overflow-hidden mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-primary to-secondary"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.8, ease: 'easeInOut' }}
          />
        </motion.div>

        <motion.p
          className="text-muted text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Loading your portfolio...
        </motion.p>
      </motion.div>
    </div>
  );
};

export default LoadingScreen;
