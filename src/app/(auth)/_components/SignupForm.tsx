"use client";
import { useCallback, useState } from "react";
import signupAction from "../_actions/signupAction";
import { useRouter } from "next/navigation";
import AuthButton from "@/components/button/AuthButton";

export default function SignupForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<null | string>(null);

  const handleSubmitSignupForm = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setLoading(true);
      setErrorMessage(null);
      try {
        const formData = new FormData(e.currentTarget);
        const username = formData.get("username");
        const email = formData.get("email");
        const password = formData.get("password");

        if (!username || !password || !email) {
          return setErrorMessage("All fields are required.");
        } else {
          const result = await signupAction(formData);
          if (result.status !== "success") {
            // you can show toast here
            return setErrorMessage(result.status);
          }
          // toast.success('Please check your Email to create new Account')
          router.push("/register/checkEmail");
        }
      } catch (error: any) {
        setErrorMessage(error);
      } finally {
        setLoading(false);
      }
    },
    [signupAction, setLoading, setErrorMessage, router]
  );

  return (
    <form
      onSubmit={handleSubmitSignupForm}
      className=" flex flex-col justify-center gap-y-4"
    >
      <div className="flex flex-col gap-y-1">
        <label htmlFor="username" className="px-4 text-sm">
          Enter your user name
        </label>
        <input
          type="text"
          name="username"
          className="bg-white rounded-2xl px-3 py-1 focus:outline-none focus:border focus:border-blue-600"
          id="usernameForLogin"
          placeholder="user name"
        />
      </div>
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
        <label htmlFor="password" className="px-4 text-sm">
          Enter your password
        </label>
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
      <AuthButton name="Sign up" loading={loading} />
    </form>
  );
}
