export default function Footer() {
    return (
        <footer className="bg-gray-50 border-t border-gray-200 dark:bg-gray-900 dark:border-gray-800 mt-12" data-testid="site-footer">
            <div className="container mx-auto px-4 py-8 text-center text-gray-500 dark:text-gray-400">
                <p data-testid="footer-copyright">&copy; {new Date().getFullYear()} My Awesome Blog. All rights reserved.</p>
            </div>
        </footer>
    );
}
