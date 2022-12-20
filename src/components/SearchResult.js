import axios from "axios";
import { useState } from "react";
import { baseUrl } from "../config";

const SearchResult = () => {
  const [searchedWord, setSearchedWord] = useState({});
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.get(`${baseUrl}/:${input}`).then(({ data }) => {
      // console.log(" ", data);
      setSearchedWord(data);
      console.log(searchedWord);
    });
  };

  if (!searchedWord) return "Loading";

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={input}
            onChange={(x) => setInput(x.target.value)}
          />
          <button type="submit" onClick={handleSubmit}>
            search
          </button>
        </form>
      </div>
      {/* <pre>{searchedWord}</pre> */}
    </div>
  );
};

export default SearchResult;
