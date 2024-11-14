'use client';

export default function Text({
    children,
}: {
    children: string | React.ReactElement;
}) {
    return <p className="text-base">{children}</p>;
}
