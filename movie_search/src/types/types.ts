export interface MovieState {
    movie: any,
}

export enum MovieActionType {
    FETCH_MOVIE_SUCCESS,
    FETCH_MOVIE_ERROR,
    CLEAR_MOVIE,
}

export interface MovieAction {
    type: MovieActionType,
    payload: any,
}

export type ParamsType = { movieName: string };