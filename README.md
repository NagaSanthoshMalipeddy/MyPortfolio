# 3D Portfolio Website

A modern, professional 3D portfolio website for software engineers built with React, TypeScript, Three.js, and Framer Motion.

## Features

- **3D Effects & Animations**: Interactive 3D elements using Three.js and React Three Fiber
- **Smooth Animations**: Page transitions and micro-interactions with Framer Motion
- **Dark Theme**: Professional color scheme with blue/purple accent colors
- **Responsive Design**: Seamless experience across desktop, tablet, and mobile
- **Performance Optimized**: Fast loading times and smooth 60fps animations
- **Accessibility**: WCAG compliant with proper semantic HTML and ARIA labels

## Sections Included

- **Hero Section**: 3D rotating geometric shapes with professional headshot
- **Experience Timeline**: Interactive timeline with company logos and achievements
- **Skills Showcase**: 3D skill grid with animated progress bars
- **Achievements**: Award cards with 3D tilt effects
- **Certifications**: Certificate cards with flip animations
- **Projects Portfolio**: Interactive 3D project cards with demos
- **Contact Form**: Animated contact form with validation

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **3D Graphics**: Three.js + React Three Fiber + Drei
- **Animations**: Framer Motion
- **Build Tool**: Vite
- **Styling**: CSS3 with custom properties
- **Icons**: React Icons

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

```bash
# Clone the repository
git clone https://github.com/yourusername/3d-portfolio.git
cd 3d-portfolio

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Development

The development server runs on `http://localhost:5173/` with hot module replacement enabled.

### Project Structure
```
src/
├── components/          # React components
│   ├── HeroSection.tsx     # Hero section with 3D elements
│   ├── ExperienceSection.tsx # Work experience timeline
│   ├── SkillsSection.tsx   # Skills with 3D visualization
│   ├── AchievementsSection.tsx # Awards and recognition
│   ├── CertificationsSection.tsx # Professional certifications
│   ├── ProjectsSection.tsx # Portfolio projects
│   ├── ContactSection.tsx  # Contact form
│   ├── Loading3DSpinner.tsx # 3D loading animation
│   └── ThemeSwitcher.tsx   # Theme toggle component
├── App.tsx             # Main application component
├── main.tsx           # Application entry point
└── index.css          # Global styles
```

## Customization

### Placeholder Assets
The following placeholder assets need to be replaced with your actual content:

- `/assets/headshot.png` - Your professional headshot
- `/assets/resume.pdf` - Your resume/CV file
- Company logos in experience section
- Achievement badges and certification logos
- Project screenshots
- Update personal information throughout the components

### Content Updates
1. Update personal information in `HeroSection.tsx`
2. Replace experience data in `ExperienceSection.tsx`
3. Customize skills in `SkillsSection.tsx`
4. Add your achievements in `AchievementsSection.tsx`
5. Update certifications in `CertificationsSection.tsx`
6. Replace projects in `ProjectsSection.tsx`
7. Update contact information in `ContactSection.tsx`

## Performance Optimization

- Lazy loading for images and 3D components
- Code splitting for optimal bundle sizes
- Optimized Three.js scenes for 60fps performance
- Compressed textures and efficient geometry
- Progressive enhancement for older browsers

## Browser Support

- Chrome 88+
- Firefox 85+
- Safari 14+
- Edge 88+

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - feel free to use this project for your own portfolio.

## Credits

Built with modern web technologies:
- React Three Fiber for 3D graphics
- Framer Motion for smooth animations
- Vite for fast development and building
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
