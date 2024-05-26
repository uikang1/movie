import { FcCloseUpMode } from 'react-icons/fc';
import { SearchForm, SearchHistory } from '../src/styled/movestyle';

const MovieForm = ({ search, setSearch, searchHistory, setSearchHistory, onSearch }) => {
    const handleSearch = (event) => {
        event.preventDefault();
        if (search.trim() !== '') {
            setSearchHistory([...searchHistory, search]);
            onSearch();
            setSearch('');
        }
    };

    const DeleteHistory = (index) => {
        const newSearchHistory = [...searchHistory];
        newSearchHistory.splice(index, 1);
        setSearchHistory(newSearchHistory);
    };

    const DeleteAllHistory = () => {
        setSearchHistory([]);
    };

    return (
        <div>
            <SearchForm onSubmit={handleSearch}>
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="영화 검색"
                />
                <button type="submit" disabled={search.trim() === ''}>
                    검색
                </button>
            </SearchForm>
            <SearchHistory>
                <h3>검색 기록:</h3>
                <button onClick={DeleteAllHistory}>전체 삭제</button>
                <ul>
                    {searchHistory.map((item, index) => (
                        <li key={index}>
                            {item}
                            <button onClick={() => DeleteHistory(index)}>
                                <FcCloseUpMode />
                            </button>
                        </li>
                    ))}
                </ul>
            </SearchHistory>
        </div>
    );
};

export default MovieForm;
