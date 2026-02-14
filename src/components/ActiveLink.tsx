'use client';

import Link, { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';

interface ActiveLinkProps extends LinkProps {
    children: React.ReactNode;
    className?: string;
    activeClassName?: string;
    ['data-testid']?: string;
}

export default function ActiveLink({
    children,
    className = '',
    activeClassName = 'text-blue-600 font-bold',
    ...props
}: ActiveLinkProps) {
    const pathname = usePathname();
    const isActive = pathname === props.href;

    const computedClassName = isActive
        ? `${className} ${activeClassName}`.trim()
        : className;

    return (
        <Link {...props} className={computedClassName}>
            {children}
        </Link>
    );
}
