import LoginForm from "@/components/LoginForm";
export default function Login() {
  return (
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
  );
}
