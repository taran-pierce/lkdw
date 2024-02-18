import { NextResponse } from 'next/server';

// Limit the middleware to paths starting with `/api/`
export const config = {
  // matcher: ['/api/graphql', '/api/:path*', '/', '/:path*', '/api/graph:path*'],
  matcher: '/((?!api).*)',
};
 
export function middleware(request: any) {

  // TODO does not run on apollo graphql calls
  // console.log('DID THIS RUN?!');
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

// export function middleware() {
//   console.log('OH HIAI THIS RAN');
//   // retrieve the current response
//   const res = NextResponse.next();

//   console.log(res.headers);

//   // add the CORS headers to the response
//   res.headers.append('Access-Control-Allow-Credentials', "true");
//   // TODO cors issue locally with keystone on different port
//   res.headers.append('Access-Control-Allow-Origin', '*'); // replace this your actual origin
//   res.headers.append('Access-Control-Allow-Methods', 'GET,DELETE,PATCH,POST,PUT,OPTIONS');
//   res.headers.append(
//       'Access-Control-Allow-Headers',
//       'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
//   );

//   // res.headers.append('Content-Type', 'multipart/form-data; boundary=----');
  
//   // TODO added these trying to use createUploadLink instead of the httpLink that was working
//   // for file uploads from frontend
//   // res.headers.append('x-apollo-operation-name', 'createProduct');
//   // res.headers.append('apollo-require-preflight', 'true');

//   return res;
// }

// // specify the path regex to apply the middleware to
// export const config = {
//   matcher: '/api/:path*',
// }
