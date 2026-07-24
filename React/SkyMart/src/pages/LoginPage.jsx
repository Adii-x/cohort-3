import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { AuthStore } from "../context/AuthContex";
import { toast } from "react-toastify";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const navigate = useNavigate();

  const { setLoggedInUser, loggedInUser, users } = useContext(AuthStore);

  const formSubmit = (data) => {
    const user = users.find((elem) => {
      return data.email === elem.email && data.password === elem.password;
    });

    if (!user) {
      toast.error("User does not exist");
      reset();
      return;
    }

    localStorage.setItem("loggedInUser", JSON.stringify(user));
    setLoggedInUser(user);
    toast.success("Logged in successfully");
    navigate("/main");
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-black">
      {/* Left Side Image */}
      <div className="md:w-1/2 h-64 md:h-screen relative">
        <img
          src="https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg"
          alt="Login Banner"
          className="w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Optional Text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold">
            Welcome Back
          </h1>
        </div>
      </div>

      {/* Right Side Login Form */}
      <div className="md:w-1/2 flex items-center justify-center px-6 py-12 bg-zinc-950">
        <div className="w-full max-w-md">
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-white">Login</h2>
            <p className="text-zinc-400 mt-2">
              Sign in to continue to your account
            </p>
          </div>

          <form onSubmit={handleSubmit(formSubmit)} className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-sm text-zinc-400 mb-2">Email</label>
              <input
                {...register("email", {
                  required: "Please fill the field",
                })}
                type="email"
                placeholder="Enter your email"
                className="w-full bg-zinc-900 border border-zinc-800 text-white rounded-xl px-4 py-3 outline-none focus:border-indigo-500 transition"
              />
            </div>

            {errors.email && (
              <p className="text-red-600">{errors.email.message}</p>
            )}

            {/* Password */}
            <div>
              <label className="block text-sm text-zinc-400 mb-2">
                Password
              </label>
              <input
                {...register("password", {
                  required: "Please fill the field",
                  pattern: {
                    value: /^.{6,}$/,
                    message: "Password should be greater then 6 characters",
                  },
                })}
                type="password"
                placeholder="Enter your password"
                className="w-full bg-zinc-900 border border-zinc-800 text-white rounded-xl px-4 py-3 outline-none focus:border-indigo-500 transition"
              />
            </div>

            {errors.password && (
              <p className="text-red-600">{errors.password.message}</p>
            )}

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-white text-black font-semibold py-3 rounded-xl hover:bg-zinc-200 transition cursor-pointer"
            >
              Login
            </button>
          </form>

          {/* Sign Up */}
          <div className="mt-6 text-center">
            <p className="text-zinc-400">
              Don't have an account?{" "}
              <button
                onClick={() => {
                  navigate("/register");
                }}
                className="text-white font-medium hover:text-indigo-400 transition cursor-pointer"
              >
                Sign Up
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
