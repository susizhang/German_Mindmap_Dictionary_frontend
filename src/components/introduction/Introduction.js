import { Link } from "react-router-dom";
import firstPageImg from "../../assets/firstpage-example.png";
import logo from "../../assets/logo.png";
import { BiSearch } from "react-icons/bi";
import "./introduction.css";

const Introduction = () => {
  return (
    <header className=" flex flex-col  items-center pt-12	">
      <h1 className="text-7xl font-bold text-center tracking-tight ">
        10 Wörter in
        <br /> einer Abfrage lernen
      </h1>
      <p className="text-3xl font-normal text-slate-500 mt-6">
        Deutsch-Mindmap-Wörterbuch
      </p>

      <div className=" border-2 border-gray-200  h-12 mt-6 rounded-full w-5/12 flex font-normal  ">
        <form className="flex ml-6 w-full items-center " action="">
          <BiSearch />
          <input
            className="w-3/4 ml-2"
            type="search"
            placeholder="unbefristet"
          />
          <Link
            className="introduction-search-button w-1/3 h-full  rounded-full text-white  flex items-center justify-center  "
            to="/searchResult/unbefristet"
          >
            Jetzt probieren
          </Link>
        </form>
      </div>
      <div className=" grid grid-cols-8 box-border h-full w-ful  mt-16 justify-items-end">
        <img className="w-72 col-start-2 col-span-2 " src={logo} alt="logo" />
        <img className="col-span-4" src={firstPageImg} alt="beispiel" />
      </div>
    </header>
  );
};

export default Introduction;
