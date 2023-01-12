import { Link } from "react-router-dom";
import firstPageImg from "../../assets/intro-pic.png";
// import logo from "../../assets/logo.png";

import { BiSearch } from "react-icons/bi";
import "./introduction.css";

const Introduction = () => {
  return (
    <div className=" flex flex-col  items-center pt-20  intro-container	">
      <h1 className="text-8xl font-bold text-center tracking-tight leading-none">
        Use <span className="intro-mindmap">mindmap</span> to
        <br /> learn german words
      </h1>
      <p className="text-4xl font-normal text-slate-500 mt-8 mb-6 ">
        Learn 10 related words at once
      </p>

      <div className=" border-2 border-gray-200  h-16 mt-16 rounded-full w-1/3 flex font-normal  ">
        <form className="flex ml-6 w-full items-center " action="">
          <BiSearch />
          <input
            className="w-3/4 ml-2 text-2xl search-input bg-transparent"
            type="search"
            value="einkaufen"
            readOnly
          />
          <Link
            className="introduction-search-button w-1/3 h-full  rounded-full text-white  flex items-center justify-center bg-green-600  "
            to="/home/searchResult/einkaufen"
          >
            Try now
          </Link>
        </form>
      </div>
      <div className=" grid grid-cols-5 box-border h-full w-ful  mt-12 justify-items-end ">
        <img
          className=" col-start-2 col-span-3 "
          src={firstPageImg}
          alt="beispiel"
        />
      </div>
    </div>
  );
};

export default Introduction;
