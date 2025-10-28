import { motion } from 'framer-motion';
import './AchievementsSection.css';

// CSS-only trophy animation component
const FloatingTrophy = () => {
  return (
    <div className="css-trophy-container">
      <div className="css-trophy">
        <div className="trophy-cup"></div>
        <div className="trophy-base"></div>
        <div className="trophy-handle-left"></div>
        <div className="trophy-handle-right"></div>
        <div className="trophy-glow"></div>
      </div>
    </div>
  );
};

const achievements = [
  {
    title: 'Microsoft Badge Certification',
    badge: '/assets/icons/achievement-trophy.svg',
    description: 'Secured a badge from Microsoft for getting certified in technology fundamentals in 2022.',
  },
  {
    title: 'Oracle Corporation Badge',
    badge: '/assets/icons/achievement-trophy.svg',
    description: 'Got a badge from Oracle Corporation for Java certification excellence in 2022.',
  },
  {
    title: 'Level 3 Coder in LeetCode',
    badge: '/assets/icons/achievement-trophy.svg',
    description: 'Achieved Level 3 status on LeetCode demonstrating strong problem-solving skills.',
  },
  {
    title: 'Top 10 Finalists - NeuralHack',
    badge: '/assets/icons/achievement-trophy.svg',
    description: 'Top 10 finalists in NeuralHack Hackathon organized by Virtusa in 2023.',
  },
  {
    title: 'Best Performer - Virtusa',
    badge: '/assets/icons/achievement-trophy.svg',
    description: 'Recognized as Best Performer among interns at Virtusa during internship period.',
  },
];

const AchievementsSection = () => (
  <section className="achievements-section">
    <h2>Achievements</h2>
    <div className="achievements-3d-container">
      <div className="achievements-3d-canvas">
        <FloatingTrophy />
      </div>
      <div className="achievements-list">
        {achievements.map((ach, index) => (
          <motion.div
            className="achievement-card"
            key={ach.title}
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 0 30px #ffd700',
              z: 20
            }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: index * 0.15,
              type: "spring",
              stiffness: 100 
            }}
          >
            <motion.div
              className="achievement-badge-container"
              whileHover={{ 
                scale: 1.2,
                transition: { duration: 0.3, ease: "easeInOut" }
              }}
            >
              <img src={ach.badge} alt={ach.title} className="achievement-badge" />
            </motion.div>
            <motion.h3
              whileHover={{ 
                scale: 1.1, 
                color: "#ffd700",
                textShadow: "0 0 10px #ffd700"
              }}
            >
              {ach.title}
            </motion.h3>
            <motion.p
              whileHover={{ scale: 1.02 }}
            >
              {ach.description}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AchievementsSection;
