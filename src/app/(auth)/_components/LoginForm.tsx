"use client";

import { useCallback, useState } from "react";
import loginAction from "../_actions/loginAction";
import { useRouter } from "next/navigation";
import AuthButton from "@/components/button/AuthButton";
import Link from "next/link";

export default function LoginForm() {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<null | string>(null);

  const handleSubmitLoginForm = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setLoading(true);
      setErrorMessage(null);
      try {
        const formData = new FormData(e.currentTarget);
        const email = formData.get("email");
        const password = formData.get("password");

        if (!password || !email) {
          return setErrorMessage("All fields are required.");
        }
        const result = await loginAction(formData);
        if (result.status !== "success") {
          return setErrorMessage(result.status);
        }
        // toast.success('You have successfully logged into your account.')
        router.push("/");
      } catch (error: any) {
        setErrorMessage(error);
      } finally {
        setLoading(false);
      }
    },
    [loginAction, setLoading, setErrorMessage, router]
  );

  return (
    <form
      onSubmit={(e) => handleSubmitLoginForm(e)}
      className=" flex flex-col justify-center gap-y-4"
    >
      <h3 className="px-2 text-sm text-center">
        Welcome back! Please enter your details
      </h3>
      <div className="flex flex-col gap-y-1">
        <label htmlFor="email" className="px-4 text-sm">
          Enter your Email
        </label>
        <input
          type="email"
          name="email"
          className="bg-white rounded-2xl px-3 py-1 focus:outline-none focus:border focus:border-blue-600"
          id="emailForLogin"
          placeholder="example@gmail.com"
        />
      </div>
      <div className="flex flex-col gap-y-1">
        <span className="flex justify-between items-center">
          <label htmlFor="password" className="px-4 text-sm">
            Enter your password
          </label>
          <Link href="/forgot-password" className="text-blue-600 text-xs px-2">
            forget password?
          </Link>
        </span>

        <input
          type="password"
          name="password"
          className="bg-white rounded-2xl px-3 py-1 focus:outline-none focus:border focus:border-blue-600"
          id="passwordForLogin"
          placeholder="1234"
        />
      </div>
      {errorMessage !== null ? (
        <span className="text-red-500 font-bold text-sm px-4">
          *{errorMessage}
        </span>
      ) : null}
      <AuthButton name="Login" loading={loading} />
    </form>
  );
}
