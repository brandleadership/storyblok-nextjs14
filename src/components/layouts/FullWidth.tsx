'use client';

export default function FullWidth({
    children,
}: {
    children: string | React.ReactElement;
}) {
    return (
        <div className="mx-auto grid w-full grid-cols-12 gap-6 2xl:max-w-screen-2xl">
            <div className="col-span-12 max-w-full">{children}</div>
        </div>
    );
}
