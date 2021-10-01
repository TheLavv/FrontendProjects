import {MovieActionType, MovieState} from '../types/types'
import {movieReducer} from "../store/reducers/movie";

const defaultState: MovieState = {
    movie: [],
}

describe('movie reducer test', () => {
    it('new movie should be added', () => {
        const payload = {
            title: 'Шрек',
            url: 'link'
        };
        let newState = movieReducer(defaultState, {
            type: MovieActionType.ADD_MOVIE,
            payload: payload
        });
        expect(newState.movie[0].title).toBe('Шрек');
    })
    it('movies should be deleted', () => {
        const initState = {
            movie: [
                {
                    title: 'Шрек 2',
                    url: 'link'
                },
                {
                    title: 'Шрек 2',
                    url: 'link'
                },
                {
                    title: 'Шрек 2',
                    url: 'link'
                },
                {
                    title: 'Шрек 2',
                    url: 'link'
                },
            ]
        }
        let newState = movieReducer(initState, {
            type: MovieActionType.CLEAR_MOVIE,
            payload: []
        });
        expect(newState.movie.length).toBe(0);
    })
})