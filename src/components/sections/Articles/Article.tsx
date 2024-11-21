import { ArticleProps } from '../../../types/types';
import BaseImage from '../../elements/img/Image';
import H2 from '../../elements/typography/H2';
import H3 from '../../elements/typography/H3';
import RichTextRenderer from '../../helpers/RichTextRenderer';
import ContentWidth from '@/components/layouts/ContentWidth';

const Article = ({ blok }: ArticleProps) => {
    return (
        <ContentWidth>
            <div className="container mx-auto flex flex-col items-center justify-center px-5 py-24">
                <BaseImage
                    width={200}
                    height={200}
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
        </ContentWidth>
    );
};
export default Article;
