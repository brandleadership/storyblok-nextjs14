'use client';

export default function H3({
    children,
}: {
    children: string | React.ReactElement;
}) {
    return <h3 className="text-2xl">{children}</h3>;
}
