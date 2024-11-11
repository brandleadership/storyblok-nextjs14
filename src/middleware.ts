import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const headers = new Headers(request.headers);
    let stringSearchParamethers = '';
    request.nextUrl.searchParams.forEach((item, key) => {
        stringSearchParamethers += `${key}=${item}`;
    });
    headers.set('x-search-paramethers-url', stringSearchParamethers);
    headers.set('frame-ancestors', 'https://app.storyblok.com');
    return NextResponse.next({ headers });
}

export const config = {
    matcher: [
        // match all routes except static files and APIs
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
};
