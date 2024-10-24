import { storyblokEditable } from '@storyblok/react/rsc';
import Header from './Header';

const ConfigHeader = ({ blok }: any) => (
    <section {...storyblokEditable(blok)}>
        {blok?.global.map((nestedBlok: any) => (
            <Header className="" blok={nestedBlok} key={nestedBlok._uid} />
        ))}
    </section>
);

export default ConfigHeader;
