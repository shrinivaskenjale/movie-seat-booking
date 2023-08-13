import { movies } from "../data";
import "./MovieSelect.css";

const MovieSelect = ({ onMovieChange, selectedMovieId }) => {
  const renderedMovies = movies.map((movie) => {
    return (
      <option key={movie.id} value={movie.id}>
        {movie.name} (${movie.price})
      </option>
    );
  });

  return (
    <div className="movie-select">
      <label htmlFor="movie">Select a movie:</label>
      <select
        name="movie"
        id="movie"
        onChange={onMovieChange}
        value={selectedMovieId}
      >
        {renderedMovies}
      </select>
    </div>
  );
};

export default MovieSelect;
