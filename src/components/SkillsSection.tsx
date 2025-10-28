import { motion } from 'framer-motion';
import './SkillsSection.css';

// CSS-only skills visualization
function SkillsVisualization() {
  return (
    <div className='css-skills-container'>
      <div className='skills-orb'>
        <div className='skill-icon'>💻</div>
        <div className='orbit orbit-1'>
          <div className='planet'>⚛️</div>
        </div>
        <div className='orbit orbit-2'>
          <div className='planet'>🚀</div>
        </div>
        <div className='orbit orbit-3'>
          <div className='planet'>☁️</div>
        </div>
      </div>
    </div>
  );
}

const skills = [
  { name: 'Java', icon: '☕', level: '90%' },
  { name: 'C# .NET', icon: '⚡', level: '90%' },
  { name: 'ASP.NET Core', icon: '🌐', level: '90%' },
  { name: 'DBMS & SQL', icon: '🗄️', level: '95%' },
  { name: 'REST APIs', icon: '�', level: '95%' },
  { name: 'Data Structures', icon: '📊', level: '95%' },
  { name: 'Low Level Design', icon: '🏗️', level: '95%' },
  { name: 'OOP', icon: '🧩', level: '95%' },
  { name: 'SOLID Principles', icon: '⚙️', level: '95%' },
];

const SkillsSection = () => (
  <section className='skills-section'>
    <h2>Skills</h2>
    <div className='skills-3d-grid'>
      <div className='skills-3d-canvas'>
        <SkillsVisualization />
      </div>
      <div className='skills-list'>
        {skills.map((skill, index) => (
          <motion.div
            className='skill-card'
            key={skill.name}
            whileHover={{ 
              scale: 1.08, 
              boxShadow: '0 0 25px #6c63ff',
              rotateY: 10,
              z: 20
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: index * 0.1,
              type: 'spring',
              damping: 15
            }}
          >
            <div className='skill-icon'>{skill.icon}</div>
            <h3>{skill.name}</h3>
            <p>{skill.level}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
