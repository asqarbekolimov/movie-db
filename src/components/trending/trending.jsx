import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { API_REQUEST, image_base } from "../../services/api_services";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const Trending = () => {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    fetch(`${API_REQUEST.top_rated}`)
      .then((res) => res.json())
      .then((data) => setMovie(data.results));
  }, []);

  const settings = {
    className: "left",
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const slider = React.useRef(null);
  return (
    <div className="w-[85%] m-auto my-8">
      <div className="flex justify-between mb-8">
        <h1 className="font-bold">Trending</h1>
        <div className="flex gap-4 text-white">
          <AiOutlineArrowLeft
            onClick={() => slider?.current?.slickPrev()}
            className="cursor-pointer"
          />
          <AiOutlineArrowRight
            onClick={() => slider?.current?.slickNext()}
            className="cursor-pointer"
          />
        </div>
      </div>
      <Slider ref={slider} {...settings}>
        {movie.map((item) => (
          <div key={item.id} className="">
            <div className="w-[150px] h-[250px] relative">
              <Link to={`/watch/${item.id}`}>
                <img
                  className="bg-cover w-full h-full object-cover cursor-pointer hover:scale-[1.1] hover:transition hover:ease-linear rounded-md"
                  key={item.id}
                  src={`${image_base}${item.backdrop_path}`}
                  alt={item.title}
                />
              </Link>
              <div className="my-5 font-semibold opacity-75">{item.title}</div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Trending;
