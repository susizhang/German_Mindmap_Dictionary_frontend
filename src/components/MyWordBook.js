import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import ScrollToTop from "react-scroll-to-top";
import { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "../config";
import AddingNotesModal from "./AddingNotesModal";
const MyWordBook = () => {
  const [savedWords, setSavedWords] = useState();
  useEffect(() => {
    axios.get(`${baseUrl}/word/allWords`).then(({ data }) => {
      console.log(data.SavedWordsList);
      setSavedWords(data.SavedWordsList);
    });
  }, []);

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

  if (!savedWords) return "Loading";
  return (
    <>
      <nav className="flex ">
        <Link to="/">
          <img className="w-28" src={logo} alt="logo" />
        </Link>
        <Link to="/">back to HomePage</Link>
      </nav>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>word</th>
              <th>Notizen </th>
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
                  <button>show in mindmap</button>
                </td>
                <td>
                  <button onClick={() => deleteHandler(word._id)}>
                    delete
                  </button>
                </td>
                <td>
                  <AddingNotesModal wordId={word._id} />
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
