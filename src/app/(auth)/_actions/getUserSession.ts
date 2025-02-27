import { createClient } from "@/utils/supabase/server";

export default async function getUserSession() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();

  if (error) {
    return {
      status: error?.message,
      user: null,
    };
  }
  return { status: "success", user: data?.user };
}
