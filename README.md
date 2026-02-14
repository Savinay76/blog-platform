# 🚀 Next.js Blog Platform

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38bdf8?style=flat-square&logo=tailwindcss)
![Docker](https://img.shields.io/badge/Docker-Ready-2496ed?style=flat-square&logo=docker)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

A modern, high-performance, and fully deployable static blog platform built with the latest web technologies. Designed for performance, SEO, and developer experience.

## ✨ Features

-   **⚡ Static Site Generation (SSG)**: Pre-rendered HTML for blazing fast page loads and optimal SEO.
-   **📝 MDX Support**: Write rich content using Markdown with React component capabilities.
-   **🎨 Modern Styling**: Beautiful, responsive UI built with **Tailwind CSS v4** and the official Typography plugin.
-   **🌙 Dark Mode**: Fully integrated dark mode that respects system preferences.
-   **🔍 Client-Side Search**: Real-time search functionality to filter posts by title and tags.
-   **🏷️ Tag System**: Organize content with a flexible tagging system.
-   **📄 Pagination**: Efficient browsing through post archives.
-   **💬 Comments**: Integrated **Giscus** for GitHub-powered comments.
-   **📉 Analytics**: Integrated **Google Analytics 4**.
-   **🤖 SEO Optimized**:
    -   Dynamic Sitemap generation.
    -   RSS Feed support.
    -   Open Graph (OG) images for social sharing.
    -   JSON-LD structured data for rich search results.
-   **🐳 Docker Ready**: Production-optimized `Dockerfile` and `docker-compose.yml`.
-   **🧪 Tested**: Unit tests for core components using **Jest** and **React Testing Library**.

## 🛠️ Tech Stack

-   **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
-   **Language**: [TypeScript](https://www.typescriptlang.org/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **Content**: MDX via [`next-mdx-remote`](https://github.com/hashicorp/next-mdx-remote)
-   **Formatting**: [date-fns](https://date-fns.org/), [gray-matter](https://github.com/jonschlinkert/gray-matter)
-   **Testing**: [Jest](https://jestjs.io/), [React Testing Library](https://testing-library.com/)
-   **Containerization**: [Docker](https://www.docker.com/)

## 📂 Project Structure

```bash
├── content/              # MDX Blog posts
│   └── posts/            # Individual post files (.mdx)
├── public/               # Static assets (images, favicon)
├── src/
│   ├── app/              # Next.js App Router pages
│   │   ├── about/        # About page
│   │   ├── blog/         # Blog listing & individual posts
│   │   ├── tags/         # Tag pages
│   │   ├── layout.tsx    # Root layout
│   │   └── page.tsx      # Home page
│   ├── components/       # Reusable React components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── PostCard.tsx
│   │   ├── Search.tsx
│   │   └── ...
│   └── lib/              # Utility functions (post fetching, types)
├── .env.example          # Environment variable template
├── docker-compose.yml    # Docker Compose configuration
├── Dockerfile            # Docker build instructions
├── jest.config.ts        # Jest configuration
└── tailwind.config.ts    # Tailwind formatting configuration
```

## 🚀 Getting Started

### Prerequisites

-   **Node.js**: v18 or higher
-   **npm**: v9 or higher
-   **Git**

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Savinay76/blog-platform.git
    cd blog-platform
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Setup Environment Variables:**
    Copy the example env file:
    ```bash
    cp .env.example .env.local
    ```
    *Update `.env.local` with your Google Analytics ID if available.*

4.  **Run the Development Server:**
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🧪 Testing

This project includes unit tests to ensure reliability.

```bash
# Run tests
npm test

# Run tests in watch mode
npm run test:watch
```

Test files are located in `src/components/__tests__/`. We use `data-testid` attributes to ensure robust DOM selection during testing.

## 🐳 Docker Deployment

The application is containerized and ready for production.

**Using Docker Compose (Recommended):**

```bash
# Build and start the container
docker-compose up --build -d

# View logs
docker-compose logs -f

# Stop the container
docker-compose down
```

The app will be accessible at [http://localhost:3000](http://localhost:3000).

## 📝 Content Management

Adding new content is simple:

1.  Create a new `.mdx` file in `content/posts/`.
2.  Add the required frontmatter:
    ```yaml
    ---
    title: 'My New Post'
    date: '2023-10-27'
    tags: ['nextjs', 'tutorial']
    ---
    ```
3.  Write your content in Markdown/MDX.

See [CONTENT_GUIDE.md](CONTENT_GUIDE.md) for detailed instructions.

## 🤝 Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on how to help improve this project.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Built with ❤️ using Next.js.
