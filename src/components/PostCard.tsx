import Link from 'next/link';
import { PostData } from '@/lib/types';

interface PostCardProps {
    post: PostData;
}

export default function PostCard({ post }: PostCardProps) {
    const { slug, date, title, tags, readingTime } = post;

    return (
        <Link
            href={`/blog/${slug}`}
            className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow"
            data-testid={`post-card-${slug}`}
        >
            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
                <time>{date}</time>
                <span>•</span>
                <span>{readingTime}</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <div className="flex gap-2 mb-2">
                {tags && tags.map((tag) => (
                    <span key={tag} className="text-xs bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-2 py-1 rounded-full">
                        #{tag}
                    </span>
                ))}
            </div>
            <p className="text-gray-600 dark:text-gray-300">
                Click to read more...
            </p>
        </Link>
    );
}
