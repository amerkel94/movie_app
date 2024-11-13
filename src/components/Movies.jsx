import { Movie } from './Movie';

function Movies(props) {
  const { movies = [] } = props;

  return (
    <div className='movies'>
      {movies.length ? (
        movies.map((movie) => (
          <Movie key={movie.imdbID} {...movie}></Movie> // проброс всех ключей вниз => Title={movie.Title} и т.д.
        ))
      ) : (
        <div className='row'>
          <h4>Извините! По вашему запросу ничего не нашлось </h4>
        </div>
      )}
    </div>
  );
}

export { Movies };
