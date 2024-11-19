export default function SmallWidth({
    children,
}: {
    children: string | React.ReactElement;
}) {
    return (
        <div className="grid grid-cols-12 px-12 lg:px-40 2xl:mx-auto 2xl:max-w-screen-2xl 2xl:px-44">
            <div className="col-span-12 max-w-full">{children}</div>
        </div>
    );
}
