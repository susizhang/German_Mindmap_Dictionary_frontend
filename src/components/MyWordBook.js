import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const MyWordBook = () => {
  return (
    <>
      <nav className="flex ">
        <Link to="/">
          <img className="w-16" src={logo} alt="logo" />
        </Link>
        <Link to="/">back to HomePage</Link>
      </nav>
      <ul>
        <li>
          <div>word</div>
          <div>Bedeutung</div>
          <button>show in mindmap</button>
          <button>delete</button>
        </li>
      </ul>
    </>
  );
};

export default MyWordBook;
