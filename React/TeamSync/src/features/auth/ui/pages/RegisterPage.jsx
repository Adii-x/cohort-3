import React from "react";
import { useAuth } from "../../hooks/useAuth";

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    registerSubmit,
    errors,
    isPasswordVisible,
    setIsPasswordVisible,
    navigate,
  } = useAuth();

  return (
    <main className="min-h-dvh bg-slate-50">
      <div className="grid min-h-dvh lg:grid-cols-2">
        {/* Left - Image Section */}
        <div className="relative hidden min-h-dvh overflow-hidden lg:block">
          <img
            src="https://images.unsplash.com/photo-1786614840853-ab60bacc1cd2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="absolute inset-0 size-full object-cover"
            alt="Register"
          />

          {/* Image Overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Image Content */}
          <div className="absolute inset-x-0 bottom-0">
            <div className="bg-linear-to-t from-black/70 via-black/40 to-transparent px-10 pb-10 pt-32">
              <h2 className="text-3xl font-bold tracking-tight text-white xl:text-4xl">
                Create Your Account
              </h2>

              <p className="mt-4 max-w-xl text-base font-medium leading-relaxed text-slate-200">
                Manage your content, streamline your workflow, and keep
                everything organized.
              </p>
            </div>
          </div>
        </div>

        {/* Right - Register Section */}
        <div className="flex min-h-dvh items-center justify-center bg-white px-6 py-12 sm:px-10 lg:px-16 xl:px-24">
          <div className="w-full max-w-md">
            {/* Heading */}
            <div className="mb-10">
              <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Create account
              </h1>

              <p className="mt-2 text-sm text-slate-500">
                Enter your details to create your account.
              </p>
            </div>

            {/* Register Form */}
            <form onSubmit={handleSubmit(registerSubmit)} className="space-y-5">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 inline-block text-sm font-medium text-slate-900"
                >
                  Full name
                </label>

                <input
                  type="text"
                  id="name"
                  placeholder="John Doe"
                  {...register("name", {
                    required: "Name is required",
                    minLength: {
                      value: 3,
                      message: "Name must be at least 3 characters",
                    },
                  })}
                  className={`w-full rounded-lg border bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 hover:border-slate-400 focus:ring-4 focus:ring-blue-600/10 ${
                    errors.name
                      ? "border-red-500 focus:border-red-500"
                      : "border-slate-300 focus:border-blue-600"
                  }`}
                />

                {errors.name && (
                  <p className="mt-2 text-sm text-red-500">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 inline-block text-sm font-medium text-slate-900"
                >
                  Email
                </label>

                <input
                  type="email"
                  id="email"
                  placeholder="john@example.com"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Please enter a valid email address",
                    },
                  })}
                  className={`w-full rounded-lg border bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 hover:border-slate-400 focus:ring-4 focus:ring-blue-600/10 ${
                    errors.email
                      ? "border-red-500 focus:border-red-500"
                      : "border-slate-300 focus:border-blue-600"
                  }`}
                />

                {errors.email && (
                  <p className="mt-2 text-sm text-red-500">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="mb-2 inline-block text-sm font-medium text-slate-900"
                >
                  Password
                </label>

                <div className="relative">
                  <input
                    type={isPasswordVisible ? "text" : "password"}
                    id="password"
                    placeholder="••••••••"
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters",
                      },
                    })}
                    className={`w-full rounded-lg border bg-white px-4 py-3 pr-12 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 hover:border-slate-400 focus:ring-4 focus:ring-blue-600/10 ${
                      errors.password
                        ? "border-red-500 focus:border-red-500"
                        : "border-slate-300 focus:border-blue-600"
                    }`}
                  />

                  <button
                    type="button"
                    onClick={() => setIsPasswordVisible((prev) => !prev)}
                    aria-label={
                      isPasswordVisible ? "Hide password" : "Show password"
                    }
                    aria-pressed={isPasswordVisible}
                    className="absolute right-3 top-1/2 flex size-8 -translate-y-1/2 items-center justify-center rounded-md text-slate-400 transition hover:bg-slate-100 hover:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5"
                      viewBox="0 0 128 128"
                      fill="currentColor"
                    >
                      <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z" />

                      {!isPasswordVisible && (
                        <path
                          d="M15 15l98 98"
                          stroke="currentColor"
                          strokeWidth="10"
                          strokeLinecap="round"
                          fill="none"
                        />
                      )}
                    </svg>
                  </button>
                </div>

                {errors.password && (
                  <p className="mt-2 text-sm text-red-500">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* Register Button */}
              <button
                type="submit"
                className="w-full cursor-pointer rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-blue-700 hover:shadow-md active:scale-[0.99] focus:outline-none focus:ring-4 focus:ring-blue-600/20"
              >
                Create account
              </button>
            </form>

            {/* Sign In */}
            <p className="mt-6 text-center text-sm text-slate-600">
              Already have an account?{" "}
              <span
                onClick={() => {
                  navigate("/");
                }}
                className="ml-1 rounded font-medium text-blue-600 transition hover:text-blue-700 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-600/20 cursor-pointer"
              >
                Sign in
              </span>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
