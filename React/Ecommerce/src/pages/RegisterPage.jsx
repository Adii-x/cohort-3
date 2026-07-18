import React, { useContext } from "react";
import { User, Mail, Lock, Eye, ArrowRight, Zap, EyeOff } from "lucide-react";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { AppStore } from "../context/AppContext";

const RegisterPage = () => {
  const navigate = useNavigate();

  const { setShowPassword, showPassword, setUser } = useContext(AppStore);

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const submitHandler = (data) => {
    localStorage.setItem("user", JSON.stringify(data));
    setUser(data);
    reset();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-[#0d0d0d] flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-107.5">
        {/* Logo */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="h-9 w-9 rounded-xl bg-lime-400 flex items-center justify-center">
            <Zap size={18} className="text-black fill-black" />
          </div>

          <h1 className="text-[18px] font-bold text-white">
            Sky<span className="text-lime-400">Mart</span>
          </h1>
        </div>

        {/* Card */}
        <div className="rounded-3xl border border-[#2a2a2a] bg-[#111111] px-6 py-6 shadow-2xl">
          {/* Heading */}
          <h2 className="text-[32px] font-bold text-white leading-none">
            Create account
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Join SkyMart and start shopping
          </p>

          {/* Form */}
          <form
            onSubmit={handleSubmit(submitHandler)}
            className="mt-6 space-y-4"
          >
            {/* Name */}
            <div className="relative">
              <User
                size={17}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
              />

              <input
                {...register("name", {
                  required: "Name is required",
                  pattern: {
                    value: /^(?!\s*$).+/,
                    message: "Spaces are not allowed",
                  },
                })}
                type="text"
                placeholder="Full name"
                className="w-full h-12 rounded-xl border border-[#323232] bg-[#1d1d1d] pl-11 pr-4 text-[15px] text-white placeholder:text-gray-500 outline-none transition focus:border-lime-400"
              />
            </div>

            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}

            {/* Email */}
            <div className="relative">
              <Mail
                size={17}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
              />

              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^(?!\s*$).+/,
                    message: "Spaces are not allowed",
                  },
                })}
                type="email"
                placeholder="Email address"
                className="w-full h-12 rounded-xl border border-[#323232] bg-[#1d1d1d] pl-11 pr-4 text-[15px] text-white placeholder:text-gray-500 outline-none transition focus:border-lime-400"
              />
            </div>

            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}

            {/* Password */}
            <div className="relative">
              <Lock
                size={17}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
              />

              <input
                {...register("password", {
                  required: "Password is required",
                  pattern: {
                    value: /^(?!\s*$).+/,
                    message: "Spaces are not allowed",
                  },
                })}
                type={showPassword ? "text" : "password"}
                placeholder="Password (min 6 chars)"
                className="w-full h-12 rounded-xl border border-[#323232] bg-[#1d1d1d] pl-11 pr-11 text-[15px] text-white placeholder:text-gray-500 outline-none transition focus:border-lime-400"
              />

              <div
                onClick={() => {
                  setShowPassword((prev) => !prev);
                }}
              >
                {showPassword ? (
                  <EyeOff
                    size={17}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
                  />
                ) : (
                  <Eye
                    size={17}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
                  />
                )}
              </div>
            </div>

            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}

            {/* Button */}
            <button
              type="submit"
              className="group flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-lime-400 text-base font-semibold text-black transition hover:bg-lime-300"
            >
              Create Account
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </form>

          {/* Footer */}
          <p className="mt-6 text-center text-sm text-gray-500">
            Already have an account?{" "}
            <span
              onClick={() => {
                navigate("/");
              }}
              className="cursor-pointer font-semibold text-lime-400 hover:text-lime-300"
            >
              Sign in
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
