// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';
  const protocol = request.headers.get('x-forwarded-proto') || 'http';

  // Clone current URL for modifications
  const url = request.nextUrl.clone();

  let shouldRedirect = false;

  // Enforce HTTPS
  if (protocol === 'http') {
    url.protocol = 'https:';
    shouldRedirect = true;
  }

  // Enforce www
  if (hostname === 'syedalinaqihasni.com') {
    url.host = 'www.syedalinaqihasni.com';
    shouldRedirect = true;
  }

  if (shouldRedirect) {
    return NextResponse.redirect(url, 308); // 308 preserves method & body
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/:path*',
};
