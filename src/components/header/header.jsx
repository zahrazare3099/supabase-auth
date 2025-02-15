import LogoutButton from "@/app/(auth)/_components/LogoutButton";
import { createClient } from "@/utiles/supabase/server";
import Image from "next/image";
import Link from "next/link";
import userProfile from "../../../public/user.png";

export default async function Header() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return (
    <div className="bg-slate-300 w-full p-3 px-5 flex justify-between items-center">
      {user ? (
        <span className="w-52 flex items-center gap-3 text-xs font-sans">
          <Image
            width={35}
            height={35}
            src={user?.user_metadata?.avatar_url || userProfile}
            alt="user profile picture"
            className="aspect-square rounded-full"
          />
          <div className="flex flex-col flex-1">
            <p>
              Hi &nbsp;
              {user?.user_metadata?.username || user?.user_metadata?.full_name}،
              welcome
            </p>
          </div>
        </span>
      ) : null}

      {user ? (
        <LogoutButton />
      ) : (
        <Link
          href="/login"
          className="flex justify-end text-indigo-600 hover:text-indigo-700 text-xs w-full text-start text-nowrap font-sans"
        >
          Login →]
        </Link>
      )}
    </div>
  );
}
