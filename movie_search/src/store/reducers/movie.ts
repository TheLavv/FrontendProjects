import {MovieAction, MovieActionType, MovieState} from '../../types/types'

const defaultState: MovieState = {
    movie: null,
}

const Reducer = (state: MovieState = defaultState, action: MovieAction) => {
    switch (action.type) {
        case MovieActionType.FETCH_MOVIE_SUCCESS: {
            return {movie: action.payload}
        }
        case MovieActionType.FETCH_MOVIE_ERROR: {
            return {movie: action.payload}
        }
        case MovieActionType.CLEAR_MOVIE: {
            return {movie: action.payload}
        }
        case MovieActionType.ADD_MOVIE: {
            return {movie: state.movie.concat(action.payload)};
        }
        default: {
            return state;
        }
    }
}

export {Reducer as movieReducer};