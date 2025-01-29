import { Logout } from "../logout/actions";

const LogoutComponents = () => {
  return (
    <form action={Logout}>
      <button
        type="submit"
        className="text-red-600 hover:underline hover:underline-offset-2"
      >
        logout
      </button>
    </form>
  );
};

export default LogoutComponents;
