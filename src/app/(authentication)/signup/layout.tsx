import { FormLayout } from "@/app/components/Form";
import GithubSignup from "@/app/components/GithubSignup";
import Link from "next/link";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <FormLayout>
      {children}
      <p className="text-center">or</p>
      <GithubSignup />
      <div className="space-y-2 py-2 text-purple-700 text-center text-sm">
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
    </FormLayout>
  );
};

export default Layout;
