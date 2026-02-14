import { ImageResponse } from 'next/og';
import { getPostData } from '@/lib/posts';

// Route segment config
export const runtime = 'nodejs';

// Image metadata
export const alt = 'Blog Post Image';
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = 'image/png';

// Image generation
export default async function Image({ params }: { params: { slug: string } }) {
    const { slug } = await params;
    const post = await getPostData(slug);

    return new ImageResponse(
        (
            <div
                style={{
                    fontSize: 60,
                    background: 'white',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 80,
                    border: '20px solid #2563eb', // blue-600
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        fontSize: 40,
                        color: '#4b5563', // gray-600
                        marginBottom: 20,
                    }}
                >
                    {post.date}
                </div>
                <div
                    style={{
                        display: 'flex',
                        fontSize: 80,
                        fontWeight: 'bold',
                        color: '#1f2937', // gray-900
                        textAlign: 'center',
                        lineHeight: 1.2,
                    }}
                >
                    {post.title}
                </div>
                <div
                    style={{
                        display: 'flex',
                        marginTop: 40,
                        fontSize: 30,
                        color: '#2563eb',
                    }}
                >
                    Blog Platform
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
