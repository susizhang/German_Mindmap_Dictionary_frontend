import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../config";
import SearchResultMarkdownMap from "./SearchResultMarkdownMap";

const SearchResult = () => {
  const [resultPageData, setResultPageData] = useState("");
  const { input } = useParams();

  //   console.log("Input ", input);
  //   console.log(" ", resultPageData);

  useEffect(() => {
    axios.get(`${baseUrl}/:${input}`).then(({ data }) => {
      setResultPageData(data);
    });
  }, [input]);

  if (!resultPageData) return "Loading";

  return (
    <SearchResultMarkdownMap
      wordToSearch={input}
      resultPageData={resultPageData}
    />
  );
};

export default SearchResult;
