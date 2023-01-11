import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import ScrollToTop from "react-scroll-to-top";
import axios from "axios";
import SavedWordContext from "../context/SavedWordContext";
import { useContext } from "react";
import { baseUrl } from "../config";
import AddingNotesModal from "./AddingNotesModal";
import { RiDeleteBin4Line } from "react-icons/ri";

const MyWordBook = () => {
  const { savedWords, setSavedWords } = useContext(SavedWordContext);
  //   console.log(" wordbook", savedWords);

  const navigate = useNavigate();

  const deleteHandler = (wordId) => {
    try {
      axios.delete(`${baseUrl}/word/${wordId}`).then((res) => {
        alert(" Delete successfully");
        // window.location.reload();

        const newSavedWords = savedWords.filter((word) => {
          return word._id !== wordId;
        });
        // console.log(" newSavedWords", newSavedWords);
        setSavedWords(newSavedWords);
      });
    } catch (error) {
      console.log(" delete", error.message);
    }
  };

  const showInMindmapHandler = (word) => {
    navigate(`/searchResult/${word}`);
  };

  if (!savedWords) return "Loading";
  return (
    <>
      <nav className="flex gap-10 items-center">
        <Link to="/" className="nav-logo flex items-center ">
          <img className="nav-logo-img  mb-4" src={logo} alt="logo" />
          <h2 className="nav-logo-text tracking-tight">MindGerman</h2>
        </Link>
        <Link to="/">back to HomePage</Link>
      </nav>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-10/12 m-auto ">
        <table className="w-full text-lg text-left text-gray-500  ">
          <thead className="text-base text-gray-700 uppercase bg-gray-100 ">
            <tr>
              <th scope="col" class="px-6 py-3"></th>
              <th scope="col" class="px-6 py-3">
                Word
              </th>
              <th scope="col" class="pr-36 py-3">
                Notes
              </th>
              <th scope="col" class=" py-3"></th>
              <th scope="col" class="pr-1 py-3"></th>
              <th scope="col" class=" py-3"></th>
            </tr>
          </thead>
          <tbody>
            {savedWords.map((word, index) => (
              <tr key={index} className="bg-white border-b dark:bg-gray-900 ">
                <th scope="row" className="px-6 py-4">
                  {index + 1}
                </th>
                <td className="px-6 py-4 text-lg font-bold text-gray-900 whitespace-nowrap ">
                  {word.Wort}
                </td>
                <td className="pr-36 py-4">{word.Notizen}</td>
                <td className=" py-4">
                  <button
                    onClick={() => showInMindmapHandler(word.Wort)}
                    className="font-medium text-indigo-600 "
                  >
                    show in mindmap
                  </button>
                </td>

                <td className="py-4">
                  <AddingNotesModal
                    wordId={word._id}
                    notes={word.Notizen}
                    setSavedWords={setSavedWords}
                  />
                </td>
                <td className="px-4 py-6">
                  <button onClick={() => deleteHandler(word._id)}>
                    <RiDeleteBin4Line />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ScrollToTop smooth color="#6f00ff" />
    </>
  );
};

export default MyWordBook;
