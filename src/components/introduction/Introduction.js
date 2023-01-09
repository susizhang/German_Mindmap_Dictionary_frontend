import { Link } from "react-router-dom";
import firstPageImg from "../../assets/firstpage-example.png";
import logo from "../../assets/logo.png";

import { BiSearch } from "react-icons/bi";
import "./introduction.css";

const Introduction = () => {
  return (
    <header className=" flex flex-col  items-center pt-20	">
      <h1 className="text-8xl font-bold text-center tracking-tight leading-none">
        Use <span className="intro-mindmap">mindmap</span> to
        <br /> learn german words
      </h1>
      <p className="text-4xl font-normal text-slate-500 mt-8 mb-6 ">
        Learn 10 related words at once
      </p>

      <div className=" border-2 border-gray-200  h-16 mt-6 rounded-full w-1/2 flex font-normal  ">
        <form className="flex ml-6 w-full items-center " action="">
          <BiSearch />
          <input
            className="w-3/4 ml-2 text-2xl"
            type="search"
            value="einkaufen"
          />
          <Link
            className="introduction-search-button w-1/3 h-full  rounded-full text-white  flex items-center justify-center  "
            to="/searchResult/einkaufen"
          >
            Jetzt probieren
          </Link>
        </form>
      </div>
      <div className=" grid grid-cols-8 box-border h-full w-ful  mt-12 justify-items-end">
        <img className="w-72 col-start-2 col-span-2 " src={logo} alt="logo" />
        <img className="col-span-4" src={firstPageImg} alt="beispiel" />
      </div>
    </header>
  );
};

export default Introduction;
