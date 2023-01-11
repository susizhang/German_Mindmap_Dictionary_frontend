import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import useLogin from "../../hooks/useLogin";
import { useAuthContext } from "../../hooks/userAuthContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
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

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();
  const { user } = useAuthContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const loginHandleSubmit = async (e) => {
    // e.preventDefault();
    await login(email, password);
    // console.log(" ", email, password);
  };
  if (user) return <Navigate to="/" />;

  return (
    <div className="signUp-card">
      <form onSubmit={handleSubmit(loginHandleSubmit)} className="signup">
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
        <p className="text-red-700">{errors.email?.message}</p>

        <input
          {...register("password")}
          type="password"
          placeholder="Password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
          className="signUp-input"
        />
        <p className="text-red-700">{errors.password?.message}</p>

        <button type="submit" disabled={isLoading} className="signUp-button">
          Log in
        </button>
        {error && <div className="text-red-700">{error}</div>}
        <div className="text-center">
          No account?
          <Link to="/signup" className="text-indigo-600  ">
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
