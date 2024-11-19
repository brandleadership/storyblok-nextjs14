import { ArticleProps } from '../../types/types';
import RichTextRenderer from '../helpers/RichTextRenderer';

const Article = ({ blok }: ArticleProps) => {
    return (
        <section className="body-font text-gray-600">
            <div className="container mx-auto flex flex-col items-center justify-center px-5 py-24">
                <img
                    className="mb-10 w-40 rounded object-cover object-center md:h-20"
                    alt={blok?.image?.alt || 'Default image description'}
                    src={blok?.image?.filename || ''}
                />
                <div className="w-full text-center lg:w-2/3">
                    <h1 className="title-font mb-4 text-3xl font-medium text-gray-900 sm:text-4xl">
                        {blok.title}
                    </h1>
                    <h2 className="title-font mb-4 text-2xl font-medium text-gray-600 sm:text-3xl">
                        {blok.teaser}
                    </h2>
                    <div className="mb-8 text-justify leading-relaxed">
                        <RichTextRenderer text={blok.content || ''} />
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Article;
