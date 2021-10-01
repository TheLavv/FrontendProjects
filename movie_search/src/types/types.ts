export interface MovieState {
    movie: any;
}

export interface UserState {
    user: any;
}


export enum MovieActionType {
    FETCH_MOVIE_SUCCESS,
    FETCH_MOVIE_ERROR,
    CLEAR_MOVIE,
    ADD_MOVIE
}

export enum UserActionType {
    ADD_USER,
}

export interface MovieAction {
    type: MovieActionType,
    payload: any,
}

export interface UserAction {
    type: UserActionType;
    payload: any;
}

export type ParamsType = { movieName: string };