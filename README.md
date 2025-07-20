# Personance Landing Page

A modern, responsive React landing page for Personance - your personal finance companion.

## Features

- **Modern React Architecture**: Built with React 19 and modern JavaScript
- **Responsive Design**: Mobile-first design using Tailwind CSS
- **Accessible UI Components**: Built with Radix UI primitives
- **Beautiful Icons**: Lucide React icons throughout
- **Professional Landing Page**: Hero, Features, About, and Footer sections

## Tech Stack

- **React 19**: Modern React with hooks
- **Tailwind CSS**: Utility-first CSS framework
- **Radix UI**: Accessible component primitives
- **Lucide React**: Beautiful icon library
- **Vite**: Fast build tool and dev server
- **PropTypes**: Runtime type checking

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd personance-landingpage
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:3000`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm test` - Run tests

## Project Structure

```
src/
├── components/           # React components
│   ├── ui/              # Reusable UI components
│   │   ├── button.js    # Button component
│   │   ├── dialog.js    # Dialog/Modal component
│   │   ├── select.js    # Select dropdown component
│   │   └── toast.js     # Toast notification component
│   ├── Header.js        # Navigation header
│   ├── Hero.js          # Hero section
│   ├── Features.js      # Features showcase
│   ├── About.js         # About section
│   └── Footer.js        # Footer component
├── lib/
│   └── utils.js         # Utility functions
├── styles/
│   └── globals.css      # Global styles and Tailwind imports
└── App.js               # Main app component
```

## Customization

### Colors and Theming

The project uses Tailwind CSS with custom color variables defined in `src/styles/globals.css`. You can modify the color scheme by updating the CSS custom properties.

### Content

- Update company information in the components
- Modify the hero section messaging in `src/components/Hero.js`
- Customize features in `src/components/Features.js`
- Update contact information in `src/components/Footer.js`

### Styling

- All styling is done with Tailwind CSS classes
- Custom components use the `cn()` utility for conditional classes
- Responsive design follows mobile-first principles

## Components

### UI Components

- **Button**: Customizable button with variant support
- **Dialog**: Modal dialog with overlay and close functionality
- **Select**: Dropdown select with search and keyboard navigation
- **Toast**: Notification toast with success/error variants

### Landing Page Components

- **Header**: Responsive navigation with mobile menu
- **Hero**: Main hero section with CTA and stats
- **Features**: Feature grid with icons and descriptions
- **About**: Company information and benefits
- **Footer**: Links, contact info, and social media

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is private and proprietary.

## Support

For support, email anthonylee.am@gmail.com or contact our team.