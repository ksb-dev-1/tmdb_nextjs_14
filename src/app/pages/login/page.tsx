import LoginButtons from "./LoginButtons";

export default function Login() {
  return (
    <div className="max-w-[1280px] mt-[2rem] sm:mt-[6rem] flex flex-col items-center justify-center sm:py-16 rounded px-4 sm:px-0">
      <p className="font-medium text-2xl sm:text-3xl">Login to your account.</p>
      <p className="sm:text-lg mt-2 text-center">
        In order to manage watchlist you will need to login to your account.
      </p>
      <LoginButtons />
    </div>
  );
}
