import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { AuthStore } from "../context/AuthContex";
import { toast } from "react-toastify";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const navigate = useNavigate();

  const { setUsers, users } = useContext(AuthStore);

  const formSubmit = (data) => {
    const existingUser = users.find((user) => {
      return user.email === data.email;
    });

    if (existingUser) {
      toast.error("Email already exists");
      return;
    }

    const elems = [...users, data];
    setUsers(elems);
    localStorage.setItem("users", JSON.stringify(elems));
    toast.success("Account created successfully");
    reset();
    navigate("/main");
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-black">
      {/* Left Side Image */}
      <div className="md:w-1/2 h-64 md:h-screen relative">
        <img
          src="https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg"
          alt="Register Banner"
          className="w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold">Join Us</h1>
        </div>
      </div>

      {/* Right Side Form */}
      <div className="md:w-1/2 flex items-center justify-center px-6 py-12 bg-zinc-950">
        <div className="w-full max-w-md">
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-white">Create Account</h2>
            <p className="text-zinc-400 mt-2">Register to get started</p>
          </div>

          <form onSubmit={handleSubmit(formSubmit)} className="space-y-5">
            {/* Name */}
            <div>
              <label className="block text-sm text-zinc-400 mb-2">
                Full Name
              </label>
              <input
                {...register("name", {
                  required: "Please fill the field",
                })}
                type="text"
                placeholder="Enter your name"
                className="w-full bg-zinc-900 border border-zinc-800 text-white rounded-xl px-4 py-3 outline-none focus:border-indigo-500 transition"
              />
            </div>

            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}

            {/* Email */}
            <div>
              <label className="block text-sm text-zinc-400 mb-2">Email</label>
              <input
                {...register("email", {
                  required: "Please fill the field",
                  pattern: {
                    value: /^\S+@\S+\.\S+$/,
                    message: "Please enter a valid email",
                  },
                })}
                type="email"
                placeholder="Enter your email"
                className="w-full bg-zinc-900 border border-zinc-800 text-white rounded-xl px-4 py-3 outline-none focus:border-indigo-500 transition"
              />
            </div>

            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}

            {/* Password */}
            <div>
              <label className="block text-sm text-zinc-400 mb-2">
                Password
              </label>
              <input
                {...register("password", {
                  required: "Please fill the field",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                type="password"
                placeholder="Create a password"
                className="w-full bg-zinc-900 border border-zinc-800 text-white rounded-xl px-4 py-3 outline-none focus:border-indigo-500 transition"
              />
            </div>

            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}

            {/* Register Button */}
            <button
              type="submit"
              className="w-full bg-white text-black font-semibold py-3 rounded-xl hover:bg-zinc-200 transition cursor-pointer"
            >
              Create Account
            </button>
          </form>

          {/* Login Link */}
          <div className="mt-6 text-center">
            <p className="text-zinc-400">
              Already have an account?{" "}
              <button
                onClick={() => {
                  navigate("/");
                }}
                className="text-white font-medium hover:text-indigo-400 transition cursor-pointer"
              >
                Login
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
