import { useState, useContext } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { BiSun } from "react-icons/bi";
import { BiMenu } from "react-icons/bi";
import { BiX } from "react-icons/bi";

import { BiMoon } from "react-icons/bi";
import logo from "../../assets/logo.png";
import { ThemeContext } from "../../context/Theme";
import { useLogout } from "../../hooks/useLogout";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Nav.css";

import { useAuthContext } from "../../hooks/userAuthContext";

function Nav() {
  const { logout } = useLogout();
  const [{ themeName, toggleTheme }] = useContext(ThemeContext);
  const [showNavList, setShowNavList] = useState(false);
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const { user } = useAuthContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input) {
      toast.error("Input is empty, please write word down at first.", {
        position: toast.POSITION.TOP_CENTER,
      });
    } else {
      navigate(`/searchResult/${input}`);
      setInput("");
    }
  };
  const toggleNavList = () => {
    setShowNavList(!showNavList);
  };

  const handleClick = () => {
    logout();
  };

  return (
    <>
      <nav className=" header flex  items-center  text-m ">
        <div className="nav-left">
          <Link to="/" className="nav-logo flex items-center ">
            <img className="nav-logo-img  mb-4" src={logo} alt="logo" />
            <h2 className="nav-logo-text tracking-tight">MindGerman</h2>
          </Link>
          <form
            type="text"
            className="nav-search-form  flex   "
            onSubmit={handleSubmit}
          >
            <BiSearch />
            <input
              type="text"
              placeholder="word to search "
              autoComplete="off"
              value={input}
              onChange={(x) => setInput(x.target.value)}
              className=" nav-search-input w-full bg-transparent"
            />
            <button
              type="submit"
              onClick={handleSubmit}
              className="nav-search-button "
            >
              Search
            </button>
          </form>
        </div>

        <div
          style={{ display: showNavList ? "flex" : null }}
          className="nav__list  gap-6  "
        >
          {user && <Link to="/wordbook">My Wordbook</Link>}
          {!user && <Link to="/login">My Wordbook</Link>}

          {user && (
            <div className="flex justify-around gap-2">
              <span>{user.email}</span>
              <button onClick={handleClick}>Log out</button>
            </div>
          )}
          {!user && (
            <div className="flex justify-around  gap-5">
              <Link to="/login" className="pt-2">
                Login
              </Link>
              <Link
                to="/signup"
                className=" text-white rounded-lg bg-green-600 px-3 py-2"
              >
                Signup
              </Link>
            </div>
          )}

          <button
            type="button"
            onClick={toggleTheme}
            className="btn btn--icon nav__theme"
            aria-label="toggle theme"
          >
            {themeName === "dark" ? <BiSun /> : <BiMoon />}
          </button>
        </div>
        <button
          type="button"
          onClick={toggleNavList}
          className="btn  btn--icon nav__hamburger"
          aria-label="toggle navigation"
        >
          {showNavList ? <BiX /> : <BiMenu />}
        </button>
      </nav>
      <div>
        <form
          type="text"
          className="nav-search-form-1060px flex items-center  border-b-2 border-slate-800"
          onSubmit={handleSubmit}
        >
          <BiSearch />
          <input
            type="text"
            placeholder="word to search"
            autoComplete="off"
            value={input}
            onChange={(x) => setInput(x.target.value)}
            className=" w-full bg-transparent nav-search-input-1060 
} "
          />
        </form>
      </div>

      <Outlet />
    </>
  );
}

export default Nav;
