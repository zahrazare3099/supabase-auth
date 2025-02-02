import Input from "@/app/components/Input";
import { resetPasswordFunc } from "./action";
import Form from "@/app/components/Form";
import { Suspense } from "react";
import TokenVerification from "./TokenVerification";
import Loader from "@/app/components/Loader";

export default function ResetPassword() {
  return (
    <Suspense fallback={<Loader />}>
      <TokenVerification />
      <Form
        title="Reset your password"
        subTitle="Enter your new password to update your password"
      >
        <Input
          name="password"
          label="New password"
          inputType="password"
          placeholder="example@gmail.com"
        />
        <Input
          name="passwordConfirm"
          label="Password confirm"
          inputType="password"
          placeholder="example@gmail.com"
        />
        <button
          className="bg-purple-800 text-white rounded-xl my-4 py-2 hover:font-bold font-medium"
          type="submit"
          formAction={resetPasswordFunc}
        >
          Set new password
        </button>
      </Form>
    </Suspense>
  );
}
