import './MovieCard.css'

function MovieCard( {movieEl}: any ): JSX.Element {

    const handlePreviewClick = () => {
        window.location.href = "https://www.themoviedb.org/movie/" + movieEl.id;
    }

    return (
        <div className="cardBox">
            <img className="cardBox-poster" src={"https://image.tmdb.org/t/p/w185" + movieEl.poster_path} alt="poster"></img>
            <div className="cardBox-content">
                <span className="cardBox-content-title">{movieEl.title}</span>
                <div className="cardBox-content-description">
                    {movieEl.overview}
                </div>
                <button className="cardBox-content-prevButton" onClick={handlePreviewClick}>Preview</button>
            </div>
        </div>
    );
}

export default MovieCard;