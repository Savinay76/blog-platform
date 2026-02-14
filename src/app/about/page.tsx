export const metadata = {
    title: 'About | Next.js Blog Platform',
    description: 'About the author',
};

export default function About() {
    return (
        <article className="max-w-3xl mx-auto py-8" data-testid="about-page">
            <h1 className="text-4xl font-bold mb-8" data-testid="about-title">About</h1>
            <div className="prose prose-lg dark:prose-invert max-w-none" data-testid="about-content">
                <p>
                    Hello! I&apos;m a developer building a modern blog platform with Next.js.
                </p>
                <p>
                    This blog is a showcase of my technical writing and projects.
                    Built with:
                </p>
                <ul>
                    <li>Next.js 15 (App Router)</li>
                    <li>Tailwind CSS</li>
                    <li>MDX</li>
                </ul>
            </div>
        </article>
    );
}
