import Link from 'next/link';
import { getSortedPostsData } from '@/lib/posts';

export default function Home() {
    const allPosts = getSortedPostsData();
    const recentPosts = allPosts.slice(0, 3);

    return (
        <div className="space-y-12">
            <section className="text-center py-12 space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
                    Welcome to the <span className="text-blue-600">Blog Platform</span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                    A modern, static blog built with Next.js, MDX, and Tailwind CSS.
                </p>
                <div className="flex justify-center gap-4 pt-4">
                    <Link
                        href="/blog"
                        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                    >
                        Read the Blog
                    </Link>
                    <Link
                        href="https://github.com/vercel/next.js"
                        target="_blank"
                        className="px-6 py-3 bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-100 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors font-medium"
                    >
                        View on GitHub
                    </Link>
                </div>
            </section>

            <section>
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-3xl font-bold">Recent Posts</h2>
                    <Link href="/blog" className="text-blue-600 hover:underline">
                        View all &rarr;
                    </Link>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                    {recentPosts.map(({ slug, date, title, tags, readingTime }) => (
                        <Link
                            key={slug}
                            href={`/blog/${slug}`}
                            className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow"
                        >
                            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
                                <time>{date}</time>
                                <span>•</span>
                                <span>{readingTime}</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{title}</h3>
                            <div className="flex gap-2 mb-2">
                                {tags && tags.map((tag: string) => (
                                    <span key={tag} className="text-xs bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-2 py-1 rounded-full">
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                            <p className="text-gray-600 dark:text-gray-300">
                                Click to read more...
                            </p>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    );
}
