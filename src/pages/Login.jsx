import LoginForm from "@/components/LoginForm";
import { Helmet } from "react-helmet-async";
export default function Login() {
  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div
        style={{
          backgroundImage:
            "url(https://res.cloudinary.com/dc68241xz/image/upload/v1714225247/raimond-klavins-xAqrT-279UA-unsplash_g2hsla.jpg)",
        }}
        className="h-[650px] bg-no-repeat bg-cover bg-center flex justify-center items-center"
      >
        <div className="lg:w-1/4">
          <LoginForm />
        </div>
      </div>
    </>
  );
}
