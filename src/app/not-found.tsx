import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[50vh] text-center space-y-4">
            <h1 className="text-6xl font-bold text-gray-900 dark:text-gray-100">
                404
            </h1>
            <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300">
                Page Not Found
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-md">
                The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
            <Link
                href="/"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium mt-4 inline-block"
            >
                Go Home
            </Link>
        </div>
    );
}
