'use client';

interface SearchProps {
    value: string;
    onChange: (value: string) => void;
}

export default function Search({ value, onChange }: SearchProps) {
    return (
        <div className="mb-12 relative" data-testid="search-component">
            <input
                aria-label="Search articles"
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder="Search articles in blog..."
                className="block w-full px-4 py-3 text-gray-900 bg-white border border-gray-200 rounded-md dark:border-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-gray-100"
                data-testid="search-input"
            />
            <svg
                className="absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                data-testid="search-icon"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
            </svg>
        </div>
    );
}
