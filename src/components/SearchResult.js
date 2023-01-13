import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../config";
import SearchResultMarkdownMap from "./SearchResultMarkdownMap";
import { useAuthContext } from "../hooks/userAuthContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BiStar } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
import errorPage from "../assets/errorPage.png";
import SavedWordContext from "../context/SavedWordContext";
import { useContext } from "react";
import { BallTriangle } from "react-loader-spinner";

const SearchResult = () => {
  const { savedWords, refreshSavedWords } = useContext(SavedWordContext);
  console.log("resultPage", savedWords);

  const [resultPageData, setResultPageData] = useState("");
  const [saveStatus, setSaveStatus] = useState(false);
  const [error, setError] = useState(false);
  const { input } = useParams();
  const { user } = useAuthContext();

  //   console.log("Input ", input);

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
  }, [input, user]);

  useEffect(() => {
    const isSaved =
      savedWords?.filter((word) => word.Wort === input).length > 0;
    // console.log(" ", isSaved);
    setSaveStatus(isSaved);
  }, [savedWords, input]);

  const saveWordHandler = async () => {
    if (user) {
      await axios.post(
        `${baseUrl}/word/save`,
        {
          Wort: input,
        },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      refreshSavedWords();
      //   toast.success("Save successfully", {
      //     position: toast.POSITION.TOP_LEFT,
      //   });
      setSaveStatus(true);
    } else {
      toast.error("Please log in at first.", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  if (!error && !resultPageData)
    return (
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#4fa94d"
        ariaLabel="ball-triangle-loading"
        wrapperClass="loading-spinner"
        wrapperStyle=""
        visible={true}
      />
    );

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
        <div className="flex flex-col items-center container-pb-900px">
          <img src={errorPage} alt="404" className="errorPage" />
          <h3 className="text-4xl">Can`t find this word, please try again</h3>
        </div>
      )}
    </>
  );
};

export default SearchResult;
