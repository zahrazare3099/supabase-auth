"use client";

import Link from "next/link";
import { useEffect } from "react";

export function ErrorPage({ error }: { error: Error & { digest?: string } }) {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div className="flex flex-col space-y-3 p-5 items-center">
      <Link href={"/"} className="text-blue-600">
        Go Home page
      </Link>
      <p className="px-2 text-red-600">Sorry, something went wrong</p>
    </div>
  );
}
