import { NextResponse } from 'next/server';

// Limit the middleware to paths starting with `/api/`
export const config = {
  // matcher: ['/api/graphql', '/api/:path*', '/', '/:path*', '/api/graph:path*'],
  matcher: '/((?!api).*)',
};
 
export function middleware(request: any) {

  // Clone the request headers and set a new header `x-hello-from-middleware1`
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-hello-from-middleware1', 'hello');
 
  // You can also set request headers in NextResponse.rewrite
  const response = NextResponse.next({
    request: {
      // New request headers
      headers: requestHeaders,
    },
  });
 
  // Set a new response header `x-hello-from-middleware2`
  response.headers.set('x-hello-from-middleware2', 'hello');

  return response
}
