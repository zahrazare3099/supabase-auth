"use client";
import Link from "next/link";
import LogoutComponents from "./LogoutComponents";
import UserLogged from "./userLogged";

const Header = () => {
  const { user } = UserLogged();

  return (
    <header className="bg-slate-300 flex gap-x-5 p-5">
      {user !== null ? (
        <div className="flex gap-x-2 text-blue-600">
          <h3>Hello {user}</h3> | <LogoutComponents />
        </div>
      ) : (
        <Link className="text-blue-600" href={"/login"}>
          login
        </Link>
      )}
    </header>
  );
};

export default Header;
