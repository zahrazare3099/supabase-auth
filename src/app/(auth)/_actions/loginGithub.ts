"use server";
import { createClient } from "@/utiles/supabase/server";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function loginGithub() {
  const origin = (await headers()).get("origin");
  const supabase = await createClient();
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "github",
    options: {
      redirectTo: `${origin}/auth/callback`,
    },
  });

  if (error) {
    redirect("/error");
  } else if (data.url) {
    return redirect(data.url);
  }
}
