import { storyblokEditable } from '@storyblok/react/rsc';
import { HeaderStoryblok } from '../../../../component-types-sb';
import { ConfigHeaderProps } from '../../../types/types';
import Header from './Header';

// Type guard to check if a blok is of type HeaderStoryblok
const isHeaderBlok = (blok: any): blok is HeaderStoryblok =>
    blok.component === 'header';

const ConfigHeader = ({ blok }: ConfigHeaderProps) => (
    <section {...storyblokEditable(blok)}>
        {blok?.global?.map((nestedBlok) =>
            isHeaderBlok(nestedBlok) ? (
                <Header blok={nestedBlok} key={nestedBlok._uid} />
            ) : null
        )}
    </section>
);

export default ConfigHeader;
