"use server";

import { createClient } from "@/utiles/supabase/server";

export default async function resetpasswordAction(
  formData: FormData,
  code: string
) {
  const supabase = await createClient();

  const password = formData.get("password") as string;
  const passwordConfirm = formData.get("passwordConfirm") as string;

  if (password !== passwordConfirm) {
    return { status: "پسورد های وارد شده یکسان نیستند" };
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

  // TODO:YOUTUBE
  // const { error: sessionError } = await supabase.auth.exchangeCodeForSession(
  //   code
  // );

  // if (sessionError) {
  //   if (sessionError?.message?.includes("expired")) {
  //     return {
  //       status: "Password reset link has expired. Please request a new one.",
  //     };
  //   } else {
  //     return {
  //       status: sessionError?.message,
  //     };
  //   }
  // }

  // TODO: AI solution
  // const { error: setSessionError } = await supabase.auth.setSession({
  //   access_token: code,
  //   refresh_token: code,
  // });

  // if (setSessionError) {
  //   console.error("Error setting session:", setSessionError);
  //   return { status: "Failed to set session. Please try again." };
  // }

  const { error } = await supabase.auth.updateUser({
    password: password,
  });

  if (error) {
    return { status: error?.message };
  }

  return { status: "success" };
}
