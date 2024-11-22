import Image from 'next/image';

export default function BaseImage({
    width,
    height,
    src,
    alt,
    className,
}: {
    width: number;
    height: number;
    src: string;
    alt: string;
    className?: string;
}) {
    return (
        <Image
            className={className}
            width={width}
            height={height}
            src={src}
            alt={alt}
        />
    );
}
