import { storyblokEditable } from '@storyblok/react/rsc';
import { FooterStoryblok } from '../../../../component-types-sb';
import Text from '../../elements/typography/Text';
import ContentWidth from '../../layouts/ContentWidth';

interface FooterProps {
    blok: FooterStoryblok;
}

const Footer = ({ blok }: FooterProps) => (
    <footer {...storyblokEditable(blok)}>
        <ContentWidth>
            <div className="text-left">
                <Text>{blok.copyright}</Text>
            </div>
        </ContentWidth>
    </footer>
);

export default Footer;
