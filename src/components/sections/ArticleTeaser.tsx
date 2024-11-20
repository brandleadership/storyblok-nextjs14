import Link from 'next/link';
import Image from 'next/image';
import H2 from '../elements/typography/H2';
import Text from '../elements/typography/Text';

interface Article {
    image: {
        filename: string;
        alt: string;
    };
    title: string;
    teaser: string;
    slug: string;
    full_slug: string;
}

interface ArticleTeaserProps {
    article: Article;
}

const ArticleTeaser = ({ article }: ArticleTeaserProps) => {
    if (!article || !article.image) {
        return <div>Article image not available.</div>;
    }
    return (
        <div className="column feature">
            <div className="p-6">
                <Image
                    width={200}
                    height={200}
                    className="mb-8 w-full rounded-xl object-cover object-center md:h-36 lg:h-48"
                    src={article.image.filename || ''}
                    alt={article.image.alt || ''}
                />
                <H2>{article?.title}</H2>
                <Text>{article.teaser || ''}</Text>
                <div className="mt-4">
                    <Link
                        href={`/all-articles/${article.slug}`}
                        className="mt-4 inline-flex items-center font-semibold text-blue-600 hover:text-neutral-600 lg:mb-0"
                        title="read more"
                    >
                        Read More »
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default ArticleTeaser;
