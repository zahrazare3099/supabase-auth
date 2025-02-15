"use server";

import { createClient } from "@/utiles/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function logoutAction() {
  const supabase = await createClient();

  const { error } = await supabase.auth.signOut();

  if (error) {
    redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/login");
}
