'use client';

import Giscus from '@giscus/react';

export default function Comments() {
    return (
        <div className="mt-10 pt-10 border-t border-gray-200 dark:border-gray-800">
            <Giscus
                id="comments"
                repo="Savinay76/blog-platform"
                repoId="R_kgDONn5R4Q"
                category="General"
                categoryId="DIC_kwDONn5R4c4Clz4v"
                mapping="pathname"
                term="Welcome to my blog!"
                reactionsEnabled="1"
                emitMetadata="0"
                inputPosition="top"
                theme="preferred_color_scheme"
                lang="en"
                loading="lazy"
            />
        </div>
    );
}
