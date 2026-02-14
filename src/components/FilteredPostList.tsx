'use client';

import { useState } from 'react';
import Link from 'next/link';
import { PostData } from '@/lib/types';
import PostCard from '@/components/PostCard';

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
                {currentPosts.map((post) => (
                    <PostCard key={post.slug} post={post} />
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
