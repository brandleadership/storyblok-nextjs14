import { storyblokEditable } from '@storyblok/react/rsc';
import { HeroStoryblok } from '../../../component-types-sb';
import H1 from '../elements/typography/H1';
import Text from '../elements/typography/Text';
import ContentWidth from '../layouts/ContentWidth';

const Hero = ({ blok }: HeroStoryblok) => (
    <section {...storyblokEditable(blok)}>
        <ContentWidth>
            <H1>{blok.title}</H1>
            <Text>{blok.text}</Text>
        </ContentWidth>
    </section>
);

export default Hero;
