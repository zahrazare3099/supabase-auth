"use client";
import { createClient } from "../../../../../utils/supabase/client";
import { useEffect } from "react";
import { redirect, useSearchParams } from "next/navigation";

export default function TokenVerification() {
  const searchParams = useSearchParams();
  const tokenHash = searchParams.get("token_hash");
  const supabase = createClient();

  useEffect(() => {
    const verifyToken = async () => {
      if (typeof tokenHash === "string") {
        const { error } = await supabase.auth.verifyOtp({
          token_hash: tokenHash,
          type: "recovery",
        });

        if (error) {
          console.error("Token verification failed:", error.message);
          redirect("/error");
        }
      }
    };

    verifyToken();
  }, [tokenHash, supabase]);

  // This component only handles token verification; it doesn't render anything
  return null;
}
