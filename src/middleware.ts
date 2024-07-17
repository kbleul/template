import { pagesOptions } from "@/app/api/auth/[...nextauth]/pages-options";
import withAuth, { NextRequestWithAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";
export default withAuth(
  function middleware(req: NextRequestWithAuth) {
    /*
    EXample

     if (
      req.nextUrl.pathname.startsWith("/admin") &&
      !req.nextauth.token?.user.roles
        ?.map((item) => item.name)
        .includes("Admin")
    ) {
      return NextResponse.rewrite(new URL("/access-denied", req.url));
    }
    */
  },

  {
    pages: {
      ...pagesOptions,
    },

    callbacks: {
      authorized: ({ token }) => {
        return !!token;
      },
    },
  }
);

export const config = {
  // restricted routes that need authentication
  matcher: ["/"],
};
