const Link = (children: any, href: string) => {
    return <a href={href ?? '/#'}>{children}</a>;
};

export default Link;
