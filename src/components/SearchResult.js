import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../config";
import SearchResultMarkdownMap from "./SearchResultMarkdownMap";
import { useAuthContext } from "../hooks/userAuthContext";
import { BiStar } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
import errorPage from "../assets/errorPage.png";

const SearchResult = () => {
  const [resultPageData, setResultPageData] = useState("");
  const [saveStatus, setSaveStatus] = useState(false);
  const [error, setError] = useState(false);
  const { input } = useParams();
  const { user } = useAuthContext();
  const navigate = useNavigate();
  //   console.log("Input ", input);
  //   console.log(" ", resultPageData);

  useEffect(() => {
    axios
      .get(`${baseUrl}/:${input}`)
      .then(({ data }) => {
        setError(false);
        // setSaveStatus(false);
        setResultPageData(data);
      })
      .catch((error) => {
        console.log("Cannot find this word");
        setError(true);
      });
  }, [input]);

  const saveWordHandler = () => {
    if (user) {
      axios.post(`${baseUrl}/word/save`, {
        Wort: input,
      });
      alert("Save successfully");
      setSaveStatus(true);
    } else {
      navigate("/login");
    }
  };

  if (!error && !resultPageData) return "Loading";

  return (
    <>
      {!error && (
        <div className="btn flex justify-end items-center gap-2 pr-20 ">
          {saveStatus ? <BiStar /> : <AiFillStar />}
          {saveStatus ? (
            <button onClick={saveWordHandler}>Save to my wordbook</button>
          ) : (
            <button disabled onClick={saveWordHandler}>
              already saved in wordbook
            </button>
          )}
        </div>
      )}

      {!error ? (
        <SearchResultMarkdownMap
          wordToSearch={input}
          resultPageData={resultPageData}
        />
      ) : (
        <div className="flex flex-col items-center ">
          <img src={errorPage} alt="404" className="errorPage" />
          <h3 className="text-4xl">Can`t find this word, please try again</h3>
        </div>
      )}
    </>
  );
};

export default SearchResult;
