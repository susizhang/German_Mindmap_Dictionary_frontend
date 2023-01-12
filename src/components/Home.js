import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { baseUrl } from "../config";
import { RandomWordList } from "../data/RandomWordList";
import SearchResultMarkdownMap from "./SearchResultMarkdownMap";

const Home = () => {
  const [randomWord, setRandomWord] = useState("");
  const [randomIndex, setRandomIndex] = useState(2);

  useEffect(() => {
    setInterval(() => {
      setRandomIndex(Math.floor(Math.random() * 966));
    }, 86400000); // 24 hours
  }, []);

  const randomInput = RandomWordList[randomIndex];

  useEffect(() => {
    axios.get(`${baseUrl}/:${randomInput}`).then(({ data }) => {
      setRandomWord(data);
    });
  }, [randomInput]);

  if (!randomWord) return "Loading";

  return (
    <div className="flex flex-col ">
      <Link to="/" className="m-auto mb-10">
        Introduction page
      </Link>
      <main>
        <h1 className="text-6xl font-bold text-center tracking-tight">
          Word for today
        </h1>
      </main>
      <SearchResultMarkdownMap
        wordToSearch={randomInput}
        resultPageData={randomWord}
      />
    </div>
  );
};

export default Home;
