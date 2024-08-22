
/*AT THIS STAGE VERCEL DOES NOT SUPPORT CLERK AUTH WITHOUT A PRO ACCOUNT*/


import { clerkMiddleware, createRouteMatcher  } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher(['/dashboard(.*)'])
const isPublicRoute = createRouteMatcher(['/sign-in(.*)', '/sign-up(.*)'])

export default clerkMiddleware((auth, request) => {
  /*
    if (!isPublicRoute(request)) {
      auth().protect();
    }

    if (isProtectedRoute(request)) {
      auth().protect()
    };
    
    if (isProtectedRoute(request)) {
      auth().protect((has) => {
        
        return (
          has({ role: 'org:admin' }) ||
          has({ role: 'org:member' })
        )
      })
    }
  */
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
