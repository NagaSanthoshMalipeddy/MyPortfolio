import { motion } from 'framer-motion';
import './ContactSection.css';

const FloatingContactSphere = () => {
  return (
    <div className="floating-contact-sphere">
      <div className="sphere-container">
        <div className="sphere-core">📧</div>
        <div className="sphere-ring ring-1"></div>
        <div className="sphere-ring ring-2"></div>
        <div className="sphere-ring ring-3"></div>
        <div className="contact-particles">
          <div className="particle">💫</div>
          <div className="particle">✉️</div>
          <div className="particle">📱</div>
          <div className="particle">🌟</div>
        </div>
      </div>
    </div>
  );
};

const ContactSection = () => (
  <section className="contact-section">
    <h2>Contact</h2>
    <div className="contact-3d-container">
      <div className="contact-3d-canvas">
        <FloatingContactSphere />
      </div>
      <div className="contact-content">
        <form className="contact-form">
          <motion.input 
            type="text" 
            name="name" 
            placeholder="Your Name" 
            whileFocus={{ 
              scale: 1.05, 
              boxShadow: '0 0 20px #6c63ff',
              borderColor: '#6c63ff'
            }}
            whileHover={{ scale: 1.02 }}
            required 
          />
          <motion.input 
            type="email" 
            name="email" 
            placeholder="Your Email" 
            whileFocus={{ 
              scale: 1.05, 
              boxShadow: '0 0 20px #4ecdc4',
              borderColor: '#4ecdc4'
            }}
            whileHover={{ scale: 1.02 }}
            required 
          />
          <motion.textarea 
            name="message" 
            placeholder="Your Message" 
            whileFocus={{ 
              scale: 1.05, 
              boxShadow: '0 0 20px #ffe66d',
              borderColor: '#ffe66d'
            }}
            whileHover={{ scale: 1.02 }}
            required 
          />
          <motion.button 
            type="submit" 
            whileHover={{ 
              scale: 1.08, 
              boxShadow: '0 0 25px #6c63ff',
              backgroundColor: '#6c63ff',
              color: '#fff'
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Send Message
          </motion.button>
        </form>
        <div className="contact-info">
          <motion.a 
            href="mailto:nagasantoshmalipeddy@gmail.com" 
            className="contact-link" 
            whileHover={{ 
              scale: 1.08, 
              color: "#6c63ff",
              textShadow: "0 0 10px #6c63ff"
            }}
          >
            nagasantoshmalipeddy@gmail.com
          </motion.a>
          <motion.a 
            href="tel:+918919043274" 
            className="contact-link" 
            whileHover={{ 
              scale: 1.08, 
              color: "#4ecdc4",
              textShadow: "0 0 10px #4ecdc4"
            }}
          >
            +91 8919043274
          </motion.a>
          <motion.p 
            className="contact-location"
            whileHover={{ scale: 1.05, color: "#ffe66d" }}
          >
            Nandyal, Andhra Pradesh, India
          </motion.p>
          <motion.div className="social-links">
            <motion.a 
              href="https://github.com/NagaSanthoshMalipeddy" 
              target="_blank" 
              className="social-icon" 
              whileHover={{ 
                scale: 1.2, 
                rotate: 5,
                boxShadow: "0 0 15px #333"
              }}
              whileTap={{ scale: 0.9 }}
            >
              GitHub
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/naga-santhosh-malipeddy-b6750620a" 
              target="_blank" 
              className="social-icon" 
              whileHover={{ 
                scale: 1.2, 
                rotate: -5,
                boxShadow: "0 0 15px #0077b5"
              }}
              whileTap={{ scale: 0.9 }}
            >
              LinkedIn
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
