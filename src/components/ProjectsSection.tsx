import { motion } from 'framer-motion';
import './ProjectsSection.css';

// Import project images
import samsungKnoxProject from '/assets/icons/samsung-knox-project.svg';
import deviceFilterProject from '/assets/icons/device-filter-project.svg';
import zebraOemProject from '/assets/icons/zebra-oem-project.svg';
import quizAppProject from '/assets/icons/quiz-app-project.svg';

const FloatingCodeCube = () => {
  return (
    <div className="floating-code-cube">
      <div className="cube-container">
        <div className="animated-box">
          <div className="box-icon">�</div>
        </div>
        <div className="floating-icons">
          <div className="floating-icon icon-1">🚀</div>
          <div className="floating-icon icon-2">⚡</div>
          <div className="floating-icon icon-3">🎯</div>
          <div className="floating-icon icon-4">✨</div>
        </div>
      </div>
      <div className="code-text">CODE</div>
    </div>
  );
};

const projects = [
  {
    title: 'Samsung Knox E FOTA',
    image: samsungKnoxProject,
    tech: ['C#', '.NET', 'REST APIs', 'Samsung Knox'],
    github: 'https://github.com/NagaSanthoshMalipeddy',
    demo: '#',
    description: 'Enabled Samsung to save time for clients by facilitating over-the-air firmware updates. Streamlined the management of millions of Samsung devices through efficient project execution.',
  },
  {
    title: 'Filtration for Devices in Policies',
    image: deviceFilterProject,
    tech: ['C#', '.NET', 'SOTI MobiControl'],
    github: 'https://github.com/NagaSanthoshMalipeddy',
    demo: '#',
    description: 'Enhanced a core policy for SOTI MobiControl, implementing filtering techniques based on device types. Reduced client effort by 90% through implementing advanced filtration techniques.',
  },
  {
    title: 'Zebra OEM with MGPA',
    image: zebraOemProject,
    tech: ['C#', '.NET', 'Google Services', 'Zebra APIs'],
    github: 'https://github.com/NagaSanthoshMalipeddy',
    demo: '#',
    description: 'Developed code which modifies the large configuration schema from Zebra and sends it to Google service which applies the schema on enrolled Zebra devices using SOTI MobiControl.',
  },
  {
    title: 'Online Quiz Exam',
    image: quizAppProject,
    tech: ['Web Development', 'Database', 'Frontend'],
    github: 'https://github.com/NagaSanthoshMalipeddy',
    demo: '#',
    description: 'Web application used to conduct online quiz exams for students. Based on results obtained, marks are given for assignments instead of handwritten assignments.',
  },
];

const ProjectsSection = () => (
  <section className="projects-section" id="projects">
    <h2>Projects</h2>
    <div className="projects-3d-container">
      <div className="projects-3d-canvas">
        <FloatingCodeCube />
      </div>
      <div className="projects-carousel">
        {projects.map((proj, index) => (
          <motion.div
            className="project-card"
            key={proj.title}
            whileHover={{ 
              scale: 1.08, 
              rotateY: 8,
              rotateX: 3,
              boxShadow: '0 0 40px #6c63ff',
              z: 10
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 60, rotateY: -15 }}
            animate={{ opacity: 1, y: 0, rotateY: 0 }}
            transition={{ 
              duration: 0.7, 
              delay: index * 0.2,
              type: "spring",
              stiffness: 80 
            }}
          >
            <motion.div
              className="project-image-container"
              whileHover={{ 
                scale: 1.1,
                transition: { duration: 0.4 }
              }}
            >
              <img src={proj.image} alt={proj.title} className="project-image" />
            </motion.div>
            <motion.h3
              whileHover={{ 
                scale: 1.05, 
                color: "#6c63ff",
                textShadow: "0 0 15px #6c63ff"
              }}
            >
              {proj.title}
            </motion.h3>
            <motion.p
              whileHover={{ scale: 1.02 }}
            >
              {proj.description}
            </motion.p>
            <div className="project-tech">
              {proj.tech.map((t, techIndex) => (
                <motion.span 
                  key={t} 
                  className="tech-icon"
                  whileHover={{ 
                    scale: 1.2, 
                    backgroundColor: "#6c63ff",
                    boxShadow: "0 0 10px #6c63ff"
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    delay: index * 0.2 + techIndex * 0.1,
                    type: "spring",
                    stiffness: 200
                  }}
                >
                  {t}
                </motion.span>
              ))}
            </div>
            <div className="project-links">
              <motion.a 
                href={proj.github} 
                target="_blank" 
                rel="noopener" 
                className="project-link"
                whileHover={{ 
                  scale: 1.1, 
                  backgroundColor: "#333",
                  boxShadow: "0 0 15px #333"
                }}
                whileTap={{ scale: 0.9 }}
              >
                GitHub
              </motion.a>
              <motion.a 
                href={proj.demo} 
                target="_blank" 
                rel="noopener" 
                className="project-link"
                whileHover={{ 
                  scale: 1.1, 
                  backgroundColor: "#6c63ff",
                  boxShadow: "0 0 15px #6c63ff"
                }}
                whileTap={{ scale: 0.9 }}
              >
                Live Demo
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
