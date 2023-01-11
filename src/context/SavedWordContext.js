import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { baseUrl } from "../config";

const SavedWordContext = createContext();

export function SavedWordProvider({ children }) {
  const [savedWords, setSavedWords] = useState();

  useEffect(() => {
    axios.get(`${baseUrl}/word/allWords`).then(({ data }) => {
      //   console.log("data", data.SavedWordsList);
      setSavedWords(data.SavedWordsList);
    });
  }, []);
  console.log("saveContext ", savedWords);

  return (
    <SavedWordContext.Provider value={{ savedWords, setSavedWords }}>
      {children}
    </SavedWordContext.Provider>
  );
}

export default SavedWordContext;
