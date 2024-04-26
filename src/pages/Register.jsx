// import Loader from "@/components/Loader";
import Loader from "@/components/Loader";
import RegisterForm from "@/components/RegisterForm";
import useAuth from "@/hooks/useAuth";
import backgroundImage from "../assets/auth-page-bg.png";
export default function Register() {
  const { loading } = useAuth();
  return (
    <>
      <div
        style={{ backgroundImage: `url(${backgroundImage})` }}
        className="h-[850px] bg-no-repeat bg-cover bg-center flex justify-center items-center"
      >
        <div className="lg:w-1/4">
          {loading ? (
            <div className="w-full min-h-screen flex justify-center items-center">
              <Loader />
            </div>
          ) : (
            <RegisterForm />
          )}
        </div>
      </div>
    </>
  );
}
