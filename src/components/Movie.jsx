function Movie(props) {
  const {
    imdbID: id,
    Title: title,
    Year: year,
    Poster: poster,
    Type: type,
  } = props;

  return (
    <div id={id} className='card movie'>
      <div className='card-image waves-effect waves-block waves-light'>
        {poster === 'N/A' ? (
          <img src={`https://placehold.co/400x550?text=${title}`} />
        ) : (
          <img className='activator' src={poster} />
        )}
      </div>
      <div className='card-content'>
        <span className='card-title activator grey-text text-darken-4'>
          {title}
        </span>
        <p>
          {year} <span className='right'>{type}</span>
        </p>
      </div>
    </div>
  );
}

export { Movie };
