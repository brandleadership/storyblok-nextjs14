import Link from 'next/link';

interface Image {
    filename: string;
    alt: string;
}

interface Article {
    image: Image;
    title: string;
    teaser: string;
    slug: string;
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
                <img
                    className="mb-8 w-full rounded-xl object-cover object-center md:h-36 lg:h-48"
                    src={article.image.filename || ''}
                    alt={article.image.alt || ''}
                />
                <h2 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">
                    {article?.title}
                </h2>
                <div className="mx-auto line-clamp-2 text-base leading-relaxed text-gray-500">
                    {article.teaser || ''}
                </div>
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
