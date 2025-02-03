"use client";
import { useEffect, useState } from "react";
import { createClient } from "../utiles/supabase/client";
import { redirect } from "next/navigation";

const UserLogged = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const fetchUser = async () => {
      const supabase = createClient();
      try {
        const { data, error } = await supabase.auth.getUser();
        if (error || !data?.user) {
          redirect("/login");
        }
        setUser(data?.user.email.split("@")[0]);
        redirect("/", "page");
      } catch (error) {
        if (error === "Error: NEXT_REDIRECT") {
          return;
        } else {
          console.log("error in show user info", error);
        }
      }
    };
    fetchUser();
  }, [user]);
  return { user };
};

export default UserLogged;
