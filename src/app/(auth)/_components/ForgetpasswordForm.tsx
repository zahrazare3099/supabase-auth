"use client";
import { useCallback, useState } from "react";
import forgetpasswordAction from "../_actions/forgetpasswordAction";
import AuthButton from "@/components/button/AuthButton";
import { useRouter } from "next/navigation";

export default function ForgetpasswordForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<null | string>(null);

  const handleForgetpassword = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      setLoading(true);
      setErrorMessage(null);
      try {
        const result = await forgetpasswordAction(formData);
        if (result.status === "success") {
          // return toast.success(
          //   'A password recovery link has been sent to your email.',
          // )
          router.push("/forgot-password/checkEmail");
        } else {
          return setErrorMessage(result.status);
        }
      } catch (error: any) {
        setErrorMessage(error.message);
      } finally {
        setLoading(false);
      }
    },
    [forgetpasswordAction, setLoading, setErrorMessage]
  );
  return (
    <form
      onSubmit={handleForgetpassword}
      className=" flex flex-col justify-center gap-y-4"
    >
      <h3 className="text-sm text-center px-3">
        Don't worry! It happens. Please enter the address associated with your
        account.
      </h3>
      <div className="flex flex-col gap-y-1">
        <label htmlFor="email" className="px-4 text-sm">
          Enter your Email
        </label>
        <input
          type="email"
          name="email"
          className="bg-white rounded-2xl px-3 py-1 focus:outline-none focus:border focus:border-blue-600"
          id="emailForForgetpassword"
          placeholder="example@gmail.com"
        />
      </div>
      {errorMessage !== null ? (
        <span className="text-red-500 font-bold text-sm px-4">
          *{errorMessage}
        </span>
      ) : null}
      <AuthButton name="Submit and check your Email" loading={loading} />
    </form>
  );
}
