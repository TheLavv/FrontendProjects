import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {combineReducers} from 'redux';
import { movieReducer } from './reducers/movie';
import { userReducer } from "./reducers/user";

export const host = process.env.MODE === 'development' ? 'http://localhost:3001' : 'https://movie-search-server.herokuapp.com';

const rootReducer: any = combineReducers({
    movie: movieReducer,
    user: userReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof rootReducer>