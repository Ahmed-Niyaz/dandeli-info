import withAuth from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware() {
    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token }) => {
        return !!token; // Only allow access if token exists
      },
    },
  }
);

export const config = {
  matcher: ["/dashboard", "/profile", "/settings"], // Apply only to these routes
};










// import withAuth from "next-auth/middleware";
// import { NextResponse } from "next/server";

// export default withAuth(
//   function middleware() {
//     return NextResponse.next();
//   },
//   {
//     callbacks: {
//       authorized: ({ token, req }) => {
//         const { pathname } = req.nextUrl;

//         console.log("this is token from middleware", token);

//         // allow auth related routes
//         if (
//           pathname.startsWith("/api/auth") ||
//           pathname === "/login" ||
//           pathname === "/signup"
//         ) {
//           return true;
//         }

//         // allow public routes
//         if (pathname === "/" || pathname.startsWith("/api/videos")) {
//           return true;
//         }

//         return !!token;
//       },
//     },
//   }
// );

// export const config = {
//   matcher: ["/((?!_next/static|_next/image|favicon.ico|public/).*)"],
// };
