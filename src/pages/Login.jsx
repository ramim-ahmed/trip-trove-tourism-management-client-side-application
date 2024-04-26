import LoginForm from "@/components/LoginForm";
import backgroundImage from "../assets/auth-page-bg.png";

export default function Login() {
  return (
    <div
      style={{ backgroundImage: `url(${backgroundImage})` }}
      className="h-[650px] bg-no-repeat bg-cover bg-center flex justify-center items-center"
    >
      <div className="lg:w-1/4">
        <LoginForm />
      </div>
    </div>
  );
}
