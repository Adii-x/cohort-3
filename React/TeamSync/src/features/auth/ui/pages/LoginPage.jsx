import React from "react";
import { useAuth } from "../../hooks/useAuth";

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    errors,
    loginSubmit,
    toggleVisibility,
    isVisible,
    navigate,
  } = useAuth();

  return (
    <main className="min-h-dvh bg-slate-50">
      <div className="grid min-h-dvh lg:grid-cols-2">
        {/* Left - Image Section */}
        <div className="relative hidden min-h-dvh overflow-hidden lg:block">
          <img
            src="https://images.unsplash.com/photo-1785655140687-94bf8ef1f48f?q=80&w=1990&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="absolute inset-0 size-full object-cover"
            alt="Login"
          />

          {/* Image Overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Image Content */}
          <div className="absolute inset-x-0 bottom-0">
            <div className="bg-linear-to-t from-black/70 via-black/40 to-transparent px-10 pb-10 pt-32">
              <h2 className="text-3xl font-bold tracking-tight text-white xl:text-4xl">
                Welcome Back
              </h2>

              <p className="mt-4 max-w-xl text-base font-medium leading-relaxed text-slate-200">
                Simplify content management, streamline your workflow, and keep
                your digital content organized.
              </p>
            </div>
          </div>
        </div>

        {/* Right - Login Section */}
        <div className="flex min-h-dvh items-center justify-center bg-white px-6 py-12 sm:px-10 lg:px-16 xl:px-24">
          <div className="w-full max-w-md">
            {/* Heading */}
            <div className="mb-10">
              <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Login
              </h1>

              <p className="mt-2 text-sm text-slate-500">
                Welcome back! Please enter your details.
              </p>
            </div>

            {/* Login Form */}
            <form onSubmit={handleSubmit(loginSubmit)} className="space-y-6">
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
                    type={isVisible ? "text" : "password"}
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
                    onClick={toggleVisibility}
                    aria-label={isVisible ? "Hide password" : "Show password"}
                    aria-pressed={isVisible}
                    className="absolute right-3 top-1/2 flex size-8 -translate-y-1/2 cursor-pointer items-center justify-center rounded-md text-slate-400 transition hover:bg-slate-100 hover:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5"
                      viewBox="0 0 128 128"
                      fill="currentColor"
                    >
                      <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z" />

                      {!isVisible && (
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

              {/* Sign In Button */}
              <button
                type="submit"
                className="w-full cursor-pointer rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-blue-700 hover:shadow-md active:scale-[0.99] focus:outline-none focus:ring-4 focus:ring-blue-600/20"
              >
                Sign in
              </button>
            </form>

            {/* Divider */}
            <div className="my-8 flex items-center gap-4">
              <div className="h-px flex-1 bg-slate-200" />

              <span className="text-sm text-slate-400">or</span>

              <div className="h-px flex-1 bg-slate-200" />
            </div>

            {/* Google Sign In */}
            <a
              href="#"
              className="flex w-full items-center justify-center gap-3 rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-blue-600/10"
            >
              {/* Google SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
                viewBox="0 0 512 512"
                aria-hidden="true"
              >
                <path
                  fill="#fbbd00"
                  d="M120 256c0-25.367 6.989-49.13 19.131-69.477v-86.308H52.823C18.568 144.703 0 198.922 0 256s18.568 111.297 52.823 155.785h86.308v-86.308C126.989 305.13 120 281.367 120 256z"
                />
                <path
                  fill="#0f9d58"
                  d="m256 392-60 60 60 60c57.079 0 111.297-18.568 155.785-52.823v-86.216h-86.216C305.044 385.147 281.181 392 256 392z"
                />
                <path
                  fill="#31aa52"
                  d="m139.131 325.477-86.308 86.308a260.085 260.085 0 0 0 22.158 25.235C123.333 485.371 187.62 512 256 512V392c-49.624 0-93.117-26.72-116.869-66.523z"
                />
                <path
                  fill="#3c79e6"
                  d="M512 256a258.24 258.24 0 0 0-4.192-46.377l-2.251-12.299H256v120h121.452a135.385 135.385 0 0 1-51.884 55.638l86.216 86.216a260.085 260.085 0 0 0 25.235-22.158C485.371 388.667 512 324.38 512 256z"
                />
                <path
                  fill="#cf2d48"
                  d="m352.167 159.833 10.606 10.606 84.853-84.852-10.606-10.606C388.668 26.629 324.381 0 256 0l-60 60 60 60c36.326 0 70.479 14.146 96.167 39.833z"
                />
                <path
                  fill="#eb4132"
                  d="M256 120V0C187.62 0 123.333 26.629 74.98 74.98a259.849 259.849 0 0 0-22.158 25.235l86.308 86.308C162.883 146.72 206.376 120 256 120z"
                />
              </svg>
              Sign in with Google
            </a>

            {/* Sign Up */}
            <p className="mt-6 text-center text-sm text-slate-600">
              Don't have an account?{" "}
              <span
                onClick={() => {
                  navigate("/register");
                }}
                className="ml-1 rounded font-medium text-blue-600 transition hover:text-blue-700 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-600/20 cursor-pointer"
              >
                Sign up
              </span>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
