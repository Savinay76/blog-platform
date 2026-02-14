'use client';

import { useState } from 'react';
import Link from 'next/link';
import { PostData } from '@/lib/types';
import Search from '@/components/Search';
import Pagination from '@/components/Pagination';

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

            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
            />
        </>
    );
}
