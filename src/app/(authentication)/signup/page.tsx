import Link from "next/link";
import { signInWithGithub } from "./actions";
import Form from "../../components/Form";
import Input from "../../components/Input";
import { signup } from "../_actions/actions";

function SignupPage() {
  return (
    <Form title="Create your account">
      <Input
        label="Enter your email"
        name="email"
        inputType="email"
        placeholder="example@gmail.com"
      />
      <Input
        label="Enter your password"
        name="password"
        inputType="password"
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
    </Form>
  );
}
export default SignupPage;
