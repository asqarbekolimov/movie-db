import React, { useEffect, useState } from "react";
import { image_base, review } from "../../services/api_services";

const Review = ({ id }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    review(id).then((data) => setData(data.results));
  }, []);
  console.log(data);
  return (
    <div>
      <div>
        <div>
          <img
            src={`${image_base}${data.author_details?.avatar_path || null}`}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Review;
