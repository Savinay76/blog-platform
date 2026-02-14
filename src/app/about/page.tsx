export const metadata = {
    title: 'About | Next.js Blog Platform',
    description: 'About the author',
};

export default function About() {
    return (
        <div className="max-w-2xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">About Me</h1>
            <div className="prose prose-lg dark:prose-invert">
                <p>
                    Hello! I&apos;m a developer building a modern blog platform with Next.js.
                </p>
                <p>
                    This blog is a showcase of static site generation, React server components,
                    and modern styling with Tailwind CSS.
                </p>
                <p>
                    Feel free to explore the code on GitHub or read some of the posts!
                </p>
            </div>
        </div>
    );
}
