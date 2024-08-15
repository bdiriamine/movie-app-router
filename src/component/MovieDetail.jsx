import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating';
export default function MovieDetail({movies }) {
console.log(movies);
    const { title } = useParams();
  const movie = movies.find(movie => movie.title === title);

  if (!movie) return <div>Movie not found</div>;

  return (
    <div className="movie-detail">
      <h1>{movie.title}</h1>
      <img src={movie.posterUrl} alt={movie.title} className="movie-poster" />
      <p>{movie.description}</p>
      <Rating   iconsCount={5}   initialValue={movie.rating}  readonly={true}  fillColor='red' />
      <div>
        <h2>Trailer</h2>
        <iframe
          width="560"
          height="315"
          src={movie.trailerSrc}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <button className="back-to-home">
        <Link to="/"  className="nav-back">Back to Home</Link>
      </button>
   
    </div>
  );
};
