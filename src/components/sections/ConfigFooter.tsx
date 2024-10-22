import { storyblokEditable } from "@storyblok/react/rsc";
import Footer from "./Footer";

const ConfigFooter = ({ blok }: any) => (
   
    <section {...storyblokEditable(blok)}>
     {blok?.global.map((nestedBlok: any) => (
                    <Footer
                        className=""
                        blok={nestedBlok}
                        key={nestedBlok._uid}
                    />
                ))}
  </section>
);

export default ConfigFooter;
