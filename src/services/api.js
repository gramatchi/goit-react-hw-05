import axios from "axios";

const url =
  "https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1";

const options = {
  headers: {
    // Замість api_read_access_token вставте свій токен
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZTU1NWM0MmY0YzBjYjlkN2FiZGY3OGZmYmRmNTM5ZCIsIm5iZiI6MTcyNDI3NDc5MS4wMTMwOTUsInN1YiI6IjY2YzY1Nzc4ODk3ZTFlZWZlNmQ2MDVmMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VIL1HntYHIXLouNFpQkGq2gtR67lIjjQv0uPEmkjp-4",
  },
};

axios
  .get(url, options)
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
