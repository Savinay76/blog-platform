import Link from 'next/link';

export default function Header() {
    return (
        <header className="bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-800">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/" className="text-xl font-bold tracking-tight">
                    My Awesome <span className="text-blue-600">Blog</span>
                </Link>
                <nav className="flex gap-6">
                    <Link href="/" className="hover:text-blue-600 transition-colors">
                        Home
                    </Link>
                    <Link href="/blog" className="hover:text-blue-600 transition-colors">
                        Blog
                    </Link>
                    <Link href="/about" className="hover:text-blue-600 transition-colors">
                        About
                    </Link>
                </nav>
            </div>
        </header>
    );
}
