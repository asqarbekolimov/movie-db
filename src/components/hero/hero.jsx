import Slider from "react-slick";
import { API_REQUEST, image_base } from "../../services/api_services";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    fetch(`${API_REQUEST.popular}`)
      .then((res) => res.json())
      .then((data) => setMovie(data.results));
  }, []);
  // console.log(movie);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    // cssEase: "linear",
  };
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          width: "10%",
          height: "100%",
          display: "block",
          // background: "black",
          color: "black",
        }}
        onClick={onClick}
      />
    );
  }
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          width: "10%",
          height: "100%",
          display: "block",
          // background: "black",
        }}
        onClick={onClick}
      />
    );
  }
  console.log(movie[1]);
  return (
    <div className="w-[85%] h-[450px] m-auto mt-[90px]">
      <Slider {...settings}>
        {movie.map((item) => (
          <div key={item.id} className="h-[450px] relative">
            <Link to={`/watch/${item.id}`}>
              <div className="shadow w-full h-[450px] absolute top-0 bottom-0" />
              <img
                className="bg-cover w-full h-[450px]"
                key={item.id}
                src={`${image_base}${item.backdrop_path}`}
                alt={item.title}
              />
              <div className="absolute px-10 text-white top-[50%]">
                <h1 className="mb-5">{item.title}</h1>
                <h3 className="w-[450px] font-montserrat font-bold opacity-75">
                  {item.overview.slice(0, 200)}
                </h3>
              </div>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
