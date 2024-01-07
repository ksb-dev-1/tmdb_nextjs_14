import LoginButtons from "./LoginButtons";

export default function Login() {
  return (
    <div className="mt-[2rem] sm:mt-[8rem] flex flex-col items-center justify-center h-full">
      <p className="font-medium text-2xl sm:text-3xl">Login to your account.</p>
      <p className="sm:text-lg mt-2">
        In order to manage watchlist you will need to login to your account.
      </p>
      <LoginButtons />
    </div>
  );
}
