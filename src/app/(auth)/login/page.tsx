import Link from "next/link";
import LoginForm from "../_components/LoginForm";
import GithubForm from "../_components/GithubForm";

export default function LoginPage() {
  return (
    <div className="border border-slate-100 rounded-xl shadow-xl w-9/12 sm:w-8/12 md:w-6/12 lg:w-5/12 p-6 flex flex-col gap-y-2">
      <h1 className="text-center font-bold py-10">Sign in to your Account</h1>
      <LoginForm />
      <GithubForm />
      <p className="text-xs text-center">
        Create account ? &nbsp;
        <Link href="/register" className="text-blue-600">
          Register
        </Link>
      </p>
    </div>
  );
}
