import { MovieListItem } from '../src/styled/movestyle';

const MovieItem = ({ movie, MovieClick }) => {
    return (
        <MovieListItem onClick={() => MovieClick(movie)}>
            <img src={movie.medium_cover_image} alt={movie.title} />
            <h3>{movie.title}</h3>
            <p>{movie.synopsis}</p>
        </MovieListItem>
    );
};

export default MovieItem;
