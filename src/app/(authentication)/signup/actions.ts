"use server";
import { redirect } from "next/navigation";
import { createClient } from "../../utiles/supabase/server";

export async function signInWithGithub() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "github",
    options: {
      redirectTo: "http://localhost:3000/auth/callback",
    },
  });
  if (data.url) {
    redirect(data.url);
  }
  if (error) {
    redirect("/error");
  }
}
