import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { loginEmployee } from "../state/auth/authAction";

export const useAuth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isVisible, setIsVisible] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const loginSubmit = (data) => {
    dispatch(loginEmployee(data));
    console.log(data);
  };

  const registerSubmit = (data) => {
    console.log(data);
  };

  const toggleVisibility = () => {
    setIsVisible((prevState) => !prevState);
  };

  return {
    handleSubmit,
    errors,
    register,
    reset,
    loginSubmit,
    registerSubmit,
    isVisible,
    setIsVisible,
    isPasswordVisible,
    setIsPasswordVisible,
    toggleVisibility,
    navigate,
  };
};
