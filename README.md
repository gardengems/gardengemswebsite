# Garden Gems International Website

A modern website for Garden Gems International, showcasing the Drop N Grow container solution and other premium plant container products.

## Prerequisites

- Node.js 18.17 or later
- npm (Node Package Manager)

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
cd web
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The site will be available at [http://localhost:3000](http://localhost:3000).

## Static Export

To build the site as a static export:

1. Build the site:
```bash
npm run build
```

2. The static files will be generated in the `out` directory. You can serve these files using any static file server.

Example using a local HTTP server:
```bash
npm install -g http-server
cd out
http-server
```

## Built With

- [Next.js 14](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - UI component library

## Project Structure

```
web/
├── app/              # Next.js app directory
│   ├── about/       # About page
│   ├── contact/     # Contact page
│   ├── drop-n-grow/ # Drop N Grow product page
│   └── components/  # Shared components
├── public/          # Static assets
└── styles/         # Global styles
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production (generates static files in `out` directory)
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Environment Variables

No environment variables are required for local development.
