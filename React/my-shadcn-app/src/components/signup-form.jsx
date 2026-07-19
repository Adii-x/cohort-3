import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AppStore } from "@/context/AppContext";
import { useContext } from "react";
import { useForm } from "react-hook-form";

export function SignUpForm() {
  const { navigate, setUserInfo } = useContext(AppStore);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = (data) => {
    localStorage.setItem("user", JSON.stringify(data));
    setUserInfo(data);
    reset();
    navigate('/')
  };

  return (
    <div className="flex min-h-screen items-center justify-center p-4 bg-background text-foreground">
      <Card className="w-full max-w-md border-border bg-card">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl font-bold tracking-tight">
            Create an account
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            Enter your details below to set up your profile
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Form Fields */}

          <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input
                {...register("name", {
                  required: "Name is required",
                  minLength: {
                    value: 3,
                    message: "Name must be at least 3 characters",
                  },
                })}
                type="text"
                placeholder="Enter your name..."
                className="bg-background border-input"
              />

              {errors.name && (
                <p className="text-sm text-red-500">{errors.name.message}</p>
              )}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Enter a valid email",
                  },
                })}
                type="email"
                placeholder="Enter your email..."
                className="bg-background border-input"
              />

              {errors.email && (
                <p className="text-sm text-red-500">{errors.email.message}</p>
              )}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                type="password"
                placeholder="Enter your password..."
                className="bg-background border-input"
              />

              {errors.password && (
                <p className="text-sm text-red-500">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Submit Action */}
            <Button
              type="submit"
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 mt-2"
            >
              Register Account
            </Button>
          </form>

          {/* Footer Toggle Link */}
          <div className="mt-4 text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <a
              onClick={() => {
                navigate("/");
              }}
              className="text-primary underline underline-offset-4 hover:opacity-80 cursor-pointer"
            >
              Sign In
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
