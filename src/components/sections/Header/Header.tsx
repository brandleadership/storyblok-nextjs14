import { storyblokEditable } from '@storyblok/react/rsc';
import { HeaderStoryblok } from '../../../../component-types-sb';
import ContentWidth from '../../layouts/ContentWidth';

interface HeaderProps {
    blok: HeaderStoryblok;
}

const Header = ({ blok }: HeaderProps) => (
    <header {...storyblokEditable(blok)}>
        <ContentWidth>
            <nav className="py-4">
                <div className="flex flex-wrap items-center justify-between">
                    <a href={blok.logo_link?.url || undefined}>
                        <img
                            src={blok.logo?.filename || undefined}
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
        </ContentWidth>
    </header>
);

export default Header;
