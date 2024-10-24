import { storyblokEditable, StoryblokComponent } from '@storyblok/react/rsc';

const Global = ({ blok }: any) => {
    return (
        <main {...storyblokEditable(blok)}>
            {blok.global.map((nestedBlok: any) => (
                <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
            ))}
        </main>
    );
};

export default Global;
