import { NextResponse } from "next/server";
import {
  checkUserExists,
  exchangeCodeForSession,
  getUser,
  insertUser,
} from "@/lib/db";

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  // code | token_hash
  const code = searchParams.get("code");
  // if "next" is in param, use it as the redirect URL
  const next = searchParams.get("next") ?? "/";

  if (code) {
    const { error } = await exchangeCodeForSession(code);
    if (!error) {
      const { data, error: userError } = await getUser();
      if (userError) {
        console.log("Error in fetching user Data:", userError.message);
        return NextResponse.redirect(`${origin}/error`);
      }

      // Check if user exists in user_profiles table
      const existUser = await checkUserExists(data?.user?.email!);

      if (!existUser) {
        // Insert the new user into user_profiles table
        const { error: dbError } = await insertUser(
          data?.user?.email!,
          data?.user?.user_metadata?.user_name
        );
        if (dbError) {
          console.log("Error in inserting user data:", dbError.message);
          return NextResponse.redirect(`${origin}/error`);
        }
      }

      // original origin before load balancer
      const forwardedHost = request.headers.get("x-forwarded-host");
      const isLocalEnv = process.env.NODE_ENV === "development";
      if (isLocalEnv) {
        // we can be sure that there is no load balancer in between, so no need to watch for X-Forwarded-Host
        return NextResponse.redirect(`${origin}${next}`);
      } else if (forwardedHost) {
        return NextResponse.redirect(`https://${forwardedHost}${next}`);
      } else {
        return NextResponse.redirect(`${origin}${next}`);
      }
    }
  }

  // return the user to an error page with instructions /auth/auth-code-error
  return NextResponse.redirect(`${origin}/error`);
}
