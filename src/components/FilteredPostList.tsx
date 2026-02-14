'use client';

import { useState } from 'react';
import Link from 'next/link';
import { PostData } from '@/lib/types';

interface FilteredPostListProps {
    initialPosts: PostData[];
}

export default function FilteredPostList({ initialPosts }: FilteredPostListProps) {
    const [searchValue, setSearchValue] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 5;

    const filteredPosts = initialPosts.filter((post) =>
        post.title.toLowerCase().includes(searchValue.toLowerCase()) ||
        (post.tags && post.tags.some((tag: string) => tag.toLowerCase().includes(searchValue.toLowerCase())))
    );

    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
        setCurrentPage(1); // Reset to first page on search
    };

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    return (
        <div data-testid="filtered-post-list">
            <div className="mb-12 relative">
                <input
                    aria-label="Search articles"
                    type="text"
                    onChange={handleSearchChange}
                    placeholder="Search articles in blog..."
                    className="block w-full px-4 py-3 text-gray-900 bg-white border border-gray-200 rounded-md dark:border-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-gray-100"
                    data-testid="search-input"
                />
                <svg
                    className="absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                </svg>
            </div>

            <div className="space-y-8" data-testid="post-list">
                {!currentPosts.length && (
                    <p className="text-gray-600 dark:text-gray-400" data-testid="no-posts-message">No posts found.</p>
                )}
                {currentPosts.map(({ slug, date, title, tags, readingTime }) => (
                    <article
                        key={slug}
                        className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow"
                        data-testid={`post-item-${slug}`}
                    >
                        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
                            <time>{date}</time>
                            <span>•</span>
                            <span>{readingTime}</span>
                        </div>
                        <Link
                            href={`/blog/${slug}`}
                            className="text-2xl font-bold hover:text-blue-600 transition-colors"
                            data-testid={`post-link-${slug}`}
                        >
                            {title}
                        </Link>
                        <div className="flex gap-2 mt-2">
                            {tags && tags.map((tag: string) => (
                                <Link href={`/tags/${tag}`} key={tag} className="text-xs bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-2 py-1 rounded-full hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors" data-testid={`tag-link-${tag}`}>
                                    #{tag}
                                </Link>
                            ))}
                        </div>
                        <p className="mt-4 text-gray-600 dark:text-gray-300">
                            Read more...
                        </p>
                    </article>
                ))}
            </div>

            {totalPages > 1 && (
                <div className="flex justify-center mt-12 gap-2" data-testid="pagination">
                    <button
                        onClick={() => paginate(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="px-4 py-2 border border-gray-300 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
                        data-testid="previous-page-button"
                    >
                        Previous
                    </button>
                    <span className="px-4 py-2 text-gray-600 dark:text-gray-400">
                        Page {currentPage} of {totalPages}
                    </span>
                    <button
                        onClick={() => paginate(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 border border-gray-300 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
                    >
                        Next
                    </button>
                </div>
            )}
        </>
    );
}
