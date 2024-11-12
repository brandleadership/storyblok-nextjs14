import { storyblokEditable } from '@storyblok/react/rsc';
import { HeaderStoryblok } from '../../../component-types-sb';

interface HeaderProps {
    blok: HeaderStoryblok;
}

const Header = ({ blok }: HeaderProps) => (
    <section {...storyblokEditable(blok)}>
        <div className="mx-auto max-w-screen-xl px-4 py-8 text-center lg:px-12 lg:py-16">
            {blok.logo &&
                blok.logo.filename && ( // Check both blok.logo and blok.logo.filename
                    <img
                        src={blok.logo.filename || undefined} // Use fallback to undefined if filename is null
                        className="h-6 w-6"
                        alt={blok.logo.alt || 'Logo'}
                    />
                )}
            <p className="mb-8 text-lg font-normal text-gray-500 sm:px-16 lg:text-xl xl:px-48"></p>
        </div>
    </section>
);

export default Header;
