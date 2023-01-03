import { Link } from "react-router-dom";
import firstPageImg from "../assets/firstpage-example.png";

const Introduction = () => {
  return (
    <header className=" flex flex-col  items-center	">
      <h1 className="text-6xl font-bold">10 Wörter in einer Abfrage lernen</h1>
      <p className="text-sm font-light">Grafisches Deutsch-Wörterbuch</p>

      <div className="border-2 border-gray-200">
        <form action="">
          <input type="search" placeholder="Unbefristet" />
          <button>
            <Link to="/searchResult">Jetzt probieren</Link>
          </button>
        </form>
      </div>
      <div className="box-border h-full w-full flex flex-col  items-center mt-16">
        <img src={firstPageImg} alt="beispiel" />
      </div>
    </header>
  );
};

export default Introduction;