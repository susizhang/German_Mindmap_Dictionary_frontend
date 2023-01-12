// import SavedWordContext from "../context/SavedWordContext";
import { useAuthContext } from "./userAuthContext";
import { useSavedWordContext } from "./useSavedWordContext";
export const useLogout = () => {
  const { dispatch } = useAuthContext();
  //   const { dispatch: SavedWordsDispatch } = SavedWordContext();
  const logout = () => {
    localStorage.removeItem("user");
    dispatch({ type: "LOGOUT" });
  };
  return { logout };
};
