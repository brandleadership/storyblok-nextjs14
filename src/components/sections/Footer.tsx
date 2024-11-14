import { storyblokEditable } from '@storyblok/react/rsc';
import { FooterStoryblok } from '../../../component-types-sb';
import ContentWidth from '../layouts/ContentWidth';

interface FooterProps {
    blok: FooterStoryblok;
}

const Footer = ({ blok }: FooterProps) => (
    <ContentWidth {...storyblokEditable(blok)}>
        <footer className="px-4 py-2.5 lg:px-6">
            <div className="text-left">
                <p className="mb-8 text-lg font-normal">{blok.copyright}</p>
            </div>
        </footer>
    </ContentWidth>
);

export default Footer;
