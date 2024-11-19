import { headers } from 'next/headers';

export const getVersion = (): 'published' | 'draft' => {
    const heads = headers();
    const pathname = heads.get('x-search-paramethers-url') || '';
    if (pathname.includes('_storyblok_published')) {
        return 'published';
    } else if (pathname.includes('_storyblok')) {
        return 'draft';
    } else {
        return 'published';
    }
};
