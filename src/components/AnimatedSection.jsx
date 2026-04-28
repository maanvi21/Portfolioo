import { motion } from 'framer-motion';

const AnimatedSection = ({ children, className, id }) => {
  return (
    <motion.section
      id={id}
      className={`section ${className || ''}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="container">
        {children}
      </div>
    </motion.section>
  );
};

export default AnimatedSection;
