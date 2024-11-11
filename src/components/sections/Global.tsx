import { storyblokEditable, StoryblokComponent } from '@storyblok/react/rsc';
import { GlobalProps } from '../../types/types';

const Global = ({ blok }: GlobalProps) => {
    return (
        <main {...storyblokEditable(blok)}>
            {blok.global?.map((nestedBlok) => (
                <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
            ))}
        </main>
    );
};

export default Global;
