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
        <div className="max-w-4xl mx-auto">
            <Link href="/blog" className="text-blue-600 hover:underline mb-4 block">
                &larr; Back to Blog
            </Link>
            <h1 className="text-4xl font-bold mb-8 capitalize">Tag: {decodedTag}</h1>
            <div className="col-span-12">
                <FilteredPostList initialPosts={filteredPosts} />
            </div>
        </div>
    );
}
