import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="flex justify-between fixed top-0 right-0 left-0 py-4 px-32 z-50 bg-[rgb(22,21,26)] text-white font-semibold">
      <div>
        <Link className="text-yellow-300 text-2xl" to={"/"}>
          Trailer
        </Link>
      </div>
      <nav className="flex gap-10">
        <Link to={"/"}>Movies</Link>
        <Link to={"/"}>TV Shows</Link>
        <Link to={"/"}>TV</Link>
        <Link to={"/"}>Cartoons</Link>
        <Link to={"/"}>Collection</Link>
      </nav>
      <button className="bg-yellow-300 text-black py-2 px-5 rounded">
        SignIn
      </button>
    </header>
  );
};

export default Navbar;
