
import { Suspense } from 'react';
import HeroSection from './components/HeroSection';
import ExperienceSection from './components/ExperienceSection';
import SkillsSection from './components/SkillsSection';
import AchievementsSection from './components/AchievementsSection';
import CertificationsSection from './components/CertificationsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Loading3DSpinner from './components/Loading3DSpinner';
import ThemeSwitcher from './components/ThemeSwitcher';
import './App.css';

function App() {
  return (
    <Suspense fallback={<Loading3DSpinner />}>
      <ThemeSwitcher />
      <HeroSection />
      <ExperienceSection />
      <SkillsSection />
      <AchievementsSection />
      <CertificationsSection />
      <ProjectsSection />
      <ContactSection />
    </Suspense>
  );
}

export default App;
