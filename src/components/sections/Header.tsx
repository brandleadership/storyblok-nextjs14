import { storyblokEditable } from '@storyblok/react/rsc';

const Header = ({ blok }: any) => (
    <header {...storyblokEditable(blok)}>
        <nav className="border-gray-200 bg-white px-4 py-2.5 lg:px-6 dark:bg-gray-800">
            <div className="flex flex-wrap items-center justify-between">
                <img
                    src={blok.logo.filename}
                    className="h-6 w-6"
                    alt="Follow us on LinkedIn"
                />
            </div>
        </nav>
    </header>
);

export default Header;
