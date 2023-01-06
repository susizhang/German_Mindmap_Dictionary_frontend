import { useState } from "react";
import { baseUrl } from "../config";
import { useAuthContext } from "./userAuthContext";

const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();
  const login = async (email, password) => {
    try {
      setIsLoading(true);
      setError(null);

      const response = await fetch(`${baseUrl}/user/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const json = await response.json();

      if (!response.ok) {
        setIsLoading(false);
        setError(json.error);
      }
      if (response.ok) {
        localStorage.setItem("user", JSON.stringify(json));
        dispatch({ type: "LOGIN", payload: json });
        setIsLoading(false);
      }
    } catch (error) {
      console.log(" login error", error);
    }
  };
  return { login, isLoading, error };
};

export default useLogin;
