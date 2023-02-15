import axios from "axios";
import { useState, useEffect } from "react";
import { baseUrl } from "../config";
import { RandomWordList } from "../data/RandomWordList";
import SearchResultMarkdownMap from "./SearchResultMarkdownMap";
import { BallTriangle } from "react-loader-spinner";

const Home = () => {
  const [randomWord, setRandomWord] = useState("");
  const [randomIndex, setRandomIndex] = useState(2);

  useEffect(() => {
    setInterval(() => {
      setRandomIndex(Math.floor(Math.random() * 966));
    }, 86400000); // 24 hours
  }, [randomIndex]);

  const randomInput = RandomWordList[randomIndex];

  useEffect(() => {
    axios.get(`${baseUrl}/:${randomInput}`).then(({ data }) => {
      setRandomWord(data);
    });
  }, [randomInput]);

  if (!randomWord)
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
    <div className="flex flex-col ">
      <main>
        <h1 className=" text-4xl sm:text-6xl font-bold text-center pt-10 tracking-tight">
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
