"use client";

import Link from "next/link";

export default function ErrorPage({ error }: { error: Error }) {
  return (
    <div className="flex flex-col space-y-3 p-5 items-center">
      <Link href={"/"} className="text-blue-600">
        Go Home page
      </Link>
      <p className="px-2 text-red-600">Sorry, something went wrong</p>
      <p>{error.message}</p>
    </div>
  );
}
