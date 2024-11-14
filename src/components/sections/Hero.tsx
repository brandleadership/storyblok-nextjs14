import { storyblokEditable } from '@storyblok/react/rsc';
import { HeroStoryblok } from '../../../component-types-sb';
import H1 from '../elements/typography/H1';
import Text from '../elements/typography/Text';

const Hero = ({ blok }: HeroStoryblok) => (
    <section {...storyblokEditable(blok)}>
        <div className="mx-auto max-w-screen-xl px-4 py-8 text-center lg:px-12 lg:py-16">
            <H1>{blok.title}</H1>
            <Text>{blok.text}</Text>
        </div>
    </section>
);

export default Hero;
