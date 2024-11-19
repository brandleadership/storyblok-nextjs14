interface ButtonUrlData {
    linktype?: 'story' | 'asset' | 'url' | 'email';
    anchor?: string;
    story?: {
        full_slug: string;
    };
    url?: string;
    fieldtype?: 'asset';
    filename?: string;
}

const ButtonUrlRenderer = (data?: ButtonUrlData): string => {
    if (!data) {
        return '/';
    }

    if (data.linktype && data.linktype === 'story') {
        const anchor = data.anchor ? `#${data.anchor}` : '';
        if (data.story) {
            return `/${data.story.full_slug}${anchor}` || '/';
        }
    }

    if (data.linktype && data.linktype === 'asset') {
        if (data.url) {
            return data.url || '/';
        }
        if (data.fieldtype) {
            return data.filename || '/';
        }
        return '/';
    }

    if (data.linktype && data.fieldtype === 'asset') {
        if (data.filename) {
            return data.filename || '/';
        }
        return '/';
    }

    if (data.linktype && data.linktype === 'url') {
        return data.url || '/';
    }

    if (data.linktype && data.linktype === 'email') {
        return data.url || '/';
    }

    return '/';
};

export default ButtonUrlRenderer;
