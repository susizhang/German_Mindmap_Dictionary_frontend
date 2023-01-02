import axios from "axios";
import { useState } from "react";
import { baseUrl } from "../config";

const Nav = () => {
  const [searchedWord, setSearchedWord] = useState({});
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.get(`${baseUrl}/:${input}`).then(({ data }) => {
      setSearchedWord(data);
      console.log(searchedWord);
    });
  };

  if (!searchedWord) return "Loading";

  return (
    <nav className="bg-slate-200 flex  px-8 gap-8 justify-between grid grid-cols-8">
      <div className="col-span-1">
        <img src="" alt="logo" />
      </div>
      <div className="border-b-2 col-span-5">
        <form onSubmit={handleSubmit}>
          <input
            className="w-10/12"
            type="text"
            placeholder="Schreiben Sie das gesuchte Wort auf"
            value={input}
            onChange={(x) => setInput(x.target.value)}
          />
          <button type="submit" onClick={handleSubmit}>
            Suchen
          </button>
        </form>
      </div>
      <div className="col-span-2 flex gap-8">
        <button>Mein Wörterbuch </button>
        <button> theme </button>
      </div>
    </nav>
  );
};

export default Nav;
