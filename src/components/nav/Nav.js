import { useState, useContext } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { BiSun } from "react-icons/bi";
import { BiMoon } from "react-icons/bi";
import logo from "../../assets/logo.png";
import { ThemeContext } from "../../context/Theme";
import "./Nav.css";
import useLogout from "../../hooks/useLogout";
import { useAuthContext } from "../../hooks/userAuthContext";

function Nav() {
  const { logout } = useLogout;
  const [{ themeName, toggleTheme }] = useContext(ThemeContext);
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const { user } = useAuthContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input) {
      alert(" Bitte geben Sie zuerst das gesuchte Wort ein.");
    } else {
      navigate(`/searchResult/${input}`);
      setInput("");
    }
  };

  const handleClick = () => {
    logout();
  };

  return (
    <>
      <nav className=" flex  px-8 gap-8 justify-between grid grid-cols-8 items-center pt-6">
        <div className="col-span-1">
          <Link to="/">
            <img className="w-28" src={logo} alt="logo" />
          </Link>
        </div>
        <div className="border-b-2 col-span-4 ">
          <form className="flex " onSubmit={handleSubmit}>
            <BiSearch />
            <input
              className="w-10/12"
              type="text"
              placeholder="Schreiben Sie das gesuchte Wort auf"
              value={input}
              onChange={(x) => setInput(x.target.value)}
            />
            <button type="submit" onClick={handleSubmit}>
              Suchen
            </button>
          </form>
        </div>
        {user && (
          <div>
            <span>{user.email}</span>
            <button onClick={handleClick}>Log out</button>
          </div>
        )}
        {!user && (
          <div className="col-span-1">
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </div>
        )}

        <div className="col-span-2 flex gap-8">
          <Link to="/wordbook">Mein Wörterbuch</Link>
          <button
            type="button"
            onClick={toggleTheme}
            className="btn btn--icon nav__theme"
            aria-label="toggle theme"
          >
            {themeName === "dark" ? <BiSun /> : <BiMoon />}
          </button>
        </div>
      </nav>

      <Outlet />
    </>
  );
}

export default Nav;
