import { useEffect, useState } from 'react';
import { getMovieCredits } from '../../api/tmdb-api';
import { useParams } from 'react-router-dom';
import Loader from '../loader/Loader';
import ErrorMesage from '../errorMessage/ErrorMessage';

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        setLoader(true);
        setError(false);
        const res = await getMovieCredits(movieId);
        setCast(res.data.cast);
      } catch (error) {
        setError(true);
        console.log(error.message);
      } finally {
        setLoader(false);
      }
    };
    fetchCast();
  }, [movieId]);

  return (
    <div>
      {loader && <Loader />}
      {error && <ErrorMesage />}
      {cast && (
        <ul>
          {cast.map((actor, index) => (
            <li key={index}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                alt={actor.name}
              />
              <p>{actor.name}</p>
              <p>Character: {actor.character}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieCast;
