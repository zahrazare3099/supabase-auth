"use server";
import { redirect } from "next/navigation";
import { createClient } from "../../../utils/supabase/server";
import { revalidatePath } from "next/cache";

export async function Logout() {
  const supabase = await createClient();

  const { error } = await supabase.auth.signOut();

  if (error) {
    redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/");
}
