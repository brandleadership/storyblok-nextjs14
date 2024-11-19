import { storyblokEditable } from '@storyblok/react/rsc';
import Footer from './Footer';
import { ConfigFooterProps } from '../../types/types';
import { FooterStoryblok } from '../../../component-types-sb';

// Type guard to check if a blok is of type FooterStoryblok
const isFooterBlok = (blok: any): blok is FooterStoryblok =>
    blok.component === 'footer';

const ConfigFooter = ({ blok }: ConfigFooterProps) => (
    <section className="mt-auto" {...storyblokEditable(blok)}>
        {blok?.global?.map((nestedBlok) =>
            isFooterBlok(nestedBlok) ? (
                <Footer blok={nestedBlok} key={nestedBlok._uid} />
            ) : null
        )}
    </section>
);

export default ConfigFooter;
