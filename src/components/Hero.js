import { storyblokEditable } from "@storyblok/react/rsc";

const Hero = ({ blok }) => <div {...storyblokEditable(blok)}>{blok.title}</div>;

export default Hero;
