import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    const headers = new Headers(request.headers);
    const { type, method } = Object.fromEntries(request.nextUrl.searchParams);
    let stringSearchParamethers = ""
    request.nextUrl.searchParams.forEach((item, key) => { stringSearchParamethers += `${key}=${item}`})
    console.log(stringSearchParamethers);
    const isPublished= request.nextUrl.searchParams.get("_storyblok_published") ? "true" : "false"
    headers.set("x-search-paramethers-url", stringSearchParamethers);
    return NextResponse.next({ headers });
}

export const config = {
  matcher: [
    // match all routes except static files and APIs
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};