import axios from 'axios';

export async function getTmdbTrendingMovies(inputValue, page) {
  const url = 'https://api.themoviedb.org/3/trending/movie/week';
  const params = {
    query: `${inputValue}`,
    page,
    language: 'en-US',
  };
  const headers = {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NzkyYzgwYjBjNTY2N2JiNDRkMTRlOTU5MWUwYWIzMiIsInN1YiI6IjY2MTk4YjAzNjljNzBmMDE3ZjU2ZjNiMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ntpN4XwkPBQA3gvLMUCHQS0bnwl9smaqvL12M-HES9o',
  };
  const res = await axios.get(url, { params, headers });
  console.log(res.data);
  return res.data;
}

export async function getTmdbSearchMovie(inputValue, page) {
  const url = 'https://api.themoviedb.org/3/search/movie';
  const params = {
    query: `${inputValue}`,
    page,
    language: 'en-US',
    include_adult: 'false',
  };
  const headers = {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NzkyYzgwYjBjNTY2N2JiNDRkMTRlOTU5MWUwYWIzMiIsInN1YiI6IjY2MTk4YjAzNjljNzBmMDE3ZjU2ZjNiMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ntpN4XwkPBQA3gvLMUCHQS0bnwl9smaqvL12M-HES9o',
  };
  const res = await axios.get(url, { params, headers });
  console.log(res.data);
  return res.data;
}

export async function getTmdbMovieDetails(inputValue, page) {
  const url = 'https://api.themoviedb.org/3/movie/movie_id';
  const params = {
    query: `${inputValue}`,
    page,
    language: 'en-US',
  };
  const headers = {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NzkyYzgwYjBjNTY2N2JiNDRkMTRlOTU5MWUwYWIzMiIsInN1YiI6IjY2MTk4YjAzNjljNzBmMDE3ZjU2ZjNiMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ntpN4XwkPBQA3gvLMUCHQS0bnwl9smaqvL12M-HES9o',
  };
  const res = await axios.get(url, { params, headers });
  console.log(res.data);
  return res.data;
}

export async function getTmdbMovieCredits(inputValue, page) {
  const url = 'https://api.themoviedb.org/3/movie/movie_id/credits';
  const params = {
    query: `${inputValue}`,
    page,
    language: 'en-US',
  };
  const headers = {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NzkyYzgwYjBjNTY2N2JiNDRkMTRlOTU5MWUwYWIzMiIsInN1YiI6IjY2MTk4YjAzNjljNzBmMDE3ZjU2ZjNiMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ntpN4XwkPBQA3gvLMUCHQS0bnwl9smaqvL12M-HES9o',
  };
  const res = await axios.get(url, { params, headers });
  console.log(res.data);
  return res.data;
}

export async function getTmdbMovieReviews(inputValue, page) {
  const url = 'https://api.themoviedb.org/3/movie/movie_id/reviews';
  const params = {
    query: `${inputValue}`,
    page,
    language: 'en-US',
  };
  const headers = {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NzkyYzgwYjBjNTY2N2JiNDRkMTRlOTU5MWUwYWIzMiIsInN1YiI6IjY2MTk4YjAzNjljNzBmMDE3ZjU2ZjNiMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ntpN4XwkPBQA3gvLMUCHQS0bnwl9smaqvL12M-HES9o',
  };
  const res = await axios.get(url, { params, headers });
  console.log(res.data);
  return res.data;
}
