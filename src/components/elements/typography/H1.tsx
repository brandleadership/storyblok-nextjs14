export default function H1({
    children,
    styles,
    resetStyles,
}: {
    children: React.ReactNode;
    styles: string;
    resetStyles: boolean;
}) {
    const defaultStyles = 'font-bold pt-3 mb-8 lg:mb-12 text-3xl lg:text-5xl';
    const H1Styles = `${resetStyles ? defaultStyles : ''} ${styles || ''}`;
    return <h1 className={H1Styles}>{children}</h1>;
}
