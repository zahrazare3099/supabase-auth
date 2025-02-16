"use client";

import Link from "next/link";

export default function Error(error: any) {
  return (
    <div className="flex flex-col space-y-3 p-5 items-center">
      <p>Sorry, something went wrong</p>
      <p>We encountered an unexpected error. Please try again later.</p>
      <p className="px-2 text-red-600">{error.message}</p>
      <Link href={"/"} className="text-blue-600">
        Go Home page
      </Link>
    </div>
  );
}
