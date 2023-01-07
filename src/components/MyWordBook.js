import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import ScrollToTop from "react-scroll-to-top";
const MyWordBook = () => {
  return (
    <>
      <nav className="flex ">
        <Link to="/">
          <img className="w-28" src={logo} alt="logo" />
        </Link>
        <Link to="/">back to HomePage</Link>
      </nav>
      <ul>
        <li>
          <div>word</div>
          <div>Bedeutung</div>
          <div>Notizen</div>
          <button>show in mindmap</button>
          <button>delete</button>
        </li>
      </ul>
      <ScrollToTop smooth color="#6f00ff" />
    </>
  );
};

export default MyWordBook;
