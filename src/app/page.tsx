import HeaderClientWrapper from "@/app/components/header";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <HeaderClientWrapper />
      <main className="p-5">supabase auth</main>
    </div>
  );
}
