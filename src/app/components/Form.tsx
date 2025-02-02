export function FormLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto mt-8 w-4/6 md:w-2/5 lg:w-2/6">
      <div className="border border-slate-100 flex flex-col gap-y-2 mx-auto p-5 shadow-xl rounded-xl">
        {children}
      </div>
    </div>
  );
}

type FormPropsType = {
  title: string;
  subTitle?: string;
  children: React.ReactNode;
};
export default function Form({ title, subTitle, children }: FormPropsType) {
  return (
    <form className="flex flex-col gap-y-2">
      <h2 className="text-lg px-2 text-center pb-1">{title}</h2>
      <p className="text-sm text-zinc-600 px-2 text-center">{subTitle}</p>
      {children}
    </form>
  );
}
