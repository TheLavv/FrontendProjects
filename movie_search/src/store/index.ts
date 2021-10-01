import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {combineReducers} from 'redux';
import { movieReducer } from './reducers/movie';
import { userReducer } from "./reducers/user";

const rootReducer: any = combineReducers({
    movie: movieReducer,
    user: userReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof rootReducer>