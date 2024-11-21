import { storyblokEditable } from '@storyblok/react';
import { PopularArticlesProps } from '../../../types/types';
import H2 from '../../elements/typography/H2';
import ArticleTeaser from './ArticleTeaser';
import ContentWidth from '../../layouts/ContentWidth';

const PopularArtices = ({ blok }: PopularArticlesProps) => {
    if (!blok.articles || blok.articles.length === 0) {
        return <div>No articles found.</div>;
    }
    return (
        <ContentWidth>
            <H2>{blok?.headline || 'Default Title'}</H2>
            <div
                className="mx-auto grid w-full grid-cols-1 gap-6 md:px-16 lg:grid-cols-3 lg:px-24"
                {...storyblokEditable(blok)}
            >
                {blok.articles.map((article) => {
                    const articleContent =
                        typeof article === 'string'
                            ? { slug: article }
                            : article.content;
                    articleContent.slug = article.slug;
                    return (
                        <ArticleTeaser
                            article={article.content}
                            key={article.uuid}
                        />
                    );
                })}
            </div>
        </ContentWidth>
    );
};
export default PopularArtices;
