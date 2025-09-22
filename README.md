# IEEE SeFet 2026 - Conference Website

6th IEEE International Conference on Sustainable Energy and Future Electric Transportation (IEEE SeFet 2026)

## Overview

This is the official website for IEEE SeFet 2026, a Next.js application showcasing the conference information, schedule, speakers, and registration details.

## Conference Details

- **Event**: 6th IEEE International Conference on Sustainable Energy and Future Electric Transportation
- **Date**: July 8-11, 2026
- **Venue**: VNIT Nagpur, India
- **Focus Areas**:
  - Renewable Energy
  - Electric Transportation
  - Power Electronics
  - Electric Drives
  - Control Techniques
  - Smart Grids
  - Communication Protocols
  - Intelligent Charging Infrastructure
  - Energy Markets
  - Artificial Intelligence and Machine Learning

## Technologies Used

- **Framework**: Next.js 15.5.3
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Custom CSS
- **Deployment**: Ready for Vercel, Netlify, or any static hosting

## Project Structure

```
├── public/
│   ├── assets/
│   │   ├── banner.jpg           # Main conference banner
│   │   ├── favicon.png          # Site favicon
│   │   ├── main.css            # Custom styling
│   │   ├── navigation.js       # Navigation functionality
│   │   ├── dropdown.js         # Dropdown interactions
│   │   └── partners/           # Partner logos
│   │       ├── ieee.png
│   │       ├── vnit.png
│   │       ├── ias.png
│   │       ├── pes.png
│   │       ├── electrons.png
│   │       └── red.png
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with navigation
│   │   ├── page.tsx            # Home page
│   │   ├── globals.css         # Global styles
│   │   ├── about/              # About pages
│   │   │   ├── eed/
│   │   │   ├── maharashtra/
│   │   │   └── vnit/
│   │   └── conference/         # Conference pages
│   │       ├── committee/
│   │       ├── authors/
│   │       ├── speakers/
│   │       ├── events/
│   │       ├── registration/
│   │       └── venue-contact/
│   ├── components/
│   │   ├── Navigation.tsx      # Main navigation component
│   │   ├── Banner.tsx          # Banner component
│   │   └── Partners.tsx        # Partners section
│   └── hooks/
│       └── useNavigation.ts    # Navigation hooks
```

## Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dynamic Navigation**: Dropdown menus with hover effects
- **SEO Optimized**: Proper meta tags and Open Graph support
- **Modern UI**: Clean and professional conference website design
- **Partner Showcase**: Dedicated section for conference partners
- **Multi-page Structure**: Organized content across multiple pages

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd ieee-sefet-2026
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Navigation Structure

- **Home**: Conference overview and welcome message
- **About**:
  - EED Department information
  - Maharashtra details
  - VNIT information
- **Conference**:
  - Committee members
  - Author guidelines (Call for Papers, Camera Ready, Templates)
  - Registration information
  - Keynote speakers
  - Program schedule
  - Venue and contact details

## Customization

### Adding New Pages

1. Create a new directory in `src/app/`
2. Add a `page.tsx` file with your component
3. Update navigation in `src/components/Navigation.tsx`

### Updating Partners

1. Add partner logos to `public/assets/partners/`
2. Update the partners array in `src/app/page.tsx`

### Styling

- Global styles: `src/app/globals.css`
- Custom styles: `public/assets/main.css`
- Component styles: Use Tailwind classes or CSS modules

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.

## Contact

For questions about the website or conference, please contact:

- **Institution**: VNIT Nagpur
- **Website**: [VNIT Official](http://vnit.ac.in/)

---

© 2026 VNIT Nagpur. All rights reserved.
