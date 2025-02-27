import Link from 'next/link'

export default function CheckRegisterEmail() {
  return (
    <div className="border border-slate-100 rounded-xl shadow-xl w-9/12 sm:w-8/12 md:w-6/12 lg:w-5/12 p-6 flex flex-col gap-y-4">
      <h1 className="text-center font-bold py-10">Let's create your account</h1>
      <div className="px-3 pb-3 font-mono text-green-800">
        Please check your Email to create new Account
      </div>
      <span className="text-xs text-center">
        Already have an account? &nbsp;
        <Link href="/login" className="text-blue-600">
          Login!
        </Link>
      </span>
    </div>
  )
}
