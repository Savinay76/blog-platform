import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[50vh] text-center" data-testid="404-page">
            <h2 className="text-4xl font-bold mb-4" data-testid="404-title">404 - Page Not Found</h2>
            <p className="text-gray-500 dark:text-gray-400 mb-8" data-testid="404-message">
                Could not find requested resource
            </p>
            <Link
                href="/"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                data-testid="return-home-link"
            >
                Return Home
            </Link>
        </div>
    );
}
