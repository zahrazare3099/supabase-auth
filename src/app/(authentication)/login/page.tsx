import Form from "@/app/components/Form";
import Input from "@/app/components/Input";
import { login } from "./actions";

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
      </div>
    </Form>
  );
}
export default LoginPage;
