import '../src/assets/scss/MovieStart.css';

const MovieStart = ({ handleStreetlampClick }) => {
    return (
        <div className="movie-container">
            <input type="checkbox" name="btn" id="btn" defaultChecked />
            <div className="content">
                <div className="buildings">
                    <div className="window"></div>
                    <div className="window"></div>
                    <div className="window"></div>
                    <div className="window"></div>
                    <div className="window"></div>
                    <div className="window"></div>
                </div>
                <div className="ground">
                    <div className="sewer"></div>
                </div>
                <div className="streetlamp" onClick={handleStreetlampClick}>
                    <div className="base"></div>
                    <div className="basetop"></div>
                    <div className="pole"></div>
                    <div className="poletop"></div>
                    <div className="head">
                        <label htmlFor="btn"></label>
                        <div className="top"></div>
                        <div className="glass"></div>
                        <div className="bot"></div>
                    </div>
                    <div className="light"></div>
                    <div className="ground-light"></div>
                </div>
                <div className="light-message">불을 껏다키세요</div>
            </div>
        </div>
    );
};

export default MovieStart;
