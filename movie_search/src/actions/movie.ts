import { Dispatch } from "redux"
import { MovieAction, MovieActionType } from "../types/types"
import axios from "axios";

export const fetchMovie = (search_str: string) => {
    return async (dispatch: Dispatch<MovieAction>) => {
        axios.get(`http://localhost:3001/movies/${search_str}`)
            .then((res) => {
                dispatch({
                    type: MovieActionType.FETCH_MOVIE_SUCCESS,
                    payload: res.data
                })
            })
            .catch(() => {
                dispatch({
                    type: MovieActionType.FETCH_MOVIE_ERROR,
                    payload: 404
                })
            })
    }
}

export const addMovie = (movie: any) => {
    return (dispatch: Dispatch<MovieAction>) => {
        dispatch({
            type: MovieActionType.ADD_MOVIE,
            payload: movie
        })
    }
}

export const clearMovie = () => {
    return (dispatch: Dispatch<MovieAction>) => {
        dispatch({
            type: MovieActionType.CLEAR_MOVIE,
            payload: []
        })
    }
}