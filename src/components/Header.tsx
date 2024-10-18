import { storyblokEditable } from "@storyblok/react/rsc";

const Header = ({ blok }: any) => (
  <section {...storyblokEditable(blok)}>
    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
      
      <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48">
       
      </p>
    </div>
  </section>
);

export default Header;
