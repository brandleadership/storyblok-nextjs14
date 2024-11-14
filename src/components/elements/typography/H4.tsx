'use client';

export default function H4({
    children,
}: {
    children: string | React.ReactElement;
}) {
    return <h4 className="text-xl">{children}</h4>;
}
