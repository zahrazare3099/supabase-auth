import Link from "next/link";
import Form, { FormLayout } from "@/app/components/Form";
import Input from "@/app/components/Input";
import { forgotPassword } from "./action";

export default function ForgetpasswordPage() {
  return (
    <FormLayout>
      <Form
        title="Reset to your password"
        subTitle="Enter your email address to reset your password"
      >
        <Input
          label="Email"
          name="email"
          inputType="email"
          placeholder="example@gmail.com"
        />
        <div className="flex flex-col space-y-1 pt-4 text-sm">
          <button
            className="text-center hover:bg-purple-800 hover:text-white py-2 hover:font-bold text-purple-800 border border-purple-800 rounded-xl"
            formAction={forgotPassword}
          >
            Forget password
          </button>
          <div className="space-y-2 py-2 text-purple-700 text-center text-xs">
            <p>
              Remember your password?&nbsp;
              <Link
                href="/login"
                className="underline underline-offset-2 hover:underline-offset-4"
              >
                Login
              </Link>
            </p>
            <p>
              Don't have an account?&nbsp;
              <Link
                href="/signup"
                className="underline cursor-pointer underline-offset-2 hover:underline-offset-4"
              >
                Register
              </Link>
            </p>
          </div>
        </div>
      </Form>
    </FormLayout>
  );
}
