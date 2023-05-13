import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "./MainPage";
import Movie from "./movie";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/watch/:id" element={<Movie />} />
      </Routes>
    </>
  );
};

export default Routing;
