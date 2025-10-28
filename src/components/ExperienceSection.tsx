import { motion } from 'framer-motion';
import './ExperienceSection.css';

const experiences = [
  {
    company: 'Microsoft',
    logo: '/assets/icons/microsoft-logo.svg',
    role: 'Software Engineer',
    period: 'May 2025 - Present',
    description: 'Currently working as a Software Engineer at Microsoft, contributing to innovative cloud solutions and enterprise software development.',
    technologies: ['C#', '.NET', 'Azure', 'Cloud Computing', 'Microservices'],
    accomplishments: [
      'Contributing to Microsoft Azure cloud platform development',
      'Working on scalable enterprise solutions serving millions of users',
      'Implementing best practices in cloud-native application development',
      'Collaborating with cross-functional teams on cutting-edge technology projects'
    ],
  },
  {
    company: 'SOTI',
    logo: '/assets/icons/soti-logo.svg',
    role: 'Associate Software Developer',
    period: 'July 2023 - April 2025',
    description: 'Led development of 4 epics focusing on architecture and security guidelines, improving project efficiency.',
    technologies: ['C#', '.NET', 'ASP.NET Core', 'REST APIs', 'Angular'],
    accomplishments: [
      'Led the development of 4 epics with focus on architecture and security guidelines, improving project efficiency',
      'Designed and deployed 20+ REST APIs using .NET Framework and C#, integrating external APIs like Samsung Knox and Zebra Technologies for 30K devices',
      'Modernized the interface of SOTI MobiControl with .NET and Angular, optimizing APIs and boosting product efficiency by 25%',
      'Developed automated unit, integration, and SpecFlow BDD tests, reducing bugs by 20% and ensuring high-quality code for a product serving 1 million users'
    ],
  },
  {
    company: 'Virtusa',
    logo: '/assets/icons/virtusa-logo.svg',
    role: 'ASD Intern',
    period: 'Jan 2023 - Jun 2023',
    description: 'Collaborated on 3 minor projects to enhance technical skills and adapt to workplace culture.',
    technologies: ['Java', 'Web Development', 'Database'],
    accomplishments: [
      'Collaborated on 3 minor projects to enhance technical skills and adapt to workplace culture',
      'Participated in discussions related to client projects and contributed to development',
      'Recognized as Best Performer among interns'
    ],
  },
  {
    company: 'GeeksforGeeks',
    logo: '/assets/icons/gfg-logo.svg',
    role: 'Contributor',
    period: 'May 2024 - Present',
    description: 'Fixed critical algorithm bugs and released improved versions with better accuracy and functionality.',
    technologies: ['Algorithms', 'Data Structures', 'Problem Solving'],
    accomplishments: [
      'Fixed critical algorithm bugs and released improved versions with better accuracy and functionality',
      'Optimized algorithms, achieving significant improvements in performance and efficiency'
    ],
  },
];

const ExperienceSection = () => (
  <section className="experience-section">
    <h2>Experience</h2>
    <div className="timeline">
      {experiences.map((exp, idx) => (
        <motion.div
          className="timeline-item"
          key={exp.company}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 + idx * 0.2 }}
        >
          <div className="timeline-marker">
            <img src={exp.logo} alt={exp.company} className="company-logo" />
          </div>
          <div className="timeline-content">
            <h3>{exp.role}</h3>
            <span className="timeline-period">{exp.period}</span>
            <p>{exp.description}</p>
            <div className="tech-list">
              {exp.technologies.map((tech) => (
                <span className="tech-icon" key={tech}>{tech}</span>
              ))}
            </div>
            <ul className="accomplishments">
              {exp.accomplishments.map((acc) => (
                <li key={acc}>{acc}</li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default ExperienceSection;
