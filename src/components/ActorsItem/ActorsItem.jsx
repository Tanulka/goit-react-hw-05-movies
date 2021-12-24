import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';

function ActorsItem() {
  const { movieId } = useParams();
  const [dataActors, setDataActors] = useState(null);

  console.log(movieId);

  useEffect(() => getActors(), [movieId]);

  async function getActors() {
    await axios
      .get(`http://api.themoviedb.org/3/movie/${movieId}/credits?api_key=b40c1cf48e7be8057f0d1401f7256d69`)
      .then(res => {
        setDataActors(res.data.cast);
      });
  }

  console.log(dataActors);
  function imageActorUrl(actor) {
    return `https://image.tmdb.org/t/p/w300${actor}`;
  }

  return (
    <>
      <ul>
        {dataActors &&
          dataActors.map(actor => (
            <li key={actor.id}>
              {actor.profile_path && <img src={imageActorUrl(actor.profile_path)} alt={actor.name} />}
              {actor.name && <p>{actor.name}</p>}
              {actor.character && <p>Character: {actor.character}</p>}
            </li>
          ))}
      </ul>
    </>
  );
}

export default ActorsItem;
