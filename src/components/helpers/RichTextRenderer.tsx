import React from 'react';
import {
    MARK_LINK,
    MARK_UNDERLINE,
    NODE_HEADING,
    NODE_HR,
    NODE_IMAGE,
    NODE_LI,
    NODE_OL,
    NODE_PARAGRAPH,
    NODE_QUOTE,
    NODE_UL,
    render,
} from 'storyblok-rich-text-react-renderer';

import H1 from '../elements/typography/H1';
import H2 from '../elements/typography/H2';
import H3 from '../elements/typography/H3';
import H4 from '../elements/typography/H4';
import Text from '../elements/typography/Text';
import Blockquote from '../elements/typography/Blockquote';

interface RichTextRendererProps {
    text: string | object | null;
    customStyles?: string;
}

interface MarkLinkProps {
    linktype?: string;
    href?: string;
    target?: string;
}

interface NodeImageProps {
    src?: string;
    title?: string;
    alt?: string;
}

interface NodeHeadingProps {
    level: number;
}

const RichTextRenderer: React.FC<RichTextRendererProps> = (props) => {
    if (!props.text) {
        return <p>No content available</p>;
    }

    try {
        return (
            <div className={`richtext ${props.customStyles}`}>
                {render(props.text, {
                    markResolvers: {
                        [MARK_UNDERLINE]: (children: React.ReactNode) => (
                            <span className="underline underline-offset-4">
                                {children}
                            </span>
                        ),
                        [MARK_LINK]: (
                            children: React.ReactNode,
                            markProps: MarkLinkProps
                        ) => {
                            const { linktype, href, target } = markProps;
                            if (linktype === 'email') {
                                return (
                                    <a
                                        href={`mailto:${href}`}
                                        className="text-primary-800 underline"
                                    >
                                        {children}
                                    </a>
                                );
                            }
                            if (href && href.match(/^(https?:)?\/\//)) {
                                return (
                                    <a
                                        tabIndex={1}
                                        className="text-primary-800 underline"
                                        href={href}
                                        target={target}
                                    >
                                        {children}
                                    </a>
                                );
                            }
                            return (
                                <a
                                    tabIndex={1}
                                    className="text-primary-800 underline"
                                    target={target}
                                    href={href}
                                >
                                    {children}
                                </a>
                            );
                        },
                    },
                    nodeResolvers: {
                        [NODE_IMAGE]: (
                            children: React.ReactNode,
                            props: NodeImageProps
                        ) => (
                            <img
                                src={props.src}
                                title={props.title}
                                alt={props.alt}
                                className="my-6"
                            />
                        ),
                        [NODE_QUOTE]: (children: React.ReactNode) => (
                            <Blockquote>{children}</Blockquote>
                        ),
                        [NODE_HR]: () => (
                            <hr className="bg-greySolid-100 my-6" />
                        ),
                        [NODE_PARAGRAPH]: (children: React.ReactNode) => (
                            <Text>{children}</Text>
                        ),
                        [NODE_UL]: (children) => (
                            <ul className="my-6 list-inside list-disc">
                                {children}
                            </ul>
                        ),
                        [NODE_OL]: (children: React.ReactNode) => (
                            <ol className="my-6 list-inside list-decimal">
                                {children}
                            </ol>
                        ),
                        [NODE_LI]: (children: React.ReactNode) => (
                            <li className="list-inside px-2 py-2">
                                <div className="inline-block text-base xl:text-lg 2xl:text-xl">
                                    {children}
                                </div>
                            </li>
                        ),
                        [NODE_HEADING]: (
                            children: React.ReactNode,
                            props: NodeHeadingProps
                        ) => {
                            switch (props.level) {
                                case 1:
                                    return <div>{<H1>{children}</H1>}</div>;
                                case 2:
                                    return (
                                        <div className="mt-12 first:mt-0">
                                            <H2>{children}</H2>
                                        </div>
                                    );
                                case 3:
                                    return (
                                        <div className="mb-4 mt-12 first:mt-0">
                                            <H3>{children}</H3>
                                        </div>
                                    );
                                case 4:
                                    return (
                                        <div className="mb-3 mt-5 first:mt-1">
                                            <H4>{children}</H4>
                                        </div>
                                    );
                                default:
                                    return null;
                            }
                        },
                    },
                })}
            </div>
        );
    } catch (error) {
        console.error('Error rendering rich text:', error);
        return <p>Error rendering content</p>;
    }
};

export default RichTextRenderer;
