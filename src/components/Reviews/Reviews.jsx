import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';

function Reviews() {
  const { movieId } = useParams();
  const [dataReviews, setDataReviews] = useState([]);

  useEffect(() => getReviews(), [movieId]);

  async function getReviews() {
    await axios
      .get(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=b40c1cf48e7be8057f0d1401f7256d69`)
      .then(res => {
        setDataReviews(res.data.results);
      });
  }

  console.log(dataReviews);

  return dataReviews && dataReviews.length > 0 ? (
    <ul>
      {dataReviews.map(review => (
        <li key={review.id}>
          <h4>Author: {review.author}</h4>
          <p>{review.content}</p>
        </li>
      ))}
    </ul>
  ) : (
    <p>We don't have any reviews for this movie</p>
  );
}

export default Reviews;
