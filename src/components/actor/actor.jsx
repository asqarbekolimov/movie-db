import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { credits, image_base } from "../../services/api_services";
import { useParams } from "react-router-dom";

const Actor = ({ id }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    credits(id).then((data) => setData(data));
  }, []);
  console.log(data.cast);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className="w-[820px] text-white">
      <Slider {...settings}>
        {/* <img src={`${image_base} ${data.cast.profile_path}` || null} alt="" /> */}
        <div>{}</div>
      </Slider>
    </div>
  );
};

export default Actor;
