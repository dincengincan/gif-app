import "./App.css";
import Home from "./screens/home/Home";

import { Routes, Route, HashRouter } from "react-router-dom";
import Favourites from "./screens/favourites/Favourites";
import Nav from "./components/nav/Nav";

function App() {
  return (
    <HashRouter>
      <Nav />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Favourites />} path="/favourites" />
      </Routes>
    </HashRouter>
  );
}

export default App;
