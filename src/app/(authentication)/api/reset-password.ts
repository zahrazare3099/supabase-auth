import { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "../../utiles/supabase/server";
import { redirect } from "next/navigation";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const supabase = await createClient();
  if (req.method === "POST") {
    const { email } = req.body;
    const options = {
      redirectTo: `http://localhost:3000/reset-password`,
    };

    const { error } = await supabase.auth.resetPasswordForEmail(email, options);

    if (error) {
      const err = res.status(400).json({ error: error.message });
      const serverErr = res
        .status(500)
        .json({ error: "Internal Server Error" });
      console.log("err in reset pass handler", error, err, serverErr);
      redirect("/error");
    }

    return res
      .status(200)
      .json({ message: "Password reset email sent successfully." });
  }

  return res.status(405).json({ error: "Method not allowed" });
}
