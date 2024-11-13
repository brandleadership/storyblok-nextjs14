import {
    MARK_LINK,
    MARK_UNDERLINE,
    NODE_HEADING,
    NODE_HR,
    NODE_IMAGE,
    NODE_LI,
    NODE_OL,
    NODE_PARAGRAPH,
    // NODE_QUOTE,
    NODE_UL,
    render,
} from 'storyblok-rich-text-react-renderer';

import H1 from '../components/elements/typography/typography/H1';
import H2 from '../components/elements/typography/typography/H2';
import H3 from '../components/elements/typography/typography/H3';
import H4 from '../components/elements/typography/typography/H4';
import Text from '../components/elements/typography/typography/Text';

interface RichTextRendererProps {
    text: string;
    customStyles?: string;
}

interface MarkLinkProps {
    linktype?: string;
    href?: string;
    target?: string;
}

const RichTextRenderer: React.FC<RichTextRendererProps> = (props) => {
    return (
        <div className={`richtext ${props.customStyles}`}>
            {render(props.text, {
                markResolvers: {
                    [MARK_UNDERLINE]: (children) => (
                        <span className="underline underline-offset-4">
                            {children}
                        </span>
                    ),
                    [MARK_LINK]: (children, markProps: MarkLinkProps) => {
                        const { linktype, href, target } = markProps;
                        if (linktype === 'email') {
                            return (
                                <a
                                    href={`mailto:${href}`}
                                    className="text-primary"
                                >
                                    {children}
                                </a>
                            );
                        }
                        if (href && href.match(/^(https?:)?\/\//)) {
                            return (
                                <a
                                    tabIndex={1}
                                    className="text-primary"
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
                                className="text-primary"
                                target={target}
                                href={href}
                            >
                                {children}
                            </a>
                        );
                    },
                },
                // blokResolvers: {
                //     ['cta-small']: (blokProps) => (

                //         <ButtonPrimary
                //             position="left"
                //             buttonText={blokProps.CTA_text}
                //             href={ButtonUrlRenderer(blokProps.CTA_link)}
                //         />
                //     ),
                // },
                nodeResolvers: {
                    [NODE_IMAGE]: (children, props) => (
                        <img
                            src={props.src}
                            title={props.title}
                            alt={props.alt}
                            className="my-6"
                        />
                    ),
                    // [NODE_QUOTE]: (children) => (

                    //     <Blockquote>{children}</Blockquote>
                    // ),
                    [NODE_HR]: () => <hr className="bg-greySolid-100 my-6" />,
                    [NODE_PARAGRAPH]: (children) => <Text>{children}</Text>,
                    [NODE_UL]: (children) => (
                        <ul className="my-6 list-inside list-disc">
                            {children}
                        </ul>
                    ),
                    [NODE_OL]: (children) => (
                        <ol className="my-6 list-inside list-decimal">
                            {children}
                        </ol>
                    ),
                    [NODE_LI]: (children) => (
                        <li className="px-2 py-2">{children}</li>
                    ),
                    [NODE_HEADING]: (children, props) => {
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
                                        <H4>{children}</H4>;
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
};

export default RichTextRenderer;
