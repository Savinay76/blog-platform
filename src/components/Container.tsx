interface ContainerProps {
    children: React.ReactNode;
    className?: string;
    ['data-testid']?: string;
}

export default function Container({ children, className = '', ...props }: ContainerProps) {
    return (
        <div
            className={`container mx-auto px-4 ${className}`.trim()}
            {...props}
        >
            {children}
        </div>
    );
}
