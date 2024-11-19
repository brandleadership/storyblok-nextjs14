export default function Blockquote({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <blockquote className="text-base xl:text-lg 2xl:text-xl">
            {children}
        </blockquote>
    );
}
