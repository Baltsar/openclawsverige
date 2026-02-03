import { NextRequest, NextResponse } from "next/server";

const PRIMARY_HOST = "opensverige.se";

export function middleware(request: NextRequest) {
  const isProduction = process.env.VERCEL_ENV === "production";
  if (!isProduction) {
    return NextResponse.next();
  }

  const forwardedHost = request.headers.get("x-forwarded-host");
  const hostHeader = forwardedHost ?? request.headers.get("host");
  const hostname = hostHeader
    ? hostHeader.split(",")[0].trim().split(":")[0]
    : null;
  if (!hostname || hostname === PRIMARY_HOST) {
    return NextResponse.next();
  }

  const isVercelHost = hostname.endsWith(".vercel.app");

  if (isVercelHost) {
    const url = request.nextUrl.clone();
    url.hostname = PRIMARY_HOST;
    url.protocol = "https:";
    url.port = "";
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}
