'use client';

export default function H1({
    children,
}: {
    children: string | React.ReactElement;
}) {
    return <h1 className="text-4xl">{children}</h1>;
}
