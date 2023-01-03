import { Link } from "react-router-dom";
import firstPageImg from "../assets/firstpage-example.png";
import logo from "../assets/logo.png";

const Introduction = () => {
  return (
    <header className=" flex flex-col  items-center mt-12	">
      <h1 className="text-7xl font-bold text-center ">
        10 Wörter <br /> in einer Abfrage lernen
      </h1>
      <p className="text-sm font-light">Grafisches Deutsch-Wörterbuch</p>

      <div className="border-2 border-gray-200">
        <form action="">
          <input type="search" placeholder="Unbefristet" />
          <button>
            <Link to="/searchResult">Jetzt probieren</Link>
          </button>
        </form>
      </div>
      <div className=" grid grid-cols-8 box-border h-full w-ful  mt-16 justify-items-end">
        <img className="w-80 col-start-2 col-span-2 " src={logo} alt="logo" />
        <img className="col-span-4" src={firstPageImg} alt="beispiel" />
      </div>
    </header>
  );
};

export default Introduction;
