# Personal Portfolio Website

A modern, interactive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- ✨ Modern, dark-mode-first design
- 🎨 Built with Tailwind CSS and Shadcn UI components
- 🎭 Smooth animations powered by Framer Motion
- 📱 Fully responsive design
- ⚡ Optimized performance with Next.js 14 App Router
- 🎯 Smooth scroll navigation
- 🔥 TypeScript for type safety

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Shadcn UI
- **Animations:** Framer Motion
- **Font:** Inter (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, or pnpm package manager

### Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd portfolio-website
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
portfolio-website/
├── app/
│   ├── layout.tsx          # Root layout with Inter font
│   ├── page.tsx            # Main home page
│   └── globals.css         # Global styles and Tailwind imports
├── components/
│   ├── ui/
│   │   ├── button.tsx      # Shadcn UI Button component
│   │   └── card.tsx        # Shadcn UI Card component
│   ├── Navbar.tsx          # Sticky navigation bar
│   ├── Hero.tsx            # Hero section with animations
│   ├── Projects.tsx        # Projects showcase grid
│   ├── About.tsx           # About section
│   └── Contact.tsx         # Contact section
├── lib/
│   └── utils.ts            # Utility functions (cn for Tailwind)
├── public/                 # Static assets
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Project dependencies
```

## Customization

### Update Personal Information

1. **Hero Section:** Edit `components/Hero.tsx` to update your name and tagline
2. **Projects:** Modify the `projects` array in `components/Projects.tsx`
3. **About:** Update the content in `components/About.tsx`
4. **Contact Links:** Update social media links in `components/Contact.tsx`
5. **Metadata:** Update SEO information in `app/layout.tsx`

### Styling

- Modify `tailwind.config.ts` to customize colors and theme
- Update CSS variables in `app/globals.css` for Shadcn UI components
- Change the color scheme throughout components (currently using zinc/neutral palette)

## Deployment

### Deploy to Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com).

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Import your repository to Vercel
3. Vercel will automatically detect Next.js and configure the build settings
4. Click "Deploy" and your site will be live!

Alternatively, you can use the Vercel CLI:

```bash
npm install -g vercel
vercel
```

## License

MIT License - feel free to use this template for your own portfolio!

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn UI](https://ui.shadcn.com/)
- [Framer Motion](https://www.framer.com/motion/)

