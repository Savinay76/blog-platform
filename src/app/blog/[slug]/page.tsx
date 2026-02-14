import { getPostData, getAllPostSlugs } from '@/lib/posts';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Comments from '@/components/Comments';

export async function generateStaticParams() {
    const paths = getAllPostSlugs();
    return paths.map((path) => ({
        slug: path.params.slug,
    }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
    const { slug } = await params;
    try {
        const postData = await getPostData(slug);
        return {
            title: `${postData.title} | Next.js Blog Platform`,
            description: postData.title,
        };
    } catch {
        return {
            title: 'Post Not Found',
        };
    }
}

export default async function Post({ params }: { params: { slug: string } }) {
    const { slug } = await params;
    let postData;
    try {
        postData = await getPostData(slug);
    } catch {
        notFound();
    }

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: postData.title,
        datePublished: postData.date,
        dateModified: postData.date,
        author: [
            {
                '@type': 'Person',
                name: 'Blog Author',
            },
        ],
        description: postData.title,
        url: `https://example.com/blog/${slug}`,
    };

    return (
        <article className="max-w-3xl mx-auto py-8" data-testid="blog-post">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Link href="/blog" className="text-blue-600 hover:underline mb-4 block" data-testid="back-link">
                &larr; Back to Blog
            </Link>
            <header className="mb-8">
                <h1 className="text-4xl font-bold mb-2" data-testid="post-title">{postData.title}</h1>
                <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                    <time data-testid="post-date">{postData.date}</time>
                    <span>•</span>
                    <span data-testid="reading-time">{postData.readingTime}</span>
                </div>
                <div className="flex gap-2 mt-4" data-testid="post-tags">
                    {postData.tags && postData.tags.map((tag: string) => (
                        <Link href={`/tags/${tag}`} key={tag} className="text-sm bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors" data-testid={`tag-${tag}`}>
                            #{tag}
                        </Link>
                    ))}
                </div>
            </header>
            <div className="prose prose-lg dark:prose-invert max-w-none" data-testid="post-content">
                <MDXRemote source={postData.content} />
            </div>
            <Comments />
        </article>
    );
}
