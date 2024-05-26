import { MovieSorterBox, MovieSorterSelect } from '../src/styled/movestyle';

const MovieSorter = ({ onSort }) => {
    const handleSortChange = (event) => {
        onSort(event.target.value);
    };

    return (
        <MovieSorterBox>
            <MovieSorterSelect onChange={handleSortChange}>
                <option value="정렬">정렬</option>
                <option value="개봉연도순">개봉연도순</option>
                <option value="영화제목알파벳순">영화제목알파벳순</option>
                <option value="별점순">별점순</option>
            </MovieSorterSelect>
        </MovieSorterBox>
    );
};

export default MovieSorter;
