import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../../hooks/userAuthContext";
import { useSignup } from "../../hooks/useSignup";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, error, isLoading } = useSignup();
  const { user } = useAuthContext();
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(email, password);
    await signup(email, password);
  };
  if (user) return <Navigate to="/" />;
  return (
    <form className="signup" onSubmit={handleSubmit}>
      <h3>Sign Up</h3>

      <label>Email:</label>
      <input
        type="text"
        placeholder="E-Mail"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label>Password:</label>
      <input
        type="password"
        placeholder="Password"
        name="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />

      <button disabled={isLoading}>Sign up</button>
      {error && <div>{error}</div>}
    </form>
  );
};

export default Signup;
