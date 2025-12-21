# Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- **Hero Section** - Introduction with profile image and social links
- **About Section** - Personal information and experience
- **Projects Section** - Showcase of your work
- **Skills Section** - Technical skills organized by category
- **Contact Section** - Contact form and information

## Technologies

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **shadcn/ui** - UI component library
- **React Router** - Navigation
- **Lucide React** - Icons

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd pretty-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:8080`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build for development
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/        # React components
│   ├── ui/           # shadcn/ui components
│   ├── AboutSection.tsx
│   ├── ContactSection.tsx
│   ├── HeroSection.tsx
│   ├── Navbar.tsx
│   ├── ProjectsSection.tsx
│   └── SkillsSection.tsx
├── pages/            # Page components
├── hooks/            # Custom React hooks
├── lib/              # Utility functions
└── main.tsx          # Entry point
```

## Customization

1. Update personal information in `src/components/HeroSection.tsx`
2. Add your projects in `src/components/ProjectsSection.tsx`
3. Update skills in `src/components/SkillsSection.tsx`
4. Modify contact information in `src/components/ContactSection.tsx`
5. Replace `/public/profile.jpg` with your profile image

## Deployment

Build the project for production:

```bash
npm run build
```

The `dist` folder will contain the production-ready files that can be deployed to any static hosting service like Vercel, Netlify, or GitHub Pages.

## License

MIT
