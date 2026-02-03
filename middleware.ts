import { NextRequest, NextResponse } from "next/server";

const PRIMARY_HOST = "opensverige.se";

export function middleware(request: NextRequest) {
  const isProduction = process.env.VERCEL_ENV === "production";
  if (!isProduction) {
    return NextResponse.next();
  }

  const hostHeader = request.headers.get("host");
  const hostname = hostHeader ? hostHeader.split(":")[0] : null;
  if (!hostname || hostname === PRIMARY_HOST) {
    return NextResponse.next();
  }

  const isVercelHost = hostname.endsWith(".vercel.app");
  const isWwwHost = hostname === `www.${PRIMARY_HOST}`;

  if (isVercelHost || isWwwHost) {
    const url = request.nextUrl.clone();
    url.hostname = PRIMARY_HOST;
    url.protocol = "https:";
    url.port = "";
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}
