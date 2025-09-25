import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import {UAParser} from 'ua-parser-js'

export function middleware(request: NextRequest) {
  const uaString = request.headers.get('user-agent') || ''
  const parser = new UAParser(uaString)
  const deviceType = parser.getDevice().type

  if (deviceType === 'mobile' && !request.nextUrl.pathname.startsWith('/mobile-blocked')) {
    const url = request.nextUrl.clone()
    url.pathname = '/mobile-blocked'
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|api).*)',
  ],
}
