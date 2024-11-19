export default function Link(
    { children }: { children: React.ReactNode },
    href: string
) {
    return (
        <a className="text-base xl:text-lg 2xl:text-xl" href={href ?? '/#'}>
            {children}
        </a>
    );
}
