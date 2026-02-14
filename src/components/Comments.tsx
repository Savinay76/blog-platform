'use client';

import Giscus from '@giscus/react';
import { useTheme } from 'next-themes';

export default function Comments() {
    const { theme } = useTheme();
    return (
        <section className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800" data-testid="comments-section">
            <h2 className="text-2xl font-bold mb-8" data-testid="comments-title">Comments</h2>
            <Giscus
                id="comments"
                repo="Savinay76/blog-platform"
                repoId="R_kgDONk1e4Q"
                category="General"
                categoryId="DIC_kwDONk1e4c4Clu_d"
                mapping="pathname"
                reactionsEnabled="1"
                emitMetadata="0"
                inputPosition="top"
                theme={theme === 'dark' ? 'dark' : 'light'}
                lang="en"
                loading="lazy"
            />
        </section>
    );
}
