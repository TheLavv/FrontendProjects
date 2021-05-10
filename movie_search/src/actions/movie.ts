import { Dispatch } from "redux"
import { MovieAction, MovieActionType } from "../types/types"

export const fetchMovie = (search_str: string) => {
    return async (dispatch: Dispatch<MovieAction>) => {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=a45c898ce34824e77c4f8c0f1dd5c89c&language=ru&query=${search_str}`)
        .then((data) => {
            if (data.status === 404)
            {
                dispatch({
                    type: MovieActionType.FETCH_MOVIE_ERROR,
                    payload: 404
                })
                return null;
            }
            else
                return (data.json());
        })
        .then((data) => {
            if (data.results.length > 0)
            {
                dispatch({ 
                    type: MovieActionType.FETCH_MOVIE_SUCCESS, 
                    payload: data
                })
            }
            else {
                dispatch({
                    type: MovieActionType.FETCH_MOVIE_ERROR,
                    payload: 404
                })
            }
        })
    }
}

export const clearMovie = () => {
    return (dispatch: Dispatch<MovieAction>) => {
        dispatch({
            type: MovieActionType.CLEAR_MOVIE,
            payload: null
        })
    }
}