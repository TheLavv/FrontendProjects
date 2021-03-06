import {useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as movieActionCreators from '../actions/movie';

export const useMovieActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(movieActionCreators, dispatch);
}