import { createClient } from "@/utiles/supabase/server";

export default async function getUserSession() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();

  if (error) {
    return null;
  }
  return { status: "success", user: data?.user };
}
