import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useContext } from "react";
import { AppStore } from "@/context/AppContext";
import { useForm } from "react-hook-form";

export function LoginForm({ className, ...props }) {
  const { navigate, setIsAuthenticated, setUserInfo } = useContext(AppStore);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = (data) => {
    const user = JSON.parse(localStorage.getItem("user")) || {};

    if (!user) {
      alert("No account found!");
      return;
    }

    if (user.email === data.email && user.password === data.password) {
      localStorage.setItem("isLoggedIn", "true");
      setUserInfo(user);
      setIsAuthenticated(true);

      navigate("/dashboard", { replace: true });

      reset();
    } else {
      alert("Invalid credentials");
    }

    reset();
  };

  return (
    <div
      className={cn(
        "min-h-screen w-full flex items-center justify-center",
        className,
      )}
      {...props}
    >
      <Card className="h-screen w-full rounded-none border-0 overflow-hidden bg-background">
        <CardContent className="grid h-full p-0 md:grid-cols-2">
          {/* Left Side - Image */}
          <div className="relative hidden md:block">
            <img
              src="https://images.pexels.com/photos/6207729/pexels-photo-6207729.jpeg"
              alt="Login Banner"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/25"></div>
          </div>

          {/* Right Side - Form */}
          <div className="flex items-center justify-center p-6 md:p-12">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full max-w-md border p-10 rounded-3xl bg-card shadow-lg"
            >
              <div className="flex flex-col gap-6">
                <div className="flex flex-col items-center text-center">
                  <h1 className="text-3xl font-bold">
                    Welcome Back to SkyMart
                  </h1>
                  <p className="text-muted-foreground mt-5">
                    Login to your account
                  </p>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email..."
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Enter a valid email",
                      },
                    })}
                  />

                  {errors.email && (
                    <p className="text-sm text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password..."
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters",
                      },
                    })}
                  />

                  {errors.password && (
                    <p className="text-sm text-red-500">
                      {errors.password.message}
                    </p>
                  )}
                </div>

                <Button type="submit" className="w-full cursor-pointer">
                  Login
                </Button>

                <div className="text-center text-sm">
                  Don't have an account?{" "}
                  <a
                    onClick={() => {
                      navigate("/register");
                    }}
                    className="text-primary underline underline-offset-4 hover:opacity-80 cursor-pointer"
                  >
                    Sign Up
                  </a>
                </div>
              </div>
            </form>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
