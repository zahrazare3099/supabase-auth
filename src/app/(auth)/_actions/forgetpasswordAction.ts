"use server";

import { createClient } from "@/utiles/supabase/server";
import { headers } from "next/headers";

export default async function forgetpasswordAction(formData: FormData) {
  const supabase = await createClient();
  const origin = (await headers()).get("origin");

  const { error } = await supabase.auth.resetPasswordForEmail(
    formData.get("email") as string,
    {
      redirectTo: `${origin}/reset-password`,
    }
  );

  if (error) {
    return {
      status: error?.message,
    };
  }
  return { status: "success" };
}
