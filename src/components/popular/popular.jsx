import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { API_REQUEST, image_base } from "../../services/api_services";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Popular = () => {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    fetch(`${API_REQUEST.popular}`)
      .then((res) => res.json())
      .then((data) => setMovie(data.results));
  }, []);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 6,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  const slider = React.useRef(null);
  return (
    <div className="w-[85%] m-auto my-8">
      <div className="flex justify-between mb-8">
        <h1 className="font-bold">Popular</h1>
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
              <img
                className="bg-cover w-full h-full object-cover cursor-pointer hover:scale-[1.1] hover:transition hover:ease-linear"
                key={item.id}
                src={`${image_base}${item.backdrop_path}`}
                alt={item.title}
              />
              <div className="my-5 font-semibold opacity-75">{item.title}</div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Popular;