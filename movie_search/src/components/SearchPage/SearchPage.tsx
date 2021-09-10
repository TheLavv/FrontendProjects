import React from 'react'
import {useRouteMatch, useHistory} from 'react-router-dom';
import './SearchPage.css'
import { normalizeUrl} from '../../utils'
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector'
import SearchSuggests from '../SearchSuggests/SearchSuggests';

function SearchPage(): JSX.Element {
    const history: any = useHistory();
    const match = useRouteMatch();
    const input = React.useRef<HTMLInputElement>(null);
    const cur_url: string = normalizeUrl(match.url);
    const suggestsBoxRef: any = React.useRef<HTMLDivElement>(null);
    const {fetchMovie} = useActions();
    const movie = useTypedSelector(state => state.movie.movie);

    const findMovie = () => {
        if (input.current !== null && input.current.value.trim().length > 0)
            history.push(`${cur_url}/movieInfo/${input.current.value.trim()}`);
    };
    const enterPress = (e: any) => {
        if(e.key === 'Enter')
            findMovie();
    };

    const handleChangeSearch = (e: any) => {
        const search_str: string = e.target.value.trim();
        if (search_str.length > 0)
            fetchMovie(search_str);
    }

    const handleInputClick = (e: any) => {
        if (suggestsBoxRef !== null)
                suggestsBoxRef.current.style.display = 'flex';
    }

    return movie === null || movie.results === undefined ? (
        <div className="finder">
            <span className="finder-header">Movie Search</span>
            <div className="finderBox">
                <span className="finderBox-text">Enter your request</span>
                <div className="finderBox-searchFieldBox">
                    <div className="finderBox-searchFieldBox-content">
                        <input className="finderBox-input" placeholder="Type to search" type="text" ref={input} onKeyPress={enterPress} onChange={handleChangeSearch}></input>
                    </div>
                    <button className="finderBox-btn" onClick={findMovie}>Find</button>
                </div>
            </div>
        </div> 
    ) : (
        <div className="finder">
            <span className="finder-header">Movie Search</span>
            <div className="finderBox">
                <span className="finderBox-text">Enter your request</span>
                <div className="finderBox-searchFieldBox">
                    <div className="finderBox-searchFieldBox-content">
                        <input className="finderBox-input" placeholder="Type to search" type="text" ref={input} onKeyPress={enterPress} onChange={handleChangeSearch} onClick={handleInputClick}></input>
                        <div className="suggestsBox" ref={suggestsBoxRef}>
                            <SearchSuggests input={input} suggestsBox={suggestsBoxRef}></SearchSuggests>
                        </div>
                    </div>
                    <button className="finderBox-btn" onClick={findMovie}>Find</button>
                </div>
            </div>
        </div>
    )
}

export default SearchPage;