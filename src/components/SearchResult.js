import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../config";
import SearchResultMarkdownMap from "./SearchResultMarkdownMap";
import { useAuthContext } from "../hooks/userAuthContext";
import { BiStar } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
import errorPage from "../assets/errorPage.png";
import SavedWordContext from "../context/SavedWordContext";
import { useContext } from "react";

const SearchResult = () => {
  const { savedWords } = useContext(SavedWordContext);
  console.log("resultPage", savedWords);

  const [resultPageData, setResultPageData] = useState("");
  const [saveStatus, setSaveStatus] = useState(false);
  const [error, setError] = useState(false);
  const { input } = useParams();
  const { user } = useAuthContext();

  //   console.log("Input ", input);
  //   console.log(" ", resultPageData);

  useEffect(() => {
    axios
      .get(`${baseUrl}/:${input}`)
      .then(({ data }) => {
        setError(false);
        setResultPageData(data);
      })
      .catch((error) => {
        console.log("Cannot find this word");
        setError(true);
      });
  }, [input]);

  useEffect(() => {
    const isSaved =
      savedWords?.filter((word) => word.Wort === input).length > 0;
    // console.log(" ", isSaved);
    setSaveStatus(isSaved);
  }, [savedWords, input]);

  const saveWordHandler = () => {
    if (user) {
      axios.post(`${baseUrl}/word/save`, {
        Wort: input,
      });
      alert("Save successfully");
      setSaveStatus(true);
    } else {
      alert("Please log in at first. ");
    }
  };

  if (!error && !resultPageData) return "Loading";

  return (
    <>
      {!error && (
        <div className="btn flex justify-end items-center gap-2 pr-20 text-lg">
          {saveStatus ? <AiFillStar /> : <BiStar />}
          {saveStatus ? (
            <button disabled onClick={saveWordHandler}>
              already saved in wordbook
            </button>
          ) : (
            <button
              onClick={saveWordHandler}
              className={
                "hover:bg-green-600 hover:text-white hover:rounded-lg hover:px-3"
              }
            >
              Save to my wordbook
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
