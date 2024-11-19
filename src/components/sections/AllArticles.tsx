import { useState, useEffect } from 'react';
import ArticleTeaser from './ArticleTeaser';
import { getStoryblokApi, storyblokEditable } from '@storyblok/react/rsc';
import { AllArticlesProps, ArticleContent, Article } from '../../types/types';

const AllArticles = ({
    blok,
    version,
}: AllArticlesProps & { version: string }) => {
    const [articles, setArticles] = useState<Article[]>([]);
    useEffect(() => {
        const getArticles = async () => {
            const storyblokApi = getStoryblokApi();
            const validVersion = version as 'draft' | 'published' | undefined;
            const { data } = await storyblokApi.get(`cdn/stories`, {
                version: validVersion,
                starts_with: 'all-articles/',
                is_startpage: false,
            });

            setArticles(() =>
                data.stories.map(
                    (article: {
                        uuid: string;
                        content: ArticleContent;
                        slug: string;
                    }) => {
                        article.content.slug = article.slug;
                        return article;
                    }
                )
            );
        };
        getArticles();
    }, []);
    return (
        <>
            <p className="m-8 text-center text-3xl">{blok.headline}</p>
            <div
                className="mx-auto grid w-full grid-cols-1 gap-6 md:px-16 lg:grid-cols-3 lg:px-24"
                {...storyblokEditable(blok)}
            >
                {articles[0] &&
                    articles.map((article) => (
                        <ArticleTeaser
                            article={article.content}
                            key={article.uuid}
                        />
                    ))}
            </div>
        </>
    );
};
export default AllArticles;
