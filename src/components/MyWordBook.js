import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import ScrollToTop from "react-scroll-to-top";

import axios from "axios";

import SavedWordContext from "../context/SavedWordContext";
import { useContext } from "react";

import { baseUrl } from "../config";
import AddingNotesModal from "./AddingNotesModal";

const MyWordBook = () => {
  const { savedWords, setSavedWords } = useContext(SavedWordContext);
  console.log(" wordbook", savedWords);

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

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Word</th>
              <th>Notes </th>
              <th> </th>
              <th> </th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            {savedWords.map((word, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{word.Wort}</td>
                <td>{word.Notizen}</td>
                <td>
                  <button onClick={() => showInMindmapHandler(word.Wort)}>
                    show in mindmap
                  </button>
                </td>
                <td>
                  <button onClick={() => deleteHandler(word._id)}>
                    delete
                  </button>
                </td>
                <td>
                  <AddingNotesModal
                    wordId={word._id}
                    notes={word.Notizen}
                    setSavedWords={setSavedWords}
                  />
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
