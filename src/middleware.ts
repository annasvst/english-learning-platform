import { NextResponse } from 'next/server'
 
export function middleware() {
  // if (request.nextUrl.pathname === '/') {
  //   return NextResponse.redirect(new URL('/speaking-club', request.url))
  // }
  return NextResponse.next()
}
