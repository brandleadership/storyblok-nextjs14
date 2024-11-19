import {
    RichtextExampleStoryblok,
    GlobalStoryblok,
    ArticleStoryblok,
    PopularArticlesStoryblok,
    AllArticlesStoryblok,
} from '../../component-types-sb';

//footer types

export interface ConfigFooterProps {
    blok: GlobalStoryblok;
}

// header types

export interface ConfigHeaderProps {
    blok: GlobalStoryblok;
}

//global component

export interface GlobalProps {
    blok: GlobalStoryblok;
}

// richtext types

export interface RichTextProps {
    blok: RichtextExampleStoryblok;
}

// article

export interface ArticleProps {
    blok: ArticleStoryblok;
}

//popular articles

export interface PopularArticlesProps {
    blok: PopularArticlesStoryblok;
}

// all articles
export interface AllArticlesProps {
    blok: AllArticlesStoryblok;
}

export interface ArticleContent {
    slug: string;
    full_slug: string;
    title: string;
    teaser: string;
    image: {
        filename: string;
        alt: string;
    };
    [k: string]: any;
}

export interface Article {
    uuid: string;
    content: ArticleContent;
    slug: string;
}
