function CardMovie(props) {
  const calcUserScore = voteAverage => {
    return Math.round((voteAverage * 100) / 10);
  };

  return (
    <>
      {props.dataMovie && <img src={props.dataMovie.poster_path} alt={props.dataMovie.title} width="400" />}
      {props.dataMovie && (
        <h2>
          {props.dataMovie.title} ({props.dataMovie.release_date})
        </h2>
      )}
      {props.dataMovie && <p>User score: {calcUserScore(props.dataMovie.vote_average)}%</p>}
    </>
  );
}

export default CardMovie;
