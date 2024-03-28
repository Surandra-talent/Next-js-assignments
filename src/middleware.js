// import { NextResponse } from "next/server";

// export function middleware(request) {
//   //   if (request.nextUrl.pathname != "/login") {
//   //     return NextResponse.redirect(new URL("/login", request.url));
//   // }
//   return NextResponse.redirect(new URL("/login", request.url));
// }

// export const config = {
//   matcher: ["/dashboard/:path*", "/userslist/:path*"],
// };

import { NextResponse } from "next/server";

export function middleware(request) {
  const loggedIn = false;
  const { pathname } = new URL(request.url);

  if (!loggedIn && pathname !== "/login") {
    return NextResponse.redirect(new URL("/login", request.url).toString());
  }

  return null; // Proceed with the request
}

export const config = {
 // middleware: true,
  matcher: ["/api/:path*", "/userslist/:path*"],
};