import React, { useContext, useState } from "react";
import { Mail, Lock, Eye, ArrowRight, Zap, EyeOff } from "lucide-react";
import { useForm } from "react-hook-form";
import { AppStore } from "../context/AppContext";
import { useNavigate } from "react-router";

const LoginPage = () => {
  const navigate = useNavigate();

  const { setShowPassword, showPassword, user } = useContext(AppStore);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitHandler = (data) => {
    let { email, password } = data;

    if (email !== user.email) {
      alert("User does not exists");
      return;
    }

    if (password !== user.password) {
      alert("Password is wrong");
      return;
    }
  };

  return (
    <div className="min-h-screen flex bg-[#0f0f0f] overflow-hidden">
      {/* Left Side */}
      <div className="relative hidden lg:flex lg:w-[52%] flex-col justify-between px-12 py-10 bg-[#111111] overflow-hidden">
        {/* Glow */}
        <div className="absolute -left-40 top-24 h-105 w-105 rounded-full bg-lime-400/15 blur-[140px]" />
        <div className="absolute left-52 bottom-0 h-62.5 w-62.5 rounded-full bg-lime-400/10 blur-[120px]" />

        <div className="relative z-10 flex flex-col h-full gap-15">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-lime-400 flex items-center justify-center">
              <Zap size={20} className="text-black fill-black" />
            </div>

            <h1 className="text-2xl font-bold text-white">
              Sky<span className="text-lime-400">Mart</span>
            </h1>
          </div>

          {/* Hero */}
          <div className="max-w-lg">
            <p className="text-lime-400 text-sm uppercase tracking-[3px] font-semibold mb-4">
              Welcome Back
            </p>

            <h2 className="text-5xl font-bold leading-tight text-white">
              Shop the future.
              <br />
              <span className="text-lime-400">Today.</span>
            </h2>

            <p className="mt-6 max-w-md text-base leading-7 text-gray-400">
              Thousands of products, lightning-fast delivery, and prices that
              make your wallet happy.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-5">
            {[
              { value: "20K+", label: "Products" },
              { value: "50K+", label: "Users" },
              { value: "4.9★", label: "Rating" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-gray-700 py-5 text-center"
              >
                <h3 className="text-2xl font-bold text-lime-400">
                  {item.value}
                </h3>
                <p className="mt-1 text-sm text-gray-400">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Right Side */}
      <div className="flex w-full lg:w-[48%] items-center justify-center bg-[#0b0b0b] px-6">
        <div className="w-full max-w-md rounded-[28px] border border-[#2b2b2b] bg-[#111111] px-8 py-8 shadow-2xl">
          <h2 onClick={() => {}} className="text-4xl font-bold text-white">
            Sign in
          </h2>

          <p className="mt-2 text-base text-gray-500">
            Enter your credentials to continue
          </p>

          <form
            onSubmit={handleSubmit(submitHandler)}
            className="mt-8 space-y-5"
          >
            {/* Email */}
            <div className="relative">
              <Mail
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
              />

              <input
                {...register("email", {
                  required: "Please fill the field",
                })}
                type="email"
                placeholder="Email address"
                className="w-full rounded-xl border border-[#2f2f2f] bg-[#1b1b1b] py-4 pl-12 pr-4 text-white placeholder:text-gray-500 outline-none focus:border-lime-400 transition"
              />
            </div>

            {errors.email && (
              <p className="text-red-600">{errors.email.message}</p>
            )}

            {/* Password */}
            <div className="relative">
              <Lock
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
              />

              <input
                {...register("password", {
                  required: "Please fill the field",
                })}
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full rounded-xl border border-[#2f2f2f] bg-[#1b1b1b] py-4 pl-12 pr-12 text-white placeholder:text-gray-500 outline-none focus:border-lime-400 transition"
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
              <p className="text-red-600">{errors.password.message}</p>
            )}

            {/* Button */}
            <button className="group flex w-full items-center justify-center gap-2 rounded-xl bg-lime-400 py-4 text-lg font-semibold text-black transition hover:bg-lime-300 select-none">
              Sign in
              <ArrowRight
                size={20}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-gray-500">
            Don't have an account?{" "}
            <span
              onClick={() => {
                navigate("/register");
              }}
              className="cursor-pointer font-semibold text-lime-400 hover:text-lime-300"
            >
              Create one
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
