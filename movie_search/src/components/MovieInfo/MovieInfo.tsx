import React, { useEffect} from 'react';
import { useHistory, useParams, useRouteMatch } from 'react-router';
import './MovieInfo.css';
import { normalizeUrl } from '../../utils';
import ReturnBtn from '../ReturnBtn/ReturnBtn';
import loading from '../../assets/images/loading.png';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { ParamsType } from '../../types/types'
import {useMovieActions} from '../../hooks/useMovieActions';
import MovieCard from '../MovieCard/MovieCard';

function MovieInfo() {
    const history: any = useHistory();
    const match = useRouteMatch();
    const params: ParamsType = useParams();
    const cur_url: string = normalizeUrl(match.url);
    const movie = useTypedSelector(state => state.movie.movie);
    const {fetchMovie, clearMovie} = useMovieActions();

    useEffect(() => {
        clearMovie();
        fetchMovie(params.movieName);
    }, [])

    if (movie === 404)
        history.push(`/movieNotFound`);

    return (movie !== null && movie !== 404) ? (
        <div className="container">
            <span className="container-header">Movie Search</span>
            <div className="container-content">
                {
                    movie.map((el: any) => {
                        return (
                            <div className="container-content-cardsBox">
                                <MovieCard movieEl={el} />
                            </div>
                        );
                    })
                }
            </div>
            <ReturnBtn history={history} url={cur_url.slice(0, cur_url.split('').lastIndexOf('/'))} />
        </div>
    ) : (
        <div className="container">
            <div className="container-header">
                Loading...
            </div>
            <img className="loadingGif" src={loading} alt="loading" />
        </div>
    );
}

export default MovieInfo;