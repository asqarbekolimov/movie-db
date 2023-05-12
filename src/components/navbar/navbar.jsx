import React from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  return (
    <header className="flex justify-between items-center fixed top-0 right-0 left-0 py-4 xl:px-32 lg:px-12 md:px-8 z-50 bg-[rgb(22,21,26)] text-white font-semibold">
      <div>
        <Link className="text-yellow-300 text-2xl" to={"/"}>
          Trailer
        </Link>
      </div>
      <nav className="lg:flex xl:flex-row items-center hidden sm:hidden gap-10">
        <Link to={"/"}>Movies</Link>
        <Link to={"/"}>TV Shows</Link>
        <Link to={"/"}>TV</Link>
        <Link to={"/"}>Cartoons</Link>
        <Link to={"/"}>Collection</Link>
        <button className="bg-yellow-300 text-black py-2 px-5 rounded">
          SignIn
        </button>
      </nav>

      <RxHamburgerMenu className="block lg:hidden text-2xl cursor-pointer" />
    </header>
  );
};

export default Navbar;
