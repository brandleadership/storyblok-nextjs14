import Image from 'next/image';

export default function BaseImage({
    width,
    height,
    src,
    alt,
}: {
    width: number;
    height: number;
    src: string;
    alt: string;
}) {
    return (
        <Image
            className="img-cover"
            width={width}
            height={height}
            src={src}
            alt={alt}
        />
    );
}
