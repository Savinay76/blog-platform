import { getSortedPostsData } from '@/lib/posts';
import FilteredPostList from '@/components/FilteredPostList';

export const metadata = {
    title: 'Blog | Next.js Blog Platform',
    description: 'Read our latest articles',
};

export default function BlogIndex() {
    const allPosts = getSortedPostsData();

    return (
        <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">Blog</h1>
            <FilteredPostList initialPosts={allPosts} />
        </div>
    );
}
