import './MovieNotFound.css'
import ReturnBtn from '../ReturnBtn/ReturnBtn'
import { useHistory, useRouteMatch } from 'react-router';
import { normalizeUrl } from '../../utils'
import {useMovieActions} from '../../hooks/useMovieActions';
import { useEffect } from 'react';

function MovieNotFound() {
    const history: any = useHistory();
    const match = useRouteMatch();
    const cur_url: string = normalizeUrl(match.url);
    const {clearMovie} = useMovieActions();
    
    useEffect(() => {
        clearMovie();
    })


    return(
        <div className="page">
            <span className="page-header">Movie Search</span>
            <div className="page-content">
                Movie does not exist =(<br />    Please try again
            </div>
            <ReturnBtn history={history} url={cur_url} />
        </div>
    );
}

export default MovieNotFound;