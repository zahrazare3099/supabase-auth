import React from "react";
import getUserSession from "./_actions/getUserSession";
import { redirect } from "next/navigation";

type FormLayoutProps = {
  children: React.ReactNode;
};

export default async function layout({ children }: FormLayoutProps) {
  const response = await getUserSession();
  if (response?.user) {
    redirect("/");
  }
  return (
    <div className="w-full h-screen flex justify-center items-start mt-12">
      {children}
    </div>
  );
}
