import { motion } from 'framer-motion';
import './CertificationsSection.css';

const certifications = [
  {
    title: 'Oracle Certified Java Associate (OCJA)',
    orgLogo: '/assets/oracle.svg',
    date: 'Certified in 2022',
    link: 'https://oracle.com/verification',
  },
  {
    title: 'Microsoft Technology Associate (MTA) Java',
    orgLogo: '/assets/microsoft.svg',
    date: 'Certified in 2022',
    link: 'https://microsoft.com/verify',
  },
  {
    title: 'Certified by HackerRank - Java, SQL, ReactJS',
    orgLogo: '/assets/hackerrank.svg',
    date: 'Certified in 2022',
    link: 'https://hackerrank.com/certificates',
  },
  {
    title: 'Microsoft Azure Fundamentals',
    orgLogo: '/assets/azure.svg',
    date: 'Certified in 2024',
    link: 'https://azure.microsoft.com/certification',
  },
];

const CertificationsSection = () => (
  <section className="certifications-section">
    <h2>Certifications</h2>
    <div className="certifications-list">
  {certifications.map((cert) => (
        <motion.div
          className="cert-card"
          key={cert.title}
          whileHover={{ rotateY: 8, boxShadow: '0 0 16px #6c63ff' }}
        >
          <div className="cert-front">
            <img src={cert.orgLogo} alt={cert.title} className="cert-logo" />
            <h3>{cert.title}</h3>
            <span className="cert-date">{cert.date}</span>
          </div>
          <div className="cert-back">
            <a href={cert.link} target="_blank" rel="noopener" className="cert-link">Verify</a>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default CertificationsSection;
