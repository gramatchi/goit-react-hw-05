import axios from "axios";

const url =
  "https://api.themoviedb.org/3/";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZTU1NWM0MmY0YzBjYjlkN2FiZGY3OGZmYmRmNTM5ZCIsIm5iZiI6MTcyNDI3NDc5MS4wMTMwOTUsInN1YiI6IjY2YzY1Nzc4ODk3ZTFlZWZlNmQ2MDVmMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VIL1HntYHIXLouNFpQkGq2gtR67lIjjQv0uPEmkjp-4",
  },
};

export const fetchTrendingMovies = async ()=>{
  const { data } = await axios.get(
    `${url}/trending/movie/day?language=en-US`,
    options
  );
  return data.results;
}

export const fetchMovieById = async (movieId) => {
  const { data } = await axios.get(
    `${url}/movie/${movieId}?language=en-US`,
    options
  );
  return data;
};

