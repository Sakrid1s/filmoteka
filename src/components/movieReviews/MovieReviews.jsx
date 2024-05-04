import { useParams } from 'react-router-dom';

const MovieReviews = () => {
  const { movieId } = useParams();

  return (
    <div>
      <h3>MovieReviews</h3>
      <p>MovieReviews for {movieId}</p>
    </div>
  );
};

export default MovieReviews;
