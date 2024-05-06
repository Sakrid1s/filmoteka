import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const options = {
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NzkyYzgwYjBjNTY2N2JiNDRkMTRlOTU5MWUwYWIzMiIsInN1YiI6IjY2MTk4YjAzNjljNzBmMDE3ZjU2ZjNiMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ntpN4XwkPBQA3gvLMUCHQS0bnwl9smaqvL12M-HES9o',
  },
};

async function getMovies() {
  const url = 'trending/movie/week';
  const res = await axios.get(url, options);
  return res;
}

async function getMovieByQuery(query) {
  const url = `search/movie?query=${query}`;
  const res = await axios.get(url, options);
  return res;
}

async function getMovieDetails(id) {
  const url = `movie/${id}`;
  const res = await axios.get(url, options);
  return res;
}

async function getMovieCredits(id) {
  const url = `movie/${id}/credits`;
  const res = await axios.get(url, options);
  return res;
}

async function getMovieReviews(id) {
  const url = `movie/${id}/reviews`;
  const res = await axios.get(url, options);
  return res;
}

export {
  getMovies,
  getMovieByQuery,
  getMovieCredits,
  getMovieDetails,
  getMovieReviews,
};
