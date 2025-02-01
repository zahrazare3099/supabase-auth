import Form from "@/app/components/Form";
import Input from "@/app/components/Input";
import Link from "next/link";
import { login } from "./actions";
import { signInWithGithub } from "@/app/(authentication)/signup/actions";

function LoginPage() {
  return (
    <Form title="Login to your account">
      <Input
        label="Email"
        name="email"
        inputType="email"
        placeholder="example@gmail.com"
      />
      <Input
        label="Password"
        name="password"
        inputType="password"
        placeholder="1234"
      />
      <div className="flex flex-col space-y-1 pt-4 text-sm">
        <button
          className="text-center hover:bg-purple-800 hover:text-white py-2 hover:font-bold text-purple-800 border border-purple-800 rounded-xl"
          formAction={login}
        >
          Submit
        </button>
        <p className="text-center">or</p>
        <button
          className="text-center hover:bg-purple-800 hover:text-white py-2 hover:font-bold text-purple-800 border border-purple-800 rounded-xl"
          formAction={signInWithGithub}
        >
          Log in with Github
        </button>
        <div className="space-y-2 py-2 text-purple-700 text-center text-xs">
          <p>
            Don't have an account?&nbsp;
            <Link
              href="/signup"
              className="underline underline-offset-2 hover:underline-offset-4"
            >
              register
            </Link>
          </p>
          <p>
            Forgot password?&nbsp;
            <Link
              href="/forgot-password"
              className="underline cursor-pointer underline-offset-2 hover:underline-offset-4"
            >
              Reset my password
            </Link>
          </p>
        </div>
      </div>
    </Form>
  );
}
export default LoginPage;
