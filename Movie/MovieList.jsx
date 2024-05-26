import MovieItem from './MovieItem';
import { MovieListContainer } from '../src/styled/movestyle';

const MovieList = ({ movies, MovieClick }) => {
    return (
        <MovieListContainer>
            {movies.map((movie) => (
                <MovieItem key={movie.id} movie={movie} MovieClick={MovieClick} />
            ))}
        </MovieListContainer>
    );
};

export default MovieList;
