import { storyblokEditable } from "@storyblok/react/rsc";

const Hero = ({ blok }: any) => (
  <section {...storyblokEditable(blok)}>
    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
      <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">
        {blok.title}
      </h1>
      <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48">
        {blok.text}
      </p>
    </div>
  </section>
);

export default Hero;
