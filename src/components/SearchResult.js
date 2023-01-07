import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../config";
import SearchResultMarkdownMap from "./SearchResultMarkdownMap";
import { useAuthContext } from "../hooks/userAuthContext";

const SearchResult = () => {
  const [resultPageData, setResultPageData] = useState("");
  const { input } = useParams();
  const { user } = useAuthContext();

  //   console.log("Input ", input);
  //   console.log(" ", resultPageData);

  useEffect(() => {
    axios.get(`${baseUrl}/:${input}`).then(({ data }) => {
      setResultPageData(data);
    });
  }, [input]);

  if (!resultPageData) return "Loading";

  return (
    <>
      {user && <Link to="/wordbook">Save to my wordbook</Link>}
      <SearchResultMarkdownMap
        wordToSearch={input}
        resultPageData={resultPageData}
      />
    </>
  );
};

export default SearchResult;
