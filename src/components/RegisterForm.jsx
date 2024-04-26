import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import useAuth from "@/hooks/useAuth";
import { HiOutlineEye } from "react-icons/hi2";
import { RiEyeOffLine } from "react-icons/ri";
import { passwordValidator } from "@/utils/passwordValidator";
import toast from "react-hot-toast";
import SocialAuth from "./SocialAuth";

export default function RegisterForm() {
  const { signup, firebaseError, authUser } = useAuth();
  const [isAgree, setIsAgree] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleRegister = async (data) => {
    const { username, email, password, confirmPassword, photo_url } = data;
    const validPassword = passwordValidator(password);
    if (!validPassword) {
      return toast.error(
        "password must be A Uppercase and A lowercase and min length six!"
      );
    }
    if (password !== confirmPassword) {
      return toast.error("password and confirm password not match!");
    }
    if (isAgree) {
      await signup(email, password, username, photo_url);
      reset();
    }
  };
  useEffect(() => {
    if (authUser) {
      navigate(location?.state ? location?.state : "/");
    }
  }, [authUser, navigate, location]);
  return (
    <div className="bg-white p-5 relative">
      <form onSubmit={handleSubmit(handleRegister)}>
        <h2 className="text-gray-900 text-center text-lg mb-1 font-medium title-font">
          Register your account
        </h2>
        {firebaseError && (
          <div>
            <p className=" text-red-500 py-3">{firebaseError}</p>
          </div>
        )}
        <div className="relative mb-4">
          <label htmlFor="username" className="leading-7 text-sm text-gray-600">
            Username
          </label>
          <input
            {...register("username", { required: true })}
            type="text"
            id="username"
            name="username"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
          {errors.username && (
            <span className="text-red-600">This field is required</span>
          )}
        </div>
        <div className="relative mb-4">
          <label
            htmlFor="photo_url"
            className="leading-7 text-sm text-gray-600"
          >
            Photo URL
          </label>
          <input
            {...register("photo_url", { required: true })}
            type="url"
            id="photo_url"
            name="photo_url"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
          {errors.photo_url && (
            <span className="text-red-600">This field is required</span>
          )}
        </div>
        <div className="relative mb-4">
          <label htmlFor="email" className="leading-7 text-sm text-gray-600">
            Email
          </label>
          <input
            {...register("email", { required: true })}
            type="email"
            id="email"
            name="email"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
          {errors.email && (
            <span className="text-red-600">This field is required</span>
          )}
        </div>
        <div className="relative mb-4">
          <label htmlFor="password" className="leading-7 text-sm text-gray-600">
            Password
          </label>
          <div className="relative">
            <input
              {...register("password", { required: true })}
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />

            {showPassword ? (
              <RiEyeOffLine
                className="absolute right-2 top-2 h-6 w-6 cursor-pointer"
                onClick={() => setShowPassword(false)}
              />
            ) : (
              <HiOutlineEye
                className="absolute right-2 top-2 h-6 w-6 cursor-pointer"
                onClick={() => setShowPassword(true)}
              />
            )}
          </div>
          {errors.password && (
            <span className="text-red-600">This field is required</span>
          )}
        </div>
        <div className="relative mb-4">
          <label
            htmlFor="confirmPassword"
            className="leading-7 text-sm text-gray-600"
          >
            Confirm Password
          </label>
          <div className="relative">
            <input
              {...register("confirmPassword", { required: true })}
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              name="confirmPassword"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
            {showConfirmPassword ? (
              <RiEyeOffLine
                className="absolute right-2 top-2 h-6 w-6 cursor-pointer"
                onClick={() => setShowConfirmPassword(false)}
              />
            ) : (
              <HiOutlineEye
                className="absolute right-2 top-2 h-6 w-6 cursor-pointer"
                onClick={() => setShowConfirmPassword(true)}
              />
            )}
          </div>
          {errors.confirmPassword && (
            <span className="text-red-600">This field is required</span>
          )}
        </div>
        <div className="relative mb-4 flex items-center space-x-3">
          <input
            onChange={(e) => setIsAgree(e.target.checked)}
            type="checkbox"
            id="isAggree"
            name="isAggree"
            className=" bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
          <label htmlFor="isAggree" className="leading-7 text-sm text-gray-600">
            Accept Terms And Conditions.
          </label>
        </div>
        <button
          disabled={isAgree ? false : true}
          type="submit"
          className="text-white bg-baseColor border-0 py-2 px-6 focus:outline-none rounded text-lg disabled:bg-slate-500 w-full"
        >
          register
        </button>
        <p className="text-base text-gray-500 mt-3 text-center">
          Already have an account ?
          <Link className=" text-baseColor font-medium" to="/login">
            login
          </Link>
        </p>
      </form>
      <div className="mt-2">
        <p className="text-center">Or, Sign Up With</p>
        <SocialAuth />
      </div>
    </div>
  );
}
