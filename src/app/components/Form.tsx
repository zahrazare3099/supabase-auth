function FormLayout({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto mt-8 w-3/6 md:w-2/5 lg:w-2/6">{children}</div>;
}

type FormPropsType = {
  title: string;
  subTitle?: string;
  children: React.ReactNode;
};
export default function Form({ title, subTitle, children }: FormPropsType) {
  return (
    <FormLayout>
      <form className="border border-slate-100 flex flex-col gap-y-2 mx-auto p-5 shadow-xl rounded-xl">
        <h2 className="text-lg px-2 text-center">{title}</h2>
        <p>{subTitle}</p>
        {children}
      </form>
    </FormLayout>
  );
}
