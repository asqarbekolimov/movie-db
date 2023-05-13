import { useEffect, useState } from "react";
import { Hero, Navbar, Popular, Trending, Tv } from "./components";
import MainPage from "./pages/MainPage";
import Routing from "./pages/Routing";

function App() {
  return (
    <>
      <Navbar />
      <Routing />
    </>
  );
}

export default App;
