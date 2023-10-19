import { NextRequest, NextResponse } from "next/server";
import jwt, { JwtPayload } from "jsonwebtoken";

interface AuthenticatedRequest extends NextRequest {
  user?: any;
}

export async function middleware(req: AuthenticatedRequest) {
  var token = req.headers.get("authorization");

  if (!token) {
    return NextResponse.json({ error: "Token Required..." }, { status: 401 });
  }

  var auth = token.substring(7, token.length);

  try {
    // const decode = jwt.verify(
    //   auth,
    //   process.env.NEXT_JWT_SECRET as string
    // ) as JwtPayload;

    // // set the user property on the request
    // req.user = decode;

    return NextResponse.next(); // Call the next middleware or route handler
  } catch (error) {
    return NextResponse.json(
      { error: true, message: "Invalid Token..." },
      { status: 401 }
    );
  }
}

export const config = {
  // middleware,
  matcher: [
    // Match all API routes
    "/api/:path*",
  ],
};
