'use client';

import { useState } from 'react';
import Link from 'next/link';
import { PostData } from '@/lib/types';
import Search from '@/components/Search';

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

    const setSearchTerm = (value: string) => {
        setSearchValue(value);
        setCurrentPage(1); // Reset to first page on search
    };

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    return (
        <div data-testid="filtered-post-list">
            <Search value={searchValue} onChange={setSearchTerm} />

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
