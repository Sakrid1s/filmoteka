import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
// import { getMovieDetails } from '../api/tmdb-api';
// import { useEffect, useState } from 'react';
// import Loader from '../components/loader/Loader';
// import ErrorMesage from '../components/errorMessage/ErrorMessage';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  console.log(movieId);
  // const [movieDetails, setMovieDetails] = useState([]);
  // const [loader, setLoader] = useState(false);
  // const [error, setError] = useState(false);
  // const location = useLocation();

  // useEffect(() => {
  //   async function fetchMovieDetails() {
  //     try {
  //       setLoader(true);
  //       setError(false);
  //       const res = await getMovieDetails(id);
  //       setMovieDetails(res.data);
  //     } catch (error) {
  //       console.log(error.message);
  //       setError(true);
  //     } finally {
  //       setLoader(false);
  //     }
  //   }
  //   fetchMovieDetails();
  // }, [id]);

  // const {
  //   title,
  //   poster_path,
  //   overview,
  //   release_date,
  //   vote_average,
  //   budget,
  //   genres,
  // } = movieDetails;

  return (
    <div>
      <p>Movie Details page</p>

      <h3>Additional information</h3>
      <p>Details for {movieId}</p>
      <ul>
        <li>
          <Link to={`/movies/${movieId}/cast`}>
            <p>Cast</p>
          </Link>
        </li>
        <li>
          <Link to={`/movies/${movieId}/reviews`}>
            <p>Reviews</p>
          </Link>
        </li>
      </ul>
      {/* {loader && <Loader />}
      {error && <ErrorMesage />} */}
    </div>
  );
};

export default MovieDetailsPage;
