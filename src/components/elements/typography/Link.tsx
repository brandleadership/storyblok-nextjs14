'use client';

const Link = (
    { children }: { children: string | React.ReactElement },
    href: string
) => {
    return (
        <a className="text-base" href={href ?? '/#'}>
            {children}
        </a>
    );
};

export default Link;
