import { useAuthContext } from "./userAuthContext";
const useLogout = () => {
  const { dispatch } = useAuthContext();

  const logout = () => {
    localStorage.removeItem("user");
    dispatch({ type: "LOGOUT" });
  };
  return { logout };
};

export default useLogout;
