# 3D Portfolio Website

A modern, professional 3D portfolio website for software engineers built with React, TypeScript, and Framer Motion.

## Features

- **CSS Animations**: Smooth and performant CSS-based animations replacing Three.js
- **Smooth Animations**: Page transitions and micro-interactions with Framer Motion
- **Dark/Light Theme**: Complete theme switching with professional color schemes
- **Responsive Design**: Seamless experience across desktop, tablet, and mobile
- **Performance Optimized**: Fast loading times with CSS animations
- **Accessibility**: WCAG compliant with proper semantic HTML and ARIA labels

## Sections Included

- **Hero Section**: Professional introduction with animated background elements
- **Experience & Education Timeline**: Interactive timeline with company logos and achievements
- **Skills Showcase**: CSS orbital animation system with skill percentages
- **Achievements**: Award cards with golden trophy animation
- **Certifications**: Professional certifications with dates
- **Projects Portfolio**: Interactive project cards with detailed descriptions
- **Contact Form**: Animated contact form with floating sphere animation

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Animations**: Framer Motion + CSS Animations
- **Build Tool**: Vite
- **Styling**: CSS3 with custom properties and animations
- **Theme System**: Complete dark/light mode support

## Personal Information

This portfolio showcases the work and achievements of **Naga Santhosh Malipeddy**:
- **Role**: Associate Software Developer at SOTI
- **Experience**: 2+ years in C#, .NET, ASP.NET Core, REST APIs
- **Education**: B.Tech (CSE) from RGMCET, JNTU Anantapuramu (2019-2023)
- **Location**: Nandyal, Andhra Pradesh, India

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

```bash
# Clone the repository
git clone https://github.com/NagaSanthoshMalipeddy/MyPortfolio.git
cd MyPortfolio

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Deploy to GitHub Pages (manual)
npm run deploy
```

## Deployment

This portfolio is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Live Site
🌐 **[View Live Portfolio](https://nagasanthoshmalipeddy.github.io/MyPortfolio)**

### Automatic Deployment
Every push to the `master` branch automatically triggers deployment via GitHub Actions:
1. Builds the application
2. Uploads the build artifacts to GitHub Pages
3. Makes the site live at the URL above

### Manual Deployment
You can also deploy manually using:
```bash
npm run deploy
```

### Deployment Configuration
- **GitHub Actions**: `.github/workflows/deploy.yml`
- **Build Output**: `dist/` directory
- **Base URL**: `/MyPortfolio/` (configured in `vite.config.ts`)
- **Homepage**: Set in `package.json` for GitHub Pages

## Development

The development server runs on `http://localhost:5173/` with hot module replacement enabled.

### Project Structure
```
src/
├── components/          # React components
│   ├── HeroSection.tsx     # Hero section with animated elements
│   ├── ExperienceSection.tsx # Work experience & education timeline
│   ├── SkillsSection.tsx   # Skills with CSS orbital animation
│   ├── AchievementsSection.tsx # Awards with trophy animation
│   ├── CertificationsSection.tsx # Professional certifications
│   ├── ProjectsSection.tsx # Portfolio projects
│   ├── ContactSection.tsx  # Contact form with sphere animation
│   ├── Loading3DSpinner.tsx # Loading animation
│   └── ThemeSwitcher.tsx   # Theme toggle component
├── App.tsx             # Main application component
├── main.tsx           # Application entry point
└── index.css          # Global styles and theme variables
```

## Features Implemented

✅ **Updated Personal Data**: All information fetched from actual GitHub Pages  
✅ **CSS Animations**: Replaced Three.js with performant CSS animations  
✅ **Complete Theme System**: Dark/light mode with CSS variables  
✅ **Responsive Design**: Mobile-first approach with proper breakpoints  
✅ **Professional Content**: Real project descriptions and achievements  
✅ **Performance Optimized**: Fast loading and smooth animations  

## Performance Optimization

- CSS-only animations for better performance and compatibility
- Optimized bundle sizes with Vite
- Responsive images and lazy loading
- Smooth 60fps animations
- Progressive enhancement for older browsers

## Browser Support

- Chrome 88+
- Firefox 85+
- Safari 14+
- Edge 88+

## Contact

- **Email**: nagasantoshmalipeddy@gmail.com
- **Phone**: +91 8919043274
- **GitHub**: [NagaSanthoshMalipeddy](https://github.com/NagaSanthoshMalipeddy)
- **LinkedIn**: [naga-santhosh-malipeddy](https://www.linkedin.com/in/naga-santhosh-malipeddy-b6750620a)

## License

MIT License - feel free to use this project as inspiration for your own portfolio.

## Credits

Built with modern web technologies:
- React + TypeScript for robust development
- Framer Motion for smooth animations
- CSS3 for performant visual effects
- Vite for fast development and building
