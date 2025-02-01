import { Logout } from "../(authentication)/_actions/actions";

const LogoutComponents = () => {
  return (
    <form>
      <button
        formAction={Logout}
        className="text-red-600 hover:underline hover:underline-offset-2"
      >
        logout
      </button>
    </form>
  );
};

export default LogoutComponents;
