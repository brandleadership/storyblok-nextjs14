import { storyblokEditable } from "@storyblok/react/rsc";

const Footer = ({ blok }: any) => (
  <section {...storyblokEditable(blok)}>
    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
      
      <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48">
       {JSON.stringify(blok)}
      </p>
    </div>
  </section>
);

export default Footer;
