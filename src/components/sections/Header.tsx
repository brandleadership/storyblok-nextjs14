import { storyblokEditable } from '@storyblok/react/rsc';
import { HeaderStoryblok } from '../../../component-types-sb';
import ContentWidth from '../layouts/ContentWidth';

interface HeaderProps {
    blok: HeaderStoryblok;
}

const Header = ({ blok }: HeaderProps) => (
    <ContentWidth {...storyblokEditable(blok)}>
        <header className="px-4 py-2.5 lg:px-6">
            <nav>
                <div className="flex flex-wrap items-center justify-between">
                    <a href={blok.logo_link?.url || undefined}>
                        <img
                            src={blok.logo?.filename || undefined} // Use fallback to undefined if filename is null
                            className="w-20"
                            alt={blok.logo?.alt || 'Logo'}
                        />
                    </a>
                    <div className="flex flex-wrap items-center justify-end">
                        <a
                            className="px-4 text-lg font-normal hover:underline"
                            href={blok.link_one?.url || undefined}
                        >
                            {blok.link_one_text}
                        </a>
                        <a
                            className="px-4 text-lg font-normal hover:underline"
                            href={blok.link_two?.url || undefined}
                        >
                            {blok.link_two_text}
                        </a>
                        <a
                            className="px-4 text-lg font-normal hover:underline"
                            href={blok.link_three?.url || undefined}
                        >
                            {blok.link_three_text}
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    </ContentWidth>
);

export default Header;
