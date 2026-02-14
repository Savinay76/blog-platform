import Link from 'next/link';
import { getSortedPostsData, getAllTags } from '@/lib/posts';
import FilteredPostList from '@/components/FilteredPostList';

export async function generateStaticParams() {
    const tags = getAllTags();
    return tags.map((tag) => ({
        tag: tag,
    }));
}

export const metadata = {
    title: 'Tag | Next.js Blog Platform',
    description: 'Posts by tag',
};

export default async function TagPage({ params }: { params: { tag: string } }) {
    const { tag } = await params;
    const decodedTag = decodeURIComponent(tag);
    const allPosts = getSortedPostsData();
    const filteredPosts = allPosts.filter((post) =>
        post.tags?.includes(decodedTag)
    );

    return (
        <div className="grid grid-cols-12 gap-8" data-testid="tag-page">
            <div className="col-span-12 text-center mb-8">
                <Link href="/blog" className="text-blue-600 hover:underline mb-4 inline-block" data-testid="back-to-blog">
                    &larr; Back to Blog
                </Link>
                <h1 className="text-4xl font-bold mb-4" data-testid="tag-title">
                    Posts tagged with <span className="text-blue-600">#{tag}</span>
                </h1>
                <p className="text-gray-600 dark:text-gray-400" data-testid="tag-count">
                    Found {filteredPosts.length} post{filteredPosts.length === 1 ? '' : 's'}
                </p>
            </div>
            <div className="col-span-12">
                <FilteredPostList initialPosts={filteredPosts} />
            </div>
        </div>
    );
}
