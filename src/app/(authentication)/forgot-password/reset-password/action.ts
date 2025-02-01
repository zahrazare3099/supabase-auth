"use server";
import { redirect } from "next/navigation";
import { createClient } from "../../../../../utils/supabase/server";

export const resetPasswordFunc = async (formData: FormData) => {
  const data = {
    password: formData.get("password") as string,
    passwordConfirm: formData.get("passwordConfirm") as string,
  };

  const supabase = await createClient();

  const { error } = await supabase.auth.updateUser(data);

  if (error) {
    console.log("error in reset pass", error);
    redirect("/error");
  }
  console.log("enter new pass and redirect to login");

  // User successfully created
  redirect("/login");
};
