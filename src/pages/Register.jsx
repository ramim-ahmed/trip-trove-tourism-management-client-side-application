// import Loader from "@/components/Loader";
import Loader from "@/components/Loader";
import RegisterForm from "@/components/RegisterForm";
import useAuth from "@/hooks/useAuth";
export default function Register() {
  const { loading } = useAuth();
  return (
    <>
      <div
        style={{
          backgroundImage:
            "url(https://res.cloudinary.com/dc68241xz/image/upload/v1714225247/raimond-klavins-xAqrT-279UA-unsplash_g2hsla.jpg)",
        }}
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
