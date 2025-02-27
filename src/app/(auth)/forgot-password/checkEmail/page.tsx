import Link from 'next/link'

export default function CheckForgetpasswordEmail() {
  return (
    <div className="border border-slate-100 rounded-xl shadow-xl w-9/12 sm:w-8/12 md:w-6/12 lg:w-5/12 p-6 flex flex-col gap-y-2">
      <h1 className="text-center font-bold py-10">Forget password</h1>
      <div className="px-3 pb-3 font-mono text-green-800">
        A password recovery link has been sent to your email. please check it!
      </div>
      <div className="text-xs px-3 flex flex-col gap-y-2 pt-2">
        <p>
          Have an account? &nbsp;
          <Link href="/login" className="text-blue-600">
            Login!
          </Link>
        </p>
        <p>
          Don't have an account? &nbsp;
          <Link href="/register" className="text-blue-600">
            Register!
          </Link>
        </p>
      </div>
    </div>
  )
}
