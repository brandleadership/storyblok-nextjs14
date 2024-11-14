'use client';

export default function Link(
    { children }: { children: React.ReactNode },
    href: string
) {
    return (
        <a className="text-base" href={href ?? '/#'}>
            {children}
        </a>
    );
}
