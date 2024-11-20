import { ArticleProps } from '../../types/types';
import RichTextRenderer from '../helpers/RichTextRenderer';
import Image from 'next/image';
import H2 from '../elements/typography/H2';
import H3 from '../elements/typography/H3';

const Article = ({ blok }: ArticleProps) => {
    return (
        <section className="body-font text-gray-600">
            <div className="container mx-auto flex flex-col items-center justify-center px-5 py-24">
                <Image
                    width={200}
                    height={200}
                    className="mb-10 w-40 rounded object-cover object-center md:h-20"
                    alt={blok?.image?.alt || 'Default image description'}
                    src={blok?.image?.filename || ''}
                />
                <div className="w-full text-center lg:w-2/3">
                    <H2>{blok.title}</H2>
                    <H3>{blok.teaser}</H3>
                    <div className="mb-8 text-justify leading-relaxed">
                        <RichTextRenderer text={blok.content || ''} />
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Article;
