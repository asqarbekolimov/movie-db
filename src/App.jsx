import { useEffect, useState } from "react";
import { Hero, Navbar, Popular, Trending, Tv } from "./components";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Popular />
      <Trending />
      <Tv />
    </>
  );
}

export default App;
