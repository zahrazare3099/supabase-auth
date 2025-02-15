import Loader from "@/components/loader/Loader";

type ButtonPropsType = {
  name: string;
  loading?: boolean;
};
export default function AuthButton({ name, loading }: ButtonPropsType) {
  return (
    <button
      disabled={loading}
      type="submit"
      className="w-full flex justify-center text-sm text-nowrap bg-indigo-700 py-2 text-white font-bold rounded-2xl"
    >
      {loading ? <Loader /> : name}
    </button>
  );
}
