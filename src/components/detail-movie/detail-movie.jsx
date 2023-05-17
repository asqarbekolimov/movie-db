import React, { useEffect, useState } from "react";
import { getMovieDetail, image_base } from "../../services/api_services";
import { useParams } from "react-router-dom";
import Actor from "../actor/actor";
import Review from "../review/review";

const DetailMovie = () => {
  const [select, setSelect] = useState(1);
  const [detail, setDetail] = useState([]);
  const selectHandler = (id) => setSelect(id);
  const { id } = useParams();

  useEffect(() => {
    getMovieDetail(id).then((data) => setDetail(data));
  }, [select]);
  console.log(detail);
  return (
    <div className="w-[85%] m-auto my-8 text-white">
      <div className="flex bg-white/25 rounded">
        {/* {data.map((item) => ( */}
        <div>
          <button
            onClick={() => selectHandler(1)}
            className={`py-2 px-5 capitalize font-instrument font-semibold  ${
              select === 1
                ? "bg-[#ffff4d] text-[#16151a] rounded transition ease-in-out"
                : null
            }`}
          >
            about
          </button>
          <button
            onClick={() => selectHandler(2)}
            className={`py-2 px-5 capitalize font-instrument font-semibold ${
              select === 2
                ? "bg-[#ffff4d] text-[#16151a] rounded transition ease-in-out"
                : null
            }`}
          >
            reviews
          </button>
          <button
            onClick={() => selectHandler(3)}
            className={`py-2 px-5 capitalize font-instrument font-semibold  ${
              select === 3
                ? "bg-[#ffff4d] text-[#16151a] rounded transition ease-in-out"
                : null
            }`}
          >
            images
          </button>
          <button
            onClick={() => selectHandler(4)}
            className={`py-2 px-5 capitalize font-instrument font-semibold ${
              select === 4
                ? "bg-[#ffff4d] text-[#16151a] rounded transition ease-in-out"
                : null
            }`}
          >
            videos
          </button>
        </div>
        {/* ))} */}
      </div>
      <div>
        <div className={select === 1 ? "show" : "hide"}>
          <div className="flex gap-10 mt-10">
            <div>
              <img
                className="w-96 h-96 rounded-md object-cover"
                src={`${image_base}${detail.backdrop_path}`}
                alt=""
              />
            </div>
            <div>
              <h1 className="font-instrument font-semibold">
                {detail.original_title}
              </h1>
              <div className="text-white/50 font-instrument">
                Rating: {detail.vote_average}
              </div>
              <div className="text-white/50 font-instrument">
                Language: {detail.original_language}
              </div>
              <div className="text-white/50 font-instrument">
                {/* Language: {detail?.genres[0]?.name || null} */}
              </div>
              <p className="text-white/50 text-base font-instrument">
                {detail.overview}
              </p>
              <Actor id={id} />
            </div>
          </div>
        </div>
        <div className={select === 2 ? "show" : "hide"}>
          <Review id={id} />
        </div>
        <div className={select === 3 ? "show" : "hide"}>images</div>
        <div className={select === 4 ? "show" : "hide"}>videos</div>
      </div>
    </div>
  );
};

export default DetailMovie;

export const data = [
  {
    id: 1,
    name: "about",
  },
  {
    id: 2,
    name: "reviews",
  },
  {
    id: 3,
    name: "images",
  },
  {
    id: 4,
    name: "videos",
  },
];
