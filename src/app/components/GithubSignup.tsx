import { signInWithGithub } from "../(authentication)/signup/actions";

const GithubSignup = () => {
  return (
    <form>
      <button
        className="w-full text-center text-sm hover:bg-purple-800 hover:text-white py-2 hover:font-bold text-purple-800 border border-purple-800 rounded-xl"
        formAction={signInWithGithub}
      >
        sign up with Github
      </button>
    </form>
  );
};

export default GithubSignup;
