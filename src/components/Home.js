import axios from "axios";
import { useState, useEffect } from "react";
import { baseUrl } from "../config";
import { RandomWordList } from "../data/RandomWordList";
import SearchResultMarkdownMap from "./SearchResultMarkdownMap";

const Home = () => {
  const [randomWord, setRandomWord] = useState("");
  const [randomIndex, setRandomIndex] = useState(0);

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
    <>
      <main>
        <h1>Wörter für heute</h1>
      </main>
      <SearchResultMarkdownMap
        wordToSearch={randomInput}
        resultPageData={randomWord}
      />
    </>
  );
};

export default Home;
