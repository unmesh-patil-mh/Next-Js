// import { NextResponse } from 'next/server'
 
// // This function can be marked `async` if using `await` inside
// export function middleware(request) {
// //   return NextResponse.json({message: 'Hello From out About Page'})
//   return NextResponse.redirect(new URL('/', request.url))
// }
 
// export const config = {
//   matcher: '/about/:path*',
// }

// Matlab Yaha par jo bhi about page par jayega humhare to  iddleware se hum uske request ko redirect kar ke sidha jo eport funtion me return hai uske madat se home oage me bhej denge about se sidha home page 


// METHOD 2
import { NextResponse } from 'next/server'
 
export function middleware(request) {
  if (request.nextUrl.pathname.startsWith('/about')) {
    return NextResponse.rewrite(new URL('/', request.url))
  }
 
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/', request.url))
  }
}