import { getSortedPostsData } from '@/lib/posts';

export async function GET() {
    const posts = getSortedPostsData();
    const siteUrl = 'https://example.com'; // Replace with actual domain

    const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
  <channel>
    <title>Next.js Blog Platform</title>
    <link>${siteUrl}</link>
    <description>A modern blog platform built with Next.js</description>
    <language>en</language>
    ${posts
            .map((post) => {
                return `
      <item>
        <title>${post.title}</title>
        <link>${siteUrl}/blog/${post.slug}</link>
        <guid>${siteUrl}/blog/${post.slug}</guid>
        <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      </item>
    `;
            })
            .join('')}
  </channel>
</rss>`;

    return new Response(rss, {
        headers: {
            'Content-Type': 'application/xml',
        },
    });
}
