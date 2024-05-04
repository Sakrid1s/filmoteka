// import { useState, useEffect } from 'react';
// import { getMovieByQuery } from '../api/tmdb-api';
// import Loader from '../components/loader/Loader';
// import ErrorMessage from '../components/errorMessage/ErrorMessage';
// import { useLocation, useSearchParams } from 'react-router-dom';
// import MoviesForm from '../components/moviesForm/MoviesForm';
// import { Link } from 'react-router-dom';

const MoviesPage = () => {
  // const [queryMovie, setQueryMovie] = useState([]);
  // const [searcParams, setSearcParams] = useSearchParams();
  // const [loader, setLoader] = useState(false);
  // const [notFound, setNotFound] = useState(false);
  // const filmName = searcParams.get('query') ?? '';
  // const location = useLocation();
  // useEffect(() => {
  //   async function fetchMovieByQuery() {
  //     try {
  //       setLoader(true);
  //       setNotFound(false);
  //       const res = await getMovieByQuery(filmName);
  //       setQueryMovie(res.data.results);
  //     } catch (error) {
  //       console.log(error.message);
  //       setNotFound(true);
  //     } finally {
  //       setLoader(false);
  //     }
  //   }
  //   fetchMovieByQuery();
  // }, [filmName]);
  return (
    <p>Movies page</p>
    // <section>
    //   {loader && <Loader />}
    //   <MoviesForm setSearchParams={setSearcParams} />
    //   {queryMovie && (
    //     <ul>
    //       {queryMovie.map(movie => (
    //         <li key={movie.id}>
    // <Link state={location} to={`/movies/${movie.id}`}></Link>
    //         </li>
    //       ))}
    //     </ul>
    //   )}
    //   {notFound && <ErrorMessage />}
    // </section>
  );
};

export default MoviesPage;
