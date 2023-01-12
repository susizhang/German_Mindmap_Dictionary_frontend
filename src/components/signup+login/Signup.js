import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useAuthContext } from "../../hooks/userAuthContext";
import { useSignup } from "../../hooks/useSignup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { BiArrowBack } from "react-icons/bi";
import * as yup from "yup";
import "./Signup.css";

const schema = yup.object().shape({
  email: yup.string().required("Email is required").email("Email is invalid"),

  password: yup
    .string()
    .required("Please Enter your password")
    .min(8, "Password must be at least 8 characters")
    .max(32, "Password must not exceed 32 characters"),
});

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, error, isLoading } = useSignup();
  const { user } = useAuthContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const signUpHandleSubmit = async (e) => {
    // e.preventDefault();
    // console.log(email, password);
    await signup(email, password);
  };
  if (user) return <Navigate to="/home" />;
  return (
    <>
      <div className="backToHome mt-10">
        <BiArrowBack />
        <Link to="/home">back to home page</Link>
      </div>
      <div className="signUp-card ">
        <form onSubmit={handleSubmit(signUpHandleSubmit)} className="signup">
          <input
            {...register("email")}
            type="text"
            placeholder="E-Mail"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="signUp-input"
          />

          <p>{errors.email?.message}</p>

          <input
            {...register("password")}
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="on"
            value={password}
            required
            className="signUp-input"
          />

          <p>{errors.password?.message}</p>

          <button type="submit" disabled={isLoading} className="signUp-button">
            Sign up
          </button>
          {error && <div>{error}</div>}

          <div className="text-center">
            Already have an account?
            <Link to="/login" className="text-indigo-600  ">
              Log in
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Signup;
