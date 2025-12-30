# Dorian Crutcher - Solutions Engineer Portfolio

A React + TypeScript website built with Vite and shadcn/ui components, exported from Figma.

## Project Structure

```
├── src/
│   ├── components/          # React components
│   │   ├── ui/            # shadcn/ui components
│   │   ├── Header.tsx     # Navigation header
│   │   ├── Hero.tsx       # Hero section
│   │   ├── WhyAgents.tsx  # Why agents section
│   │   ├── HowItWorks.tsx # How it works section
│   │   ├── CaseStudies.tsx # Case studies section
│   │   ├── Services.tsx   # Services section
│   │   ├── About.tsx      # About section
│   │   ├── Contact.tsx    # Contact section
│   │   └── Footer.tsx     # Footer
│   ├── styles/
│   │   └── globals.css    # Global styles and Tailwind CSS
│   ├── App.tsx            # Main App component
│   └── main.tsx           # Application entry point
├── public/                # Static assets
├── package.json           # Dependencies and scripts
├── vite.config.ts         # Vite configuration
├── tailwind.config.js     # Tailwind CSS configuration
└── tsconfig.json          # TypeScript configuration
```

## Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

## Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to `http://localhost:5173` to view the website.

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## Features

- **Modern React** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **shadcn/ui** components for consistent UI
- **Responsive design** that works on all devices
- **Dark/Light theme** support
- **Smooth animations** and transitions

## Customization

### Adding Your Logo

Replace the placeholder logo in `public/logo.png` with your actual logo file.

### Modifying Components

All components are located in `src/components/`. Each component is self-contained and can be modified independently.

### Styling

- Global styles are in `src/styles/globals.css`
- Tailwind CSS configuration is in `tailwind.config.js`
- Component-specific styles use Tailwind CSS classes

### Adding New Pages

1. Create a new component in `src/components/`
2. Import and add it to `src/App.tsx`
3. Update the navigation in `src/components/Header.tsx` if needed

## Dependencies

### Core Dependencies
- React 18.2.0
- React DOM 18.2.0
- TypeScript 5.2.2
- Vite 5.0.8

### UI Dependencies
- Tailwind CSS 3.3.6
- shadcn/ui components
- Radix UI primitives
- Lucide React icons
- Class Variance Authority
- Tailwind Merge

### Development Dependencies
- ESLint for code linting
- PostCSS and Autoprefixer
- TypeScript ESLint plugins

## Browser Support

This project supports all modern browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

The project is optimized for performance with:
- Vite's fast HMR (Hot Module Replacement)
- Tree-shaking for smaller bundle sizes
- Optimized Tailwind CSS output
- Lazy loading capabilities

## Troubleshooting

### Common Issues

1. **Port already in use:**
   ```bash
   # Kill the process using port 5173
   lsof -ti:5173 | xargs kill -9
   ```

2. **TypeScript errors:**
   ```bash
   # Clear TypeScript cache
   rm -rf node_modules/.cache
   npm install
   ```

3. **Styling issues:**
   ```bash
   # Rebuild Tailwind CSS
   npx tailwindcss -i ./src/styles/globals.css -o ./dist/output.css --watch
   ```

## Deployment

### Building for Production

```bash
npm run build
```

This creates a `dist` folder with optimized files ready for deployment.

### Deployment Options

- **Vercel:** Connect your GitHub repository and deploy automatically
- **Netlify:** Drag and drop the `dist` folder
- **GitHub Pages:** Use GitHub Actions to build and deploy
- **Any static hosting service:** Upload the contents of the `dist` folder

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE). # SmallBusinessAutomated
# DorianCrutcherDeverel
