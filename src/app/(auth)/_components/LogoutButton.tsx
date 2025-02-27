"use client";
import { useCallback, useState } from "react";
import logoutAction from "../_actions/logoutAction";

export default function LogoutButton() {
  const [loading, setLoading] = useState<boolean>(false);

  const logoutHandler = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setLoading(true);
      try {
        await logoutAction();
      } finally {
        setLoading(false);
      }
    },
    [logoutAction, setLoading]
  );

  return (
    <form onSubmit={(e) => logoutHandler(e)}>
      <button
        disabled={loading}
        className="text-xs w-full  text-start text-nowrap text-red-500 font-sans hover:text-red-600"
      >
        {loading ? "Logging out of account..." : "logout ]→"}
      </button>
    </form>
  );
}
