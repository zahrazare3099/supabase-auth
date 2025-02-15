"use client";
import { useState } from "react";
import toast from "react-hot-toast";
import resetpasswordAction from "../_actions/resetpasswordAction";
import { useRouter, useSearchParams } from "next/navigation";
import AuthButton from "@/components/button/AuthButton";

export default function ResetPasswordForm() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<null | string>(null);

  const handleResetpassword = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const code = searchParams.get("token_hash") as string;

    setLoading(true);
    setErrorMessage(null);
    try {
      const result = await resetpasswordAction(formData, code);

      if (result.status === "success") {
        router.push("/");
        return toast.success("Your password has been successfully updated.");
      } else {
        return setErrorMessage(result.status);
      }
    } catch (error: any) {
      setErrorMessage(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <form
      onSubmit={(e) => handleResetpassword(e)}
      className=" flex flex-col justify-center gap-y-4"
    >
      <div className="flex flex-col gap-y-2 text-sm">
        <label className="px-2" htmlFor="password">
          Enter new password
        </label>
        <input
          type="password"
          name="password"
          className="px-2 rounded-xl py-1 w-full border border-indigo-700 focus:outline focus:outline-indigo-700 focus:outline-1"
          id="passwordForResetpassword"
          placeholder="1234"
        />
      </div>
      <div className="flex flex-col gap-y-2 text-sm">
        <label className="px-2" htmlFor="passwordConfirm">
          Confirm new password
        </label>
        <input
          type="password"
          name="passwordConfirm"
          className="px-2 rounded-xl py-1 w-full border border-indigo-700 focus:outline focus:outline-indigo-700 focus:outline-1"
          id="passwordConfirmForResetpassword"
          placeholder="1234"
        />
      </div>

      {errorMessage !== null ? (
        <span className="text-red-500 font-bold text-sm px-4">
          *{errorMessage}
        </span>
      ) : null}
      <AuthButton name="Submit" loading={loading} />
    </form>
  );
}
