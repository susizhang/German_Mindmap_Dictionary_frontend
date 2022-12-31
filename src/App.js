import { Route, Routes } from "react-router-dom";
import "./App.css";
// import FirstPage from "./components/FirstPage";
import Home from "./components/Home";
import MarkmapHooks from "./components/MarkmapHooks";

function App() {
  return (
    <div>
      <Routes>
        {/* <Route index element={<FirstPage />} /> */}
        <Route path="/home" element={<Home />} />
        <Route path="/login" />
        <Route path="/signup" />
        {/* <Route path="/markmap" element={<MarkmapHooks />} /> */}
        <Route path="/" element={<MarkmapHooks />} />
      </Routes>
    </div>
  );
}

export default App;
