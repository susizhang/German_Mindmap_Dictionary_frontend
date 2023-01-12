import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { baseUrl } from "../config";

const SavedWordContext = createContext();

export function SavedWordProvider({ children }) {
  const [savedWords, setSavedWords] = useState();
  const [countNew, setCountNew] = useState(0);

  useEffect(() => {
    axios.get(`${baseUrl}/word/allWords`).then(({ data }) => {
      //   console.log("data", data.SavedWordsList);
      setSavedWords(data.SavedWordsList);
    });
  }, [countNew]);
  //   console.log("saveContext ", savedWords);

  const refreshSavedWords = () => setCountNew((curr) => curr + 1);

  return (
    <SavedWordContext.Provider
      value={{ savedWords, setSavedWords, refreshSavedWords }}
    >
      {children}
    </SavedWordContext.Provider>
  );
}

export default SavedWordContext;
