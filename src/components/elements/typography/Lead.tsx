'use client';

export default function Lead({
    children,
}: {
    children: string | React.ReactElement;
}) {
    return <p className="text-lg">{children}</p>;
}
