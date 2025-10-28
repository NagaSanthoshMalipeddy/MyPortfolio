import { motion } from 'framer-motion';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className='hero-section'>
      {/* Simple animated background elements */}
      <div className='hero-bg-animation'>
        <div className='floating-element element-1'></div>
        <div className='floating-element element-2'></div>
        <div className='floating-element element-3'></div>
      </div>

      <div className='hero-content'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='hero-text'
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='hero-title'
          >
            Hi, I'm <span className='name-highlight'>Santhosh Malipeddy</span>
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className='hero-subtitle'
          >
            Associate Software Developer
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className='hero-description'
          >
            Experienced Software Developer skilled in C#, .NET, and REST API development, 
            with a proven track record in project leadership and code optimization. Seeking a 
            role to solve complex problems and drive innovation in a collaborative environment.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className='hero-buttons'
          >
            <motion.a
              href='#projects'
              className='cta-button primary'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
            <motion.a
              href='#contact'
              className='cta-button secondary'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
