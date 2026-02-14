# Next.js Blog Platform

A modern, high-performance static blog platform built with Next.js 15 (App Router), MDX, and Tailwind CSS.

## Features

-   **Static Site Generation (SSG)**: Blazing fast performance and optimal SEO.
-   **MDX Support**: Write content in Markdown with React component capabilities.
-   **Modern Styling**: Styled with Tailwind CSS v4 and Typography plugin.
-   **Dark Mode**: Automatic theme switching based on system preference.
-   **SEO Optimized**: Sitemap, RSS Feed, Open Graph images, and JSON-LD structured data.
-   **Tag System**: Categorize posts with a robust tagging system.
-   **Search**: Real-time client-side search for posts.
-   **Pagination**: Easy navigation through post archives.
-   **Comments**: Integrated Giscus (GitHub Discussions) comments.
-   **Docker Ready**: Production-ready Dockerfile and Docker Compose setup.

## Tech Stack

-   **Framework**: Next.js 15
-   **Language**: TypeScript
-   **Styling**: Tailwind CSS
-   **Content**: MDX (`next-mdx-remote`)
-   **Deployment**: Docker / Vercel

## Getting Started

### Prerequisites

-   Node.js 18+
-   npm / yarn / pnpm

### Local Development

1.  Clone the repository.
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Run the development server:
    ```bash
    npm run dev
    ```
4.  Open [http://localhost:3000](http://localhost:3000).

### Production Build

To test the production build locally:

```bash
npm run build
npm start
```

## Testing

Run the test suite with:

```bash
npm test
```

## Docker

Build and run using Docker Compose:

```bash
docker-compose up --build
```

The app will be available at `http://localhost:3000`.

## Guides

-   [**Deployment Guide**](DEPLOYMENT.md): Instructions for Vercel and Docker deployment.
-   [**Content & Customization**](CONTENT_GUIDE.md): How to add new posts and update branding.

## License

MIT
