import { SavedWordContext } from "../context/SavedWordContext";
import { useContext } from "react";

export const useSavedWordContext = () => {
  const context = useContext(SavedWordContext);
  if (!context) {
    throw Error(
      "useSavedWordContext must be used inside an SavedWordContextProvider"
    );
  }
  return context;
};
