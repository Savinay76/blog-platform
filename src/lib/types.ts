export interface PostData {
    slug: string;
    title: string;
    date: string;
    content: string;
    tags?: string[];
    readingTime?: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
}
