import Link from "next/link";

export default function ConfirmEmail() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-[540px] text-center border border-slate-300 shadow-lg p-6 rounded-xl">
        <header>
          <h2 className="text-2xl font-bold">Check Your Email</h2>
        </header>
        <main>
          <div className="flex justify-center mb-6">📩</div>
          <p className="text-gray-600 mb-4">
            We've sent an email to your email address. Please check your email
            for a magic link to log into the website.
          </p>
          <p className="text-sm text-gray-500">
            If you don't see the email, please check your spam folder or your
            email address.
          </p>
          <Link
            href="/signup"
            className="text-sm text-blue-600 hover:underline hover:underline-offset-2"
          >
            check email address
          </Link>
        </main>
      </div>
    </div>
  );
}
