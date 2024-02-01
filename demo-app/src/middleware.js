import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  console.log("middleware executed");
// This line retrieves the authentication token from the user's cookies.
  const authToken = request.cookies.get("authToken")?.value;

//This block excludes certain paths (/api/login and /api/users) from further processing.
  if (
    request.nextUrl.pathname === "/api/login" ||
    request.nextUrl.pathname === "/api/users"
  ) {
    return;
    
  }

  const loggedInUserNotAccessPaths =
    request.nextUrl.pathname === "/login" ||
    request.nextUrl.pathname == "/signup";
  // If the user is trying to access login or signup pages and is already authenticated, 
  //they are redirected to the user profile page
  if (loggedInUserNotAccessPaths) {
    //if user has authtoken redirect to user profile page
    if (authToken) {
      return NextResponse.redirect(new URL("/profile/user", request.url));
    }
  } else {
    // accessing secured route

    if (!authToken) {
      if (request.nextUrl.pathname.startsWith("/api")) {
        return NextResponse.json(
          {
            message: "Access Denied !!",
            success: false,
          },
          {
            status: 401,
          }
        );``
      }

      return NextResponse.redirect(new URL("/login", request.url));
    } else {
      
    }
  }

  //console.log(authToken);

  // return NextResponse.redirect(new URL("/", request.url));
}

//The matcher array defines the paths that this middleware should apply to.
export const config = {
  matcher: [
    "/",
    "/login",
    "/signup",
    "/add-task",
    "/show-tasks",
    "/profile/:path*",
    "/api/:path*",
  ],
};