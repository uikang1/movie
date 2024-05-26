import { useState, useEffect } from 'react';
import { useAxios } from '../src/hooks/useAxios';
import MovieForm from './MovieForm';
import MovieList from './MovieList';
import MovieSorter from './MovieSorter';
import { Container, ContainerBox } from '../src/styled/movestyle';

const Movie = () => {
    const [clickMovie, setClickMovie] = useState(null);
    const [search, setSearch] = useState('');
    const [searchHistory, setSearchHistory] = useState([]);
    const { data, loading, error } = useAxios('https://yts.mx/api/v2/list_movies.json');
    const [filter, setFilter] = useState([]);
    const [sort, setSort] = useState('정렬');

    useEffect(() => {
        if (data?.data?.movies) {
            setFilter(data.data.movies);
        }
    }, [data]);

    useEffect(() => {
        if (filter.length > 0) {
            let sortedMovies = [...filter];
            switch (sort) {
                case '개봉연도순':
                    sortedMovies.sort((a, b) => new Date(b.year) - new Date(a.year));
                    break;
                case '영화제목알파벳순':
                    sortedMovies.sort((a, b) => a.title.localeCompare(b.title));
                    break;
                case '별점순':
                    sortedMovies.sort((a, b) => b.rating - a.rating);
                    break;
                default:
                    sortedMovies = [...filter];
            }
            setFilter(sortedMovies);
        }
    }, [filter, sort]);

    const onSearch = () => {
        if (data?.data?.movies) {
            const filteredMovies = data.data.movies.filter((movie) =>
                movie.title.toLowerCase().includes(search.toLowerCase())
            );
            setFilter(filteredMovies);
            setSearchHistory([...searchHistory, search]);
        }
    };

    const MovieClick = (movie) => {
        setClickMovie(movie);
    };

    const onDel = () => {
        setClickMovie(null);
    };

    const onSort = (selectedOption) => {
        setSort(selectedOption);
    };

    return (
        <div>
            <MovieForm
                search={search}
                setSearch={setSearch}
                searchHistory={searchHistory}
                setSearchHistory={setSearchHistory}
                onSearch={onSearch}
            />
            <MovieSorter onSort={onSort} />
            <MovieList movies={filter || []} MovieClick={MovieClick} />
            {clickMovie && (
                <Container className="on">
                    <button onClick={onDel}>닫기</button>
                    <img src={clickMovie.medium_cover_image} alt={clickMovie.title} />
                    <h2>{clickMovie.title}</h2>
                    <p>{clickMovie.synopsis}</p>
                </Container>
            )}
            <ContainerBox className={clickMovie ? 'on' : ''} onClick={onDel} />
        </div>
    );
};

export default Movie;
