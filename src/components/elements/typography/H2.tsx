'use client';

export default function H2({
    children,
}: {
    children: string | React.ReactElement;
}) {
    return <h2 className="text-3xl">{children}</h2>;
}
