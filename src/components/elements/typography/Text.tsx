export default function Text({ children }: { children: React.ReactNode }) {
    return <p className="text-base xl:text-lg 2xl:text-xl">{children}</p>;
}
