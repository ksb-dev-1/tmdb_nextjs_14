import LoginButtons from "./LoginButtons";

export default function Login() {
  return (
    <div className="max-w-[1280px] mx-auto mt-[6rem] flex flex-col items-center justify-center">
      <p className="font-medium text-2xl">Login to your account</p>
      <LoginButtons />
    </div>
  );
}