import { Link } from "react-router-dom";
import firstPageImg from "../../assets/intro-pic.png";
// import logo from "../../assets/logo.png";

import { BiSearch } from "react-icons/bi";
import "./introduction.css";

const Introduction = () => {
  return (
    <div className="  intro-container	">
      <h1 className="  text-center tracking-tight leading-none">
        Use <span className="intro-mindmap">mindmap</span> to learn
        <br /> german words
      </h1>
      <p className="text-2xl  md:text-3xl lg:text-4xl font-normal text-center text-slate-500 mt-12 mb-2 ">
        Learn 10 related words at once
      </p>

      <div className=" border-2 border-gray-200  h-16 mt-20 rounded-full intro-form-container flex font-normal  ">
        <form className="flex ml-6 w-full items-center " action="">
          <BiSearch />
          <input
            className="w-3/4 ml-2 text-2xl search-input bg-transparent"
            type="search"
            value="einkaufen"
            readOnly
          />
          <Link
            className="introduction-search-button w-1/3 h-full  rounded-full text-white  flex items-center justify-center   "
            to="/home/searchResult/einkaufen"
          >
            Try now
          </Link>
        </form>
      </div>
      <div className=" intro-img  ">
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
