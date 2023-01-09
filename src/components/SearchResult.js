import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../config";
import SearchResultMarkdownMap from "./SearchResultMarkdownMap";
import { useAuthContext } from "../hooks/userAuthContext";

const SearchResult = () => {
  const [resultPageData, setResultPageData] = useState("");
  const { input } = useParams();
  const { user } = useAuthContext();
  const navigate = useNavigate();
  //   console.log("Input ", input);
  //   console.log(" ", resultPageData);

  useEffect(() => {
    axios.get(`${baseUrl}/:${input}`).then(({ data }) => {
      setResultPageData(data);
    });
  }, [input]);

  const saveWordHandler = () => {
    if (user) {
      axios.post(`${baseUrl}/word/save`, {
        Wort: input,
      });
      alert("Save successfully");
    } else {
      navigate("/login");
    }
  };

  if (!resultPageData) return "Loading";

  return (
    <>
      <button className="btn" onClick={saveWordHandler}>
        Save to my wordbook
      </button>
      <SearchResultMarkdownMap
        wordToSearch={input}
        resultPageData={resultPageData}
      />
    </>
  );
};

export default SearchResult;
