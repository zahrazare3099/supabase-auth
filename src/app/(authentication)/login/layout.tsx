import { FormLayout } from "@/app/components/Form";
import Link from "next/link";
import GithubSignup from "@/app/components/GithubSignup";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <FormLayout>
      {children}
      <p className="text-center">or</p>
      <GithubSignup />
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
    </FormLayout>
  );
};

export default Layout;
