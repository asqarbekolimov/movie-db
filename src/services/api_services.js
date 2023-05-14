const base_url = import.meta.env.VITE_API_URL;
const api = import.meta.env.VITE_API_KEY;

export const API_REQUEST = {
  top_rated: `${base_url}/movie/top_rated?api_key=${api}&language=en-US`,
  tv_top_rated: `${base_url}/tv/top_rated?api_key=${api}&language=en-US`,
  popular: `${base_url}/movie/popular?api_key=${api}&language=en-US`,
  documentary: `${base_url}/discover/movie?api_key=${api}&language=en-US&with_gener=99`,
  comedy: `${base_url}/discover/movie?api_key=${api}&language=en-US&with_gener=35`,
  family: `${base_url}/discover/movie?api_key=${api}&language=en-US&with_gener=10751`,
  history: `${base_url}/discover/movie?api_key=${api}&language=en-US&with_gener=36`,
};

export const getMovieDetail = async (ID) => {
  const response = await fetch(base_url + `/movie/${ID}?api_key=${api}`);
  return response.json();
};

export const getMovieRecommend = async (id) => {
  const response = await fetch(
    base_url + `/movie/${id}/recommendations?api_key=${api}`
  );
  return response.json();
};
export const image_base = "https://image.tmdb.org/t/p/original";
