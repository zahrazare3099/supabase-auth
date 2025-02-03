"use server";
import { redirect } from "next/navigation";
import { createClient } from "../../utiles/supabase/server";
import { revalidatePath } from "next/cache";

export const forgotPassword = async (formData: FormData) => {
  const supabase = await createClient();

  const { error } = await supabase.auth.resetPasswordForEmail(
    formData.get("email") as string
  );

  if (error) {
    console.log("err in forgot password", error);
    redirect("/error");
  }
  revalidatePath("/");
  redirect("/forgot-password/confirmation");
};
