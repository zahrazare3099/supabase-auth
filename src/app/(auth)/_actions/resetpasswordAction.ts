"use server";

import { createClient } from "@/utils/supabase/server";

export default async function resetpasswordAction(
  formData: FormData,
  code: string
) {
  const supabase = await createClient();

  const password = formData.get("password") as string;
  const passwordConfirm = formData.get("passwordConfirm") as string;

  if (password !== passwordConfirm) {
    return { status: "The entered passwords are not the same." };
  }

  if (typeof code === "string") {
    const { error: verifyError } = await supabase.auth.verifyOtp({
      token_hash: code,
      type: "recovery",
    });

    if (verifyError) {
      return {
        status: verifyError?.message,
      };
    }
  }

  const { error } = await supabase.auth.updateUser({
    password: password,
  });

  if (error) {
    return { status: error?.message };
  }

  return { status: "success" };
}
