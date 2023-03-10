import { Route, Routes } from "react-router-dom";
import "./App.css";
import { useContext } from "react";
import Home from "./components/Home";
import SearchResult from "./components/SearchResult";
import MyWordBook from "./components/MyWordBook";
import { ThemeContext } from "./context/Theme";
import { ToastContainer } from "react-toastify";
import Introduction from "./components/introduction/Introduction";
import Nav from "./components/nav/Nav";
import Signup from "./components/signup+login/Signup";
import Login from "./components/signup+login/Login";
import ReactGA from "react-ga4";
ReactGA.initialize("G-NQ0K7TYLH5");
ReactGA.send({ hitType: "pageview", page: "/home" });

function App() {
  const [{ themeName }] = useContext(ThemeContext);
  return (
    <div className={`${themeName} app`}>
      <ToastContainer autoClose={3000} draggablePercent={60} />
      <Routes>
        <Route path="/" element={<Introduction />} />

        <Route path="/home" element={<Nav />}>
          <Route index element={<Home />} />
          <Route path="/home/searchResult/:input" element={<SearchResult />} />
        </Route>

        <Route path="/wordbook" element={<MyWordBook />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
