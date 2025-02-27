"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";

export default async function signupAction(formData: FormData) {
  const supabase = await createClient();

  const credentials = {
    username: formData.get("username") as string,
    password: formData.get("password") as string,
    email: formData.get("email") as string,
  };

  const { error, data } = await supabase.auth.signUp({
    email: credentials.email,
    password: credentials.password,
    options: {
      data: {
        username: credentials.username,
      },
    },
  });

  if (error) {
    return {
      status: error?.message,
      user: null,
    };
  } else if (data?.user?.identities?.length === 0) {
    return {
      status: "A user with this email already exists, please login.",
      user: null,
    };
  }

  revalidatePath("/", "layout");
  return { status: "success", user: data.user };
}
