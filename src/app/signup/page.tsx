import Link from "next/link";
import { signup } from "../login/actions";
import { signInWithGithub } from "./actions";

function SignupPage() {
  return (
    <form className="border border-slate-100 flex flex-col gap-y-2 mx-auto p-5 shadow-xl rounded-xl">
      <h2 className="text-lg px-2 text-center">Create your account</h2>
      <label className="px-2" htmlFor="email">
        Email
      </label>
      <input
        className="rounded-xl px-2 py-1 outline-none border focus:border focus:border-purple-800"
        id="email"
        name="email"
        type="email"
        required
        autoComplete="off"
        placeholder="example@gmail.com"
      />
      <label className="px-2" htmlFor="password">
        Password
      </label>
      <input
        className="rounded-xl px-2 py-1 outline-none border focus:border focus:border-purple-800"
        id="password"
        name="password"
        type="password"
        required
        placeholder="1234"
      />
      <div className="flex flex-col space-y-1 pt-4 text-xs">
        <button
          className="text-center hover:bg-purple-800 hover:text-white py-2 hover:font-bold text-purple-800 border border-purple-800 rounded-xl"
          formAction={signup}
        >
          Sign up
        </button>
        <p className="text-center">or</p>
        <button
          className="text-center hover:bg-purple-800 hover:text-white py-2 hover:font-bold text-purple-800 border border-purple-800 rounded-xl"
          formAction={signInWithGithub}
        >
          sign up with Github
        </button>
        <div className="space-y-2 py-2 text-purple-700 text-center">
          <p>
            Do you have an account?&nbsp;
            <Link
              href="/login"
              className="underline underline-offset-2 hover:underline-offset-4"
            >
              login
            </Link>
          </p>
        </div>
      </div>
    </form>
  );
}
export default SignupPage;
