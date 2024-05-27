import Movie from '../Movie/Movie';
import MovieStart from '../Movie/MovieStart';
import GlobalStyle from './styled/GlobalStyle';
import { useState } from 'react';

const App = () => {
    const [showMovie, setShowMovie] = useState(false);
    const [streetlampOn, setStreetlampOn] = useState(false);

    const handleStreetlampClick = () => {
        setStreetlampOn(true); // 가로등을 켜는 상태로 변경
        setTimeout(() => {
            setShowMovie(true);
        }, 1000);
    };

    return (
        <div>
            {!showMovie && <MovieStart handleStreetlampClick={handleStreetlampClick} />}
            {showMovie && <Movie />}
            <GlobalStyle />
            {streetlampOn && (
                <div className="streetlamp-on-animation">{/* 가로등이 켜지는 애니메이션 */}</div>
            )}
        </div>
    );
};

export default App;
