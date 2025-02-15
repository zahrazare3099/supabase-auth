"use client";
import { useTransition } from "react";
import loginGithub from "../_actions/loginGithub";

export default function GithubForm() {
  const [isPending, startTransition] = useTransition();

  const githubLoginHandler = async () => {
    startTransition(async () => {
      await loginGithub();
    });
  };

  return (
    <button
      className="bg-black text-white font-bold text-sm rounded-2xl py-2"
      type="submit"
      disabled={isPending}
      onClick={githubLoginHandler}
    >
      {isPending ? "Redirecting..." : "Sign in with Github"}
    </button>
  );
}
