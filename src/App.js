import { Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./components/Home";
import SearchResult from "./components/SearchResult";
import Introduction from "./components/Introduction";
import Nav from "./components/Nav";

function App() {
  return (
    <div>
      <Routes>
        <Route path="introduction" element={<Introduction />} />

        <Route path="/" element={<Nav />}>
          <Route index element={<Home />} />
          <Route path="/searchResult/:input" element={<SearchResult />} />
        </Route>

        <Route path="/wordbook" element={<Home />} />
        <Route path="/login" />
        <Route path="/signup" />
      </Routes>
    </div>
  );
}

export default App;
