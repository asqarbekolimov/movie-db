import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {
  getMovieDetail,
  getMovieRecommend,
  image_base,
} from "../services/api_services";
import { useParams } from "react-router-dom";
import { AiOutlineHeart, AiOutlinePlayCircle } from "react-icons/ai";
import { DetailMovie, Popular, Recommend } from "../components";

const Movie = () => {
  const { id } = useParams();
  const base_url = import.meta.env.VITE_API_URL;
  const api = import.meta.env.VITE_API_KEY;

  const [movie, setMovie] = useState([]);
  useEffect(() => {
    fetch(base_url + `/movie/${id}?api_key=${api}`)
      .then((res) => res.json())
      .then((data) => setMovie(data));
  }, []);

  // console.log(movie);
  return (
    <>
      <div className="w-full relative">
        <img
          className="w-full h-[80vh] blur-xl shadow-xl"
          src={`${image_base}${movie.backdrop_path || null}`}
          alt={movie.original_title}
        />
        <div className="absolute w-full h-full top-0 flex justify-center items-center flex-col">
          <AiOutlinePlayCircle className="text-yellow-300 text-6xl cursor-pointer hover:scale-150 transition" />
          <div className="text-2xl mt-5 font-instrument font-medium">
            {movie.original_title}
          </div>
          <p className="mt-6 text-lg font-instrument font-normal">
            {movie.tagline}
          </p>
          <div>
            <AiOutlineHeart className="text-5xl text-white bg-gray-400 p-1 mt-3 rounded cursor-pointer" />
          </div>
        </div>
      </div>
      <DetailMovie />
      <Recommend id={id} />
    </>
  );
};

export default Movie;
