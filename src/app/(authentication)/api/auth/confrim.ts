import { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "../../../../../utils/supabase/server";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const tokenHash = req.query.token_hash;

  // Ensure tokenHash is a string
  if (Array.isArray(tokenHash) || !tokenHash) {
    return res.status(400).json({ error: "Invalid token" });
  }
  const supabase = await createClient();
  // Use the appropriate type (e.g., 'recovery', 'magiclink', etc.)
  try {
    const { error } = await supabase.auth.verifyOtp({
      token_hash: tokenHash,
      type: "recovery",
    });

    if (error) {
      return res.status(401).json({ error: error.message });
    }

    // Redirect to confirmation page with token hash
    return res.redirect(`/confirm?token_hash=${tokenHash}`);
    // Redirect to password reset page
    //   return res.redirect(`http://localhost:3000/reset-password`);
  } catch (err) {
    return res.status(500).json({ error: "Internal server error" });
  }
}
