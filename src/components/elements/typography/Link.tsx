const Link = (children: any, href: string) => {
    return (
        <a className="text-base" href={href ?? '/#'}>
            {children}
        </a>
    );
};

export default Link;
