"use client";
import Input from "@/app/components/Input";
import { resetPasswordFunc } from "./action";
import Form from "@/app/components/Form";
import { createClient } from "../../../../../utils/supabase/client";
import { useEffect } from "react";
import { redirect, useSearchParams } from "next/navigation";

export default function ResetPassword() {
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
  }, [tokenHash]);
  return (
    <Form
      title="Reset your password"
      subTitle="Enter your new password to update your password"
    >
      <Input
        name="password"
        label="New password"
        inputType="password"
        placeholder="example@gmail.com"
      />
      <Input
        name="passwordConfirm"
        label="Password confirm"
        inputType="password"
        placeholder="example@gmail.com"
      />
      <button
        className="bg-purple-800 text-white rounded-xl my-4 py-2 hover:font-bold font-medium"
        type="submit"
        formAction={resetPasswordFunc}
      >
        Set new password
      </button>
    </Form>
  );
}
